// Import data from data.js
// Data is now stored in data.js file

// Global state
let currentState = {
  view: 'phase-1', // 'phase-1', 'phase-2', 'phase-3', 'resources'
  week: 1,
  completedTasks: JSON.parse(localStorage.getItem('toeic750_completedTasks_v14')) || {},
  scores: JSON.parse(localStorage.getItem('toeic750_scores_v14')) || { labels: [], data: [] }
};

// DOM elements
const phaseSelector = document.getElementById('main-tabs');
const weeklyTimeline = document.getElementById('weekly-timeline');
const weeklyDetailView = document.getElementById('weekly-detail-view');
const overallProgressBar = document.getElementById('overall-progress-bar');
const modal = document.getElementById('test-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close-btn');
const checkAnswersBtn = document.getElementById('check-answers-btn');
const planView = document.getElementById('plan-view');
const resourcesView = document.getElementById('resources-view');

function renderTabs() {
  document.querySelectorAll('.main-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.querySelector(`.main-tab[data-view="${currentState.view}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

function switchView() {
  renderTabs();
  if (currentState.view === 'resources') {
    planView.classList.add('hidden');
    resourcesView.classList.remove('hidden');
  } else {
    planView.classList.remove('hidden');
    resourcesView.classList.add('hidden');
    const phaseId = parseInt(currentState.view.split('-')[1]);
    renderWeeklyTimeline(phaseId);
    renderWeeklyDetailView();
  }
}

function renderWeeklyTimeline(phaseId) {
  const weeksInPhase = studyPlan.filter(w => w.phase === phaseId);
  weeklyTimeline.innerHTML = weeksInPhase.map(w => `<button data-week="${w.week}" class="week-btn flex-shrink-0 px-4 py-2 rounded-md transition-colors duration-200 ${currentState.week === w.week ? 'active' : 'bg-stone-200 hover:bg-stone-300'}">Tuần ${w.week}</button>`).join('');
  const activeButton = weeklyTimeline.querySelector(`.week-btn.active`);
  if (activeButton) activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function renderWeeklyDetailView() {
  const weekData = studyPlan.find(w => w.week === currentState.week);
  if (!weekData) return;

  const tasksHtml = weekData.tasks.map(day => {
    const dayKey = `${weekData.week}-${day.day}`;
    return `
                <div class="bg-stone-50 p-4 rounded-lg">
                    <h4 class="font-bold text-orange-800">${day.day}</h4>
                    <ul class="mt-2 space-y-3 task-list">
                        ${day.items.map((item, index) => {
      const taskId = `${dayKey}-${index}`;
      if (item.type === 'quiz' || item.type === 'info') {
        return `<li><button data-quiz-id="${item.id}" class="quiz-btn w-full text-left bg-amber-200 text-amber-800 font-bold p-3 rounded-md hover:bg-amber-300 transition">🎯 ${item.text}</button></li>`;
      }
      let itemHtml = `<div class="flex items-start"><input type="checkbox" id="${taskId}" data-task-id="${taskId}" class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 mr-3 mt-1 flex-shrink-0" ${currentState.completedTasks[taskId] ? 'checked' : ''}><label for="${taskId}" class="flex-grow"><span>${item.text}</span></label></div>`;

      if (item.type === 'link') {
        itemHtml = `<div class="flex items-start"><input type="checkbox" id="${taskId}" data-task-id="${taskId}" class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 mr-3 mt-1 flex-shrink-0" ${currentState.completedTasks[taskId] ? 'checked' : ''}><label for="${taskId}" class="flex-grow"><a href="${item.url}" target="_blank" class="text-blue-600 hover:underline"><span>${item.text} 🔗</span></a></label></div>`;
      }

      const contentHtml = item.content ? `<details class="mt-2 ml-7"><summary class="cursor-pointer text-sm font-semibold text-orange-700 hover:underline">Xem hướng dẫn</summary><div class="mt-2 p-3 bg-white rounded-md border text-sm text-stone-600">${item.content}</div></details>` : '';
      return `<li class="task-list-item">${itemHtml}${contentHtml}</li>`;
    }).join('')}
                    </ul>
                </div>`;
  }).join('');

  weeklyDetailView.innerHTML = `<div class="mb-4"><h3 class="text-xl md:text-2xl font-bold text-orange-900">Tuần ${weekData.week}</h3><p class="text-stone-600 mt-1"><strong>Mục tiêu:</strong> ${weekData.goal}</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">${tasksHtml}</div>`;
}

function updateOverallProgress() {
  const totalTasks = studyPlan.reduce((acc, week) => acc + week.tasks.reduce((dayAcc, day) => dayAcc + day.items.length, 0), 0);
  const completedCount = Object.keys(currentState.completedTasks).length;
  const progress = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;
  overallProgressBar.style.setProperty('--progress-width', `${progress}%`);
  overallProgressBar.style.width = `${progress}%`;
  // Đổi màu chữ nếu bar nhỏ
  const percentEl = document.getElementById('progress-percent');
  percentEl.textContent = `${Math.round(progress)}%`;
  if (progress < 8) {
    percentEl.style.color = '#1d4ed8';
    percentEl.style.textShadow = '0 1px 6px #fff,0 0 2px #000';
  } else {
    percentEl.style.color = '#fff';
    percentEl.style.textShadow = '0 1px 6px #1d4ed8,0 0 2px #000';
  }
  document.getElementById('task-stats').textContent = `${completedCount} / ${totalTasks} nhiệm vụ đã hoàn thành`;
}

function handleTabClick(e) {
  const button = e.target.closest('.main-tab');
  if (button) {
    const view = button.dataset.view;
    currentState.view = view;
    if (view.startsWith('phase')) {
      const phaseId = parseInt(view.split('-')[1]);
      // If we are switching to a new phase, set the week to the first week of that phase
      const firstWeekOfPhase = studyPlan.find(w => w.phase === phaseId).week;
      if (studyPlan.find(w => w.week === currentState.week).phase !== phaseId) {
        currentState.week = firstWeekOfPhase;
      }
    }
    switchView();
  }
}

function handleWeekClick(e) {
  if (e.target.matches('.week-btn')) {
    currentState.week = parseInt(e.target.dataset.week);
    renderWeeklyDetailView();
    // Also update the active state on the timeline
    document.querySelectorAll('.week-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
  }
}

function handleTaskToggle(e) {
  if (e.target.matches('input[type="checkbox"]')) {
    const taskId = e.target.dataset.taskId;
    currentState.completedTasks[taskId] = e.target.checked;
    if (!e.target.checked) delete currentState.completedTasks[taskId];
    saveData();
    updateOverallProgress();
  } else if (e.target.matches('.quiz-btn')) {
    openTestModal(e.target.dataset.quizId);
  }
}

function openTestModal(quizId) {
  const testData = miniTests[quizId];
  checkAnswersBtn.style.display = 'block';

  // Lưu quizId hiện tại vào modal
  modal.dataset.currentQuizId = quizId;

  if (!testData) {
    modalTitle.textContent = "Hướng dẫn làm bài";
    modalBody.innerHTML = `<p>Nội dung cho bài kiểm tra này sẽ sớm được cập nhật. Hiện tại, bạn hãy tìm một bộ đề thi thử (ví dụ: ETS TOEIC) và làm bài trong điều kiện thi thật (120 phút).</p>`;
    checkAnswersBtn.style.display = 'none';
  } else {
    modalTitle.textContent = testData.title;
    modalBody.innerHTML = testData.questions.map((q, index) => `<div class=\"question-block\" data-answer=\"${q.answer}\"><p class=\"font-semibold\">${index + 1}. ${q.q}</p><div class=\"mt-2 space-y-1\">${q.options.map((opt, optIndex) => `<label class=\"flex items-center p-2 rounded-md border border-stone-200 hover:bg-stone-50 cursor-pointer\"><input type=\"radio\" name=\"q${index}\" value=\"${optIndex}\" class=\"mr-3\"><span>${opt}</span></label>`).join('')}</div><div class=\"answer-feedback hidden mt-2 p-2 text-sm rounded-md\"></div></div>`).join('');
    // Disable nút submit ban đầu
    checkAnswersBtn.disabled = true;
    checkAnswersBtn.classList.add('opacity-60', 'cursor-not-allowed');
    // Theo dõi chọn đáp án
    modalBody.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        const total = testData.questions.length;
        const checked = modalBody.querySelectorAll('input[type="radio"]:checked').length;
        if (checked === total) {
          checkAnswersBtn.disabled = false;
          checkAnswersBtn.classList.remove('opacity-60', 'cursor-not-allowed');
        } else {
          checkAnswersBtn.disabled = true;
          checkAnswersBtn.classList.add('opacity-60', 'cursor-not-allowed');
        }
      });
    });
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function checkAnswers() {
  let correctCount = 0;
  let totalQuestions = 0;

  modalBody.querySelectorAll('.question-block').forEach(block => {
    const correctAnswerIndex = parseInt(block.dataset.answer);
    const userAnswer = block.querySelector('input[type="radio"]:checked');
    const feedbackEl = block.querySelector('.answer-feedback');
    feedbackEl.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    totalQuestions++;

    if (userAnswer && parseInt(userAnswer.value) === correctAnswerIndex) {
      feedbackEl.textContent = `✅ Chính xác!`;
      feedbackEl.classList.add('bg-green-100', 'text-green-800');
      feedbackEl.style.animation = 'correctShake 0.4s';
      setTimeout(() => feedbackEl.style.animation = '', 400);
      correctCount++;
    } else {
      const correctAnswerText = block.querySelectorAll('span')[correctAnswerIndex].textContent;
      feedbackEl.textContent = `❌ Sai rồi. Đáp án đúng là: "${correctAnswerText}"`;
      feedbackEl.classList.add('bg-red-100', 'text-red-800');
      feedbackEl.style.animation = 'wrongShake 0.4s';
      setTimeout(() => feedbackEl.style.animation = '', 400);
    }
  });

  // Tính điểm và hiển thị kết quả tổng quan
  const score = Math.round((correctCount / totalQuestions) * 100);
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Tạo kết quả tổng quan
  const resultSummary = document.createElement('div');
  resultSummary.className = 'mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200';
  resultSummary.innerHTML = `
    <h3 class="text-lg font-bold text-blue-900 mb-3">📊 Kết Quả Bài Test</h3>
    <div class="grid grid-cols-2 gap-4 text-center">
      <div class="bg-white p-3 rounded-lg">
        <div class="text-2xl font-bold text-green-600">${correctCount}</div>
        <div class="text-sm text-gray-600">Đúng</div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <div class="text-2xl font-bold text-red-600">${totalQuestions - correctCount}</div>
        <div class="text-sm text-gray-600">Sai</div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <div class="text-3xl font-bold text-blue-600">${score}%</div>
      <div class="text-sm text-gray-600">Tỷ lệ đúng</div>
    </div>
    <div class="mt-3 text-center">
      <div class="text-lg font-semibold text-gray-700">${correctCount}/${totalQuestions} câu</div>
    </div>
  `;

  // Thêm đánh giá dựa trên điểm số
  let evaluation = '';
  let evaluationColor = '';

  if (score >= 90) {
    evaluation = '🎉 Xuất sắc! Bạn đã nắm vững kiến thức này.';
    evaluationColor = 'text-green-700';
  } else if (score >= 80) {
    evaluation = '👍 Tốt! Bạn đã hiểu khá tốt kiến thức.';
    evaluationColor = 'text-blue-700';
  } else if (score >= 70) {
    evaluation = '📚 Khá! Cần ôn tập thêm một chút.';
    evaluationColor = 'text-yellow-700';
  } else if (score >= 60) {
    evaluation = '⚠️ Trung bình! Cần xem lại kiến thức.';
    evaluationColor = 'text-orange-700';
  } else {
    evaluation = '❌ Yếu! Cần học lại từ đầu.';
    evaluationColor = 'text-red-700';
  }

  resultSummary.innerHTML += `
    <div class="mt-3 p-3 bg-white rounded-lg text-center">
      <div class="font-semibold ${evaluationColor}">${evaluation}</div>
    </div>
  `;

  // Thêm nút lưu điểm vào biểu đồ
  const saveScoreBtn = document.createElement('button');
  saveScoreBtn.className = 'mt-4 w-full bg-orange-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-700 transition';
  saveScoreBtn.textContent = '💾 Lưu điểm vào biểu đồ';

  // Thông báo lưu điểm
  const saveMsg = document.createElement('div');
  saveMsg.className = 'mt-2 text-center text-sm';

  saveScoreBtn.onclick = () => {
    // Lấy thời gian hiện tại
    const now = new Date();
    const pad = n => n.toString().padStart(2, '0');
    const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())} ${pad(now.getDate())}/${pad(now.getMonth() + 1)}`;
    const testName = modalTitle.textContent.split(':')[0]; // Lấy tên test
    const label = `${testName} (${timeStr})`;
    currentState.scores.labels.push(label);
    currentState.scores.data.push(score);
    scoreChart.update();
    saveData();
    saveScoreBtn.textContent = '✅ Đã lưu!';
    saveScoreBtn.disabled = true;
    saveScoreBtn.classList.add('bg-green-600');
    saveMsg.innerHTML = `<span class='text-green-700 font-semibold'>Đã lưu lúc ${timeStr}</span>`;
    setTimeout(() => {
      saveScoreBtn.textContent = '💾 Lưu điểm vào biểu đồ';
      saveScoreBtn.disabled = false;
      saveScoreBtn.classList.remove('bg-green-600');
      saveMsg.innerHTML = '';
    }, 4000);
  };

  resultSummary.appendChild(saveScoreBtn);
  resultSummary.appendChild(saveMsg);

  // Thêm kết quả vào modal
  modalBody.appendChild(resultSummary);

  // Ẩn nút "Kiểm tra đáp án" và thay bằng nút "Làm lại"
  checkAnswersBtn.style.display = 'none';

  const retryBtn = document.createElement('button');
  retryBtn.className = 'bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition';
  retryBtn.textContent = '🔄 Làm lại bài test';
  retryBtn.onclick = () => {
    // Reset modal
    modalBody.innerHTML = '';
    checkAnswersBtn.style.display = 'block';
    // Mở lại test
    const currentQuizId = modal.dataset.currentQuizId;
    if (currentQuizId) {
      openTestModal(currentQuizId);
    }
  };

  // Thay thế nút check answers
  const buttonContainer = checkAnswersBtn.parentElement;
  buttonContainer.innerHTML = '';
  buttonContainer.appendChild(retryBtn);
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';

  // Reset modal về trạng thái ban đầu
  setTimeout(() => {
    modalBody.innerHTML = '';
    checkAnswersBtn.style.display = 'block';
    // Khôi phục nút "Kiểm tra đáp án"
    const buttonContainer = checkAnswersBtn.parentElement;
    if (buttonContainer.children.length === 0) {
      buttonContainer.innerHTML = '<button id="check-answers-btn" class="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition">Kiểm tra đáp án</button>';
      // Re-attach event listener
      document.getElementById('check-answers-btn').addEventListener('click', checkAnswers);
    }
  }, 300);
}

function saveData() {
  localStorage.setItem('toeic750_completedTasks_v14', JSON.stringify(currentState.completedTasks));
  localStorage.setItem('toeic750_scores_v14', JSON.stringify(currentState.scores));
}

function init() {
  phaseSelector.addEventListener('click', handleTabClick);
  weeklyTimeline.addEventListener('click', handleWeekClick);
  weeklyDetailView.addEventListener('click', handleTaskToggle);
  modalCloseBtn.addEventListener('click', closeModal);
  checkAnswersBtn.addEventListener('click', checkAnswers);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.getElementById('add-score-btn').addEventListener('click', () => {
    const newScore = document.getElementById('new-score-input').value;
    const testLabel = document.getElementById('test-label-input').value;
    if (newScore && testLabel) {
      currentState.scores.labels.push(testLabel);
      currentState.scores.data.push(parseInt(newScore));
      scoreChart.update();
      saveData();
      document.getElementById('new-score-input').value = '';
      document.getElementById('test-label-input').value = '';
    }
  });
  // Reset progress
  document.getElementById('reset-progress-btn').addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ?')) {
      currentState.completedTasks = {};
      saveData();
      updateOverallProgress();
      renderWeeklyDetailView();
    }
  });
  // Custom week goal
  const weekGoalInput = document.getElementById('custom-week-goal');
  const saveWeekGoalBtn = document.getElementById('save-week-goal');
  const savedWeekGoal = document.getElementById('saved-week-goal');
  // Load goal if exists
  function loadWeekGoal() {
    const key = `toeic750_weekGoal_${currentState.week}`;
    const val = localStorage.getItem(key);
    if (val) {
      savedWeekGoal.textContent = `🎯 ${val}`;
      weekGoalInput.value = val;
      weekGoalInput.disabled = true;
      weekGoalInput.classList.add('bg-gray-100', 'text-gray-500');
      saveWeekGoalBtn.style.display = 'none';
    } else {
      savedWeekGoal.textContent = '';
      weekGoalInput.value = '';
      weekGoalInput.disabled = false;
      weekGoalInput.classList.remove('bg-gray-100', 'text-gray-500');
      saveWeekGoalBtn.style.display = '';
    }
  }
  saveWeekGoalBtn.addEventListener('click', () => {
    const val = weekGoalInput.value.trim();
    const key = `toeic750_weekGoal_${currentState.week}`;
    if (val) {
      localStorage.setItem(key, val);
      savedWeekGoal.textContent = `🎯 ${val}`;
      weekGoalInput.disabled = true;
      weekGoalInput.classList.add('bg-gray-100', 'text-gray-500');
      saveWeekGoalBtn.style.display = 'none';
    } else {
      localStorage.removeItem(key);
      savedWeekGoal.textContent = '';
      weekGoalInput.disabled = false;
      weekGoalInput.classList.remove('bg-gray-100', 'text-gray-500');
      saveWeekGoalBtn.style.display = '';
    }
  });
  weekGoalInput.addEventListener('input', () => {
    savedWeekGoal.textContent = '';
    weekGoalInput.disabled = false;
    weekGoalInput.classList.remove('bg-gray-100', 'text-gray-500');
    saveWeekGoalBtn.style.display = '';
  });
  // Khi đổi tuần thì load lại mục tiêu
  const oldRenderWeeklyDetailView = renderWeeklyDetailView;
  renderWeeklyDetailView = function () {
    oldRenderWeeklyDetailView();
    loadWeekGoal();
  };
  switchView();
  updateOverallProgress();
  loadWeekGoal();
}

// Initialize Chart.js
const ctx = document.getElementById('scoreChart').getContext('2d');
let scoreChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: currentState.scores.labels,
    datasets: [{
      label: 'Điểm TOEIC',
      data: currentState.scores.data,
      borderColor: '#c2410c',
      backgroundColor: 'rgba(234, 88, 12, 0.1)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMin: 300,
        suggestedMax: 800
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// --- Thêm vào cuối file hoặc sau phần init() ---
document.addEventListener('DOMContentLoaded', function () {
  const resetScoreBtn = document.getElementById('reset-scorechart-btn');
  if (resetScoreBtn) {
    resetScoreBtn.addEventListener('click', function () {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ điểm trên biểu đồ?')) {
        currentState.scores.labels = [];
        currentState.scores.data = [];
        scoreChart.update();
        saveData();
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const phase1Tab = document.querySelector('.main-tab[data-view="phase-1"]');
  if (phase1Tab) phase1Tab.click();
}); 