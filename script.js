const studyPlan = [
  // Giai đoạn 1 (Tuần 1-13)
  {
    week: 1, phase: 1, goal: "Nắm vững 1/2 bảng IPA, Thì Hiện tại Đơn, 25 từ 'Daily Routines'", tasks: [
      { day: "Thứ 2", items: [{ text: "Học 10 nguyên âm đơn (Vowels)" }, { text: "Học bài HTĐ (Grammar in Use)", content: "<strong>Thì Hiện Tại Đơn (Present Simple)</strong> dùng để diễn tả một thói quen, sự thật hiển nhiên. <br><strong>Cấu trúc:</strong> S + V(s/es). <br><strong>Ví dụ:</strong> He works in an office." }] },
      { day: "Thứ 3", items: [{ text: "Làm BT Hiện Tại Đơn (Grammar in Use)" }, { text: "Nghe playlist '6 Minute English' (YouTube)", type: "link", url: "https://www.youtube.com/playlist?list=PLcetZ6gSk96-eJc_A2-s6e_iQ4jvywG3q" }] },
      { day: "Thứ 4", items: [{ text: "Học 25 từ 'Daily Routines' (600 Words)", content: "Học từ vựng trong sách '600 Essential Words for TOEIC'. Nhập vào app Anki để ôn tập hàng ngày." }, { text: "Đọc đoạn văn ngắn" }] },
      { day: "Thứ 5", items: [{ text: "Học 10 phụ âm (Consonants)" }, { text: "Chép chính tả 5 câu từ bài nghe YouTube" }] },
      { day: "Thứ 6", items: [{ text: "Shadowing 1 bài", content: "<strong>Kỹ thuật Shadowing (Nói đuổi):</strong> Lắng nghe một đoạn audio ngắn và lặp lại ngay lập tức, cố gắng bắt chước ngữ điệu, nhấn âm và tốc độ của người nói. <br><strong>Nguồn gợi ý:</strong> Dùng lại video trong playlist '6 Minute English' đã nghe." }, { text: "Ôn 25 từ đã học trên Anki" }] },
      { day: "Thứ 7", items: [{ text: "Ôn lại toàn bộ ngữ pháp & từ vựng tuần" }] }
    ]
  },
  {
    week: 2, phase: 1, goal: "Hoàn thành IPA, Thì HTTD, 25 từ 'Personal Info'", test: "Mini-test #1", tasks: [
      { day: "Thứ 2", items: [{ text: "Học bài HTTD (Grammar in Use)", content: "<strong>Thì Hiện Tại Tiếp Diễn (Present Continuous)</strong> dùng để diễn tả hành động đang xảy ra tại thời điểm nói. <br><strong>Cấu trúc:</strong> S + am/is/are + V-ing. <br><strong>Ví dụ:</strong> I am studying for my TOEIC test." }, { text: "Học 10 từ mới (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Luyện âm khó cho người Việt", content: "<strong>Các âm khó:</strong><br>• <strong>/θ/ (think, thank):</strong> Đặt đầu lưỡi giữa hai hàm răng, thổi hơi ra.<br>• <strong>/ð/ (this, that):</strong> Tương tự /θ/ nhưng rung dây thanh quản.<br>• <strong>/ʃ/ (she, wash):</strong> Chu môi, cong lưỡi, thổi hơi ra.<br>• <strong>/tʃ/ (church, watch):</strong> Bật mạnh âm /t/ rồi chuyển sang /ʃ/." }, { text: "Làm BT HTTD (Grammar in Use)" }] },
      { day: "Thứ 4", items: [{ text: "Nghe playlist 'VOA Level One' (YouTube)", type: "link", url: "https://www.youtube.com/playlist?list=PLpXX1o_wS9hNm2g2-B4a2d4E24s4vS2aW" }, { text: "Học 15 từ mới (600 Words)" }] },
      { day: "Thứ 5", items: [{ text: "Luyện cặp âm dễ nhầm", content: "<strong>Các cặp âm dễ nhầm:</strong><br>• <strong>/i:/ (sheep) vs /ɪ/ (ship):</strong> Âm /i:/ kéo dài, căng miệng. Âm /ɪ/ ngắn, thả lỏng.<br>• <strong>/s/ (see) vs /z/ (zoo):</strong> Âm /z/ rung dây thanh quản.<br>• <strong>/f/ (fan) vs /v/ (van):</strong> Âm /v/ rung dây thanh quản." }, { text: "Làm BT tổng hợp 2 thì" }] },
      { day: "Thứ 6", items: [{ text: "Shadowing bài VOA" }, { text: "Ôn 25 từ trên Anki" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #1", type: "quiz", id: "Mini-test #1" }, { text: "Sửa chi tiết Test" }] }
    ]
  },
  {
    week: 3, phase: 1, goal: "Nắm vững thì Quá Khứ Đơn, 35 từ 'Work & Office', làm quen Part 1", tasks: [
      { day: "Thứ 2", items: [{ text: "Học bài QKĐ (Grammar in Use)", content: "<strong>Thì Quá Khứ Đơn (Past Simple)</strong> dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ. <br><strong>Cấu trúc:</strong> S + V-ed/V2. <br><strong>Ví dụ:</strong> She visited Paris last year." }, { text: "Học 15 từ 'Work & Office' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Làm BT QKĐ (Grammar in Use)" }, { text: "Phân tích 5 tranh Part 1 (Very Easy TOEIC)", content: "Tập trung miêu tả hành động chính (Ai đang làm gì?) và đồ vật nổi bật trong tranh." }] },
      { day: "Thứ 4", items: [{ text: "Học các động từ bất quy tắc (cột 2)" }, { text: "Học 20 từ 'Work & Office' (600 Words)" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe 10 câu Part 1 (Very Easy TOEIC)" }, { text: "Đọc 1 bài báo ngắn trên VOA Special English" }] },
      { day: "Thứ 6", items: [{ text: "Shadowing 1 đoạn hội thoại ngắn" }, { text: "Ôn 35 từ" }] },
      { day: "Thứ 7", items: [{ text: "Ôn tập toàn bộ kiến thức tuần" }] }
    ]
  },
  {
    week: 4, phase: 1, goal: "Nắm vững thì Tương Lai Đơn, 35 từ 'Technology', luyện Part 1", test: "Mini-test #2", tasks: [
      { day: "Thứ 2", items: [{ text: "Học bài TLĐ (Grammar in Use)", content: "<strong>Thì Tương Lai Đơn (Future Simple)</strong> dùng để diễn tả quyết định tại thời điểm nói, dự đoán không có căn cứ. <br><strong>Cấu trúc:</strong> S + will + V. <br><strong>Ví dụ:</strong> I think it will rain tomorrow." }, { text: "Học 15 từ 'Technology' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Làm BT TLĐ (Grammar in Use)" }, { text: "Luyện 10 câu Part 1 (Very Easy TOEIC)" }] },
      { day: "Thứ 4", items: [{ text: "So sánh Will & Be going to (Grammar in Use)" }, { text: "Học 20 từ 'Technology' (600 Words)" }] },
      { day: "Thứ 5", items: [{ text: "Làm BT tổng hợp các thì" }, { text: "Nghe 10 câu Part 2 (Wh- questions)" }] },
      { day: "Thứ 6", items: [{ text: "Ôn 35 từ" }, { text: "Shadowing các câu Part 2" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #2", type: "quiz", id: "Mini-test #2" }, { text: "Sửa chi tiết Test" }] }
    ]
  },
  {
    week: 5, phase: 1, goal: "Học về Danh từ & Tính từ, 50 từ 'Shopping', làm quen Part 5", tasks: [
      { day: "Thứ 2", items: [{ text: "Học vị trí, chức năng của Danh từ (N) (Grammar in Use)", content: "Danh từ thường đứng đầu câu làm chủ ngữ, sau động từ làm tân ngữ, hoặc sau giới từ." }, { text: "Học 25 từ 'Shopping' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Học vị trí, chức năng của Tính từ (Adj) (Grammar in Use)", content: "Tính từ thường đứng trước danh từ để bổ nghĩa, hoặc sau động từ 'to be' và các động từ liên kết (linking verbs)." }, { text: "Học 25 từ 'Shopping' (600 Words)" }] },
      { day: "Thứ 4", items: [{ text: "Làm BT Part 5 (vị trí từ loại N/Adj) (Hacker TOEIC)" }, { text: "Nghe 15 câu Part 2 (Wh-)" }] },
      { day: "Thứ 5", items: [{ text: "Phân biệt N đếm được & không đếm được (Grammar in Use)" }, { text: "Đọc 1 bài Part 6 ngắn (Very Easy TOEIC)" }] },
      { day: "Thứ 6", items: [{ text: "Luyện tập Part 2 & 5" }, { text: "Ôn 50 từ" }] },
      { day: "Thứ 7", items: [{ text: "Ôn tập toàn bộ kiến thức tuần" }] }
    ]
  },
  {
    week: 6, phase: 1, goal: "Học về Trạng từ & Giới từ, 50 từ 'Food & Dining', luyện Part 2, 5", test: "Mini-test #3", tasks: [
      { day: "Thứ 2", items: [{ text: "Học vị trí, chức năng của Trạng từ (Adv) (Grammar in Use)", content: "Trạng từ thường bổ nghĩa cho động từ, tính từ, hoặc một trạng từ khác." }, { text: "Học 25 từ 'Food & Dining' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Học Giới từ chỉ thời gian (in, on, at) (Grammar in Use)" }, { text: "Học 25 từ 'Food & Dining' (600 Words)" }] },
      { day: "Thứ 4", items: [{ text: "Học Giới từ chỉ nơi chốn (in, on, at) (Grammar in Use)" }, { text: "Làm BT Part 5 (Giới từ) (Hacker)" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe 15 câu Part 2 (Yes/No)" }, { text: "Đọc 1 bài Part 6 (Very Easy TOEIC)" }] },
      { day: "Thứ 6", items: [{ text: "Ôn 50 từ" }, { text: "Shadowing các câu Part 2" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #3", type: "quiz", id: "Mini-test #3" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 7, phase: 1, goal: "Học Câu so sánh, 70 từ 'Travel'", tasks: [
      { day: "Thứ 2", items: [{ text: "Học So sánh bằng (as...as) (Grammar in Use)" }, { text: "Học 25 từ 'Travel' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Học So sánh hơn (-er than / more...than) (Grammar in Use)" }, { text: "Học 25 từ 'Travel'" }] },
      { day: "Thứ 4", items: [{ text: "Học So sánh nhất (the -est / the most...) (Grammar in Use)" }, { text: "Học 20 từ 'Travel'" }] },
      { day: "Thứ 5", items: [{ text: "Làm BT Part 5 về câu so sánh (Hacker)" }, { text: "Nghe 1 đoạn Part 3 ngắn (Hacker)" }] },
      { day: "Thứ 6", items: [{ text: "Luyện nghe Part 2 (câu hỏi lựa chọn)" }, { text: "Ôn 70 từ" }] },
      { day: "Thứ 7", items: [{ text: "Ôn tập toàn bộ kiến thức tuần" }] }
    ]
  },
  {
    week: 8, phase: 1, goal: "Tổng ôn Câu so sánh, luyện tập", test: "Mini-test #4", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập so sánh bằng & hơn (Grammar in Use)" }, { text: "Làm 15 câu P5 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Ôn tập so sánh nhất (Grammar in Use)" }, { text: "Làm 15 câu P2 (Hacker)" }] },
      { day: "Thứ 4", items: [{ text: "Luyện tập các dạng so sánh đặc biệt (so sánh kép...) (Grammar in Use)" }] },
      { day: "Thứ 5", items: [{ text: "Làm BT tổng hợp so sánh (Hacker)" }, { text: "Shadowing 1 bài P3 ngắn (Hacker)" }] },
      { day: "Thứ 6", items: [{ text: "Luyện P2, P5 (Hacker)" }, { text: "Nghe 1 đoạn Part 4 ngắn (Hacker)" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #4", type: "quiz", id: "Mini-test #4" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 9, phase: 1, goal: "Học Mệnh đề quan hệ, 70 từ 'Health'", tasks: [
      { day: "Thứ 2", items: [{ text: "Học MĐQH với Who, Which, That (Grammar in Use)" }, { text: "Học 25 từ 'Health' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Học MĐQH với Whose, When, Where (Grammar in Use)" }, { text: "Học 25 từ 'Health'" }] },
      { day: "Thứ 4", items: [{ text: "Làm BT Part 5 về MĐQH (Hacker)" }, { text: "Học 20 từ 'Health'" }] },
      { day: "Thứ 5", items: [{ text: "Làm quen Part 6 (Hacker)" }, { text: "Đọc hiểu 1 đoạn văn P6" }] },
      { day: "Thứ 6", items: [{ text: "Luyện nghe Part 3 (đoạn ngắn) (Hacker)" }, { text: "Ôn 70 từ" }] },
      { day: "Thứ 7", items: [{ text: "Ôn tập toàn bộ kiến thức tuần" }] }
    ]
  },
  {
    week: 10, phase: 1, goal: "Tổng ôn Mệnh đề quan hệ", test: "Mini-test #5", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập MĐQH Who, Which, That" }, { text: "Luyện 1 đoạn P6 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Ôn tập MĐQH Whose, When, Where" }, { text: "Luyện 1 đoạn P3 (Hacker TOEIC)" }] },
      { day: "Thứ 4", items: [{ text: "Học Rút gọn Mệnh đề quan hệ (dùng V-ing, V-ed/3)" }] },
      { day: "Thứ 5", items: [{ text: "Làm BT rút gọn MĐQH (Hacker)" }, { text: "Shadowing 1 bài P3" }] },
      { day: "Thứ 6", items: [{ text: "Luyện P3, P5, P6" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #5", type: "quiz", id: "Mini-test #5" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 11, phase: 1, goal: "Học Câu bị động, 80 từ 'Entertainment'", tasks: [
      { day: "Thứ 2", items: [{ text: "Học câu bị động các thì cơ bản (HTĐ, QKĐ, TLĐ) (Grammar in Use)" }, { text: "Học 30 từ 'Entertainment' (600 Words)" }] },
      { day: "Thứ 3", items: [{ text: "Học câu bị động với Modal Verbs (Grammar in Use)" }, { text: "Học 30 từ 'Entertainment'" }] },
      { day: "Thứ 4", items: [{ text: "Làm BT Part 5 về câu bị động (Hacker)" }, { text: "Học 20 từ 'Entertainment'" }] },
      { day: "Thứ 5", items: [{ text: "Làm quen Part 4 (bài nói ngắn)" }] },
      { day: "Thứ 6", items: [{ text: "Luyện nghe 2 bài Part 4 (Hacker TOEIC)" }, { text: "Ôn 80 từ" }] },
      { day: "Thứ 7", items: [{ text: "Ôn tập toàn bộ kiến thức tuần" }] }
    ]
  },
  {
    week: 12, phase: 1, goal: "Tổng ôn Câu bị động", test: "Mini-test #6", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập câu bị động các thì" }, { text: "Luyện 15 câu P5 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Ôn tập câu bị động với Modal Verbs" }, { text: "Luyện 2 bài P4 (Hacker TOEIC)" }] },
      { day: "Thứ 4", items: [{ text: "Luyện tập các dạng bị động đặc biệt (với V-ing, to-V)" }] },
      { day: "Thứ 5", items: [{ text: "Làm BT tổng hợp câu bị động (Hacker)" }, { text: "Shadowing 1 bài P4" }] },
      { day: "Thứ 6", items: [{ text: "Luyện P4, P5" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #6", type: "quiz", id: "Mini-test #6" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 13, phase: 1, goal: "Tổng ôn Giai Đoạn 1, Đánh giá năng lực", test: "FULL TEST #1", tasks: [
      { day: "Thứ 2", items: [{ text: "Xem lại toàn bộ ngữ pháp GĐ1" }] },
      { day: "Thứ 3", items: [{ text: "Ôn tập ~700 từ vựng đã học" }] },
      { day: "Thứ 4", items: [{ text: "Xem lại sổ tay lỗi sai từ các mini-test" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe tổng hợp các Part 1-4 (ETS)" }] },
      { day: "Thứ 6", items: [{ text: "Nghỉ ngơi, chuẩn bị tâm lý" }] },
      {
        day: "Thứ 7", items: [
          { text: "Làm FULL TEST #1", type: "quiz", id: "FULL TEST #1", content: "Dành 120 phút làm bài nghiêm túc với sách ETS. Sau đó dành thời gian còn lại để sửa lỗi và ghi chép." },
          { text: "Nhập điểm vào biểu đồ" }
        ]
      }
    ]
  },

  // Giai đoạn 2 (Tuần 14 - 35)
  {
    week: 14, phase: 2, goal: "Master Part 1: Mô tả tranh, bẫy nghe, từ vựng hình ảnh", test: "Mini-test #8", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 1: Mô tả tranh (Hacker TOEIC)" }, { text: "Luyện 20 câu Part 1 (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 1: từ đồng âm, sai đối tượng" }, { text: "Học 20 từ vựng chủ đề hình ảnh (Hacker BOCA)" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe Part 1: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu mô tả tranh" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 1: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 1" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #8", type: "quiz", id: "Mini-test #8" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 15, phase: 2, goal: "Master Part 2: Yes/No/Wh-questions, bẫy nghe, từ vựng hội thoại", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 2: Yes/No/Wh-questions (Hacker TOEIC)" }, { text: "Luyện 20 câu Part 2 (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 2: lặp từ, câu trả lời gián tiếp" }, { text: "Học 20 từ vựng chủ đề hội thoại (Hacker BOCA)" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe Part 2: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu hội thoại" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 2: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 2" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 16, phase: 2, goal: "Master Part 5: Từ loại, động từ, danh từ, luyện đề", test: "Mini-test #9", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 5: từ loại (N, V, Adj, Adv)" }, { text: "Luyện 20 câu Part 5 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 5: động từ, danh từ dễ nhầm" }, { text: "Học 20 từ vựng chủ đề công việc" }] },
      { day: "Thứ 4", items: [{ text: "Luyện tập Part 5: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu ngắn" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 5: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 5" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #9", type: "quiz", id: "Mini-test #9" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 17, phase: 2, goal: "Master Part 5: Câu bị động, điều kiện, luyện đề nâng cao", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 5: câu bị động, điều kiện" }, { text: "Luyện 20 câu Part 5 (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 5: bị động, điều kiện dễ nhầm" }, { text: "Học 20 từ vựng chủ đề hợp đồng" }] },
      { day: "Thứ 4", items: [{ text: "Luyện tập Part 5: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu ngắn" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 5: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 5" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 18, phase: 2, goal: "Master Part 3: Hội thoại ngắn, xác định chủ đề, luyện nghe", test: "Mini-test #10", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 3: xác định chủ đề hội thoại" }, { text: "Luyện 10 đoạn hội thoại ngắn (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 3: câu hỏi suy luận" }, { text: "Học 20 từ vựng chủ đề công sở" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe Part 3: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu hội thoại" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 3: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 3" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #10", type: "quiz", id: "Mini-test #10" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 19, phase: 2, goal: "Master Part 3: Hội thoại dài, nhiều người, luyện nghe nâng cao", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 3: hội thoại dài, nhiều người" }, { text: "Luyện 10 đoạn hội thoại dài (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 3: bẫy thông tin" }, { text: "Học 20 từ vựng chủ đề giao tiếp" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe Part 3: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu hội thoại" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 3: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 3" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 20, phase: 2, goal: "Master Part 6: Điền câu, điền từ, luyện đọc hiểu", test: "Mini-test #11", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 6: điền câu, điền từ" }, { text: "Luyện 10 đoạn Part 6 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 6: chọn câu phù hợp" }, { text: "Học 20 từ vựng chủ đề email, thư tín" }] },
      { day: "Thứ 4", items: [{ text: "Luyện đọc hiểu Part 6: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu ngắn" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 6: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 6" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #11", type: "quiz", id: "Mini-test #11" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 21, phase: 2, goal: "Master Part 6: Đọc hiểu nâng cao, luyện đề tổng hợp", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 6: đọc hiểu nâng cao" }, { text: "Luyện 10 đoạn Part 6 (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 6: từ nối, logic đoạn văn" }, { text: "Học 20 từ vựng chủ đề thông báo, memo" }] },
      { day: "Thứ 4", items: [{ text: "Luyện đọc hiểu Part 6: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu ngắn" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 6: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 6" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 22, phase: 2, goal: "Master Part 4: Nghe đoạn dài, bắt ý chính, luyện nghe", test: "Mini-test #12", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 4: nghe đoạn dài, bắt ý chính" }, { text: "Luyện 10 đoạn Part 4 (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 4: distractor, từ đồng âm" }, { text: "Học 20 từ vựng chủ đề hội thảo, meeting" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe Part 4: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu nghe" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 4: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 4" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #12", type: "quiz", id: "Mini-test #12" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 23, phase: 2, goal: "Master Part 4: Nghe chi tiết, luyện nghe nâng cao", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 4: nghe chi tiết, note keyword" }, { text: "Luyện 10 đoạn Part 4 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 4: distractor, từ đồng âm" }, { text: "Học 20 từ vựng chủ đề du lịch, khách sạn" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe Part 4: chọn đáp án đúng" }, { text: "Chép chính tả 5 câu nghe" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 4: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 4" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 24, phase: 2, goal: "Master Part 7: Đọc hiểu single passage, tìm ý chính", test: "Mini-test #13", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 7: đọc hiểu single passage" }, { text: "Luyện 5 bài đọc Part 7 (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 7: distractor, từ nối" }, { text: "Học 20 từ vựng chủ đề email, thông báo" }] },
      { day: "Thứ 4", items: [{ text: "Luyện đọc hiểu Part 7: tìm ý chính" }, { text: "Chép chính tả 5 câu đọc hiểu" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 7: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 7" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #13", type: "quiz", id: "Mini-test #13" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 25, phase: 2, goal: "Master Part 7: Đọc hiểu chi tiết, luyện đọc nâng cao", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 7: đọc hiểu chi tiết" }, { text: "Luyện 5 bài đọc Part 7 (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 7: distractor, từ nối" }, { text: "Học 20 từ vựng chủ đề thông báo, memo" }] },
      { day: "Thứ 4", items: [{ text: "Luyện đọc hiểu Part 7: tìm chi tiết" }, { text: "Chép chính tả 5 câu đọc hiểu" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 7: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 7" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 26, phase: 2, goal: "Master Part 7: Đọc hiểu double passage, luyện đọc tổng hợp", test: "Mini-test #14", tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 7: double passage" }, { text: "Luyện 3 bài double passage (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 7: liên kết thông tin" }, { text: "Học 20 từ vựng chủ đề công việc" }] },
      { day: "Thứ 4", items: [{ text: "Luyện đọc hiểu Part 7: tìm liên kết" }, { text: "Chép chính tả 5 câu đọc hiểu" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 7: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 7" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #14", type: "quiz", id: "Mini-test #14" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 27, phase: 2, goal: "Master Part 7: Đọc hiểu triple passage, luyện đọc nâng cao", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Học chiến thuật Part 7: triple passage" }, { text: "Luyện 3 bài triple passage (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích bẫy Part 7: liên kết thông tin" }, { text: "Học 20 từ vựng chủ đề công việc" }] },
      { day: "Thứ 4", items: [{ text: "Luyện đọc hiểu Part 7: tìm liên kết" }, { text: "Chép chính tả 5 câu đọc hiểu" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập Part 7: tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test Part 7" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 28, phase: 2, goal: "Tổng ôn Part 1-7, luyện đề tổng hợp", test: "Mini-test #15", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập tổng hợp toàn bộ Part 1-7" }, { text: "Luyện 1 đề tổng hợp (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích lỗi sai tổng hợp" }, { text: "Học 20 từ vựng tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Luyện nghe + đọc tổng hợp" }, { text: "Chép chính tả 5 câu tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập tổng hợp lỗi sai" }, { text: "Học 20 từ vựng còn lại" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #15", type: "quiz", id: "Mini-test #15" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 29, phase: 2, goal: "Luyện đề tổng hợp, tối ưu hóa kỹ năng", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm đề tổng hợp (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích lỗi sai đề tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe + đọc tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 30, phase: 2, goal: "Luyện đề tổng hợp, tối ưu hóa kỹ năng", test: "Mini-test #16", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm đề tổng hợp (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích lỗi sai đề tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe + đọc tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #16", type: "quiz", id: "Mini-test #16" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 31, phase: 2, goal: "Luyện đề tổng hợp, tối ưu hóa kỹ năng", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm đề tổng hợp (ETS)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích lỗi sai đề tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe + đọc tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Sửa lỗi sai & Tổng kết tuần" }] }
    ]
  },
  {
    week: 32, phase: 2, goal: "Luyện đề tổng hợp, tối ưu hóa kỹ năng", test: "Mini-test #17", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm đề tổng hợp (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích lỗi sai đề tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe + đọc tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #17", type: "quiz", id: "Mini-test #17" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 33, phase: 2, goal: "Tổng ôn Giai đoạn 2, luyện đề tổng hợp, chuẩn bị Full Test", test: "FULL TEST #2", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập tổng hợp toàn bộ Part 1-7" }] },
      { day: "Thứ 3", items: [{ text: "Làm đề tổng hợp (ETS)" }] },
      { day: "Thứ 4", items: [{ text: "Phân tích lỗi sai tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #2", type: "info", id: "FULL TEST #2" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 34, phase: 2, goal: "Luyện đề tổng hợp, tối ưu hóa kỹ năng", test: "Mini-test #18", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm đề tổng hợp (Hacker TOEIC)" }] },
      { day: "Thứ 3", items: [{ text: "Phân tích lỗi sai đề tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Luyện nghe + đọc tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Làm Mini-test #18", type: "quiz", id: "Mini-test #18" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 35, phase: 2, goal: "Tổng ôn Giai đoạn 2, luyện đề tổng hợp, chuẩn bị Full Test", test: "FULL TEST #2", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập tổng hợp toàn bộ Part 1-7" }] },
      { day: "Thứ 3", items: [{ text: "Làm đề tổng hợp (ETS)" }] },
      { day: "Thứ 4", items: [{ text: "Phân tích lỗi sai tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập từ vựng tổng hợp" }] },
      { day: "Thứ 6", items: [{ text: "Làm đề mini-test tổng hợp" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #35", type: "info", id: "FULL TEST #2" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  // ... giữ nguyên các tuần 36+ phía sau ...

  // Giai đoạn 3 (Tuần 36 - 56) - Chi tiết hóa từng tuần
  {
    week: 36, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng Part 1-4", test: "FULL TEST #3", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2023)" }, { text: "Ghi lại thời gian làm từng phần" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening (Part 1-2)" }, { text: "Phân tích lỗi sai nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Listening (Part 3-4)" }, { text: "Học từ vựng mới từ bài nghe" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai Part 1-4" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test Listening (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #3", type: "info", id: "FULL TEST #3" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 37, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng Part 5-7", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Ghi lại thời gian làm từng phần" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Reading (Part 5)" }, { text: "Phân tích lỗi sai ngữ pháp" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading (Part 6-7)" }, { text: "Học từ vựng mới từ bài đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai Part 5-7" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test Reading (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 38, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa tốc độ làm bài", test: "FULL TEST #4", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2024)" }, { text: "Tập trung vào tốc độ làm bài" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích thời gian làm từng câu" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Tối ưu hóa kỹ thuật đọc nhanh" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #4", type: "info", id: "FULL TEST #4" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 39, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa chiến thuật làm bài", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Áp dụng chiến thuật làm bài" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích chiến thuật nghe hiệu quả" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích chiến thuật đọc hiệu quả" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 40, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa điểm số", test: "FULL TEST #5", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2023)" }, { text: "Tập trung vào độ chính xác" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích lỗi sai để cải thiện" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích lỗi sai để cải thiện" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #5", type: "info", id: "FULL TEST #5" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 41, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa thời gian", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Tập trung vào quản lý thời gian" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Tối ưu hóa thời gian nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Tối ưu hóa thời gian đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 42, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng tổng hợp", test: "FULL TEST #6", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2024)" }, { text: "Tập trung vào kỹ năng tổng hợp" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích kỹ năng nghe tổng hợp" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích kỹ năng đọc tổng hợp" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #6", type: "info", id: "FULL TEST #6" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 43, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa chiến thuật", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Áp dụng chiến thuật nâng cao" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích chiến thuật nghe nâng cao" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích chiến thuật đọc nâng cao" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 44, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa điểm số", test: "FULL TEST #7", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2023)" }, { text: "Tập trung vào cải thiện điểm số" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích để cải thiện điểm Listening" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích để cải thiện điểm Reading" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #7", type: "info", id: "FULL TEST #7" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 45, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Tập trung vào kỹ năng tổng hợp" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Tối ưu hóa kỹ năng nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Tối ưu hóa kỹ năng đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 46, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa chiến thuật", test: "FULL TEST #8", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2024)" }, { text: "Áp dụng chiến thuật nâng cao" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích chiến thuật nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích chiến thuật đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #8", type: "info", id: "FULL TEST #8" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 47, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa điểm số", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Tập trung vào cải thiện điểm số" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích để cải thiện điểm Listening" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích để cải thiện điểm Reading" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 48, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng", test: "FULL TEST #9", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2023)" }, { text: "Tập trung vào kỹ năng tổng hợp" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Tối ưu hóa kỹ năng nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Tối ưu hóa kỹ năng đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #9", type: "info", id: "FULL TEST #9" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 49, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa chiến thuật", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Áp dụng chiến thuật nâng cao" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích chiến thuật nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích chiến thuật đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 50, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa điểm số", test: "FULL TEST #10", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2024)" }, { text: "Tập trung vào cải thiện điểm số" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích để cải thiện điểm Listening" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích để cải thiện điểm Reading" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #10", type: "info", id: "FULL TEST #10" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 51, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Tập trung vào kỹ năng tổng hợp" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Tối ưu hóa kỹ năng nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Tối ưu hóa kỹ năng đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 52, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa chiến thuật", test: "FULL TEST #11", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2023)" }, { text: "Áp dụng chiến thuật nâng cao" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích chiến thuật nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích chiến thuật đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #11", type: "info", id: "FULL TEST #11" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 53, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa điểm số", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Tập trung vào cải thiện điểm số" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích để cải thiện điểm Listening" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích để cải thiện điểm Reading" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 54, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa kỹ năng", test: "FULL TEST #12", tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (ETS 2024)" }, { text: "Tập trung vào kỹ năng tổng hợp" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Tối ưu hóa kỹ năng nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Tối ưu hóa kỹ năng đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách Hacker" }] },
      { day: "Thứ 7", items: [{ text: "Làm FULL TEST #12", type: "info", id: "FULL TEST #12" }, { text: "Sửa chi tiết test" }] }
    ]
  },
  {
    week: 55, phase: 3, goal: "Luyện đề nâng cao, tối ưu hóa chiến thuật", test: null, tasks: [
      { day: "Thứ 2", items: [{ text: "Làm Full Test (Hacker TOEIC)" }, { text: "Áp dụng chiến thuật nâng cao" }] },
      { day: "Thứ 3", items: [{ text: "Sửa chi tiết phần Listening" }, { text: "Phân tích chiến thuật nghe" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết phần Reading" }, { text: "Phân tích chiến thuật đọc" }] },
      { day: "Thứ 5", items: [{ text: "Luyện tập lại các câu sai" }, { text: "Ôn lại từ vựng đã ghi" }] },
      { day: "Thứ 6", items: [{ text: "Làm Mini Test tổng hợp (100 câu) từ sách ETS" }] },
      { day: "Thứ 7", items: [{ text: "Nghỉ ngơi hoặc học nhẹ (nghe podcast)" }] }
    ]
  },
  {
    week: 56, phase: 3, goal: "Tổng ôn Giai đoạn 3, chuẩn bị thi thật", test: "FINAL TEST", tasks: [
      { day: "Thứ 2", items: [{ text: "Ôn tập tổng hợp toàn bộ kiến thức" }, { text: "Xem lại sổ tay lỗi sai" }] },
      { day: "Thứ 3", items: [{ text: "Làm Full Test cuối cùng (ETS 2024)" }, { text: "Tập trung vào độ chính xác" }] },
      { day: "Thứ 4", items: [{ text: "Sửa chi tiết toàn bộ test" }, { text: "Phân tích điểm mạnh, điểm yếu" }] },
      { day: "Thứ 5", items: [{ text: "Ôn tập lại các câu sai" }, { text: "Ôn lại từ vựng quan trọng" }] },
      { day: "Thứ 6", items: [{ text: "Nghỉ ngơi, chuẩn bị tâm lý" }, { text: "Kiểm tra lại dụng cụ thi" }] },
      { day: "Thứ 7", items: [{ text: "Làm FINAL TEST", type: "info", id: "FINAL TEST" }, { text: "Sửa chi tiết test cuối cùng" }] }
    ]
  }
];

const miniTests = {
  "Mini-test #1": {
    title: "Mini-test #1: Thì Hiện Tại Đơn & Tiếp Diễn (20 câu)", questions: [
      { q: "1. She often ______ to the library to read books.", options: ["go", "goes", "is going", "are going"], answer: 1 },
      { q: "2. Look! The children ______ in the yard.", options: ["play", "plays", "is playing", "are playing"], answer: 3 },
      { q: "3. What ______ you ______ right now?", options: ["do, do", "are, doing", "do, doing", "are, do"], answer: 1 },
      { q: "4. Water ______ at 100 degrees Celsius.", options: ["boil", "is boiling", "boils", "boiling"], answer: 2 },
      { q: "5. My flight to Hanoi ______ at 8 AM tomorrow.", options: ["leave", "is leaving", "leaves", "left"], answer: 2 },
      { q: "6. He ______ coffee, he prefers tea.", options: ["don't like", "doesn't like", "isn't like", "not like"], answer: 1 },
      { q: "7. Why ______ you wearing a coat? It's not cold.", options: ["do", "does", "are", "is"], answer: 2 },
      { q: "8. I ______ to the gym three times a week.", options: ["go", "am going", "goes", "is going"], answer: 0 },
      { q: "9. Please be quiet. The baby ______.", options: ["sleeps", "is sleeping", "sleep", "are sleeping"], answer: 1 },
      { q: "10. The sun ______ in the east.", options: ["rises", "is rising", "rose", "has risen"], answer: 0 },
      { q: "11. He usually ______ his emails in the morning.", options: ["check", "is checking", "checks", "are checking"], answer: 2 },
      { q: "12. At the moment, they ______ for their exam.", options: ["study", "studies", "is studying", "are studying"], answer: 3 },
      { q: "13. How often ______ your grandparents?", options: ["do you visit", "are you visiting", "you visit", "does you visit"], answer: 0 },
      { q: "14. My sister ______ as a teacher in a primary school.", options: ["work", "works", "is working", "are working"], answer: 1 },
      { q: "15. Turn off the TV. Nobody ______ it.", options: ["watches", "watch", "is watching", "are watching"], answer: 2 },
      { q: "16. John ______ to music now.", options: ["listens", "is listening", "listen", "are listening"], answer: 1 },
      { q: "17. The company ______ a new branch next month.", options: ["opens", "open", "is opening", "are opening"], answer: 2 },
      { q: "18. We ______ English at this time every Tuesday.", options: ["have", "has", "are having", "is having"], answer: 0 },
      { q: "19. Be careful! The floor ______ wet.", options: ["is", "are", "be", "being"], answer: 0 },
      { q: "20. She never ______ late for work.", options: ["is", "are", "be", "does be"], answer: 0 },
    ]
  },
  "Mini-test #2": {
    title: "Mini-test #2: Thì Quá Khứ & Tương Lai (20 câu)", questions: [
      { q: "1. I ______ a very interesting movie last night.", options: ["see", "saw", "will see", "am seeing"], answer: 1 },
      { q: "2. They ______ to Da Nang for their vacation next summer.", options: ["travel", "traveled", "will travel", "are traveling"], answer: 2 },
      { q: "3. What time ______ you ______ home yesterday?", options: ["did, get", "do, get", "will, get", "were, getting"], answer: 0 },
      { q: "4. He ______ for the company for ten years before he retired.", options: ["works", "worked", "has worked", "will work"], answer: 1 },
      { q: "5. I promise I ______ you with your homework.", options: ["help", "helped", "will help", "am helping"], answer: 2 },
      { q: "6. When I arrived, they ______ dinner.", options: ["had", "were having", "will have", "have"], answer: 1 },
      { q: "7. The train ______ in five minutes. We should hurry.", options: ["will leave", "left", "leaves", "is leaving"], answer: 3 },
      { q: "8. He ______ a new car last month.", options: ["buys", "bought", "will buy", "is buying"], answer: 1 },
      { q: "9. Perhaps we ______ to the beach this weekend.", options: ["go", "went", "will go", "are going"], answer: 2 },
      { q: "10. While I was studying, my phone ______.", options: ["rings", "rang", "was ringing", "will ring"], answer: 1 },
      { q: "11. Look at those dark clouds! It ______.", options: ["will rain", "rains", "is going to rain", "rained"], answer: 2 },
      { q: "12. He didn't ______ to the party last Saturday.", options: ["go", "went", "goes", "going"], answer: 0 },
      { q: "13. This time next week, I ______ on a beach in Thailand.", options: ["will lie", "am lying", "will be lying", "lie"], answer: 2 },
      { q: "14. She ______ him a letter two days ago.", options: ["sends", "sent", "was sending", "will send"], answer: 1 },
      { q: "15. I think the new project ______ a success.", options: ["is", "was", "will be", "is going to be"], answer: 2 },
      { q: "16. By 2030, scientists ______ a cure for this disease.", options: ["will find", "will have found", "found", "are finding"], answer: 1 },
      { q: "17. What ______ you do if you won the lottery?", options: ["will", "would", "do", "did"], answer: 1 },
      { q: "18. The concert ______ at 7 PM.", options: ["started", "starts", "will start", "is starting"], answer: 0 },
      { q: "19. We ______ to the museum yesterday.", options: ["go", "went", "have gone", "will go"], answer: 1 },
      { q: "20. Don't call me at 9 PM. I ______ a meeting.", options: ["will have", "am having", "will be having", "had"], answer: 2 },
    ]
  },
  "Mini-test #3": {
    title: "Mini-test #3: Từ loại (N, Adj, Adv) (20 câu)", questions: [
      { q: "1. The company is looking for a ______ candidate.", options: ["qualify", "qualification", "qualified", "qualifying"], answer: 2 },
      { q: "2. He drives his car very ______, so he has never had an accident.", options: ["careful", "careless", "carefully", "care"], answer: 2 },
      { q: "3. We need to make a ______ soon.", options: ["decide", "decision", "decisive", "decisively"], answer: 1 },
      { q: "4. The new policy will be ______ for all employees.", options: ["benefit", "beneficial", "beneficially", "beneficiary"], answer: 1 },
      { q: "5. The ______ of the new product was a great success.", options: ["introduce", "introduction", "introductory", "introducing"], answer: 1 },
      { q: "6. She handled the situation very ______. ", options: ["profession", "professional", "professionally", "professor"], answer: 2 },
      { q: "7. The ______ of this machine is very simple.", options: ["operate", "operation", "operational", "operator"], answer: 1 },
      { q: "8. It is ______ to double-check your work.", options: ["advise", "advice", "advisable", "advisably"], answer: 2 },
      { q: "9. The instructions were not very ______. ", options: ["clear", "clarity", "clearly", "clarify"], answer: 0 },
      { q: "10. He is a very ______ and experienced manager.", options: ["rely", "reliable", "reliability", "reliably"], answer: 1 },
      { q: "11. The company has seen ______ growth this year.", options: ["consider", "consideration", "considerable", "considerably"], answer: 2 },
      { q: "12. Please complete the application form ______. ", options: ["careful", "careless", "care", "carefully"], answer: 3 },
      { q: "13. The ______ for the position must have a degree in marketing.", options: ["apply", "applicant", "application", "applicable"], answer: 1 },
      { q: "14. We were ______ with the results of the survey.", options: ["satisfy", "satisfaction", "satisfactory", "satisfied"], answer: 3 },
      { q: "15. Your ______ is required on this document.", options: ["sign", "signal", "signature", "signer"], answer: 2 },
      { q: "16. He gave a ______ speech at the conference.", options: ["power", "powerful", "powerfully", "empower"], answer: 1 },
      { q: "17. The ______ of the staff is essential for the company's success.", options: ["create", "creative", "creativity", "creator"], answer: 2 },
      { q: "18. The information is strictly ______. ", options: ["confide", "confidence", "confidential", "confidently"], answer: 2 },
      { q: "19. The two companies announced their ______ last month.", options: ["partner", "partnership", "partnering", "partnered"], answer: 1 },
      { q: "20. You need to be more ______ about your work.", options: ["system", "systematic", "systematically", "systemize"], answer: 1 },
    ]
  },
  "Mini-test #4": {
    title: "Mini-test #4: Câu so sánh (20 câu)", questions: [
      { q: "1. This hotel is ______ than the one we stayed at last year.", options: ["expensive", "more expensive", "most expensive", "expensively"], answer: 1 },
      { q: "2. She is ______ student in the class.", options: ["good", "better", "best", "well"], answer: 2 },
      { q: "3. The weather today is ______ it was yesterday.", options: ["as cold as", "cold as", "as cold", "cold than"], answer: 0 },
      { q: "4. This computer works ______ than the old one.", options: ["fast", "faster", "fastest", "more fast"], answer: 1 },
      { q: "5. The movie was ______ I expected.", options: ["as good as", "good as", "as good", "good than"], answer: 0 },
      { q: "6. He speaks English ______ his brother.", options: ["fluent", "more fluent", "more fluently", "fluently"], answer: 2 },
      { q: "7. This is ______ book I have ever read.", options: ["interesting", "more interesting", "most interesting", "interestingly"], answer: 2 },
      { q: "8. The new car is ______ the old one.", options: ["as reliable as", "reliable as", "as reliable", "reliable than"], answer: 0 },
      { q: "9. She runs ______ in the morning.", options: ["fast", "faster", "fastest", "more fast"], answer: 1 },
      { q: "10. This restaurant serves ______ food in the city.", options: ["good", "better", "best", "well"], answer: 2 },
      { q: "11. The meeting was ______ than I thought it would be.", options: ["long", "longer", "longest", "more long"], answer: 1 },
      { q: "12. He is ______ his colleagues.", options: ["as experienced as", "experienced as", "as experienced", "experienced than"], answer: 0 },
      { q: "13. The new software is ______ to use.", options: ["easy", "easier", "easiest", "more easy"], answer: 1 },
      { q: "14. This project is ______ the previous one.", options: ["as challenging as", "challenging as", "as challenging", "challenging than"], answer: 0 },
      { q: "15. She works ______ than anyone else in the office.", options: ["hard", "harder", "hardest", "more hard"], answer: 1 },
      { q: "16. The presentation was ______ I had seen before.", options: ["as clear as", "clear as", "as clear", "clear than"], answer: 0 },
      { q: "17. This is ______ solution to the problem.", options: ["simple", "simpler", "simplest", "more simple"], answer: 2 },
      { q: "18. He drives ______ his father.", options: ["as carefully as", "carefully as", "as carefully", "carefully than"], answer: 0 },
      { q: "19. The new model is ______ the old one.", options: ["as efficient as", "efficient as", "as efficient", "efficient than"], answer: 0 },
      { q: "20. She is ______ person I know.", options: ["kind", "kinder", "kindest", "more kind"], answer: 2 },
    ]
  },
  "Mini-test #5": {
    title: "Mini-test #5: Mệnh đề quan hệ (20 câu)", questions: [
      { q: "1. The man ______ is standing over there is my boss.", options: ["who", "which", "that", "whose"], answer: 0 },
      { q: "2. The book ______ I bought yesterday is very interesting.", options: ["who", "which", "that", "whose"], answer: 1 },
      { q: "3. The woman ______ car was stolen called the police.", options: ["who", "which", "that", "whose"], answer: 3 },
      { q: "4. The company ______ I work for is expanding.", options: ["who", "which", "that", "whose"], answer: 1 },
      { q: "5. The day ______ I met you was the best day of my life.", options: ["who", "which", "when", "where"], answer: 2 },
      { q: "6. The house ______ I grew up is still there.", options: ["who", "which", "when", "where"], answer: 3 },
      { q: "7. The people ______ live next door are very friendly.", options: ["who", "which", "that", "whose"], answer: 0 },
      { q: "8. The movie ______ we watched last night was excellent.", options: ["who", "which", "that", "whose"], answer: 1 },
      { q: "9. The student ______ essay won the prize is very talented.", options: ["who", "which", "that", "whose"], answer: 3 },
      { q: "10. The restaurant ______ we had dinner was expensive.", options: ["who", "which", "where", "when"], answer: 2 },
      { q: "11. The time ______ the meeting starts is 2 PM.", options: ["who", "which", "when", "where"], answer: 2 },
      { q: "12. The man ______ I spoke to was very helpful.", options: ["who", "which", "that", "whose"], answer: 0 },
      { q: "13. The computer ______ I use at work is very fast.", options: ["who", "which", "that", "whose"], answer: 1 },
      { q: "14. The woman ______ daughter is in my class is a teacher.", options: ["who", "which", "that", "whose"], answer: 3 },
      { q: "15. The city ______ I was born is very beautiful.", options: ["who", "which", "where", "when"], answer: 2 },
      { q: "16. The reason ______ I'm late is traffic.", options: ["who", "which", "why", "where"], answer: 2 },
      { q: "17. The people ______ I work with are very professional.", options: ["who", "which", "that", "whose"], answer: 0 },
      { q: "18. The book ______ cover is red is mine.", options: ["who", "which", "that", "whose"], answer: 3 },
      { q: "19. The place ______ we met is a coffee shop.", options: ["who", "which", "where", "when"], answer: 2 },
      { q: "20. The year ______ I graduated was 2020.", options: ["who", "which", "when", "where"], answer: 2 },
    ]
  },
  "Mini-test #6": {
    title: "Mini-test #6: Câu bị động (20 câu)", questions: [
      { q: "1. The letter ______ by the secretary yesterday.", options: ["was written", "was writing", "wrote", "has written"], answer: 0 },
      { q: "2. The house ______ last year.", options: ["was built", "was building", "built", "has built"], answer: 0 },
      { q: "3. The meeting ______ by the manager tomorrow.", options: ["will be held", "will hold", "holds", "is holding"], answer: 0 },
      { q: "4. The car ______ by the mechanic right now.", options: ["is being repaired", "is repairing", "repairs", "has repaired"], answer: 0 },
      { q: "5. The book ______ by many students.", options: ["is read", "reads", "is reading", "has read"], answer: 0 },
      { q: "6. The project ______ by the team next week.", options: ["will be completed", "will complete", "completes", "is completing"], answer: 0 },
      { q: "7. The email ______ by the assistant.", options: ["was sent", "was sending", "sent", "has sent"], answer: 0 },
      { q: "8. The problem ______ by the engineers.", options: ["has been solved", "has solved", "solves", "is solving"], answer: 0 },
      { q: "9. The report ______ by the director.", options: ["was approved", "was approving", "approved", "has approved"], answer: 0 },
      { q: "10. The new product ______ by the company.", options: ["will be launched", "will launch", "launches", "is launching"], answer: 0 },
      { q: "11. The documents ______ by the clerk.", options: ["are being processed", "are processing", "process", "have processed"], answer: 0 },
      { q: "12. The contract ______ by both parties.", options: ["was signed", "was signing", "signed", "has signed"], answer: 0 },
      { q: "13. The decision ______ by the board.", options: ["has been made", "has made", "makes", "is making"], answer: 0 },
      { q: "14. The building ______ by the fire.", options: ["was destroyed", "was destroying", "destroyed", "has destroyed"], answer: 0 },
      { q: "15. The rules ______ by all employees.", options: ["must be followed", "must follow", "follows", "are following"], answer: 0 },
      { q: "16. The package ______ by the courier.", options: ["will be delivered", "will deliver", "delivers", "is delivering"], answer: 0 },
      { q: "17. The mistake ______ by the supervisor.", options: ["was corrected", "was correcting", "corrected", "has corrected"], answer: 0 },
      { q: "18. The application ______ by the committee.", options: ["is being reviewed", "is reviewing", "reviews", "has reviewed"], answer: 0 },
      { q: "19. The news ______ by everyone.", options: ["was heard", "was hearing", "heard", "has heard"], answer: 0 },
      { q: "20. The proposal ______ by the client.", options: ["has been accepted", "has accepted", "accepts", "is accepting"], answer: 0 },
    ]
  },
  "FULL TEST #1": {
    title: "FULL TEST #1: Đề tổng hợp 13 tuần đầu (TOEIC 400+) - Reading Only",
    questions: [
      // Part 5: Hoàn thành câu (20 câu)
      { q: "1. She ______ to work by bus every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
      { q: "2. The meeting ______ at 10 o'clock.", options: ["start", "starts", "starting", "started"], answer: 1 },
      { q: "3. I ______ my homework before dinner.", options: ["finish", "finishes", "finished", "finishing"], answer: 2 },
      { q: "4. They ______ in the office now.", options: ["is", "are", "was", "were"], answer: 1 },
      { q: "5. The report ______ by the manager yesterday.", options: ["was reviewed", "review", "reviewed", "is reviewing"], answer: 0 },
      { q: "6. If it ______ tomorrow, we will cancel the picnic.", options: ["rains", "rain", "rained", "is raining"], answer: 0 },
      { q: "7. He ______ English for five years.", options: ["studies", "has studied", "studied", "is studying"], answer: 1 },
      { q: "8. The new employee is ______ than the old one.", options: ["more efficient", "efficient", "most efficient", "efficiency"], answer: 0 },
      { q: "9. The project ______ by the end of this month.", options: ["will finish", "will be finished", "finished", "finishes"], answer: 1 },
      { q: "10. She is the ______ student in the class.", options: ["good", "better", "best", "well"], answer: 2 },
      { q: "11. I am looking forward to ______ from you soon.", options: ["hear", "hearing", "heard", "to hear"], answer: 1 },
      { q: "12. The book ______ on the table belongs to me.", options: ["lying", "lies", "lay", "laid"], answer: 0 },
      { q: "13. He didn't come to the party, ______ disappointed me.", options: ["which", "that", "who", "where"], answer: 0 },
      { q: "14. The manager asked me ______ the report by Friday.", options: ["to finish", "finish", "finishing", "finished"], answer: 0 },
      { q: "15. The more you practice, the ______ you become.", options: ["good", "better", "best", "well"], answer: 1 },
      { q: "16. The meeting has been postponed ______ further notice.", options: ["until", "for", "since", "to"], answer: 0 },
      { q: "17. Neither the director nor the staff ______ present at the event.", options: ["was", "were", "are", "is"], answer: 0 },
      { q: "18. The company will move to a new office ______ next month.", options: ["building", "built", "to build", "builds"], answer: 1 },
      { q: "19. I wish I ______ more time to finish the assignment.", options: ["have", "had", "has", "having"], answer: 1 },
      { q: "20. The contract must ______ before the end of the week.", options: ["sign", "signed", "be signed", "be signing"], answer: 2 },
      // Part 6: Hoàn thành đoạn văn (10 câu)
      { q: "21. Dear Mr. Lee,\nThank you for your interest in our company. We are pleased to inform you that your application has been ______.", options: ["accepted", "accept", "accepting", "accepts"], answer: 0 },
      { q: "22. Please ______ the attached document for more information.", options: ["see", "seeing", "saw", "seen"], answer: 0 },
      { q: "23. If you have any questions, do not hesitate to ______ us.", options: ["contact", "contacts", "contacted", "contacting"], answer: 0 },
      { q: "24. We look forward to ______ you at the interview.", options: ["see", "seeing", "saw", "seen"], answer: 1 },
      { q: "25. The meeting will be held in the ______ room on the second floor.", options: ["conference", "conferencing", "confer", "conferenced"], answer: 0 },
      { q: "26. All employees are required to ______ the safety rules.", options: ["follow", "follows", "following", "followed"], answer: 0 },
      { q: "27. The new policy will take ______ next month.", options: ["effect", "affect", "effective", "affection"], answer: 0 },
      { q: "28. We apologize for any ______ this may have caused.", options: ["inconvenience", "inconvenient", "convenience", "convenient"], answer: 0 },
      { q: "29. The manager is responsible ______ approving the budget.", options: ["for", "to", "with", "of"], answer: 0 },
      { q: "30. Please make sure all forms are ______ before submitting.", options: ["completed", "completing", "complete", "completes"], answer: 0 },
      // Part 7: Đọc hiểu (15 câu)
      { q: "31. (Email) Who is the email intended for?", options: ["A job applicant", "A customer", "A supplier", "An employee"], answer: 0 },
      { q: "32. (Email) What should the recipient do next?", options: ["Reply to the email", "Call the sender", "Visit the office", "Send a document"], answer: 0 },
      { q: "33. (Notice) What is the main purpose of the notice?", options: ["To announce a meeting", "To inform about a policy change", "To advertise a product", "To request feedback"], answer: 1 },
      { q: "34. (Notice) When will the new policy take effect?", options: ["Next week", "Next month", "Tomorrow", "Today"], answer: 1 },
      { q: "35. (Advertisement) What is being advertised?", options: ["A new product", "A job opening", "A training course", "A company event"], answer: 0 },
      { q: "36. (Advertisement) What is the special offer?", options: ["Discount", "Free shipping", "Gift", "Extended warranty"], answer: 0 },
      { q: "37. (Letter) Why is the writer sending this letter?", options: ["To complain", "To thank", "To request information", "To apply for a job"], answer: 1 },
      { q: "38. (Letter) What does the writer expect?", options: ["A reply", "A payment", "A visit", "A call"], answer: 0 },
      { q: "39. (Reading) What is the main idea of the passage?", options: ["Company history", "Product features", "Customer service", "Sales report"], answer: 2 },
      { q: "40. (Reading) What can be inferred from the passage?", options: ["The company is expanding", "The product is popular", "The service is new", "The report is incomplete"], answer: 1 },
      { q: "41. (Reading) Who is the main audience of the passage?", options: ["Employees", "Customers", "Suppliers", "Managers"], answer: 1 },
      { q: "42. (Reading) What is the writer's attitude?", options: ["Positive", "Negative", "Neutral", "Uncertain"], answer: 0 },
      { q: "43. (Reading) What is the best title for the passage?", options: ["Improving Customer Service", "Launching a New Product", "Annual Meeting", "Employee Benefits"], answer: 0 },
      { q: "44. (Reading) What does the word 'policy' in line 5 mean?", options: ["Rule", "Person", "Place", "Time"], answer: 0 },
      { q: "45. (Reading) What is the writer's main purpose?", options: ["To inform", "To persuade", "To entertain", "To request"], answer: 0 }
    ]
  },
  "Mini-test #8": {
    title: "Mini-test #8: Mô tả tranh & Từ vựng hình ảnh (20 câu)", questions: [
      { q: "1. The man is ______ a newspaper.", options: ["reading", "writing", "drawing", "cooking"], answer: 0 },
      { q: "2. There are two people ______ at the table.", options: ["sit", "sitting", "sat", "to sit"], answer: 1 },
      { q: "3. The woman is holding a ______.", options: ["pen", "book", "bag", "phone"], answer: 3 },
      { q: "4. The children are playing in the ______.", options: ["office", "park", "kitchen", "library"], answer: 1 },
      { q: "5. The man is ______ a cup of coffee.", options: ["drinking", "eating", "reading", "writing"], answer: 0 },
      { q: "6. There is a ______ on the desk.", options: ["computer", "car", "tree", "dog"], answer: 0 },
      { q: "7. The woman is ______ a picture.", options: ["drawing", "drinking", "driving", "dancing"], answer: 0 },
      { q: "8. The people are ______ in a meeting room.", options: ["walking", "talking", "sleeping", "cooking"], answer: 1 },
      { q: "9. The man is ______ a letter.", options: ["writing", "reading", "eating", "drinking"], answer: 0 },
      { q: "10. There are many ______ on the shelf.", options: ["books", "chairs", "tables", "computers"], answer: 0 },
      { q: "11. The woman is ______ a phone call.", options: ["making", "doing", "taking", "having"], answer: 0 },
      { q: "12. The children are ______ a game.", options: ["playing", "working", "studying", "reading"], answer: 0 },
      { q: "13. The man is ______ a car.", options: ["driving", "walking", "running", "jumping"], answer: 0 },
      { q: "14. There is a ______ on the wall.", options: ["picture", "book", "table", "chair"], answer: 0 },
      { q: "15. The woman is ______ a bag.", options: ["carrying", "drinking", "reading", "writing"], answer: 0 },
      { q: "16. The people are ______ lunch.", options: ["having", "making", "doing", "taking"], answer: 0 },
      { q: "17. The man is ______ a computer.", options: ["using", "driving", "eating", "drinking"], answer: 0 },
      { q: "18. The children are ______ in the classroom.", options: ["studying", "cooking", "sleeping", "dancing"], answer: 0 },
      { q: "19. The woman is ______ a book.", options: ["reading", "writing", "drawing", "cooking"], answer: 0 },
      { q: "20. There are two people ______ coffee.", options: ["drinking", "eating", "reading", "writing"], answer: 0 }
    ]
  },
  "Mini-test #9": {
    title: "Mini-test #9: Từ loại, Động từ, Danh từ (20 câu)", questions: [
      { q: "1. She is a very ______ person.", options: ["help", "helpful", "helpfully", "helped"], answer: 1 },
      { q: "2. The company will ______ a new product next month.", options: ["launch", "launches", "launched", "launching"], answer: 0 },
      { q: "3. He is responsible for ______ the report.", options: ["prepare", "preparing", "prepared", "prepares"], answer: 1 },
      { q: "4. The ______ of the meeting is to discuss the new project.", options: ["purpose", "purposes", "purposed", "purposing"], answer: 0 },
      { q: "5. The manager asked me to ______ the document.", options: ["sign", "signed", "signing", "signs"], answer: 0 },
      { q: "6. The ______ was very interesting.", options: ["present", "presentation", "presented", "presenting"], answer: 1 },
      { q: "7. He ______ to the office every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
      { q: "8. The ______ of the company is very important.", options: ["success", "successful", "successfully", "succeed"], answer: 0 },
      { q: "9. She ______ the meeting yesterday.", options: ["attend", "attended", "attending", "attends"], answer: 1 },
      { q: "10. The ______ will start at 10 a.m.", options: ["conference", "conferencing", "confer", "conferenced"], answer: 0 },
      { q: "11. He is ______ a report.", options: ["write", "writing", "wrote", "written"], answer: 1 },
      { q: "12. The ______ of the project is very important.", options: ["success", "successful", "successfully", "succeed"], answer: 0 },
      { q: "13. She ______ the document before submitting it.", options: ["check", "checked", "checking", "checks"], answer: 1 },
      { q: "14. The ______ was very helpful.", options: ["information", "inform", "informing", "informed"], answer: 0 },
      { q: "15. He ______ the meeting every week.", options: ["attend", "attends", "attending", "attended"], answer: 1 },
      { q: "16. The ______ of the company is very important.", options: ["growth", "growing", "grew", "grow"], answer: 0 },
      { q: "17. She ______ the report yesterday.", options: ["finish", "finished", "finishing", "finishes"], answer: 1 },
      { q: "18. The ______ was very successful.", options: ["project", "projected", "projecting", "projects"], answer: 0 },
      { q: "19. He ______ the document before submitting it.", options: ["review", "reviewed", "reviewing", "reviews"], answer: 1 },
      { q: "20. The ______ of the meeting is to discuss the new project.", options: ["purpose", "purposes", "purposed", "purposing"], answer: 0 }
    ]
  },
  "Mini-test #10": {
    title: "Mini-test #10: Hội thoại ngắn, xác định chủ đề (20 câu)", questions: [
      { q: "1. What are the speakers mainly discussing?", options: ["A business trip", "A new product", "A meeting", "A job interview"], answer: 2 },
      { q: "2. Where does the conversation take place?", options: ["In an office", "At a restaurant", "In a store", "At a bus stop"], answer: 0 },
      { q: "3. What will the man probably do next?", options: ["Call a taxi", "Go to lunch", "Finish his report", "Buy a ticket"], answer: 2 },
      { q: "4. What is the woman concerned about?", options: ["The schedule", "The price", "The location", "The weather"], answer: 0 },
      { q: "5. What does the man suggest?", options: ["Taking a break", "Changing the plan", "Calling the manager", "Sending an email"], answer: 1 },
      { q: "6. What time will the meeting start?", options: ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m."], answer: 0 },
      { q: "7. Who is the main speaker?", options: ["The manager", "The customer", "The employee", "The driver"], answer: 0 },
      { q: "8. What is the main topic of the conversation?", options: ["A project update", "A travel plan", "A product launch", "A job interview"], answer: 0 },
      { q: "9. What does the woman want to do?", options: ["Reschedule the meeting", "Cancel the order", "Change the location", "Call the manager"], answer: 0 },
      { q: "10. What is the man worried about?", options: ["The deadline", "The budget", "The weather", "The location"], answer: 0 },
      { q: "11. What will the speakers do next?", options: ["Go to lunch", "Start the meeting", "Call a taxi", "Send an email"], answer: 1 },
      { q: "12. Where are the speakers now?", options: ["In a meeting room", "At a restaurant", "In a store", "At a bus stop"], answer: 0 },
      { q: "13. What is the main problem discussed?", options: ["A late delivery", "A missing document", "A schedule conflict", "A technical issue"], answer: 2 },
      { q: "14. What does the man recommend?", options: ["Calling the supplier", "Sending an email", "Changing the plan", "Taking a break"], answer: 1 },
      { q: "15. What is the woman's job?", options: ["Manager", "Secretary", "Accountant", "Salesperson"], answer: 1 },
      { q: "16. What is the man planning to do?", options: ["Finish the report", "Go to lunch", "Call the manager", "Send an email"], answer: 0 },
      { q: "17. What is the main topic of the conversation?", options: ["A business trip", "A new product", "A meeting", "A job interview"], answer: 2 },
      { q: "18. What does the woman suggest?", options: ["Changing the plan", "Taking a break", "Calling the manager", "Sending an email"], answer: 0 },
      { q: "19. What is the man worried about?", options: ["The deadline", "The budget", "The weather", "The location"], answer: 0 },
      { q: "20. What will the speakers do next?", options: ["Start the meeting", "Go to lunch", "Call a taxi", "Send an email"], answer: 0 }
    ]
  },
  "Mini-test #11": {
    title: "Mini-test #11: Đọc hiểu thông báo & Email (15 câu)", questions: [
      { q: "1. (Notice) What is the main purpose of this notice?\n\nTO ALL EMPLOYEES\nDue to scheduled maintenance, the company server will be unavailable from 10:00 PM tonight until 6:00 AM tomorrow morning. Please save all your work before 9:30 PM. We apologize for any inconvenience.", options: ["To announce a meeting", "To inform about server maintenance", "To request feedback", "To advertise a product"], answer: 1 },
      { q: "2. (Email) What should the recipient do?\n\nSubject: Meeting Rescheduled\nDear Mr. Johnson,\nI'm writing to inform you that our meeting scheduled for tomorrow at 2:00 PM has been rescheduled to Friday at the same time due to an urgent matter. Please confirm if this new time works for you.", options: ["Reply to confirm the new time", "Call the sender", "Visit the office", "Send a document"], answer: 0 },
      { q: "3. (Advertisement) What is being offered?\n\nSPECIAL OFFER!\nGet 20% off all office supplies this week only. Valid until Friday. Show this coupon at checkout. Cannot be combined with other promotions.", options: ["Free shipping", "Discount on office supplies", "Extended warranty", "Gift with purchase"], answer: 1 },
      { q: "4. (Letter) Why is the writer sending this letter?\n\nDear Customer Service,\nI recently purchased a laptop from your store, but it has been experiencing technical problems since the first day. I would like to request a replacement or refund as the product is still under warranty.", options: ["To complain about a product", "To thank for good service", "To request information", "To apply for a job"], answer: 0 },
      { q: "5. (Announcement) What is the main topic?\n\nANNOUNCEMENT\nThe company cafeteria will be closed for renovations from Monday, March 1st to Friday, March 15th. During this time, employees are encouraged to bring their own lunch or use nearby restaurants. We appreciate your understanding.", options: ["A new restaurant opening", "Cafeteria renovation", "Employee benefits", "Company policy change"], answer: 1 },
      { q: "6. (Memo) What action is required?\n\nMEMO\nTo: All Department Heads\nFrom: HR Department\nSubject: Annual Performance Reviews\nPlease submit your department's performance review forms by Friday, December 15th. Late submissions will not be accepted.", options: ["Attend a meeting", "Submit forms by deadline", "Contact HR department", "Review policies"], answer: 1 },
      { q: "7. (Email) What is the sender's main concern?\n\nSubject: Project Update\nHi Sarah,\nI wanted to check on the status of the marketing campaign. The client is asking for an update, and I need to know if we're on track to meet the deadline. Please let me know as soon as possible.", options: ["Meeting the deadline", "Client satisfaction", "Budget concerns", "Team performance"], answer: 0 },
      { q: "8. (Notice) When will the event take place?\n\nCOMPANY PICNIC\nJoin us for our annual company picnic on Saturday, July 20th from 11:00 AM to 4:00 PM at Central Park. Food and drinks will be provided. Please RSVP by July 10th.", options: ["July 10th", "July 15th", "July 20th", "July 25th"], answer: 2 },
      { q: "9. (Letter) What is the writer requesting?\n\nDear Manager,\nI am writing to request time off from work from August 5th to August 12th for a family vacation. I have already arranged for my colleague to cover my responsibilities during this period.", options: ["A promotion", "Time off", "A raise", "A transfer"], answer: 1 },
      { q: "10. (Advertisement) What is the deadline for the offer?\n\nLIMITED TIME OFFER\nFree shipping on all orders over $50. Offer ends this Sunday at midnight. Use code FREESHIP at checkout. Don't miss out on this great deal!", options: ["This Friday", "This Saturday", "This Sunday", "Next Monday"], answer: 2 },
      { q: "11. (Email) What should employees do?\n\nSubject: New Security Policy\nDear Team,\nStarting next Monday, all employees will be required to use their ID cards to access the building. Please make sure you have your card with you at all times. Lost cards should be reported immediately to security.", options: ["Bring ID cards", "Report to security", "Both A and B", "Neither A nor B"], answer: 2 },
      { q: "12. (Notice) What is the consequence of not following the rule?\n\nPARKING NOTICE\nAll vehicles must be parked in designated areas only. Cars parked in unauthorized areas will be towed at the owner's expense. Thank you for your cooperation.", options: ["A warning", "A fine", "Being towed", "Being banned"], answer: 2 },
      { q: "13. (Letter) What is the tone of this letter?\n\nDear Valued Customer,\nThank you for your recent purchase. We hope you are completely satisfied with your order. If you have any questions or concerns, please don't hesitate to contact our customer service team.", options: ["Apologetic", "Thankful", "Complaining", "Demanding"], answer: 1 },
      { q: "14. (Advertisement) What is the main benefit mentioned?\n\nNEW PRODUCT LAUNCH\nIntroducing our latest smartphone with 48-hour battery life. Never worry about charging your phone again. Available in stores starting next week. Pre-order now and get 10% off!", options: ["Long battery life", "Low price", "Fast charging", "Large screen"], answer: 0 },
      { q: "15. (Memo) Who should attend the meeting?\n\nMEETING NOTICE\nAll project managers and team leaders are required to attend the quarterly planning meeting on Thursday at 2:00 PM in Conference Room A. Please bring your project updates and budget reports.", options: ["All employees", "Only managers", "Only team leaders", "Managers and team leaders"], answer: 3 }
    ]
  },
  "Mini-test #12": {
    title: "Mini-test #12: Điền từ vào đoạn văn (15 câu)", questions: [
      { q: "1. The company is looking for a new marketing manager to join our team. The ideal candidate should have at least 5 years of experience in digital marketing and be able to work in a fast-paced environment. We offer competitive salary and benefits package.\n\nChoose the best word to fill in the blank:\nThe company is looking for a new marketing manager to join our team. The ideal candidate should have at least 5 years of experience in digital marketing and be able to work in a fast-paced environment. We offer competitive salary and benefits ______.", options: ["package", "packaging", "packaged", "packages"], answer: 0 },
      { q: "2. The meeting will be held in the conference room on the second floor. Please bring your laptop and any relevant documents. The presentation will start promptly at 10:00 AM. If you have any questions, please contact the organizer.\n\nChoose the best word to fill in the blank:\nThe meeting will be held in the conference room on the second floor. Please bring your laptop and any relevant documents. The presentation will start ______ at 10:00 AM.", options: ["prompt", "promptly", "prompting", "prompted"], answer: 1 },
      { q: "3. The new software system has been installed successfully. All employees will receive training next week to learn how to use the new features. The training sessions will be conducted by our IT department.\n\nChoose the best word to fill in the blank:\nThe new software system has been installed successfully. All employees will receive training next week to learn how to use the new features. The training sessions will be ______ by our IT department.", options: ["conduct", "conducting", "conducted", "conducts"], answer: 2 },
      { q: "4. The annual report shows that our company has achieved significant growth this year. Sales have increased by 15% compared to last year, and we have expanded our operations to three new ______.", options: ["market", "marketing", "markets", "marketed"], answer: 2 },
      { q: "5. The customer service department is committed to providing excellent support to all our clients. We strive to respond to all inquiries within 24 hours and resolve issues as quickly as ______.", options: ["possible", "possibly", "possibility", "possibilities"], answer: 0 },
      { q: "6. The project manager is responsible for overseeing the entire development process. He ensures that all team members understand their roles and complete their tasks on time. Regular meetings are held to discuss progress and address any ______.", options: ["concern", "concerning", "concerns", "concerned"], answer: 2 },
      { q: "7. The company's new policy regarding remote work has been well received by employees. Many people appreciate the flexibility it provides, and productivity has actually increased since the policy was ______.", options: ["implement", "implementing", "implemented", "implements"], answer: 2 },
      { q: "8. The marketing team is working on a new advertising campaign for the upcoming product launch. They are focusing on social media platforms and digital marketing strategies to reach their target audience ______.", options: ["effective", "effectively", "effectiveness", "effected"], answer: 1 },
      { q: "9. The financial report indicates that the company's revenue has grown steadily over the past three years. This growth is primarily due to increased sales in the international market and the successful ______ of new products.", options: ["introduce", "introducing", "introduction", "introduced"], answer: 3 },
      { q: "10. The human resources department is currently reviewing all job applications for the open positions. They will contact qualified candidates within the next two weeks to schedule ______.", options: ["interview", "interviewing", "interviews", "interviewed"], answer: 2 },
      { q: "11. The technical support team is available 24 hours a day to assist customers with any problems they may encounter. They can be reached by phone, email, or through the online chat ______.", options: ["system", "systematic", "systematically", "systematize"], answer: 0 },
      { q: "12. The sales department has exceeded their quarterly targets by 20%. This outstanding performance is a result of the team's hard work and the implementation of new sales ______.", options: ["strategy", "strategic", "strategies", "strategically"], answer: 2 },
      { q: "13. The company is planning to expand its operations to several new countries next year. This expansion will require significant investment in infrastructure and the hiring of local ______.", options: ["staff", "staffing", "staffed", "staffs"], answer: 0 },
      { q: "14. The research and development team has been working on innovative solutions to improve product quality. Their efforts have led to several patents and industry ______.", options: ["recognize", "recognizing", "recognition", "recognized"], answer: 2 },
      { q: "15. The quality assurance department ensures that all products meet the highest standards before they are released to the market. They conduct thorough testing and inspection ______.", options: ["procedure", "procedural", "procedures", "procedurally"], answer: 2 }
    ]
  },
  "Mini-test #13": {
    title: "Mini-test #13: Đọc hiểu đoạn văn ngắn (15 câu)", questions: [
      { q: "1. Read the following passage and answer the question:\n\nMany companies are now implementing remote work policies to improve employee satisfaction and reduce office costs. Studies show that employees who work from home are often more productive and have better work-life balance. However, some managers worry about maintaining team collaboration and communication.\n\nWhat is the main idea of this passage?", options: ["Remote work is always better than office work", "Companies are adopting remote work policies", "All employees prefer working from home", "Managers don't like remote work"], answer: 1 },
      { q: "2. Read the following passage and answer the question:\n\nThe new smartphone model features advanced camera technology and longer battery life. It also includes improved security features and a larger screen. The price is competitive with similar models on the market, making it an attractive option for consumers.\n\nWhat is NOT mentioned as a feature of the new smartphone?", options: ["Advanced camera", "Longer battery life", "Water resistance", "Larger screen"], answer: 2 },
      { q: "3. Read the following passage and answer the question:\n\nOnline shopping has become increasingly popular in recent years. Consumers appreciate the convenience of shopping from home and the ability to compare prices easily. However, some people still prefer traditional shopping because they can see and touch products before buying.\n\nWhat is one advantage of online shopping mentioned in the passage?", options: ["Lower prices", "Better quality products", "Convenience", "Faster delivery"], answer: 2 },
      { q: "4. Read the following passage and answer the question:\n\nThe company's quarterly earnings report shows a 12% increase in revenue compared to the same period last year. This growth is attributed to strong sales in the Asian market and the successful launch of new products. The CEO expressed confidence in maintaining this positive trend.\n\nWhat contributed to the company's revenue growth?", options: ["Cost reduction", "Strong sales in Asia", "Employee training", "Office relocation"], answer: 1 },
      { q: "5. Read the following passage and answer the question:\n\nEnvironmental awareness has led many businesses to adopt sustainable practices. Companies are reducing their carbon footprint by using renewable energy sources and implementing recycling programs. Customers are increasingly choosing products from environmentally responsible companies.\n\nWhat is the main reason companies are adopting sustainable practices?", options: ["To reduce costs", "To increase profits", "Due to environmental awareness", "To avoid government regulations"], answer: 2 },
      { q: "6. Read the following passage and answer the question:\n\nThe training program for new employees has been redesigned to be more comprehensive and interactive. It now includes hands-on workshops, online modules, and mentorship opportunities. The program duration has been extended from two weeks to four weeks to ensure better preparation.\n\nHow long is the new training program?", options: ["Two weeks", "Three weeks", "Four weeks", "Six weeks"], answer: 2 },
      { q: "7. Read the following passage and answer the question:\n\nCustomer feedback surveys indicate that our restaurant's food quality and service have improved significantly over the past six months. The most common positive comments mention the friendly staff and reasonable prices. However, some customers have suggested extending the operating hours.\n\nWhat do customers most frequently praise?", options: ["Food quality", "Friendly staff", "Reasonable prices", "Operating hours"], answer: 1 },
      { q: "8. Read the following passage and answer the question:\n\nThe annual technology conference will feature presentations from industry experts, networking opportunities, and hands-on demonstrations of the latest innovations. Attendees will receive a certificate of participation and access to exclusive online resources for one year.\n\nWhat will attendees receive?", options: ["A free device", "A certificate and online access", "A job offer", "A discount on products"], answer: 1 },
      { q: "9. Read the following passage and answer the question:\n\nResearch shows that regular exercise can improve both physical and mental health. People who exercise at least three times per week report higher energy levels, better sleep quality, and reduced stress. The study recommends starting with 30 minutes of moderate activity daily.\n\nHow often should people exercise according to the study?", options: ["Once a week", "Twice a week", "Three times per week", "Every day"], answer: 2 },
      { q: "10. Read the following passage and answer the question:\n\nThe new public library will open next month with extended hours, including weekends and holidays. It will offer free internet access, study rooms, and a children's reading area. The library will also host regular events such as book clubs and author readings.\n\nWhat is NOT mentioned as a feature of the new library?", options: ["Extended hours", "Free internet", "Study rooms", "Cafeteria"], answer: 3 },
      { q: "11. Read the following passage and answer the question:\n\nEmployee satisfaction surveys reveal that flexible working hours and professional development opportunities are the most valued benefits. The company plans to expand these programs and introduce additional wellness initiatives, including gym memberships and mental health support.\n\nWhat are employees most satisfied with?", options: ["Salary", "Flexible hours", "Office location", "Company car"], answer: 1 },
      { q: "12. Read the following passage and answer the question:\n\nThe city's public transportation system has been upgraded with new buses, improved routes, and real-time tracking apps. These changes have resulted in a 25% increase in ridership and reduced waiting times by an average of 10 minutes.\n\nWhat improvement was made to the transportation system?", options: ["Lower fares", "New buses", "More routes", "All of the above"], answer: 3 },
      { q: "13. Read the following passage and answer the question:\n\nSmall businesses are increasingly using social media marketing to reach customers and build brand awareness. Platforms like Instagram and Facebook allow them to showcase products, share customer testimonials, and engage directly with their audience at a relatively low cost.\n\nWhy are small businesses using social media?", options: ["It's free", "It's required by law", "To reach customers", "To avoid traditional advertising"], answer: 2 },
      { q: "14. Read the following passage and answer the question:\n\nThe local farmers' market operates every Saturday from 8 AM to 2 PM, offering fresh produce, homemade goods, and artisanal products. Vendors must be local residents and all products must be grown or made within a 50-mile radius of the city.\n\nWhat is a requirement for vendors at the farmers' market?", options: ["They must be local residents", "They must have a business license", "They must accept credit cards", "They must have insurance"], answer: 0 },
      { q: "15. Read the following passage and answer the question:\n\nDigital payment methods have become the preferred choice for many consumers due to their convenience and security features. Mobile wallets, contactless cards, and online banking have reduced the need for cash transactions. However, some people still prefer cash for small purchases and privacy reasons.\n\nWhat is the main advantage of digital payments mentioned?", options: ["Lower fees", "Convenience and security", "Better rewards", "Faster processing"], answer: 1 }
    ]
  },
  "Mini-test #14": {
    title: "Mini-test #14: Đọc hiểu Double Passage (15 câu)", questions: [
      { q: "1-3. Read the following two passages and answer the questions:\n\nPASSAGE A:\nThe new office building at 123 Main Street will open next month. The building features modern amenities including a fitness center, cafeteria, and rooftop garden. All office spaces are equipped with high-speed internet and ergonomic furniture. The building is LEED certified for environmental sustainability.\n\nPASSAGE B:\nOffice Space Available\nWe are pleased to announce that office spaces are now available for rent at 123 Main Street. Monthly rent starts at $2,500 for a 500-square-foot office. Utilities and internet are included. Contact our leasing office for more information and to schedule a viewing.\n\nQuestion 1: What is the main topic of both passages?", options: ["Office building amenities", "Office space rental", "Environmental certification", "Building location"], answer: 1 },
      { q: "Question 2: What information is mentioned in Passage A but NOT in Passage B?", options: ["Building address", "Monthly rent", "Fitness center", "Contact information"], answer: 2 },
      { q: "Question 3: What can be inferred about the building from both passages?", options: ["It's already open", "It's environmentally friendly", "It's expensive", "It's fully occupied"], answer: 1 },
      { q: "4-6. Read the following two passages and answer the questions:\n\nPASSAGE A:\nThe company's annual employee satisfaction survey shows that 85% of employees are satisfied with their work environment. The most common positive feedback mentions flexible working hours and professional development opportunities. However, some employees have expressed concerns about the cafeteria menu options.\n\nPASSAGE B:\nEmployee Benefits Update\nBased on recent feedback, we are pleased to announce improvements to our employee benefits package. Starting next month, we will offer more flexible working arrangements and expand our professional development programs. We are also working with the cafeteria vendor to provide healthier meal options.\n\nQuestion 4: What is the relationship between the two passages?", options: ["Passage B contradicts Passage A", "Passage B responds to Passage A", "Passage A summarizes Passage B", "Both passages are unrelated"], answer: 1 },
      { q: "Question 5: What percentage of employees are satisfied according to Passage A?", options: ["75%", "80%", "85%", "90%"], answer: 2 },
      { q: "Question 6: What improvement is mentioned in Passage B that addresses a concern from Passage A?", options: ["Flexible working hours", "Professional development", "Cafeteria menu", "Work environment"], answer: 2 },
      { q: "7-9. Read the following two passages and answer the questions:\n\nPASSAGE A:\nThe city's public transportation system has experienced significant delays due to ongoing construction projects. Commuters are advised to plan extra travel time and consider alternative routes. The construction is expected to continue for the next three months, affecting several major bus and train lines.\n\nPASSAGE B:\nTransportation Update\nWe apologize for the inconvenience caused by the construction delays. To help commuters during this period, we are offering discounted monthly passes and have increased the frequency of shuttle services between affected stations. Real-time updates are available through our mobile app.\n\nQuestion 7: What is the main cause of the transportation problems?", options: ["Weather conditions", "Construction projects", "Equipment failure", "Staff shortage"], answer: 1 },
      { q: "Question 8: How long will the construction continue according to Passage A?", options: ["One month", "Two months", "Three months", "Six months"], answer: 2 },
      { q: "Question 9: What solution is offered in Passage B to help commuters?", options: ["Free rides", "Discounted passes", "Alternative routes", "Extended hours"], answer: 1 },
      { q: "10-12. Read the following two passages and answer the questions:\n\nPASSAGE A:\nThe local library has announced plans to expand its digital collection and modernize its facilities. The expansion will include new study rooms, updated computer stations, and an expanded e-book collection. The project is funded by a combination of city funds and private donations.\n\nPASSAGE B:\nLibrary Expansion Project\nWe are excited to share details about our upcoming library expansion. The project will create 10 new study rooms, upgrade all computer stations with the latest technology, and add 5,000 new e-books to our digital collection. Construction will begin in January and is expected to be completed by June.\n\nQuestion 10: What is the main purpose of both passages?", options: ["To announce library closure", "To describe library expansion", "To request donations", "To introduce new staff"], answer: 1 },
      { q: "Question 11: What specific information is provided in Passage B but NOT in Passage A?", options: ["Number of study rooms", "Digital collection expansion", "Funding sources", "Project timeline"], answer: 3 },
      { q: "Question 12: When will the expansion be completed according to Passage B?", options: ["January", "March", "June", "December"], answer: 2 },
      { q: "13-15. Read the following two passages and answer the questions:\n\nPASSAGE A:\nThe company's quarterly financial report indicates strong performance in the technology sector, with revenue increasing by 15% compared to the previous quarter. The growth is primarily attributed to increased sales of cloud computing services and successful product launches in the mobile market.\n\nPASSAGE B:\nInvestor Relations Update\nWe are pleased to report that our technology division has exceeded expectations this quarter. The 15% revenue growth reflects our successful expansion into cloud computing and the positive market response to our new mobile products. We expect this trend to continue in the next quarter.\n\nQuestion 13: What is the revenue growth percentage mentioned in both passages?", options: ["10%", "12%", "15%", "20%"], answer: 2 },
      { q: "Question 14: What contributed to the revenue growth according to both passages?", options: ["Cost reduction", "Cloud computing services", "Staff expansion", "Market research"], answer: 1 },
      { q: "Question 15: What is the tone of both passages?", options: ["Concerned", "Neutral", "Positive", "Negative"], answer: 2 }
    ]
  },
  "Mini-test #15": {
    title: "Mini-test #15: Tổng ôn Part 1-7 (15 câu)", questions: [
      { q: "1. (Part 5) The company ______ a new product line next month.", options: ["will launch", "launches", "launched", "launching"], answer: 0 },
      { q: "2. (Part 1) What is the woman doing in the picture?", options: ["Typing on a computer", "Making a phone call", "Reading a document", "Writing in a notebook"], answer: 0 },
      { q: "3. (Part 6) Choose the best word to fill in the blank:\nThe meeting will be held in the conference room on the second floor. Please bring your laptop and any relevant documents. The presentation will start ______ at 10:00 AM.", options: ["prompt", "promptly", "prompting", "prompted"], answer: 1 },
      { q: "4. (Part 2) What does the man suggest?", options: ["Taking a break", "Changing the plan", "Calling the manager", "Sending an email"], answer: 1 },
      { q: "5. (Part 7) Read the passage and answer:\nThe new smartphone features advanced camera technology and longer battery life. It also includes improved security features and a larger screen. The price is competitive with similar models on the market.\n\nWhat is NOT mentioned as a feature?", options: ["Advanced camera", "Longer battery life", "Water resistance", "Larger screen"], answer: 2 },
      { q: "6. (Part 3) What are the speakers mainly discussing?", options: ["A business trip", "A new product", "A meeting", "A job interview"], answer: 2 },
      { q: "7. (Part 5) The project ______ by the end of this month.", options: ["will finish", "will be finished", "finished", "finishes"], answer: 1 },
      { q: "8. (Part 4) What is the main purpose of this announcement?", options: ["To announce a meeting", "To inform about a policy change", "To advertise a product", "To request feedback"], answer: 1 },
      { q: "9. (Part 6) Choose the best word to fill in the blank:\nThe customer service department is committed to providing excellent support to all our clients. We strive to respond to all inquiries within 24 hours and resolve issues as quickly as ______.", options: ["possible", "possibly", "possibility", "possibilities"], answer: 0 },
      { q: "10. (Part 1) What is the man holding?", options: ["A briefcase", "A laptop", "A phone", "A document"], answer: 2 },
      { q: "11. (Part 7) Read the passage and answer:\nMany companies are now implementing remote work policies to improve employee satisfaction and reduce office costs. Studies show that employees who work from home are often more productive.\n\nWhat is the main idea?", options: ["Remote work is always better", "Companies are adopting remote work", "All employees prefer working from home", "Managers don't like remote work"], answer: 1 },
      { q: "12. (Part 2) Where does the conversation take place?", options: ["In an office", "At a restaurant", "In a store", "At a bus stop"], answer: 0 },
      { q: "13. (Part 5) She is the ______ student in the class.", options: ["good", "better", "best", "well"], answer: 2 },
      { q: "14. (Part 3) What will the speakers do next?", options: ["Go to lunch", "Start the meeting", "Call a taxi", "Send an email"], answer: 1 },
      { q: "15. (Part 4) What time will the event start?", options: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"], answer: 1 }
    ]
  },
  "Mini-test #16": {
    title: "Mini-test #16: Luyện đề tổng hợp nâng cao (15 câu)", questions: [
      { q: "1. (Advanced Part 5) The research findings ______ that regular exercise significantly improves cognitive function in older adults.", options: ["demonstrate", "demonstrates", "demonstrating", "demonstrated"], answer: 0 },
      { q: "2. (Advanced Part 7) Read the passage and answer:\nThe implementation of artificial intelligence in healthcare has revolutionized patient care and diagnostic accuracy. AI-powered systems can analyze medical images with greater precision than human radiologists in many cases. However, concerns about data privacy and the potential for algorithmic bias remain significant challenges that need to be addressed.\n\nWhat is the main advantage of AI in healthcare mentioned?", options: ["Cost reduction", "Improved diagnostic accuracy", "Faster treatment", "Better patient communication"], answer: 1 },
      { q: "3. (Advanced Part 6) Choose the best word to fill in the blank:\nThe company's sustainability initiative has been ______ received by both employees and customers. The program includes reducing carbon emissions, implementing recycling programs, and sourcing materials from environmentally responsible suppliers. These efforts have resulted in a 30% reduction in the company's environmental impact.\n\nChoose the best word to fill in the blank:\nThe company's sustainability initiative has been ______ received by both employees and customers.", options: ["favor", "favorable", "favorably", "favoring"], answer: 2 },
      { q: "4. (Advanced Part 3) What is the woman's main concern about the project timeline?", options: ["The budget is too high", "The deadline is unrealistic", "The team is too small", "The technology is outdated"], answer: 1 },
      { q: "5. (Advanced Part 5) Neither the director nor the staff members ______ present at the emergency meeting.", options: ["was", "were", "is", "are"], answer: 0 },
      { q: "6. (Advanced Part 7) Read the passage and answer:\nThe global supply chain crisis has highlighted the importance of building resilient business operations. Companies that diversified their supplier base and maintained adequate inventory levels were better positioned to weather the disruptions. This experience has led many organizations to reconsider their just-in-time inventory strategies.\n\nWhat lesson did companies learn from the supply chain crisis?", options: ["Diversification is important", "Inventory should be minimized", "Global trade is risky", "Technology is essential"], answer: 0 },
      { q: "7. (Advanced Part 2) What does the man imply about the new policy?", options: ["It will be implemented immediately", "It needs more discussion", "It will be unpopular", "It will save money"], answer: 1 },
      { q: "8. (Advanced Part 6) Choose the best word to fill in the blank:\nThe financial analyst's report provides a comprehensive ______ of the company's performance over the past fiscal year. The analysis includes detailed breakdowns of revenue streams, cost structures, and market positioning. This information will be crucial for strategic planning in the upcoming year.\n\nChoose the best word to fill in the blank:\nThe financial analyst's report provides a comprehensive ______ of the company's performance.", options: ["analyze", "analysis", "analytical", "analytically"], answer: 1 },
      { q: "9. (Advanced Part 4) What is the speaker's main recommendation?", options: ["Increase the budget", "Hire more staff", "Extend the deadline", "Change the approach"], answer: 2 },
      { q: "10. (Advanced Part 5) The more you practice, the ______ you become at public speaking.", options: ["good", "better", "best", "well"], answer: 1 },
      { q: "11. (Advanced Part 7) Read the passage and answer:\nThe rise of remote work has fundamentally changed the commercial real estate market. Many companies are reducing their office space requirements, leading to increased vacancy rates in traditional business districts. However, this shift has created opportunities for flexible workspace providers and co-working spaces to expand their operations.\n\nWhat has been the impact of remote work on commercial real estate?", options: ["Increased demand for office space", "Decreased vacancy rates", "Increased vacancy rates", "No significant change"], answer: 2 },
      { q: "12. (Advanced Part 3) What is the man's attitude toward the proposal?", options: ["Enthusiastic", "Skeptical", "Indifferent", "Concerned"], answer: 0 },
      { q: "13. (Advanced Part 5) The contract must ______ before the end of the week.", options: ["sign", "signed", "be signed", "be signing"], answer: 2 },
      { q: "14. (Advanced Part 6) Choose the best word to fill in the blank:\nThe marketing team's innovative approach to social media advertising has been ______ successful in reaching younger demographics. Their campaigns utilize interactive content, influencer partnerships, and data-driven targeting to maximize engagement and conversion rates.\n\nChoose the best word to fill in the blank:\nThe marketing team's innovative approach has been ______ successful.", options: ["remark", "remarkable", "remarkably", "remarking"], answer: 2 },
      { q: "15. (Advanced Part 7) Read the passage and answer:\nThe integration of renewable energy sources into the power grid has become increasingly important as countries work to reduce their carbon emissions and combat climate change. Solar and wind power installations have grown significantly, but challenges remain in terms of energy storage, grid stability, and infrastructure development. Battery technology advancements and smart grid solutions are crucial for addressing these limitations and enabling widespread adoption of renewable energy.\n\nWhat is the main challenge mentioned for renewable energy?", options: ["High costs", "Energy storage", "Public resistance", "Limited availability"], answer: 1 }
    ]
  },
  "Mini-test #17": {
    title: "Mini-test #17: Tổng hợp & Tối ưu hóa kỹ năng (15 câu)",
    questions: [
      { q: "1. (Part 5 - Advanced) The implementation of new safety protocols has ______ reduced workplace accidents by 40% over the past year.", options: ["significant", "significantly", "significance", "signifying"], answer: 1 },
      { q: "2. (Part 7 - Business Report) Read the passage and answer:\n\nThe quarterly financial analysis reveals that our e-commerce division has outperformed expectations, achieving a 25% increase in revenue compared to the previous quarter. This growth is primarily driven by expanded product offerings and improved customer experience through our mobile platform. However, increased marketing costs have impacted overall profit margins.\n\nWhat is the main factor contributing to revenue growth?", options: ["Cost reduction", "Expanded product offerings", "Staff expansion", "Market research"], answer: 1 },
      { q: "3. (Part 6 - Email) Choose the best word to fill in the blank:\n\nDear Team Members,\nI am pleased to announce that our company has been recognized for its outstanding commitment to environmental sustainability. This recognition reflects our ongoing efforts to reduce carbon emissions and implement eco-friendly practices throughout our operations. We will continue to prioritize sustainability in all our future initiatives.\n\nChoose the best word to fill in the blank:\n\nI am pleased to announce that our company has been recognized for its outstanding commitment to environmental ______.", options: ["sustain", "sustainable", "sustainability", "sustainably"], answer: 2 },
      { q: "4. (Part 3 - Meeting) What is the woman's main concern about the project budget?", options: ["It's too high", "It's insufficient", "It's not allocated properly", "It's not approved yet"], answer: 1 },
      { q: "5. (Part 5 - Grammar) The research team, along with their international collaborators, ______ to present their findings at the conference next month.", options: ["plan", "plans", "planning", "planned"], answer: 0 },
      { q: "6. (Part 7 - Technology) Read the passage and answer:\n\nThe rapid advancement of artificial intelligence in healthcare has transformed diagnostic capabilities and patient care delivery. AI-powered diagnostic tools can now detect certain conditions with greater accuracy than traditional methods. However, concerns about data privacy, algorithmic bias, and the need for human oversight remain significant challenges that healthcare providers must address.\n\nWhat is the main advantage of AI in healthcare mentioned?", options: ["Cost reduction", "Greater diagnostic accuracy", "Faster treatment", "Better patient communication"], answer: 1 },
      { q: "7. (Part 2 - Suggestion) What does the man recommend regarding the schedule?", options: ["Extend the deadline", "Hire more staff", "Simplify the process", "Cancel the project"], answer: 2 },
      { q: "8. (Part 6 - Report) Choose the best word to fill in the blank:\n\nThe annual performance review provides a comprehensive ______ of employee achievements and areas for improvement. The evaluation process includes self-assessment, peer feedback, and manager input to ensure a well-rounded perspective on each individual's contributions to the organization.\n\nChoose the best word to fill in the blank:\n\nThe annual performance review provides a comprehensive ______ of employee achievements.", options: ["assess", "assessment", "assessing", "assessed"], answer: 1 },
      { q: "9. (Part 4 - Announcement) What is the speaker's main recommendation for employees?", options: ["Attend training sessions", "Submit reports early", "Contact IT support", "Update their passwords"], answer: 3 },
      { q: "10. (Part 5 - Comparison) The new software is ______ to use than the previous version.", options: ["easy", "easier", "easiest", "more easy"], answer: 1 },
      { q: "11. (Part 7 - Market Analysis) Read the passage and answer:\n\nThe global supply chain disruptions have forced companies to reconsider their inventory management strategies. Organizations that maintained diversified supplier networks and adequate safety stock levels were better positioned to navigate the challenges. This experience has led to increased investment in supply chain resilience and local sourcing initiatives.\n\nWhat lesson did companies learn from supply chain disruptions?", options: ["Diversification is important", "Local sourcing is always better", "Technology is the solution", "Cost reduction is priority"], answer: 0 },
      { q: "12. (Part 3 - Discussion) What is the man's attitude toward the proposed changes?", options: ["Supportive", "Skeptical", "Indifferent", "Opposed"], answer: 0 },
      { q: "13. (Part 5 - Passive Voice) The proposal ______ by the board of directors next week.", options: ["will review", "will be reviewed", "reviews", "is reviewing"], answer: 1 },
      { q: "14. (Part 6 - Letter) Choose the best word to fill in the blank:\n\nThe customer feedback we have received has been overwhelmingly positive, with many clients expressing their satisfaction with our improved service quality and response times. This positive response ______ our commitment to continuous improvement and customer satisfaction.\n\nChoose the best word to fill in the blank:\n\nThis positive response ______ our commitment to continuous improvement.", options: ["reflect", "reflects", "reflecting", "reflected"], answer: 1 },
      { q: "15. (Part 7 - Economic Report) Read the passage and answer:\n\nThe shift toward remote work has fundamentally altered the commercial real estate landscape. Many organizations are reducing their office space requirements, leading to increased vacancy rates in traditional business districts. However, this transformation has created opportunities for flexible workspace providers and co-working spaces to expand their operations and meet the evolving needs of modern businesses.\n\nWhat has been the impact of remote work on commercial real estate?", options: ["Increased demand for office space", "Decreased vacancy rates", "Increased vacancy rates", "No significant change"], answer: 2 }
    ]
  },
  "FULL TEST #2": {
    title: "FULL TEST #2: Đề tổng hợp Giai đoạn 2 (TOEIC 400-650+) - Reading Only (45 câu)",
    questions: [
      // Part 5: Hoàn thành câu (20 câu)
      { q: "1. The meeting ______ at 9 a.m. every Monday.", options: ["start", "starts", "starting", "started"], answer: 1 },
      { q: "2. The new employee is ______ than the old one.", options: ["efficient", "more efficient", "most efficient", "efficiency"], answer: 1 },
      { q: "3. The report ______ by the manager yesterday.", options: ["was reviewed", "review", "reviewed", "is reviewing"], answer: 0 },
      { q: "4. If it ______ tomorrow, we will cancel the picnic.", options: ["rains", "rain", "rained", "is raining"], answer: 0 },
      { q: "5. He ______ English for five years.", options: ["studies", "has studied", "studied", "is studying"], answer: 1 },
      { q: "6. The project ______ by the end of this month.", options: ["will finish", "will be finished", "finished", "finishes"], answer: 1 },
      { q: "7. She is the ______ student in the class.", options: ["good", "better", "best", "well"], answer: 2 },
      { q: "8. I am looking forward to ______ from you soon.", options: ["hear", "hearing", "heard", "to hear"], answer: 1 },
      { q: "9. The book ______ on the table belongs to me.", options: ["lying", "lies", "lay", "laid"], answer: 0 },
      { q: "10. He didn't come to the party, ______ disappointed me.", options: ["which", "that", "who", "where"], answer: 0 },
      { q: "11. The manager asked me ______ the report by Friday.", options: ["to finish", "finish", "finishing", "finished"], answer: 0 },
      { q: "12. The more you practice, the ______ you become.", options: ["good", "better", "best", "well"], answer: 1 },
      { q: "13. The meeting has been postponed ______ further notice.", options: ["until", "for", "since", "to"], answer: 0 },
      { q: "14. Neither the director nor the staff ______ present at the event.", options: ["was", "were", "are", "is"], answer: 0 },
      { q: "15. The company will move to a new office ______ next month.", options: ["building", "built", "to build", "builds"], answer: 1 },
      { q: "16. I wish I ______ more time to finish the assignment.", options: ["have", "had", "has", "having"], answer: 1 },
      { q: "17. The contract must ______ before the end of the week.", options: ["sign", "signed", "be signed", "be signing"], answer: 2 },
      { q: "18. The company ______ a new product line next year.", options: ["launch", "launches", "will launch", "launched"], answer: 2 },
      { q: "19. The documents ______ by the secretary every morning.", options: ["is prepared", "are prepared", "prepares", "prepared"], answer: 1 },
      { q: "20. The new policy will take ______ next month.", options: ["effect", "affect", "effective", "affection"], answer: 0 },
      // Part 6: Hoàn thành đoạn văn (10 câu)
      { q: "21-25. Read the following passage and choose the best answer for each blank:\n\nDear Mr. Lee,\nThank you for your interest in our company. We are pleased to inform you that your application has been ______. Please ______ the attached document for more information. If you have any questions, do not hesitate to ______ us. We look forward to ______ you at the interview. Please make sure all forms are ______ before submitting.\n\n21.", options: ["accepted", "accept", "accepting", "accepts"], answer: 0 },
      { q: "22.", options: ["see", "seeing", "saw", "seen"], answer: 0 },
      { q: "23.", options: ["contact", "contacts", "contacted", "contacting"], answer: 0 },
      { q: "24.", options: ["see", "seeing", "saw", "seen"], answer: 1 },
      { q: "25.", options: ["completed", "completing", "complete", "completes"], answer: 0 },
      { q: "26-30. Read the following passage and choose the best answer for each blank:\n\nThe annual report shows that our company has achieved significant growth this year. Sales have increased by 15% compared to last year, and we have expanded our operations to three new ______. The customer service department is committed to providing excellent support to all our clients. We strive to respond to all inquiries within 24 hours and resolve issues as quickly as ______. The project manager is responsible for overseeing the entire development process. He ensures that all team members understand their roles and complete their tasks on time. Regular meetings are held to discuss progress and address any ______. The sales department has exceeded their quarterly targets by 20%. This outstanding performance is a result of the team's hard work and the implementation of new sales ______. The company is planning to expand its operations to several new countries next year. This expansion will require significant investment in infrastructure and the hiring of local ______.\n\n26.", options: ["market", "marketing", "markets", "marketed"], answer: 2 },
      { q: "27.", options: ["possible", "possibly", "possibility", "possibilities"], answer: 0 },
      { q: "28.", options: ["concern", "concerning", "concerns", "concerned"], answer: 2 },
      { q: "29.", options: ["strategy", "strategic", "strategies", "strategically"], answer: 2 },
      { q: "30.", options: ["staff", "staffing", "staffed", "staffs"], answer: 0 },
      // Part 7: Đọc hiểu (15 câu)
      { q: "31-33. Read the following passage and answer the questions:\n\nMany companies are now implementing remote work policies to improve employee satisfaction and reduce office costs. Studies show that employees who work from home are often more productive and have better work-life balance. However, some managers worry about maintaining team collaboration and communication.\n\n31. What is the main idea of this passage?", options: ["Remote work is always better than office work", "Companies are adopting remote work policies", "All employees prefer working from home", "Managers don't like remote work"], answer: 1 },
      { q: "32. What is one advantage of remote work mentioned in the passage?", options: ["Lower costs", "Better work-life balance", "More meetings", "Less productivity"], answer: 1 },
      { q: "33. What is a concern for managers regarding remote work?", options: ["Office costs", "Team collaboration", "Employee satisfaction", "Work-life balance"], answer: 1 },
      { q: "34-36. Read the following passage and answer the questions:\n\nThe new smartphone model features advanced camera technology and longer battery life. It also includes improved security features and a larger screen. The price is competitive with similar models on the market, making it an attractive option for consumers.\n\n34. What is NOT mentioned as a feature of the new smartphone?", options: ["Advanced camera", "Longer battery life", "Water resistance", "Larger screen"], answer: 2 },
      { q: "35. What makes the new smartphone attractive to consumers?", options: ["Low price", "Competitive price and features", "Brand reputation", "Warranty"], answer: 1 },
      { q: "36. What is the main purpose of the passage?", options: ["To compare smartphones", "To advertise a new smartphone", "To explain battery technology", "To review security features"], answer: 1 },
      { q: "37-39. Read the following passage and answer the questions:\n\nOnline shopping has become increasingly popular in recent years. Consumers appreciate the convenience of shopping from home and the ability to compare prices easily. However, some people still prefer traditional shopping because they can see and touch products before buying.\n\n37. What is one advantage of online shopping mentioned in the passage?", options: ["Lower prices", "Better quality products", "Convenience", "Faster delivery"], answer: 2 },
      { q: "38. Why do some people prefer traditional shopping?", options: ["It's cheaper", "They can see and touch products", "It's faster", "More variety"], answer: 1 },
      { q: "39. What is the main idea of the passage?", options: ["Online shopping is better", "Traditional shopping is better", "Both online and traditional shopping have advantages", "Shopping is expensive"], answer: 2 },
      { q: "40-42. Read the following passage and answer the questions:\n\nThe company's quarterly earnings report shows a 12% increase in revenue compared to the same period last year. This growth is attributed to strong sales in the Asian market and the successful launch of new products. The CEO expressed confidence in maintaining this positive trend.\n\n40. What contributed to the company's revenue growth?", options: ["Cost reduction", "Strong sales in Asia", "Employee training", "Office relocation"], answer: 1 },
      { q: "41. What is the CEO's attitude toward the company's future?", options: ["Confident", "Worried", "Uncertain", "Negative"], answer: 0 },
      { q: "42. What is the main topic of the passage?", options: ["Employee training", "Revenue growth", "Office relocation", "Product design"], answer: 1 },
      { q: "43-45. Read the following passage and answer the questions:\n\nEnvironmental awareness has led many businesses to adopt sustainable practices. Companies are reducing their carbon footprint by using renewable energy sources and implementing recycling programs. Customers are increasingly choosing products from environmentally responsible companies.\n\n43. What is the main reason companies are adopting sustainable practices?", options: ["To reduce costs", "To increase profits", "Due to environmental awareness", "To avoid government regulations"], answer: 2 },
      { q: "44. What is one way companies reduce their carbon footprint?", options: ["Hiring more staff", "Using renewable energy", "Raising prices", "Expanding operations"], answer: 1 },
      { q: "45. What is the main idea of the passage?", options: ["Sustainable practices are becoming more common in business", "Customers don't care about the environment", "Recycling is expensive", "Renewable energy is unreliable"], answer: 0 }
    ]
  },
  "Mini-test #18": {
    title: "Mini-test #18: Luyện đề tổng hợp & Tối ưu hóa kỹ năng (15 câu)",
    questions: [
      { q: "1. (Part 5 - Advanced Grammar) The implementation of artificial intelligence in healthcare has ______ transformed patient care delivery and diagnostic accuracy.", options: ["significant", "significantly", "significance", "signifying"], answer: 1 },
      { q: "2. (Part 7 - Business Analysis) Read the passage and answer:\n\nThe global supply chain crisis has forced companies to fundamentally rethink their inventory management strategies. Organizations that maintained diversified supplier networks and adequate safety stock levels were better positioned to navigate the disruptions. This experience has led to increased investment in supply chain resilience, local sourcing initiatives, and digital transformation of procurement processes.\n\nWhat was the key factor that helped companies navigate supply chain disruptions?", options: ["Technology investment", "Diversified supplier networks", "Cost reduction", "Market expansion"], answer: 1 },
      { q: "3. (Part 6 - Corporate Communication) Choose the best word to fill in the blank:\n\nDear Valued Customers,\nWe are pleased to announce the launch of our new sustainability initiative, which reflects our commitment to environmental responsibility. This program will reduce our carbon footprint by 30% over the next three years through renewable energy adoption, waste reduction, and sustainable packaging solutions. We believe this initiative will not only benefit the environment but also create long-term value for our stakeholders.\n\nChoose the best word to fill in the blank:\n\nWe are pleased to announce the launch of our new sustainability ______.", options: ["initiate", "initiative", "initiating", "initiated"], answer: 1 },
      { q: "4. (Part 3 - Strategic Meeting) What is the woman's main concern about the proposed merger?", options: ["Employee retention", "Market competition", "Financial risks", "Cultural integration"], answer: 2 },
      { q: "5. (Part 5 - Subject-Verb Agreement) The board of directors, along with the executive team, ______ to approve the new strategic plan at next month's meeting.", options: ["plan", "plans", "planning", "planned"], answer: 1 },
      { q: "6. (Part 7 - Technology Trends) Read the passage and answer:\n\nThe rapid adoption of cloud computing has revolutionized how businesses operate and store data. Cloud solutions offer scalability, cost-effectiveness, and enhanced security compared to traditional on-premise systems. However, concerns about data privacy, regulatory compliance, and vendor lock-in remain significant challenges that organizations must carefully consider when implementing cloud strategies.\n\nWhat is the main advantage of cloud computing mentioned?", options: ["Lower initial costs", "Scalability and cost-effectiveness", "Better customer service", "Faster internet speeds"], answer: 1 },
      { q: "7. (Part 2 - Recommendation) What does the consultant recommend regarding the project timeline?", options: ["Extend the deadline", "Hire additional staff", "Simplify the scope", "Cancel the project"], answer: 2 },
      { q: "8. (Part 6 - Performance Report) Choose the best word to fill in the blank:\n\nThe quarterly performance analysis demonstrates a remarkable improvement in customer satisfaction scores, with our service quality ratings increasing by 25% compared to the previous quarter. This positive trend ______ our team's dedication to excellence and the effectiveness of our customer service training programs. The feedback we receive continues to guide our improvement efforts.\n\nChoose the best word to fill in the blank:\n\nThis positive trend ______ our team's dedication to excellence.", options: ["reflect", "reflects", "reflecting", "reflected"], answer: 1 },
      { q: "9. (Part 4 - Company Announcement) What is the speaker's main announcement about?", options: ["New product launch", "Office relocation", "Management changes", "Policy updates"], answer: 2 },
      { q: "10. (Part 5 - Comparative Form) The new software platform is ______ to implement than the previous system.", options: ["easy", "easier", "easiest", "more easy"], answer: 1 },
      { q: "11. (Part 7 - Economic Analysis) Read the passage and answer:\n\nThe shift toward remote and hybrid work models has fundamentally altered the commercial real estate landscape. Many organizations are reducing their office space requirements, leading to increased vacancy rates in traditional business districts. However, this transformation has created opportunities for flexible workspace providers, co-working spaces, and property developers to adapt their offerings to meet the evolving needs of modern businesses.\n\nWhat opportunity has emerged from the remote work trend?", options: ["Lower office rents", "Expansion of flexible workspaces", "Increased productivity", "Better work-life balance"], answer: 1 },
      { q: "12. (Part 3 - Project Discussion) What is the man's attitude toward the proposed budget increase?", options: ["Supportive", "Skeptical", "Indifferent", "Opposed"], answer: 0 },
      { q: "13. (Part 5 - Passive Voice) The strategic plan ______ by the management team next week.", options: ["will review", "will be reviewed", "reviews", "is reviewing"], answer: 1 },
      { q: "14. (Part 6 - Market Research) Choose the best word to fill in the blank:\n\nThe comprehensive market research we conducted revealed significant opportunities for expansion in the Asian market. The analysis included consumer behavior studies, competitive landscape assessment, and regulatory environment evaluation. These findings ______ our decision to establish a regional office in Singapore and develop localized product offerings for the Asian market.\n\nChoose the best word to fill in the blank:\n\nThese findings ______ our decision to establish a regional office.", options: ["support", "supports", "supporting", "supported"], answer: 1 },
      { q: "15. (Part 7 - Innovation Report) Read the passage and answer:\n\nThe integration of renewable energy sources into the power grid has become increasingly important as countries work to reduce their carbon emissions and combat climate change. Solar and wind power installations have grown significantly, but challenges remain in terms of energy storage, grid stability, and infrastructure development. Battery technology advancements and smart grid solutions are crucial for addressing these limitations and enabling widespread adoption of renewable energy.\n\nWhat is the main challenge for renewable energy adoption?", options: ["High costs", "Energy storage and grid stability", "Public resistance", "Limited availability"], answer: 1 }
    ]
  },
  "FULL TEST #35": {
    title: "FULL TEST #35: Đề tổng hợp tuần 35 (TOEIC 400-650+) - Reading Only (45 câu)",
    questions: [
      // Part 5: Hoàn thành câu (20 câu)
      { q: "1. The company ______ a new product line next year.", options: ["launch", "launches", "will launch", "launched"], answer: 2 },
      { q: "2. The meeting ______ at 9 a.m. every Monday.", options: ["start", "starts", "starting", "started"], answer: 1 },
      { q: "3. The report ______ by the manager yesterday.", options: ["was reviewed", "review", "reviewed", "is reviewing"], answer: 0 },
      { q: "4. If it ______ tomorrow, we will cancel the picnic.", options: ["rains", "rain", "rained", "is raining"], answer: 0 },
      { q: "5. He ______ English for five years.", options: ["studies", "has studied", "studied", "is studying"], answer: 1 },
      { q: "6. The project ______ by the end of this month.", options: ["will finish", "will be finished", "finished", "finishes"], answer: 1 },
      { q: "7. She is the ______ student in the class.", options: ["good", "better", "best", "well"], answer: 2 },
      { q: "8. I am looking forward to ______ from you soon.", options: ["hear", "hearing", "heard", "to hear"], answer: 1 },
      { q: "9. The book ______ on the table belongs to me.", options: ["lying", "lies", "lay", "laid"], answer: 0 },
      { q: "10. He didn't come to the party, ______ disappointed me.", options: ["which", "that", "who", "where"], answer: 0 },
      { q: "11. The manager asked me ______ the report by Friday.", options: ["to finish", "finish", "finishing", "finished"], answer: 0 },
      { q: "12. The more you practice, the ______ you become.", options: ["good", "better", "best", "well"], answer: 1 },
      { q: "13. The meeting has been postponed ______ further notice.", options: ["until", "for", "since", "to"], answer: 0 },
      { q: "14. Neither the director nor the staff ______ present at the event.", options: ["was", "were", "are", "is"], answer: 0 },
      { q: "15. The company will move to a new office ______ next month.", options: ["building", "built", "to build", "builds"], answer: 1 },
      { q: "16. I wish I ______ more time to finish the assignment.", options: ["have", "had", "has", "having"], answer: 1 },
      { q: "17. The contract must ______ before the end of the week.", options: ["sign", "signed", "be signed", "be signing"], answer: 2 },
      { q: "18. The documents ______ by the secretary every morning.", options: ["is prepared", "are prepared", "prepares", "prepared"], answer: 1 },
      { q: "19. The new policy will take ______ next month.", options: ["effect", "affect", "effective", "affection"], answer: 0 },
      { q: "20. The new employee is ______ than the old one.", options: ["efficient", "more efficient", "most efficient", "efficiency"], answer: 1 },
      // Part 6: Hoàn thành đoạn văn (10 câu)
      { q: "21-25. Read the following passage and choose the best answer for each blank:\n\nDear Mr. Lee,\nThank you for your interest in our company. We are pleased to inform you that your application has been ______. Please ______ the attached document for more information. If you have any questions, do not hesitate to ______ us. We look forward to ______ you at the interview. Please make sure all forms are ______ before submitting.\n\n21.", options: ["accepted", "accept", "accepting", "accepts"], answer: 0 },
      { q: "22.", options: ["see", "seeing", "saw", "seen"], answer: 0 },
      { q: "23.", options: ["contact", "contacts", "contacted", "contacting"], answer: 0 },
      { q: "24.", options: ["see", "seeing", "saw", "seen"], answer: 1 },
      { q: "25.", options: ["completed", "completing", "complete", "completes"], answer: 0 },
      { q: "26-30. Read the following passage and choose the best answer for each blank:\n\nThe annual report shows that our company has achieved significant growth this year. Sales have increased by 15% compared to last year, and we have expanded our operations to three new ______. The customer service department is committed to providing excellent support to all our clients. We strive to respond to all inquiries within 24 hours and resolve issues as quickly as ______. The project manager is responsible for overseeing the entire development process. He ensures that all team members understand their roles and complete their tasks on time. Regular meetings are held to discuss progress and address any ______. The sales department has exceeded their quarterly targets by 20%. This outstanding performance is a result of the team's hard work and the implementation of new sales ______. The company is planning to expand its operations to several new countries next year. This expansion will require significant investment in infrastructure and the hiring of local ______.\n\n26.", options: ["market", "marketing", "markets", "marketed"], answer: 2 },
      { q: "27.", options: ["possible", "possibly", "possibility", "possibilities"], answer: 0 },
      { q: "28.", options: ["concern", "concerning", "concerns", "concerned"], answer: 2 },
      { q: "29.", options: ["strategy", "strategic", "strategies", "strategically"], answer: 2 },
      { q: "30.", options: ["staff", "staffing", "staffed", "staffs"], answer: 0 },
      // Part 7: Đọc hiểu (15 câu)
      { q: "31-33. Read the following passage and answer the questions:\n\nMany companies are now implementing remote work policies to improve employee satisfaction and reduce office costs. Studies show that employees who work from home are often more productive and have better work-life balance. However, some managers worry about maintaining team collaboration and communication.\n\n31. What is the main idea of this passage?", options: ["Remote work is always better than office work", "Companies are adopting remote work policies", "All employees prefer working from home", "Managers don't like remote work"], answer: 1 },
      { q: "32. What is one advantage of remote work mentioned in the passage?", options: ["Lower costs", "Better work-life balance", "More meetings", "Less productivity"], answer: 1 },
      { q: "33. What is a concern for managers regarding remote work?", options: ["Office costs", "Team collaboration", "Employee satisfaction", "Work-life balance"], answer: 1 },
      { q: "34-36. Read the following passage and answer the questions:\n\nThe new smartphone model features advanced camera technology and longer battery life. It also includes improved security features and a larger screen. The price is competitive with similar models on the market, making it an attractive option for consumers.\n\n34. What is NOT mentioned as a feature of the new smartphone?", options: ["Advanced camera", "Longer battery life", "Water resistance", "Larger screen"], answer: 2 },
      { q: "35. What makes the new smartphone attractive to consumers?", options: ["Low price", "Competitive price and features", "Brand reputation", "Warranty"], answer: 1 },
      { q: "36. What is the main purpose of the passage?", options: ["To compare smartphones", "To advertise a new smartphone", "To explain battery technology", "To review security features"], answer: 1 },
      { q: "37-39. Read the following passage and answer the questions:\n\nOnline shopping has become increasingly popular in recent years. Consumers appreciate the convenience of shopping from home and the ability to compare prices easily. However, some people still prefer traditional shopping because they can see and touch products before buying.\n\n37. What is one advantage of online shopping mentioned in the passage?", options: ["Lower prices", "Better quality products", "Convenience", "Faster delivery"], answer: 2 },
      { q: "38. Why do some people prefer traditional shopping?", options: ["It's cheaper", "They can see and touch products", "It's faster", "More variety"], answer: 1 },
      { q: "39. What is the main idea of the passage?", options: ["Online shopping is better", "Traditional shopping is better", "Both online and traditional shopping have advantages", "Shopping is expensive"], answer: 2 },
      { q: "40-42. Read the following passage and answer the questions:\n\nThe company's quarterly earnings report shows a 12% increase in revenue compared to the same period last year. This growth is attributed to strong sales in the Asian market and the successful launch of new products. The CEO expressed confidence in maintaining this positive trend.\n\n40. What contributed to the company's revenue growth?", options: ["Cost reduction", "Strong sales in Asia", "Employee training", "Office relocation"], answer: 1 },
      { q: "41. What is the CEO's attitude toward the company's future?", options: ["Confident", "Worried", "Uncertain", "Negative"], answer: 0 },
      { q: "42. What is the main topic of the passage?", options: ["Employee training", "Revenue growth", "Office relocation", "Product design"], answer: 1 },
      { q: "43-45. Read the following passage and answer the questions:\n\nEnvironmental awareness has led many businesses to adopt sustainable practices. Companies are reducing their carbon footprint by using renewable energy sources and implementing recycling programs. Customers are increasingly choosing products from environmentally responsible companies.\n\n43. What is the main reason companies are adopting sustainable practices?", options: ["To reduce costs", "To increase profits", "Due to environmental awareness", "To avoid government regulations"], answer: 2 },
      { q: "44. What is one way companies reduce their carbon footprint?", options: ["Hiring more staff", "Using renewable energy", "Raising prices", "Expanding operations"], answer: 1 },
      { q: "45. What is the main idea of the passage?", options: ["Sustainable practices are becoming more common in business", "Customers don't care about the environment", "Recycling is expensive", "Renewable energy is unreliable"], answer: 0 }
    ]
  },
  "FULL TEST #3": {
    title: "FULL TEST #3: Đề tổng hợp Giai đoạn 3 (TOEIC 650-750+) - Reading Only (45 câu)",
    questions: [
      // Part 5: Hoàn thành câu (20 câu)
      { q: "1. Not only ______ the manager approve the proposal, but he also allocated additional resources.", options: ["did", "does", "was", "has"], answer: 0 },
      { q: "2. The new regulations require that all employees ______ their ID badges at all times.", options: ["wear", "wore", "wearing", "to wear"], answer: 0 },
      { q: "3. Had I known about the meeting, I ______ earlier.", options: ["would arrive", "would have arrived", "arrived", "will arrive"], answer: 1 },
      { q: "4. The report, together with the financial statements, ______ submitted last week.", options: ["was", "were", "are", "have been"], answer: 0 },
      { q: "5. The more efficiently the team works, the ______ the project will be completed.", options: ["quick", "quicker", "quickly", "more quickly"], answer: 3 },
      { q: "6. The CEO insisted that the new policy ______ implemented immediately.", options: ["be", "is", "was", "will be"], answer: 0 },
      { q: "7. Rarely ______ such a talented group of individuals in one department.", options: ["you find", "do you find", "you will find", "did you find"], answer: 1 },
      { q: "8. The company's profits have increased ______ 20% since last year.", options: ["by", "at", "to", "for"], answer: 0 },
      { q: "9. The candidate ______ resume was most impressive was offered the position.", options: ["who", "whose", "which", "that"], answer: 1 },
      { q: "10. The new software allows users to complete tasks ______ than before.", options: ["efficient", "more efficiently", "efficiently", "most efficiently"], answer: 1 },
      { q: "11. The project must ______ before the end of the month.", options: ["complete", "be completed", "completed", "completing"], answer: 1 },
      { q: "12. The manager had the documents ______ before the meeting started.", options: ["prepare", "prepared", "preparing", "prepares"], answer: 1 },
      { q: "13. The results of the survey ______ that customer satisfaction has improved.", options: ["indicate", "indicates", "indicating", "indicated"], answer: 0 },
      { q: "14. The new marketing strategy is expected to ______ sales significantly.", options: ["increase", "increasing", "increased", "to increase"], answer: 0 },
      { q: "15. The contract ______ by both parties before it becomes effective.", options: ["must sign", "must be signed", "must have signed", "must be signing"], answer: 1 },
      { q: "16. The conference was postponed ______ the speaker's illness.", options: ["because", "because of", "due", "since"], answer: 1 },
      { q: "17. The company is committed to ______ environmentally friendly products.", options: ["produce", "producing", "produced", "production"], answer: 1 },
      { q: "18. The employee ______ performance was outstanding received a bonus.", options: ["who", "whose", "which", "that"], answer: 1 },
      { q: "19. The new policy will take ______ next month.", options: ["effect", "affect", "effective", "affection"], answer: 0 },
      { q: "20. The more you practice, the ______ you become at reading comprehension.", options: ["good", "better", "best", "well"], answer: 1 },
      // Part 6: Hoàn thành đoạn văn (10 câu)
      { q: "21-25. Read the following passage and choose the best answer for each blank:\n\nDear Ms. Brown,\nThank you for your interest in our company. We are pleased to inform you that your application has been ______. Please ______ the attached document for more information. If you have any questions, do not hesitate to ______ us. We look forward to ______ you at the interview. Please make sure all forms are ______ before submitting.\n\n21.", options: ["accepted", "accept", "accepting", "accepts"], answer: 0 },
      { q: "22.", options: ["see", "seeing", "saw", "seen"], answer: 0 },
      { q: "23.", options: ["contact", "contacts", "contacted", "contacting"], answer: 0 },
      { q: "24.", options: ["see", "seeing", "saw", "seen"], answer: 1 },
      { q: "25.", options: ["completed", "completing", "complete", "completes"], answer: 0 },
      { q: "26-30. Read the following passage and choose the best answer for each blank:\n\nThe annual report shows that our company has achieved significant growth this year. Sales have increased by 18% compared to last year, and we have expanded our operations to three new ______. The customer service department is committed to providing excellent support to all our clients. We strive to respond to all inquiries within 24 hours and resolve issues as quickly as ______. The project manager is responsible for overseeing the entire development process. He ensures that all team members understand their roles and complete their tasks on time. Regular meetings are held to discuss progress and address any ______. The sales department has exceeded their quarterly targets by 25%. This outstanding performance is a result of the team's hard work and the implementation of new sales ______. The company is planning to expand its operations to several new countries next year. This expansion will require significant investment in infrastructure and the hiring of local ______.\n\n26.", options: ["market", "marketing", "markets", "marketed"], answer: 2 },
      { q: "27.", options: ["possible", "possibly", "possibility", "possibilities"], answer: 0 },
      { q: "28.", options: ["concern", "concerning", "concerns", "concerned"], answer: 2 },
      { q: "29.", options: ["strategy", "strategic", "strategies", "strategically"], answer: 2 },
      { q: "30.", options: ["staff", "staffing", "staffed", "staffs"], answer: 0 },
      // Part 7: Đọc hiểu (15 câu)
      { q: "31-33. Read the following passage and answer the questions:\n\nMany companies are now implementing digital transformation strategies to improve efficiency and competitiveness. This involves adopting new technologies, automating processes, and upskilling employees. However, challenges such as resistance to change and cybersecurity risks must be managed carefully.\n\n31. What is the main idea of this passage?", options: ["Digital transformation is essential for modern companies", "Automation is risky", "Cybersecurity is not important", "Employees dislike technology"], answer: 0 },
      { q: "32. What is one benefit of digital transformation mentioned in the passage?", options: ["Improved efficiency", "Lower salaries", "Fewer employees", "Less training"], answer: 0 },
      { q: "33. What is a challenge for companies undergoing digital transformation?", options: ["Resistance to change", "Lower profits", "More paperwork", "Less competition"], answer: 0 },
      { q: "34-36. Read the following passage and answer the questions:\n\nThe new product launch was a major success, with sales exceeding projections by 30%. The marketing campaign utilized social media influencers, targeted ads, and customer testimonials. Feedback from customers has been overwhelmingly positive, and the company plans to expand distribution to international markets.\n\n34. What contributed most to the product's success?", options: ["Traditional advertising", "Social media and testimonials", "Lower prices", "Longer warranty"], answer: 1 },
      { q: "35. What is the company's next step?", options: ["Reduce prices", "Expand to international markets", "Discontinue the product", "Change suppliers"], answer: 1 },
      { q: "36. What is the main purpose of the passage?", options: ["To announce a new product", "To explain a marketing strategy", "To report on a successful launch", "To compare products"], answer: 2 },
      { q: "37-39. Read the following passage and answer the questions:\n\nResearch and development (R&D) play a crucial role in driving innovation and maintaining a competitive edge. Companies that invest in R&D are more likely to develop new products, improve existing ones, and adapt to changing market demands. However, R&D requires significant financial resources and long-term commitment.\n\n37. Why is R&D important for companies?", options: ["It increases costs", "It drives innovation", "It reduces competition", "It shortens product life cycles"], answer: 1 },
      { q: "38. What is a challenge associated with R&D?", options: ["Short-term results", "High costs", "Easy implementation", "Low risk"], answer: 1 },
      { q: "39. What is the main idea of the passage?", options: ["R&D is expensive", "R&D is only for large companies", "R&D is essential for innovation", "R&D is not necessary"], answer: 2 },
      { q: "40-42. Read the following passage and answer the questions:\n\nThe company's annual sustainability report highlights efforts to reduce carbon emissions, increase energy efficiency, and promote recycling. These initiatives have resulted in a 25% reduction in the company's environmental impact over the past three years. The company is also investing in renewable energy sources for future growth.\n\n40. What is the main focus of the company's sustainability efforts?", options: ["Increasing profits", "Reducing environmental impact", "Expanding product lines", "Hiring more staff"], answer: 1 },
      { q: "41. What result has the company achieved?", options: ["25% reduction in environmental impact", "Higher salaries", "More office space", "Fewer customers"], answer: 0 },
      { q: "42. What is the company planning for the future?", options: ["Layoffs", "More recycling", "Investing in renewable energy", "Mergers"], answer: 2 },
      { q: "43-45. Read the following passage and answer the questions:\n\nThe international business conference brought together industry leaders, entrepreneurs, and researchers to discuss trends in global trade, technology, and innovation. Keynote speakers addressed topics such as supply chain resilience, digital transformation, and sustainable growth. Attendees participated in workshops and networking sessions to share best practices and explore new opportunities.\n\n43. What was the main purpose of the conference?", options: ["To launch new products", "To discuss global business trends", "To recruit employees", "To announce mergers"], answer: 1 },
      { q: "44. What topic was NOT mentioned as a focus of the conference?", options: ["Supply chain resilience", "Digital transformation", "Sustainable growth", "Product recalls"], answer: 3 },
      { q: "45. What did attendees do at the conference?", options: ["Participate in workshops and networking", "Buy products", "Interview for jobs", "Invest in startups"], answer: 0 }
    ]
  },
  "FULL TEST #4": {
    title: "FULL TEST #4: Đề tổng hợp Giai đoạn 3 (TOEIC 650-750+) - Reading Only (45 câu)",
    questions: [
      // Part 5: Hoàn thành câu (20 câu)
      { q: "1. Scarcely had the meeting begun ______ the fire alarm went off.", options: ["when", "than", "before", "after"], answer: 0 },
      { q: "2. The board of directors, along with the CEO, ______ to approve the merger.", options: ["plan", "plans", "planning", "planned"], answer: 1 },
      { q: "3. Were it not for your timely intervention, the project ______ failed.", options: ["would have", "would", "will have", "will"], answer: 0 },
      { q: "4. The implementation of the new system requires that all employees ______ additional training.", options: ["receive", "receives", "receiving", "received"], answer: 0 },
      { q: "5. The more sophisticated the technology becomes, the ______ the learning curve.", options: ["steep", "steeper", "steepest", "more steep"], answer: 1 },
      { q: "6. The proposal ______ by the committee next week.", options: ["will be reviewed", "will review", "reviews", "is reviewing"], answer: 0 },
      { q: "7. No sooner had the announcement been made ______ the stock price began to rise.", options: ["when", "than", "before", "after"], answer: 1 },
      { q: "8. The company's expansion plans are contingent ______ market conditions.", options: ["on", "to", "with", "for"], answer: 0 },
      { q: "9. The candidate ______ qualifications exceed our requirements was offered the position.", options: ["who", "whose", "which", "that"], answer: 1 },
      { q: "10. The new software enables users to process data ______ than ever before.", options: ["efficient", "more efficiently", "efficiently", "most efficiently"], answer: 1 },
      { q: "11. The contract must ______ by both parties before implementation.", options: ["sign", "be signed", "signed", "signing"], answer: 1 },
      { q: "12. The director had the presentation ______ before the meeting.", options: ["prepare", "prepared", "preparing", "prepares"], answer: 1 },
      { q: "13. The market analysis ______ that consumer preferences are changing rapidly.", options: ["reveal", "reveals", "revealing", "revealed"], answer: 1 },
      { q: "14. The new product line is projected to ______ sales by 25%.", options: ["boost", "boosting", "boosted", "to boost"], answer: 0 },
      { q: "15. The contract ______ by legal counsel before signing.", options: ["must review", "must be reviewed", "must have reviewed", "must be reviewing"], answer: 1 },
      { q: "16. The merger was postponed ______ regulatory approval.", options: ["pending", "because", "since", "as"], answer: 0 },
      { q: "17. The organization is committed to ______ excellence in customer service.", options: ["achieve", "achieving", "achieved", "achievement"], answer: 1 },
      { q: "18. The manager ______ leadership skills are exceptional was promoted to director.", options: ["who", "whose", "which", "that"], answer: 1 },
      { q: "19. The new regulations will come into ______ next quarter.", options: ["effect", "affect", "effective", "affection"], answer: 0 },
      { q: "20. The more resources you allocate, the ______ the outcome will be.", options: ["good", "better", "best", "well"], answer: 1 },
      // Part 6: Hoàn thành đoạn văn (10 câu)
      { q: "21-25. Read the following passage and choose the best answer for each blank:\n\nDear Mr. Johnson,\nWe are pleased to inform you that your proposal has been ______. The committee was particularly impressed by the innovative approach you presented. Please ______ the attached documents for detailed feedback and next steps. We would like to schedule a follow-up meeting to discuss the implementation timeline. Please ______ us at your earliest convenience to arrange a suitable time. We look forward to ______ with you on this exciting project. All necessary documentation should be ______ before the meeting.\n\n21.", options: ["approved", "approve", "approving", "approves"], answer: 0 },
      { q: "22.", options: ["review", "reviewing", "reviewed", "reviews"], answer: 0 },
      { q: "23.", options: ["contact", "contacts", "contacted", "contacting"], answer: 0 },
      { q: "24.", options: ["collaborate", "collaborating", "collaborated", "collaborates"], answer: 1 },
      { q: "25.", options: ["prepared", "preparing", "prepare", "prepares"], answer: 0 },
      { q: "26-30. Read the following passage and choose the best answer for each blank:\n\nThe quarterly financial report indicates that our company has achieved remarkable growth this period. Revenue has increased by 22% compared to the previous quarter, and we have successfully entered two new ______. The research and development department has made significant breakthroughs in product innovation, leading to improved market ______. The customer service team has maintained exceptional performance standards, achieving a 98% satisfaction rate. Regular training sessions are conducted to ensure all staff members remain ______ with the latest industry developments. The marketing department has implemented innovative strategies that have resulted in increased brand ______. The company is preparing for international expansion, which will require significant investment in infrastructure and the recruitment of experienced ______.\n\n26.", options: ["market", "marketing", "markets", "marketed"], answer: 2 },
      { q: "27.", options: ["position", "positioning", "positions", "positioned"], answer: 0 },
      { q: "28.", options: ["familiar", "familiarity", "familiarize", "familiarizing"], answer: 0 },
      { q: "29.", options: ["recognize", "recognition", "recognizing", "recognized"], answer: 1 },
      { q: "30.", options: ["personnel", "personal", "personally", "person"], answer: 0 },
      // Part 7: Đọc hiểu (15 câu)
      { q: "31-33. Read the following passage and answer the questions:\n\nThe integration of artificial intelligence in business operations has revolutionized how companies approach decision-making and customer service. AI-powered systems can analyze vast amounts of data in real-time, providing insights that would be impossible for humans to process manually. However, this technological advancement also raises concerns about job displacement and the need for workforce reskilling.\n\n31. What is the main benefit of AI integration mentioned in the passage?", options: ["Cost reduction", "Real-time data analysis", "Job creation", "Simplified operations"], answer: 1 },
      { q: "32. What concern is raised about AI integration?", options: ["High costs", "Job displacement", "Data security", "Technical complexity"], answer: 1 },
      { q: "33. What is the main idea of the passage?", options: ["AI is replacing all human jobs", "AI provides both benefits and challenges", "AI is too expensive for businesses", "AI is not useful for decision-making"], answer: 1 },
      { q: "34-36. Read the following passage and answer the questions:\n\nThe global supply chain disruption has forced companies to rethink their inventory management strategies. Organizations that maintained diversified supplier networks and adequate safety stock levels were better positioned to navigate the challenges. This experience has led to increased investment in supply chain resilience and the adoption of just-in-case inventory models.\n\n34. What caused companies to change their inventory strategies?", options: ["Cost reduction", "Global supply chain disruption", "Customer demand", "Technology advancement"], answer: 1 },
      { q: "35. What helped some companies better handle the disruption?", options: ["Lower prices", "Diversified supplier networks", "Fewer products", "Smaller operations"], answer: 1 },
      { q: "36. What is the result of this experience?", options: ["Reduced inventory", "Increased investment in supply chain resilience", "Lower costs", "Fewer suppliers"], answer: 1 },
      { q: "37-39. Read the following passage and answer the questions:\n\nThe shift toward remote work has fundamentally changed the commercial real estate landscape. Many organizations are reducing their office space requirements, leading to increased vacancy rates in traditional business districts. However, this transformation has created opportunities for flexible workspace providers and property developers to adapt their offerings to meet the evolving needs of modern businesses.\n\n37. What has changed in the commercial real estate market?", options: ["Increased demand for office space", "Reduced office space requirements", "Higher rental prices", "More traditional offices"], answer: 1 },
      { q: "38. What opportunity has emerged from this change?", options: ["Lower office rents", "Expansion of flexible workspaces", "Increased productivity", "Better work-life balance"], answer: 1 },
      { q: "39. What is the main idea of the passage?", options: ["Remote work is bad for business", "Commercial real estate is declining", "The real estate market is adapting to remote work", "Office spaces are becoming obsolete"], answer: 2 },
      { q: "40-42. Read the following passage and answer the questions:\n\nThe company's sustainability initiatives have resulted in a 30% reduction in carbon emissions over the past three years. These efforts include transitioning to renewable energy sources, implementing comprehensive recycling programs, and optimizing transportation routes. The company has also established partnerships with environmental organizations to further its commitment to environmental responsibility.\n\n40. What is the main focus of the company's initiatives?", options: ["Cost reduction", "Sustainability and environmental responsibility", "Employee satisfaction", "Market expansion"], answer: 1 },
      { q: "41. What result has the company achieved?", options: ["30% reduction in carbon emissions", "Increased profits", "More customers", "Lower costs"], answer: 0 },
      { q: "42. How has the company furthered its environmental commitment?", options: ["By reducing staff", "By partnering with environmental organizations", "By increasing prices", "By expanding operations"], answer: 1 },
      { q: "43-45. Read the following passage and answer the questions:\n\nThe international trade conference attracted over 500 participants from 30 countries, including business leaders, policymakers, and academics. The event focused on emerging trends in global commerce, digital transformation, and sustainable business practices. Keynote speakers addressed topics such as supply chain innovation, cross-border collaboration, and the future of international trade in the digital age.\n\n43. What was the scope of the conference?", options: ["Local business only", "National trade", "International trade with global participation", "Academic research only"], answer: 2 },
      { q: "44. What topic was NOT mentioned as a focus of the conference?", options: ["Digital transformation", "Sustainable business practices", "Supply chain innovation", "Local retail trends"], answer: 3 },
      { q: "45. What is the main purpose of the passage?", options: ["To announce a new conference", "To describe an international trade conference", "To promote digital transformation", "To discuss supply chain issues"], answer: 1 }
    ]
  },
  "FULL TEST #5": {
    title: "FULL TEST #5: Đề tổng hợp Giai đoạn 3 (TOEIC 650-750+) - Reading Only (45 câu)",
    questions: [
      // Part 5: Hoàn thành câu (20 câu)
      { q: "1. Only after the investigation was completed ______ the truth about the incident.", options: ["we discovered", "did we discover", "we had discovered", "had we discovered"], answer: 1 },
      { q: "2. The committee, consisting of five members, ______ to reach a decision by Friday.", options: ["expect", "expects", "expecting", "expected"], answer: 1 },
      { q: "3. Had the company invested in better technology earlier, it ______ more competitive.", options: ["would be", "would have been", "will be", "will have been"], answer: 1 },
      { q: "4. The new policy mandates that all employees ______ safety training annually.", options: ["complete", "completes", "completing", "completed"], answer: 0 },
      { q: "5. The more complex the project becomes, the ______ the coordination required.", options: ["intense", "more intense", "intensely", "most intense"], answer: 1 },
      { q: "6. The proposal ______ by the board of directors next month.", options: ["will be considered", "will consider", "considers", "is considering"], answer: 0 },
      { q: "7. Not until the deadline approached ______ the team realize the scope of the project.", options: ["did", "do", "does", "will"], answer: 0 },
      { q: "8. The company's success is largely dependent ______ its ability to innovate.", options: ["on", "to", "with", "for"], answer: 0 },
      { q: "9. The consultant ______ expertise in digital transformation was hired for the project.", options: ["who", "whose", "which", "that"], answer: 1 },
      { q: "10. The new system allows data to be processed ______ than the previous version.", options: ["accurate", "more accurately", "accurately", "most accurately"], answer: 1 },
      { q: "11. The agreement must ______ by all parties before implementation.", options: ["sign", "be signed", "signed", "signing"], answer: 1 },
      { q: "12. The director had the presentation ______ before the meeting.", options: ["prepare", "prepared", "preparing", "prepares"], answer: 1 },
      { q: "13. The market analysis ______ that consumer preferences are changing rapidly.", options: ["reveal", "reveals", "revealing", "revealed"], answer: 1 },
      { q: "14. The new product line is projected to ______ sales by 25%.", options: ["boost", "boosting", "boosted", "to boost"], answer: 0 },
      { q: "15. The contract ______ by legal counsel before signing.", options: ["must review", "must be reviewed", "must have reviewed", "must be reviewing"], answer: 1 },
      { q: "16. The merger was postponed ______ regulatory approval.", options: ["pending", "because", "since", "as"], answer: 0 },
      { q: "17. The organization is committed to ______ excellence in customer service.", options: ["achieve", "achieving", "achieved", "achievement"], answer: 1 },
      { q: "18. The manager ______ leadership skills are exceptional was promoted to director.", options: ["who", "whose", "which", "that"], answer: 1 },
      { q: "19. The new regulations will come into ______ next quarter.", options: ["effect", "affect", "effective", "affection"], answer: 0 },
      { q: "20. The more resources you allocate, the ______ the outcome will be.", options: ["good", "better", "best", "well"], answer: 1 },
      // Part 6: Hoàn thành đoạn văn (10 câu)
      { q: "21-25. Read the following passage and choose the best answer for each blank:\n\nDear Ms. Rodriguez,\nWe are delighted to inform you that your application has been ______. Your impressive background and innovative ideas align perfectly with our company's vision. Please ______ the enclosed materials for detailed information about the next steps. We would appreciate if you could ______ us within the next week to discuss the position further. We are excited about the possibility of ______ with you on this project. All required documentation should be ______ and submitted by the specified deadline.\n\n21.", options: ["accepted", "accept", "accepting", "accepts"], answer: 0 },
      { q: "22.", options: ["examine", "examining", "examined", "examines"], answer: 0 },
      { q: "23.", options: ["contact", "contacts", "contacted", "contacting"], answer: 0 },
      { q: "24.", options: ["collaborate", "collaborating", "collaborated", "collaborates"], answer: 1 },
      { q: "25.", options: ["completed", "completing", "complete", "completes"], answer: 0 },
      { q: "26-30. Read the following passage and choose the best answer for each blank:\n\nThe annual performance review shows that our organization has exceeded all targets this year. Revenue growth has reached 28% compared to last year, and we have successfully expanded into three new ______. The innovation department has developed breakthrough technologies that have significantly enhanced our competitive ______. The quality assurance team has maintained exceptional standards, achieving a 99% customer satisfaction rate. Continuous professional development programs ensure that all employees remain ______ with industry best practices. The strategic marketing initiatives have resulted in substantial brand ______ and market share growth. The company is preparing for international expansion, which will require significant investment in infrastructure and the recruitment of qualified ______.\n\n26.", options: ["market", "marketing", "markets", "marketed"], answer: 2 },
      { q: "27.", options: ["advantage", "advantageous", "advantages", "advantaged"], answer: 0 },
      { q: "28.", options: ["current", "currency", "currently", "curriculum"], answer: 0 },
      { q: "29.", options: ["recognize", "recognition", "recognizing", "recognized"], answer: 1 },
      { q: "30.", options: ["professionals", "professional", "professionally", "profession"], answer: 0 },
      // Part 7: Đọc hiểu (15 câu)
      { q: "31-33. Read the following passage and answer the questions:\n\nThe emergence of blockchain technology has transformed various industries, particularly finance and supply chain management. Blockchain's decentralized nature provides enhanced security and transparency, making it ideal for applications requiring trust and verification. However, widespread adoption faces challenges related to scalability, regulatory compliance, and public understanding of the technology.\n\n31. What is the main advantage of blockchain technology mentioned in the passage?", options: ["Low cost", "Enhanced security and transparency", "Fast processing", "Easy implementation"], answer: 1 },
      { q: "32. What challenge does blockchain adoption face?", options: ["High costs", "Scalability issues", "Lack of interest", "Too much transparency"], answer: 1 },
      { q: "33. What is the main idea of the passage?", options: ["Blockchain is perfect for all applications", "Blockchain offers benefits but faces adoption challenges", "Blockchain is too complex to use", "Blockchain is only useful for finance"], answer: 1 },
      { q: "34-36. Read the following passage and answer the questions:\n\nThe rapid advancement of renewable energy technologies has made clean energy more accessible and cost-effective than ever before. Solar and wind power installations have grown exponentially, driven by decreasing costs and increasing efficiency. This transition has created new job opportunities in the green energy sector while reducing dependence on fossil fuels.\n\n34. What has made renewable energy more accessible?", options: ["Government subsidies", "Rapid technological advancement", "Lower demand", "Fewer regulations"], answer: 1 },
      { q: "35. What has driven the growth of solar and wind power?", options: ["Increasing costs", "Decreasing costs and increasing efficiency", "Government mandates", "Public pressure"], answer: 1 },
      { q: "36. What benefit has this transition created?", options: ["Lower energy prices", "New job opportunities in green energy", "More fossil fuel use", "Increased pollution"], answer: 1 },
      { q: "37-39. Read the following passage and answer the questions:\n\nThe digital transformation of healthcare has accelerated significantly, with telemedicine becoming a standard practice. Electronic health records and AI-powered diagnostic tools have improved patient care and operational efficiency. However, concerns about data privacy and the digital divide remain significant challenges for healthcare providers.\n\n37. What has become a standard practice in healthcare?", options: ["Traditional medicine", "Telemedicine", "Manual record keeping", "Paper-based systems"], answer: 1 },
      { q: "38. What has improved patient care?", options: ["Lower costs", "Electronic health records and AI tools", "Longer wait times", "Fewer doctors"], answer: 1 },
      { q: "39. What is a concern about digital healthcare?", options: ["High costs", "Data privacy", "Too much efficiency", "Better outcomes"], answer: 1 },
      { q: "40-42. Read the following passage and answer the questions:\n\nThe company's corporate social responsibility program has achieved remarkable success, with initiatives focusing on education, environmental conservation, and community development. These efforts have resulted in a 40% reduction in the company's environmental footprint and the establishment of partnerships with over 50 local organizations. The program has also enhanced the company's reputation and strengthened relationships with stakeholders.\n\n40. What areas does the CSR program focus on?", options: ["Profit maximization", "Education, environmental conservation, and community development", "Employee benefits only", "Marketing campaigns"], answer: 1 },
      { q: "41. What environmental result has been achieved?", options: ["40% reduction in environmental footprint", "Increased profits", "More customers", "Lower costs"], answer: 0 },
      { q: "42. What benefit has the CSR program provided?", options: ["Enhanced company reputation", "Reduced staff", "Higher prices", "Fewer customers"], answer: 0 },
      { q: "43-45. Read the following passage and answer the questions:\n\nThe global innovation summit brought together over 800 participants from 45 countries, including entrepreneurs, researchers, and policymakers. The event explored cutting-edge technologies, sustainable development solutions, and collaborative opportunities. Keynote speakers addressed topics such as artificial intelligence ethics, climate change mitigation, and the future of work in an automated world.\n\n43. What was the scale of the innovation summit?", options: ["Local event", "National conference", "Global summit with international participation", "Academic meeting only"], answer: 2 },
      { q: "44. What topic was NOT mentioned as a focus of the summit?", options: ["Artificial intelligence ethics", "Climate change mitigation", "Future of work", "Traditional manufacturing"], answer: 3 },
      { q: "45. What is the main purpose of the passage?", options: ["To announce a new summit", "To describe a global innovation summit", "To promote AI technology", "To discuss climate change"], answer: 1 }
    ]
  },
  "FULL TEST #6": {
    "title": "FULL TEST #6: Đề tổng hợp Giai đoạn 3 (TOEIC 650-750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. The manager insisted that the report ______ submitted by the end of the day.", "options": ["is", "was", "be", "has been"], "answer": 2 },
      { "q": "2. ______ having limited resources, the team managed to complete the project ahead of schedule.", "options": ["Despite", "Although", "However", "Because"], "answer": 0 },
      { "q": "3. If the marketing campaign had been more effective, our sales ______ significantly.", "options": ["would increase", "will increase", "would have increased", "will have increased"], "answer": 2 },
      { "q": "4. All personnel are required to attend the safety workshop, ______ of their department.", "options": ["regardless", "irrespective", "disregarding", "unrelated"], "answer": 0 },
      { "q": "5. The ______ of the new software system is scheduled for the first quarter of next year.", "options": ["implement", "implementing", "implementation", "implemented"], "answer": 2 },
      { "q": "6. The CEO is looking for an assistant ______ is highly organized and proactive.", "options": ["which", "who", "whose", "whom"], "answer": 1 },
      { "q": "7. Scarcely ______ the announcement been made when the company's stock price began to rise.", "options": ["had", "has", "did", "does"], "answer": 0 },
      { "q": "8. The company decided to ______ its operations to Southeast Asia to reduce costs.", "options": ["outsource", "outsourcing", "outsourced", "to outsource"], "answer": 0 },
      { "q": "9. This printer is ______ to the one we had before, but it has more features.", "options": ["compare", "comparing", "comparable", "comparison"], "answer": 2 },
      { "q": "10. The success of our project is ______ on effective communication among team members.", "options": ["reliant", "reliable", "reliance", "relying"], "answer": 0 },
      { "q": "11. It is imperative that all employees ______ with the new security protocols.", "options": ["comply", "complies", "complying", "complied"], "answer": 0 },
      { "q": "12. The final decision ______ whether to proceed with the merger rests with the board.", "options": ["regarding", "regards", "regarded", "disregarding"], "answer": 0 },
      { "q": "13. The more experience he gained, ______ he became in his role.", "options": ["the more confident", "the most confident", "more confident", "confident"], "answer": 0 },
      { "q": "14. The data collected from the survey ______ being analyzed by the research team.", "options": ["is", "are", "was", "were"], "answer": 0 },
      { "q": "15. The contract states that any disputes must ______ through arbitration.", "options": ["be settled", "settle", "settling", "settled"], "answer": 0 },
      { "q": "16. ______ to unforeseen circumstances, the workshop has been postponed.", "options": ["Due", "Because", "Since", "Owing"], "answer": 0 },
      { "q": "17. The firm specializes in providing ______ legal advice to multinational corporations.", "options": ["expert", "expertly", "expertise", "experts"], "answer": 0 },
      { "q": "18. The new policy is designed to ______ better work-life balance for all employees.", "options": ["promote", "promotes", "promoting", "promotion"], "answer": 0 },
      { "q": "19. The financial controller is responsible for ______ the company's budget.", "options": ["oversee", "overseeing", "oversees", "overseen"], "answer": 1 },
      { "q": "20. The updated manual ______ clear instructions for operating the new machinery.", "options": ["provides", "provide", "providing", "is provided"], "answer": 0 },
      { "q": "21-25. Read the following passage and choose the best answer for each blank:\n\nTo: All Staff\nFrom: Management\nSubject: Upcoming Office Relocation\n\nThis memo is to ______ you about our upcoming office move. As our company continues to grow, we have found it necessary to relocate to a larger facility. Our new office will be located at 789 Business Avenue. The new space is not only larger but also features upgraded amenities, including a state-of-the-art conference center and an employee wellness room. The move is ______ to take place over the weekend of July 18-19. To ensure a smooth ______, we ask that all employees pack their personal belongings by the end of the day on Friday, July 17. The IT department will handle the relocation of all computer equipment. We are confident that this move will provide a better ______ environment for everyone. Your cooperation is greatly ______.\n\n21.", "options": ["inform", "informing", "informed", "information"], "answer": 0 },
      { "q": "22.", "options": ["scheduled", "scheduling", "schedule", "schedules"], "answer": 0 },
      { "q": "23.", "options": ["transit", "transitory", "transition", "transitional"], "answer": 2 },
      { "q": "24.", "options": ["working", "worked", "work", "works"], "answer": 0 },
      { "q": "25.", "options": ["appreciate", "appreciating", "appreciated", "appreciation"], "answer": 2 },
      { "q": "26-30. Read the following passage and choose the best answer for each blank:\n\nMarket research is a critical ______ of any successful business strategy. It involves gathering data about target audiences and market trends to help businesses make informed decisions. A ______ executed research plan can reveal valuable insights into consumer behavior, preferences, and the competitive landscape. This information allows companies to tailor their products and marketing efforts more ______. For example, understanding the demographic profile of potential customers can help in creating targeted advertising campaigns. Furthermore, continuous market analysis is ______ for staying ahead of competitors and adapting to changing market conditions. Companies that invest in ______ market research are better positioned for long-term growth and profitability.\n\n26.", "options": ["component", "composition", "compound", "compartment"], "answer": 0 },
      { "q": "27.", "options": ["thorough", "thoroughfare", "thoroughly", "thoroughness"], "answer": 2 },
      { "q": "28.", "options": ["effective", "effectively", "effect", "effectiveness"], "answer": 1 },
      { "q": "29.", "options": ["essential", "essence", "essentially", "essentials"], "answer": 0 },
      { "q": "30.", "options": ["comprehensive", "comprehend", "comprehension", "comprehensively"], "answer": 0 },
      { "q": "31-33. Read the following passage and answer the questions:\n\nEffective project management is crucial for the successful completion of any complex endeavor. It requires a combination of technical skills, such as planning and budgeting, and soft skills, like communication and leadership. A project manager's primary role is to ensure that the project is delivered on time, within budget, and to the required quality standards. One of the biggest challenges in project management is dealing with 'scope creep,' where the project's objectives expand beyond their initial definition. This often leads to delays and budget overruns. To mitigate this, project managers must establish clear goals from the outset and implement a strict change control process.\n\n31. What is the primary role of a project manager?", "options": ["To perform all technical tasks", "To secure funding for the project", "To ensure timely and on-budget delivery", "To market the final product"], "answer": 2 },
      { "q": "32. What is 'scope creep'?", "options": ["A reduction in project budget", "The expansion of project goals beyond the original plan", "A failure in communication", "The early completion of a project"], "answer": 1 },
      { "q": "33. How can project managers prevent scope creep?", "options": ["By hiring more staff", "By extending the project deadline", "By establishing clear goals and a change control process", "By reducing the project's quality standards"], "answer": 2 },
      { "q": "34-36. Read the following passage and answer the questions:\n\nSubscription-based business models have become increasingly popular across various sectors, from software to entertainment. This model offers companies a predictable and recurring revenue stream, which is highly attractive to investors. For consumers, it provides convenience and access to a wide range of products or services for a fixed monthly or annual fee. However, a major challenge for subscription businesses is customer churn, which is the rate at which customers cancel their subscriptions. To combat churn, companies must continuously provide value and excellent customer service to retain their subscriber base.\n\n34. What is a key advantage of the subscription model for companies?", "options": ["Higher profit margins per sale", "A predictable revenue stream", "Lower marketing costs", "Simpler product development"], "answer": 1 },
      { "q": "35. What is the main challenge for subscription-based businesses?", "options": ["Attracting new customers", "Managing inventory", "Customer churn", "High initial investment"], "answer": 2 },
      { "q": "36. What is suggested as a way to reduce customer churn?", "options": ["Increasing subscription fees", "Offering fewer features", "Continuously providing value and good service", "Limiting access to services"], "answer": 2 },
      { "q": "37-39. Read the following passage and answer the questions:\n\nOur company is implementing a new 'Green Office' policy to reduce our environmental impact. This initiative includes several measures, such as reducing paper consumption by promoting digital documentation, installing energy-efficient lighting, and launching a comprehensive recycling program. We will also be encouraging employees to use public transportation or carpool by offering incentives. A 'Green Team' of volunteers will be formed to monitor progress and suggest further improvements. We believe that these small changes will collectively make a significant difference and demonstrate our commitment to corporate social responsibility.\n\n37. What is the main purpose of the 'Green Office' policy?", "options": ["To increase company profits", "To reduce the company's environmental impact", "To receive a government grant", "To improve employee productivity"], "answer": 1 },
      { "q": "38. Which of the following is NOT a measure mentioned in the policy?", "options": ["Reducing paper use", "Installing new lighting", "Banning all personal vehicles", "Starting a recycling program"], "answer": 2 },
      { "q": "39. Who will be responsible for monitoring the initiative's progress?", "options": ["The CEO", "An external consultant", "A volunteer 'Green Team'", "The human resources department"], "answer": 2 },
      { "q": "40-42. Read the following email and answer the questions:\n\nSubject: Action Required: Mandatory IT Security Training\n\nDear Employees,\n\nTo ensure the security of our company's data and systems, all employees are required to complete a mandatory IT security training course. This course covers topics such as phishing scams, password security, and safe Browse habits. The training is delivered online and can be accessed through the employee portal. The deadline for completion is August 31. Please be aware that access to company networks may be temporarily suspended for those who fail to complete the training by the deadline. We appreciate your cooperation in this important matter.\n\n40. What is the purpose of this email?", "options": ["To announce a new software update", "To inform employees about a new security threat", "To require employees to complete a security training course", "To ask for volunteers for the IT department"], "answer": 2 },
      { "q": "41. What is the deadline for completing the training?", "options": ["August 1", "August 15", "August 31", "There is no deadline"], "answer": 2 },
      { "q": "42. What is a potential consequence of not completing the training on time?", "options": ["A formal warning", "A salary deduction", "Termination of employment", "Temporary suspension of network access"], "answer": 3 },
      { "q": "43-45. Read the following article and answer the questions:\n\nThe rise of the 'gig economy' has fundamentally changed the nature of work for many people. Instead of traditional, full-time jobs, individuals are increasingly working as freelancers or independent contractors on short-term 'gigs'. This offers flexibility and autonomy, allowing workers to choose their projects and set their own hours. However, it also comes with challenges, such as a lack of job security, benefits like health insurance and retirement plans, and income instability. The legal and regulatory frameworks are still catching up with this shift, leading to ongoing debates about the classification and rights of gig workers.\n\n43. What is a key benefit of the gig economy for workers?", "options": ["Guaranteed long-term employment", "A comprehensive benefits package", "Flexibility and autonomy", "A stable and predictable income"], "answer": 2 },
      { "q": "44. What is a significant drawback mentioned in the article?", "options": ["Lack of interesting work", "Too much supervision", "Lack of job security and benefits", "Long working hours"], "answer": 2 },
      { "q": "45. What is the status of the legal framework concerning the gig economy?", "options": ["It is well-established and clear", "It is no longer relevant", "It is still evolving and being debated", "It strongly favors the companies"], "answer": 2 }
    ]
  },
  "FULL TEST #7": {
    "title": "FULL TEST #7: Đề tổng hợp Giai đoạn 3 (TOEIC 650-750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. The report, ______ all the latest sales figures, needs to be finalized by tomorrow.", "options": ["incorporates", "to incorporate", "is incorporating", "incorporating"], "answer": 3 },
      { "q": "2. Not once ______ the CEO express doubt about the project's eventual success.", "options": ["did", "had", "was", "has"], "answer": 0 },
      { "q": "3. The company attributes its success to a ______ combination of innovation and customer service.", "options": ["power", "powerful", "powerfully", "powered"], "answer": 1 },
      { "q": "4. Had it not been for the timely intervention of the IT team, the entire network ______.", "options": ["would crash", "crashed", "would have crashed", "had crashed"], "answer": 2 },
      { "q": "5. The new regulations are far more ______ than the previous ones.", "options": ["stringent", "stringently", "stringency", "string"], "answer": 0 },
      { "q": "6. The committee is composed of members ______ diverse backgrounds and expertise.", "options": ["from", "with", "of", "in"], "answer": 0 },
      { "q": "7. It is the recommendation of the board that the proposal ______ for further review.", "options": ["is returned", "returned", "be returned", "has been returned"], "answer": 2 },
      { "q": "8. ______ we expect to face some challenges, we are optimistic about the outcome.", "options": ["Despite", "Nevertheless", "While", "Therefore"], "answer": 2 },
      { "q": "9. The research findings suggest a strong ______ between employee morale and productivity.", "options": ["correlate", "correlating", "correlation", "correlated"], "answer": 2 },
      { "q": "10. The factory's production capacity has increased ______ since the new machinery was installed.", "options": ["consider", "considerate", "consideration", "considerably"], "answer": 3 },
      { "q": "11. The lawyer advised ______ the contract carefully before signing.", "options": ["to reading", "read", "reading", "to be read"], "answer": 2 },
      { "q": "12. The speaker was asked to ______ her presentation to fit the 20-minute time slot.", "options": ["condense", "condensing", "condensed", "condensation"], "answer": 0 },
      { "q": "13. The extent ______ which the new policy will affect profits is still unknown.", "options": ["of", "for", "to", "in"], "answer": 2 },
      { "q": "14. A thorough risk ______ must be conducted before launching the new product.", "options": ["assess", "assessing", "assessed", "assessment"], "answer": 3 },
      { "q": "15. All expense reports must be submitted for ______ by the accounting department.", "options": ["approve", "approved", "approving", "approval"], "answer": 3 },
      { "q": "16. The marketing director, along with her team, ______ preparing for the upcoming product launch.", "options": ["are", "is", "were", "have been"], "answer": 1 },
      { "q": "17. The new system is designed to be ______ with our existing software.", "options": ["compatible", "compatibly", "compatibility", "compatibleness"], "answer": 0 },
      { "q": "18. The negotiations were successful, ______ in a mutually beneficial agreement.", "options": ["result", "results", "resulting", "resulted"], "answer": 2 },
      { "q": "19. ______ the increase in raw material costs, the company has decided not to raise its prices.", "options": ["Notwithstanding", "However", "Although", "Because of"], "answer": 0 },
      { "q": "20. The CEO wants to know ______ is responsible for this department.", "options": ["who", "whom", "whose", "which"], "answer": 0 },
      { "q": "21-25. Read the following passage and choose the best answer for each blank:\n\nSubject: Update on the Phoenix Project\n\nDear Team,\n\nThis email serves as an update on the current status of the Phoenix Project. We have successfully completed the initial design phase, and I want to thank everyone for their hard work and ______. The client has reviewed our mock-ups and provided some ______ feedback, which we will incorporate in the next iteration. The next major ______ will be the development of the prototype. The timeline for this phase is quite ______, and it will require close collaboration between the design and engineering teams. Please ensure that all your tasks are updated in the project management software by the end of this week. We are currently ______ to meet our projected launch date.\n\n21.", "options": ["dedicate", "dedicating", "dedication", "dedicated"], "answer": 2 },
      { "q": "22.", "options": ["constructive", "construction", "constructively", "construct"], "answer": 0 },
      { "q": "23.", "options": ["milestone", "millstone", "mileage", "millimeter"], "answer": 0 },
      { "q": "24.", "options": ["aggressively", "aggressive", "aggression", "aggressor"], "answer": 1 },
      { "q": "25.", "options": ["on track", "in track", "at track", "by track"], "answer": 0 },
      { "q": "26-30. Read the following passage and choose the best answer for each blank:\n\nIn today's competitive business environment, supply chain management has become a critical factor for success. An efficient supply chain ensures that products are delivered to customers in a timely and cost-effective ______. Companies are increasingly using advanced technology, such as AI and IoT, to ______ their supply chain operations. These technologies provide real-time visibility into the entire process, from procurement of raw materials to final delivery. This allows for better inventory management, reducing both shortages and excess stock. Furthermore, a resilient supply chain is crucial for ______ with unexpected disruptions, such as natural disasters or geopolitical events. Therefore, businesses must ______ invest in building robust and agile supply chain networks to maintain a competitive ______. \n\n26.", "options": ["manner", "manor", "mannequin", "manual"], "answer": 0 },
      { "q": "27.", "options": ["optimal", "optimally", "optimism", "optimize"], "answer": 3 },
      { "q": "28.", "options": ["cope", "coping", "coped", "copes"], "answer": 1 },
      { "q": "29.", "options": ["strategy", "strategic", "strategically", "strategist"], "answer": 2 },
      { "q": "30.", "options": ["rim", "edge", "border", "fringe"], "answer": 1 },
      { "q": "31-33. Read the following notice and answer the questions:\n\nAttention All Tenants of the Northwood Business Center:\n\nPlease be advised that the main elevators will be out of service for scheduled maintenance from 9:00 AM on Monday, August 10, to 5:00 PM on Wednesday, August 12. During this period, only the service elevator at the rear of the building will be operational. We recommend that you use the stairs if possible and allow for extra time when entering and leaving the building. We apologize for any inconvenience this may cause and appreciate your understanding as we work to ensure the safety and reliability of our facilities.\n\n31. What is the purpose of this notice?", "options": ["To announce the opening of new elevators", "To inform tenants about a rent increase", "To notify tenants of upcoming elevator maintenance", "To ask for volunteers for a safety committee"], "answer": 2 },
      { "q": "32. When will the maintenance be completed?", "options": ["Monday, August 10, at 9:00 AM", "Monday, August 10, at 5:00 PM", "Wednesday, August 12, at 9:00 AM", "Wednesday, August 12, at 5:00 PM"], "answer": 3 },
      { "q": "33. What are tenants advised to do during the maintenance period?", "options": ["Work from home", "Use the main elevators with caution", "Use the service elevator or stairs", "Park in a different location"], "answer": 2 },
      { "q": "34-36. Read the following article and answer the questions:\n\nCorporate wellness programs are increasingly being recognized as a vital tool for improving employee health and productivity. These programs can range from on-site fitness centers and health screenings to workshops on stress management and nutrition. Studies have shown that a healthy workforce is a more productive one. Employees who participate in wellness programs tend to have lower rates of absenteeism and are more engaged in their work. From a financial perspective, the investment in these programs can lead to significant savings in healthcare costs for the company. While the initial outlay can be substantial, the long-term return on investment is often compelling.\n\n34. What is the main benefit of corporate wellness programs for companies?", "options": ["They are inexpensive to implement", "They improve employee health and productivity", "They are a legal requirement", "They reduce the need for managers"], "answer": 1 },
      { "q": "35. What do studies show about employees who participate in wellness programs?", "options": ["They work longer hours", "They have lower rates of absenteeism", "They are more likely to be promoted", "They rarely take vacations"], "answer": 1 },
      { "q": "36. What does the article say about the cost of wellness programs?", "options": ["They are always free for the company", "The initial cost can be high, but there is a long-term return", "The cost always outweighs the benefits", "The costs are primarily covered by employees"], "answer": 1 },
      { "q": "37-39. Read the following email and answer the questions:\n\nTo: Sarah Jenkins <s.jenkins@innovate.com>\nFrom: Mark Foster <m.foster@innovate.com>\nSubject: Project Alpha - Preliminary Budget\n\nHi Sarah,\n\nI've attached the preliminary budget for Project Alpha. I've broken down the costs by category, including personnel, software licensing, and marketing. Please review the figures and let me know if you have any questions or concerns. I'm particularly interested in your feedback on the marketing allocation, as this is your area of expertise. We need to finalize the budget by this Friday for the steering committee meeting next week. Let's schedule a brief meeting tomorrow to discuss it.\n\nBest,\nMark\n\n37. Why did Mark Foster send the email to Sarah Jenkins?", "options": ["To ask her to lead Project Alpha", "To inform her about a new project", "To get her feedback on a preliminary budget", "To complain about the project costs"], "answer": 2 },
      { "q": "38. What specific part of the budget does Mark want Sarah to review?", "options": ["Personnel costs", "Software licensing", "The marketing allocation", "The overall total"], "answer": 2 },
      { "q": "39. What is the deadline for finalizing the budget?", "options": ["Tomorrow", "This Friday", "Next week", "There is no specific deadline"], "answer": 1 },
      { "q": "40-42. Read the following information and answer the questions:\n\nThe Omni-X1 printer is our latest model, designed for high-volume office environments. It boasts a printing speed of up to 50 pages per minute and automatic duplex printing, which helps reduce paper consumption. The intuitive touchscreen interface makes it easy to operate, and its wireless connectivity allows for printing from multiple devices, including smartphones and tablets. For a limited time, the Omni-X1 comes with a three-year extended warranty at no extra cost. This offer is valid on all purchases made before October 31.\n\n40. Who is the target user for the Omni-X1 printer?", "options": ["Home users", "Students", "High-volume office environments", "Professional photographers"], "answer": 2 },
      { "q": "41. What feature helps reduce paper usage?", "options": ["High printing speed", "Wireless connectivity", "Automatic duplex printing", "The touchscreen interface"], "answer": 2 },
      { "q": "42. What special offer is available for the Omni-X1?", "options": ["A discounted price", "A free supply of ink", "Free installation", "A three-year extended warranty"], "answer": 3 },
      { "q": "43-45. Read the following text and answer the questions:\n\nCloud computing has revolutionized the way businesses operate by providing on-demand access to computing resources over the internet. Instead of owning and maintaining their own IT infrastructure, companies can use services from a cloud provider. This offers several advantages, including cost savings, scalability, and flexibility. Businesses can scale their resources up or down based on demand, paying only for what they use. However, there are also challenges to consider, most notably data security and privacy. Entrusting sensitive company data to a third-party provider requires careful consideration and robust security measures.\n\n43. What is the main topic of the text?", "options": ["The history of the internet", "The pros and cons of cloud computing", "How to become a cloud provider", "The dangers of storing data online"], "answer": 1 },
      { "q": "44. What is a key advantage of cloud computing mentioned in the text?", "options": ["It guarantees complete data security", "It eliminates the need for the internet", "It offers scalability and cost savings", "It is only suitable for large corporations"], "answer": 2 },
      { "q": "45. What is a major challenge associated with cloud computing?", "options": ["Slow performance", "Limited access", "Data security and privacy concerns", "High initial investment costs"], "answer": 2 }
    ]
  },
  "FULL TEST #8": {
    "title": "FULL TEST #8: Đề tổng hợp Giai đoạn 3 (TOEIC 650-750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. Under no circumstances ______ employees share their network passwords with anyone.", "options": ["should", "can", "will", "do"], "answer": 0 },
      { "q": "2. The company is seeking a candidate ______ a proven track record in international sales.", "options": ["with", "of", "has", "who"], "answer": 0 },
      { "q": "3. ______ the merger to be successful, both companies must integrate their corporate cultures.", "options": ["If", "For", "Should", "In order"], "answer": 1 },
      { "q": "4. The CEO gave a presentation ______ the company's performance over the last quarter.", "options": ["detailing", "detailed", "details", "to detail"], "answer": 0 },
      { "q": "5. The new software is not ______ with older operating systems.", "options": ["conforming", "compatible", "complaining", "compelling"], "answer": 1 },
      { "q": "6. The more the team practiced, ______ their performance became.", "options": ["the most polished", "the polished", "more polished", "the more polished"], "answer": 3 },
      { "q": "7. It is essential that the equipment ______ inspected regularly.", "options": ["is", "was", "be", "has been"], "answer": 2 },
      { "q": "8. The company decided to ______ production to a new facility to meet growing demand.", "options": ["relocate", "relocating", "relocated", "relocation"], "answer": 0 },
      { "q": "9. ______ a lack of funding, the research project has been indefinitely postponed.", "options": ["As a result", "However", "Owing to", "Therefore"], "answer": 2 },
      { "q": "10. The consultant's recommendations were ______ in improving efficiency.", "options": ["instrument", "instrumental", "instrumentally", "instrumentation"], "answer": 1 },
      { "q": "11. The manager had his assistant ______ the meeting minutes.", "options": ["to distribute", "distributing", "distribute", "distributed"], "answer": 2 },
      { "q": "12. The final version of the report must be submitted for ______ by Friday.", "options": ["review", "reviewing", "reviewed", "reviews"], "answer": 0 },
      { "q": "13. ______ he was highly qualified for the position, he was not selected for an interview.", "options": ["Despite", "Nevertheless", "Although", "In spite of"], "answer": 2 },
      { "q": "14. The recent marketing campaign resulted in a ______ increase in brand awareness.", "options": ["substance", "substantial", "substantially", "substantiate"], "answer": 1 },
      { "q": "15. Employees are reminded ______ all safety procedures at all times.", "options": ["to follow", "following", "follow", "followed"], "answer": 0 },
      { "q": "16. The R&D department is on the ______ of a major breakthrough.", "options": ["edge", "verge", "side", "point"], "answer": 1 },
      { "q": "17. The views expressed in this article are solely those of the author and do not ______ reflect the views of the publisher.", "options": ["necessary", "necessitate", "necessarily", "necessity"], "answer": 2 },
      { "q": "18. The aim of the training is to ______ staff with the skills needed for the new system.", "options": ["equip", "equipping", "equipped", "equipment"], "answer": 0 },
      { "q": "19. The success of this initiative is ______ dependent on the support of all departments.", "options": ["heavy", "heavily", "heaviness", "heavier"], "answer": 1 },
      { "q": "20. The board of directors will convene next week ______ the proposed merger.", "options": ["discussing", "to discuss", "for discussing", "discussion"], "answer": 1 },
      { "q": "21-25. Read the following email and choose the best answer for each blank:\n\nTo: Department Heads\nFrom: HR Department\nSubject: Annual Performance Review Cycle\n\nThis is a reminder that the annual performance review cycle is now underway. It is ______ that all managers schedule one-on-one meetings with their direct reports to discuss their performance over the past year. Please use the standardized forms available on the company intranet. The purpose of these reviews is not only to evaluate past performance but also to set ______ goals for the coming year. We encourage you to have an open and ______ dialogue with your team members. Completed review forms must be submitted to the HR department no later than October 31. Your ______ in this process is vital for employee development and overall company success.\n\n21.", "options": ["mandate", "mandating", "mandatory", "mandated"], "answer": 2 },
      { "q": "22.", "options": ["achieve", "achieving", "achievable", "achievement"], "answer": 2 },
      { "q": "23.", "options": ["constructive", "construction", "constructed", "constructively"], "answer": 0 },
      { "q": "24.", "options": ["cooperate", "cooperation", "cooperative", "cooperated"], "answer": 1 },
      { "q": "25.", "options": ["timely", "timed", "timing", "time"], "answer": 0 },
      { "q": "26-30. Read the following passage and choose the best answer for each blank:\n\nThe concept of a 'circular economy' is gaining traction as a sustainable alternative to the traditional linear model of 'take, make, dispose.' This new model focuses on designing products for durability, reuse, and recyclability. The ______ goal is to eliminate waste and keep resources in use for as long as possible. Businesses are beginning to recognize the economic ______ of this approach. By redesigning their products and processes, companies can reduce their reliance on virgin materials, which can be both costly and environmentally damaging. Adopting circular principles also opens up new markets for repair, refurbishment, and remanufacturing services. The transition requires significant innovation and ______ across the entire value chain, but the potential benefits for both the environment and the economy are ______.\n\n26.", "options": ["ultimate", "ultimatum", "ultimately", "ulterior"], "answer": 0 },
      { "q": "27.", "options": ["benefits", "beneficial", "beneficiary", "beneficence"], "answer": 0 },
      { "q": "28.", "options": ["collaborate", "collaborator", "collaborative", "collaboration"], "answer": 3 },
      { "q": "29.", "options": ["immense", "immensely", "immensity", "immersion"], "answer": 0 },
      { "q": "30.", "options": ["investment", "investing", "invested", "investor"], "answer": 0 },
      { "q": "31-33. Read the following memo and answer the questions:\n\nMEMORANDUM\nTo: All Marketing Department Staff\nFrom: Jane Doe, Marketing Director\nDate: September 5, 2025\nSubject: Restructuring of the Digital Marketing Team\n\nTo better align our strategies with the evolving digital landscape, we will be restructuring the digital marketing team, effective October 1. The team will be organized into three core units: Content & SEO, Social Media & Community Management, and Digital Advertising & Analytics. This new structure is designed to foster greater specialization and improve the efficiency of our campaigns. Team members will be assigned to a primary unit based on their skills and career interests. A detailed organizational chart and a description of the new roles will be distributed by the end of this week. I am confident that this change will enhance our capabilities and position us for future growth.\n\n31. What is the reason for the restructuring?", "options": ["To reduce the size of the department", "To cut costs", "To align strategies with the digital landscape", "To prepare for a new product launch"], "answer": 2 },
      { "q": "32. When will the new structure take effect?", "options": ["September 5", "By the end of the week", "October 1", "Immediately"], "answer": 2 },
      { "q": "33. How will employees be assigned to the new units?", "options": ["Randomly", "Based on seniority", "Based on their skills and interests", "By their previous manager"], "answer": 2 },
      { "q": "34-36. Read the following passage and answer the questions:\n\nAgile methodology is a project management approach that emphasizes iterative development and collaboration. Originally developed for software development, its principles are now being applied to a wide range of industries. Unlike traditional 'waterfall' models, where a project is completed in a linear sequence of stages, Agile works in small, incremental cycles called 'sprints'. This allows for greater flexibility and adaptability, as teams can respond to changes and feedback throughout the project lifecycle. Key benefits include faster delivery of value, increased customer satisfaction, and improved team morale. However, successful implementation requires a significant cultural shift towards collaboration and empowerment.\n\n34. What is a core principle of Agile methodology?", "options": ["Strict, linear planning", "Iterative development", "Minimal customer involvement", "Individual work over teamwork"], "answer": 1 },
      { "q": "35. What is a 'sprint' in the context of Agile?", "options": ["A final project report", "A long planning phase", "A small, incremental work cycle", "A type of software"], "answer": 2 },
      { "q": "36. What is required for the successful implementation of Agile?", "options": ["More managers", "Less customer feedback", "A cultural shift towards collaboration", "A larger budget"], "answer": 2 },
      { "q": "37-39. Read the following advertisement and answer the questions:\n\nJoin us for the 5th Annual Global Innovators Conference, a premier event for leaders in technology and business. This three-day conference will be held from November 10-12 at the Grand Metropol Convention Center. The agenda features over 50 sessions, including keynote addresses from industry pioneers, interactive workshops, and networking events. Topics will cover the latest trends in artificial intelligence, sustainable technology, and the future of work. Register before September 30 to receive the early-bird discount of 20% off the standard registration fee. Visit our website for the full agenda and registration details.\n\n37. What is the purpose of this advertisement?", "options": ["To recruit employees for a tech company", "To promote a conference", "To sell a new software product", "To announce a company merger"], "answer": 1 },
      { "q": "38. What is one of the topics that will be covered at the conference?", "options": ["Historical business practices", "The future of work", "Marketing 101", "Accounting regulations"], "answer": 1 },
      { "q": "39. How can someone get a discount on the registration fee?", "options": ["By being a keynote speaker", "By registering on the day of the event", "By registering before September 30", "By attending all three days"], "answer": 2 },
      { "q": "40-42. Read the following article excerpt and answer the questions:\n\nIn an effort to improve urban mobility and reduce congestion, the city of Northgate has announced a new bike-sharing program set to launch next spring. The program will feature 500 bicycles available at 50 stations strategically located near public transport hubs and major commercial areas. Users can rent a bike using a smartphone app for short-term use. Mayor Jenkins stated, 'This initiative is a key part of our strategy to create a more sustainable and livable city. We believe it will provide a convenient and environmentally friendly transportation option for both residents and visitors.'\n\n40. What is the main goal of the new bike-sharing program?", "options": ["To increase tourism", "To generate revenue for the city", "To improve urban mobility and reduce congestion", "To create jobs in the bicycle industry"], "answer": 2 },
      { "q": "41. How will users be able to rent a bicycle?", "options": ["By paying with cash at the station", "By calling a hotline", "By using a smartphone app", "By purchasing a monthly pass"], "answer": 2 },
      { "q": "42. Who is the program intended for?", "options": ["Only city residents", "Only tourists", "Both residents and visitors", "Only city employees"], "answer": 2 },
      { "q": "43-45. Read the following policy statement and answer the questions:\n\nOur company is committed to protecting the privacy of our customers. The data we collect is used exclusively to enhance the customer experience and improve our services. We do not sell or rent personal information to third parties for marketing purposes. Access to customer data is strictly limited to authorized personnel who require it for their job functions. We employ industry-standard security measures, including encryption and firewalls, to protect against unauthorized access. Customers have the right to review and request corrections to their personal information held by us.\n\n43. What does the company use customer data for?", "options": ["To sell to other companies", "To enhance customer experience and services", "For public research", "To create advertisements for other products"], "answer": 1 },
      { "q": "44. What is the company's policy on sharing personal information?", "options": ["It is sold to the highest bidder", "It is shared with partner companies", "It is not sold or rented for marketing purposes", "It is publicly available"], "answer": 2 },
      { "q": "45. What right do customers have regarding their data?", "options": ["The right to delete all their data", "The right to sell their own data", "The right to prevent any data collection", "The right to review and correct their information"], "answer": 3 }
    ]
  },
  "FULL TEST #9": {
    "title": "FULL TEST #9: Đề tổng hợp Giai đoạn 3 (TOEIC 750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. Seldom ______ a company managed to achieve such rapid growth in a competitive market.", "options": ["is", "does", "has", "was"], "answer": 2 },
      { "q": "2. The training program is designed to familiarize new employees ______ company procedures.", "options": ["with", "to", "about", "for"], "answer": 0 },
      { "q": "3. ______ I known about the traffic, I would have left much earlier.", "options": ["If", "Should", "When", "Had"], "answer": 3 },
      { "q": "4. The manufacturer issued a recall for the product, ______ a potential safety hazard.", "options": ["citing", "cited", "to cite", "citation"], "answer": 0 },
      { "q": "5. The terms of the contract are non-______ and must be adhered to strictly.", "options": ["negotiate", "negotiable", "negotiation", "negotiator"], "answer": 1 },
      { "q": "6. The success of the project hinges ______ our ability to secure additional funding.", "options": ["on", "with", "to", "at"], "answer": 0 },
      { "q": "7. The CEO insisted that the new marketing strategy ______ implemented immediately.", "options": ["was", "is", "be", "has been"], "answer": 2 },
      { "q": "8. The company is exploring various options ______ its carbon footprint.", "options": ["to reducing", "for reduce", "to reduce", "of reducing"], "answer": 2 },
      { "q": "9. The speaker's presentation was both informative and ______, holding the audience's attention.", "options": ["engage", "engaging", "engaged", "engagement"], "answer": 1 },
      { "q": "10. The results of the study are not ______; further research is required.", "options": ["conclude", "concluding", "conclusive", "conclusion"], "answer": 2 },
      { "q": "11. The manager had the IT department ______ new security software on all computers.", "options": ["install", "to install", "installed", "installing"], "answer": 0 },
      { "q": "12. A committee has been formed to ______ the feasibility of expanding into the Asian market.", "options": ["assess", "assessing", "assessment", "assessed"], "answer": 0 },
      { "q": "13. ______ its innovative features, the product failed to gain traction with consumers.", "options": ["Although", "Despite", "However", "Because of"], "answer": 1 },
      { "q": "14. The recent policy changes have had a ______ effect on employee morale.", "options": ["detriment", "detrimentally", "detrimental", "detrimentality"], "answer": 2 },
      { "q": "15. All visitors are required ______ a security badge upon entering the building.", "options": ["displaying", "to have displayed", "to display", "display"], "answer": 2 },
      { "q": "16. The two companies have entered into a ______ alliance to develop new technologies.", "options": ["strategy", "strategist", "strategic", "strategically"], "answer": 2 },
      { "q": "17. The data is still being analyzed, but ______ results are very promising.", "options": ["preliminary", "preliminarily", "preliminaries", "preliminarity"], "answer": 0 },
      { "q": "18. The aim of the seminar is to facilitate the ______ of best practices among industry professionals.", "options": ["exchange", "exchanging", "exchanged", "to exchange"], "answer": 0 },
      { "q": "19. The company operates in ______ with all environmental regulations.", "options": ["comply", "compliant", "compliance", "complied"], "answer": 2 },
      { "q": "20. The decision ______ which supplier to choose will be made next week.", "options": ["as to", "of", "for", "in"], "answer": 0 },
      { "q": "21-25. Read the following article and choose the best answer for each blank:\n\nIn our continuous effort to enhance workplace efficiency and employee well-being, we are introducing a new flexible work arrangement policy, effective November 1. This policy will allow eligible employees to opt for a hybrid model, combining remote and in-office work. We believe this will provide greater ______ and improve work-life balance. ______ for the program will be based on job function and performance history. Detailed guidelines and application procedures will be circulated shortly. We are ______ that this initiative will lead to increased job satisfaction and productivity. We appreciate your ______ as we implement this new system.\n\n21.", "options": ["flex", "flexible", "flexing", "flexibility"], "answer": 3 },
      { "q": "22.", "options": ["Eligible", "Eligibility", "Eligibly", "Elected"], "answer": 1 },
      { "q": "23.", "options": ["confidence", "confidential", "confident", "confiding"], "answer": 2 },
      { "q": "24.", "options": ["cooperation", "cooperate", "cooperative", "cooperated"], "answer": 0 },
      { "q": "25.", "options": ["progressive", "progress", "progressing", "progression"], "answer": 0 },
      { "q": "26-30. Read the following announcement and choose the best answer for each blank:\n\nOur company has always been committed to corporate social responsibility. This year, we are launching a new ______ called 'Innovate for Good,' which will support non-profit organizations working on environmental conservation. Through this program, we will provide both financial grants and volunteer support. We are encouraging employees to get ______. A dedicated portal has been set up for employees to learn more about our partner organizations and sign up for volunteering opportunities. This initiative ______ our company's core values of community engagement and sustainability. We believe that by ______ our resources and expertise, we can make a meaningful impact. We look forward to your enthusiastic ______.\n\n26.", "options": ["initiate", "initiative", "initial", "initially"], "answer": 1 },
      { "q": "27.", "options": ["involve", "involving", "involved", "involvement"], "answer": 2 },
      { "q": "28.", "options": ["aligns with", "aligns to", "aligns by", "aligns for"], "answer": 0 },
      { "q": "29.", "options": ["lever", "leverage", "leveraging", "leveraged"], "answer": 2 },
      { "q": "30.", "options": ["participate", "participant", "participating", "participation"], "answer": 3 },
      { "q": "31-33. Read the following email and answer the questions:\n\nTo: Project Teams\nFrom: David Chen, CTO\nSubject: Implementation of a New Project Management Software\n\nTo standardize our project management processes and improve cross-departmental collaboration, we will be implementing the 'ProTask' software suite across the entire organization. The rollout will begin on November 15. ProTask will replace all existing project management tools currently in use. A comprehensive training program will be provided for all employees, with sessions scheduled throughout the first two weeks of November. It is mandatory for all project managers and team leads to attend. The IT department will be sending out separate communications with technical details and login information. We are confident this transition will enhance our project delivery capabilities.\n\n31. What is the main reason for implementing ProTask?", "options": ["To reduce the number of employees", "To standardize processes and improve collaboration", "To comply with new government regulations", "To cut software costs"], "answer": 1 },
      { "q": "32. What will happen to the old project management tools?", "options": ["They will be used alongside ProTask", "They will be archived for future reference", "They will be replaced by ProTask", "They will be upgraded"], "answer": 2 },
      { "q": "33. Who is required to attend the training?", "options": ["Only the IT department", "Only new employees", "All employees", "All project managers and team leads"], "answer": 3 },
      { "q": "34-36. Read the following article and answer the questions:\n\nBig Data analytics has become indispensable for modern businesses aiming to maintain a competitive edge. It refers to the process of examining large and varied data sets to uncover hidden patterns, unknown correlations, market trends, and customer preferences. The insights gained from this analysis can lead to more effective marketing, new revenue opportunities, and improved operational efficiency. For instance, by analyzing customer purchasing history, a company can provide personalized product recommendations. However, the effective use of Big Data requires not only powerful technology but also skilled data scientists who can interpret the data and translate the findings into actionable strategies.\n\n34. What is the primary purpose of Big Data analytics?", "options": ["To store large amounts of data", "To ensure data security", "To uncover patterns and trends in data", "To create new data"], "answer": 2 },
      { "q": "35. What is a potential business benefit of using Big Data analytics?", "options": ["Reduced need for marketing", "More effective marketing", "Lower employee salaries", "Simplified business operations"], "answer": 1 },
      { "q": "36. What is essential for the effective use of Big Data, besides technology?", "options": ["More raw data", "Skilled data scientists", "Less customer information", "Simpler algorithms"], "answer": 1 },
      { "q": "37-39. Read the following product review and answer the questions:\n\nThe new Centurion laptop is a powerhouse, clearly designed for professionals who demand high performance. Its latest-generation processor handles demanding applications with ease, and the 4K display is stunningly sharp. The keyboard is comfortable for long typing sessions, and the battery life is impressive, lasting a full workday on a single charge. The only potential drawback is its price, which is at the higher end of the market. Additionally, while its aluminum chassis feels premium, it makes the laptop slightly heavier than some of its competitors. Overall, for those who can justify the cost, the Centurion is an excellent choice that delivers on its promises.\n\n37. Who is the intended audience for the Centurion laptop?", "options": ["Students", "Gamers", "Professionals", "Casual users"], "answer": 2 },
      { "q": "38. What is mentioned as a potential downside of the laptop?", "options": ["Poor battery life", "A low-quality display", "Its high price and weight", "A slow processor"], "answer": 2 },
      { "q": "39. What is the reviewer's overall opinion of the laptop?", "options": ["It is a poor value for money", "It has too many flaws to be recommended", "It is an excellent choice for those who can afford it", "It is best suited for entertainment purposes"], "answer": 2 },
      { "q": "40-42. Read the following business report excerpt and answer the questions:\n\nFor the fiscal year ending June 30, OmniCorp reported a 15% increase in net revenue, reaching $5.2 billion. This growth was primarily driven by the strong performance of our international division, particularly in emerging markets in Asia and South America, which saw a 25% sales increase. The domestic market remained stable, with a modest 3% growth. The company's investment in research and development has also begun to pay off, with two new patented products launched this year. Looking ahead, we anticipate some headwinds due to global supply chain disruptions, but we remain optimistic about achieving our long-term growth targets.\n\n40. What was the main driver of OmniCorp's revenue growth?", "options": ["The domestic market", "Cost-cutting measures", "The performance of its international division", "A new marketing campaign"], "answer": 2 },
      { "q": "41. How did the domestic market perform?", "options": ["It grew significantly", "It declined", "It remained stable with modest growth", "It was the company's best-performing market"], "answer": 2 },
      { "q": "42. What is a potential challenge the company faces in the future?", "options": ["A lack of new products", "Declining international sales", "Global supply chain disruptions", "Increased competition in the domestic market"], "answer": 2 },
      { "q": "43-45. Read the following passage and answer the questions:\n\nThe increasing integration of Artificial Intelligence (AI) in the workplace is transforming job roles and creating a demand for new skills. While AI can automate repetitive and routine tasks, it also creates new opportunities for employees to focus on more strategic and creative work. To thrive in this new environment, workers will need to cultivate skills such as critical thinking, complex problem-solving, and emotional intelligence, which are difficult to automate. Continuous learning and upskilling will be essential for career longevity. Companies have a responsibility to support their workforce through this transition by providing training and development programs.\n\n43. What is the main effect of AI in the workplace, according to the passage?", "options": ["It is eliminating all jobs", "It is transforming job roles and skill requirements", "It is making work less strategic", "It is reducing the need for creativity"], "answer": 1 },
      { "q": "44. Which skill is NOT mentioned as being important in the age of AI?", "options": ["Critical thinking", "Data entry", "Emotional intelligence", "Complex problem-solving"], "answer": 1 },
      { "q": "45. What role should companies play in this transition?", "options": ["They should hire only AI experts", "They should resist the adoption of AI", "They should support employees through training", "They should focus only on automation"], "answer": 2 }
    ]
  },
  "FULL TEST #10": {
    "title": "FULL TEST #10: Đề tổng hợp Giai đoạn 3 (TOEIC 750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. Little ______ the team know that their project would eventually revolutionize the industry.", "options": ["did", "had", "was", "has"], "answer": 0 },
      { "q": "2. The company's new policy is ______ to fostering a more inclusive work environment.", "options": ["aimed", "directed", "geared", "set"], "answer": 2 },
      { "q": "3. The contract is ______ upon the successful completion of a feasibility study.", "options": ["contingent", "depending", "reliable", "subject"], "answer": 0 },
      { "q": "4. The CEO's speech was followed by a reception, ______ attendees the opportunity to network.", "options": ["afforded", "affording", "to afford", "affords"], "answer": 1 },
      { "q": "5. The ______ of the two companies is expected to create a market leader.", "options": ["merge", "merging", "merged", "merger"], "answer": 3 },
      { "q": "6. The consultant's advice proved ______ in resolving the complex issue.", "options": ["value", "valuable", "valuation", "valuably"], "answer": 1 },
      { "q": "7. The committee recommended that the budget ______ revised to account for inflation.", "options": ["is", "was", "has been", "be"], "answer": 3 },
      { "q": "8. All employees must ______ to the company's code of conduct.", "options": ["adhere", "comply", "abide", "follow"], "answer": 0 },
      { "q": "9. The product's failure was ______ attributed to a poor marketing strategy.", "options": ["large", "largely", "larger", "largest"], "answer": 1 },
      { "q": "10. The new system, ______ its complexity, is expected to significantly improve efficiency.", "options": ["despite", "although", "even though", "because of"], "answer": 0 },
      { "q": "11. The director had the report ______ and distributed before the board meeting.", "options": ["summarize", "to summarize", "summarized", "summarizing"], "answer": 2 },
      { "q": "12. The ______ of a new quality control system has led to a reduction in product defects.", "options": ["implement", "implementing", "implementation", "implemented"], "answer": 2 },
      { "q": "13. ______ you require further assistance, please do not hesitate to contact customer support.", "options": ["Should", "If", "Unless", "Whether"], "answer": 0 },
      { "q": "14. The recent economic downturn has had a ______ impact on the construction industry.", "options": ["profound", "profoundly", "profundity", "profoundness"], "answer": 0 },
      { "q": "15. The purpose of the meeting is to ______ a consensus on the next course of action.", "options": ["reach", "reaching", "to have reached", "reached"], "answer": 0 },
      { "q": "16. The team's success can be ascribed ______ their unwavering commitment and hard work.", "options": ["with", "for", "to", "by"], "answer": 2 },
      { "q": "17. The findings of the investigation were made ______ to the public.", "options": ["available", "availably", "availability", "avail"], "answer": 0 },
      { "q": "18. The company is taking proactive steps to ______ its environmental responsibilities.", "options": ["fulfill", "fulfilling", "fulfillment", "fulfilled"], "answer": 0 },
      { "q": "19. ______ all the candidates, Ms. Chen is the most qualified for the position.", "options": ["From", "In", "With", "Of"], "answer": 3 },
      { "q": "20. The more ______ a brand becomes, the more it needs to protect its reputation.", "options": ["prominent", "prominently", "prominence", "prominences"], "answer": 0 },
      { "q": "21-25. Read the following notice and choose the best answer for each blank:\n\nAs part of our commitment to continuous improvement, the IT department will be conducting a major network ______ this weekend. This is necessary to enhance system security and performance. The work is scheduled to begin at 10:00 PM on Friday and is expected to be completed by 6:00 AM on Monday. During this period, access to all network services, including email and the company intranet, will be ______. We understand this may cause some ______ and have chosen a time that should minimize the impact on business operations. We appreciate your patience and ______ as we work to improve our infrastructure.\n\n21.", "options": ["uphold", "upgrade", "upheaval", "upward"], "answer": 1 },
      { "q": "22.", "options": ["intermittent", "intermittently", "intermission", "interrupted"], "answer": 0 },
      { "q": "23.", "options": ["inconvenience", "inconvenient", "inconveniently", "inconveniencing"], "answer": 0 },
      { "q": "24.", "options": ["understand", "understanding", "understood", "understandable"], "answer": 1 },
      { "q": "25.", "options": ["important", "importantly", "importance", "import"], "answer": 0 },
      { "q": "26-30. Read the following passage and choose the best answer for each blank:\n\nGlobalization has profoundly reshaped the business landscape, creating both opportunities and challenges. Companies now have access to a global market, but they also face ______ competition. To succeed, businesses must be agile and culturally ______. Understanding local market nuances is no longer optional but a ______ for international expansion. Effective cross-cultural communication is also paramount to building strong relationships with international partners and customers. Furthermore, managing global supply chains requires a high degree of ______ and risk management. Companies that can ______ navigate this complex environment are the ones that will thrive in the global economy.\n\n26.", "options": ["intense", "intensify", "intensity", "intensively"], "answer": 0 },
      { "q": "27.", "options": ["sense", "sensible", "sensitive", "sensory"], "answer": 2 },
      { "q": "28.", "options": ["prerequisite", "prerecorded", "prescribed", "prerogative"], "answer": 0 },
      { "q": "29.", "options": ["sophisticate", "sophistication", "sophisticated", "sophist"], "answer": 1 },
      { "q": "30.", "options": ["effective", "effectively", "effectiveness", "effect"], "answer": 1 },
      { "q": "31-33. Read the following business letter excerpt and answer the questions:\n\nDear Mr. Hayes,\n\nThank you for your inquiry regarding the establishment of a corporate account with us. We have reviewed your company's application and are pleased to inform you that it has been approved. We offer our corporate clients a range of benefits, including preferential pricing, a dedicated account manager, and customized billing options. Your dedicated account manager will be Ms. Eleanor Vance, who will contact you within the next 48 hours to discuss your specific needs and finalize the account setup. We are confident that we can provide the level of service and quality that your business requires.\n\n31. What is the main purpose of this letter?", "options": ["To request payment for an overdue invoice", "To reject a job application", "To approve an application for a corporate account", "To advertise a new product"], "answer": 2 },
      { "q": "32. Which of the following is NOT mentioned as a benefit for corporate clients?", "options": ["Preferential pricing", "A dedicated account manager", "Free shipping on all orders", "Customized billing options"], "answer": 2 },
      { "q": "33. What will happen next?", "options": ["Mr. Hayes needs to submit a new application", "Ms. Eleanor Vance will contact Mr. Hayes", "Mr. Hayes must visit the company's headquarters", "The account will be activated immediately"], "answer": 1 },
      { "q": "34-36. Read the following article and answer the questions:\n\nThe concept of 'disruptive innovation' describes a process by which a smaller company with fewer resources is able to successfully challenge established incumbent businesses. This occurs when incumbents focus on improving their products and services for their most demanding (and usually most profitable) customers, exceeding the needs of some segments and ignoring the needs of others. Entrants that prove disruptive begin by successfully targeting those overlooked segments, gaining a foothold by delivering a more-suitable functionality, frequently at a lower price. Incumbents, chasing higher profitability in more-demanding segments, tend not to respond vigorously. Then, the new entrant moves upmarket, delivering the performance that mainstream customers require, while preserving the advantages that drove its early success.\n\n34. How do disruptive entrants typically gain a foothold in the market?", "options": ["By creating the most technologically advanced product", "By targeting overlooked customer segments", "By acquiring the incumbent businesses", "By launching expensive marketing campaigns"], "answer": 1 },
      { "q": "35. Why do established businesses often fail to respond to disruptive entrants?", "options": ["They lack the necessary technology", "They are focused on more profitable, high-end market segments", "They are not aware of the new entrants", "They are restricted by government regulations"], "answer": 1 },
      { "q": "36. What is the ultimate trajectory of a successful disruptive innovator?", "options": ["To remain a niche player", "To merge with the incumbent", "To move upmarket and challenge mainstream competitors", "To lower the quality of their product"], "answer": 2 },
      { "q": "37-39. Read the following memo and answer the questions:\n\nTo: All Employees\nFrom: Facilities Management\nSubject: Important Notice: Annual Fire Drill\n\nPlease be advised that our annual fire drill will take place next Wednesday, October 22, at approximately 10:30 AM. The alarm will sound continuously, and all personnel are required to evacuate the building immediately using the nearest emergency exit. Do not use the elevators. Please proceed to the designated assembly point in the main parking lot. Fire wardens, identifiable by their yellow vests, will be present to guide you. The purpose of this drill is to ensure that everyone is familiar with evacuation procedures in case of a real emergency. Your full cooperation is mandatory.\n\n37. What is scheduled to happen on October 22?", "options": ["A company-wide holiday", "A training seminar", "An annual fire drill", "An office renovation"], "answer": 2 },
      { "q": "38. What should employees do when the alarm sounds?", "options": ["Continue working", "Call the fire department", "Evacuate using the stairs", "Wait for instructions from their manager"], "answer": 2 },
      { "q": "39. Where is the designated assembly point?", "options": ["In the building lobby", "Across the street", "In the main parking lot", "At a nearby park"], "answer": 2 },
      { "q": "40-42. Read the following passage and answer the questions:\n\nEmotional intelligence (EI) is increasingly seen as a critical skill for effective leadership. It encompasses the ability to recognize and understand one's own emotions and those of others, and to use this awareness to manage behavior and relationships. Leaders with high EI are better equipped to handle stress, communicate effectively, and motivate their teams. They tend to be more empathetic and are skilled at resolving conflicts. Unlike IQ, which is largely static, emotional intelligence can be developed and enhanced over time through self-awareness, practice, and feedback. Companies are now incorporating EI assessments into their hiring and leadership development programs.\n\n40. What is emotional intelligence?", "options": ["The ability to solve complex mathematical problems", "A fixed trait that cannot be changed", "The ability to understand and manage emotions", "A measure of one's popularity"], "answer": 2 },
      { "q": "41. According to the passage, how do leaders with high EI benefit a company?", "options": ["They are better at technical tasks", "They work longer hours", "They are better at motivating teams and resolving conflicts", "They are less likely to take risks"], "answer": 2 },
      { "q": "42. What is a key difference between IQ and EI mentioned in the passage?", "options": ["EI is more important than IQ for all jobs", "IQ can be developed, while EI cannot", "EI can be developed, while IQ is largely static", "Only leaders need to have high EI"], "answer": 2 },
      { "q": "43-45. Read the following announcement and answer the questions:\n\nWestwood City Library is pleased to announce the launch of our new 'Digital Archive Project.' Thanks to a generous grant from the Heritage Foundation, we have begun the process of digitizing our entire collection of historical photographs and local newspapers dating back to the 19th century. This will ensure the preservation of these invaluable materials for future generations and make them accessible to researchers and the public worldwide via our website. The project is expected to take two years to complete. We are currently seeking volunteers with an interest in local history to assist with scanning and cataloging. No prior experience is necessary, as all training will be provided.\n\n43. What is the 'Digital Archive Project'?", "options": ["A project to build a new library", "A project to digitize historical materials", "A fundraising campaign for the library", "A project to purchase new books"], "answer": 1 },
      { "q": "44. What is a primary goal of this project?", "options": ["To sell the historical materials", "To make the materials accessible online", "To restrict access to professional researchers only", "To display the materials in a new exhibit"], "answer": 1 },
      { "q": "45. What is the library currently looking for?", "options": ["Financial donations", "Professional archivists", "New historical materials", "Volunteers to help with the project"], "answer": 3 }
    ]
  },
  "FULL TEST #11": {
    "title": "FULL TEST #11: Đề tổng hợp Giai đoạn 3 (TOEIC 750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. On no account ______ the confidential information in this document be disclosed to third parties.", "options": ["can", "will", "does", "has"], "answer": 0 },
      { "q": "2. The success of our marketing campaign is largely ______ on understanding our target audience.", "options": ["dependent", "depended", "depending", "depend"], "answer": 0 },
      { "q": "3. But for the chief engineer's expertise, the project ______ a complete failure.", "options": ["would be", "will be", "would have been", "is"], "answer": 2 },
      { "q": "4. The company has a strict policy ______ harassment in the workplace.", "options": ["against", "for", "with", "about"], "answer": 0 },
      { "q": "5. The ______ of the new production line will significantly increase our output capacity.", "options": ["installation", "installing", "install", "installed"], "answer": 0 },
      { "q": "6. The more an employee feels valued, the ______ their productivity tends to be.", "options": ["high", "higher", "highest", "highly"], "answer": 1 },
      { "q": "7. The agreement stipulates that all disputes ______ resolved through mediation.", "options": ["are", "be", "were", "have been"], "answer": 1 },
      { "q": "8. The firm was contracted ______ a comprehensive market analysis.", "options": ["to conducting", "conduct", "to conduct", "for conduction"], "answer": 2 },
      { "q": "9. ______ the economic slowdown, the company managed to post a profit.", "options": ["Even though", "In spite of", "However", "Because of"], "answer": 1 },
      { "q": "10. Her ability to analyze complex data is truly ______.", "options": ["remark", "remarkable", "remarkably", "remarked"], "answer": 1 },
      { "q": "11. The CEO had the legal team ______ the contract before it was signed.", "options": ["review", "to review", "reviewed", "reviewing"], "answer": 0 },
      { "q": "12. A ______ review of the safety procedures is conducted annually.", "options": ["comprehend", "comprehensive", "comprehensively", "comprehension"], "answer": 1 },
      { "q": "13. ______ you to change your mind, please inform us at your earliest convenience.", "options": ["If", "Unless", "Were", "Had"], "answer": 2 },
      { "q": "14. The recent changes in management are expected to have a ______ effect on the company culture.", "options": ["signify", "significant", "significantly", "significance"], "answer": 1 },
      { "q": "15. All personnel are expected to ______ themselves with the new software.", "options": ["familiar", "familiarity", "familiarize", "familiarly"], "answer": 2 },
      { "q": "16. The launch of the new product was ______ with a massive advertising campaign.", "options": ["coincided", "coinciding", "coincidence", "coincident"], "answer": 0 },
      { "q": "17. The report highlights the ______ of investing in renewable energy sources.", "options": ["imperative", "imperatively", "imperativeness", "imperials"], "answer": 0 },
      { "q": "18. The company is committed to ______ its operations in a sustainable manner.", "options": ["conduct", "conducting", "conducted", "conduction"], "answer": 1 },
      { "q": "19. The two departments must work in ______ to ensure the project's success.", "options": ["tandem", "parallel", "conjunction", "collaboration"], "answer": 0 },
      { "q": "20. The final decision as to ______ will lead the new team has not yet been made.", "options": ["who", "whom", "whose", "which"], "answer": 0 },
      { "q": "21-25. Read the following memo and choose the best answer for each blank:\n\nTo: All Staff\nFrom: The Management\nSubject: Adherence to New Data Security Protocols\n\nThis memo serves as a critical reminder regarding the new data security protocols that were implemented last month. It is ______ that all employees adhere strictly to these guidelines to safeguard sensitive company and client information. We have noticed some ______ in following the new procedures, particularly concerning password complexity and data encryption. Non-compliance with these protocols poses a serious risk and will result in ______ action. Mandatory refresher training sessions will be scheduled for all departments next week. Your full ______ is not just expected but required to protect our collective assets.\n\n21.", "options": ["imperative", "imperatively", "imperial", "imperious"], "answer": 0 },
      { "q": "22.", "options": ["laxity", "lax", "laxly", "laxative"], "answer": 0 },
      { "q": "23.", "options": ["discipline", "disciplined", "disciplinary", "disciplining"], "answer": 2 },
      { "q": "24.", "options": ["cooperation", "cooperate", "cooperative", "cooperated"], "answer": 0 },
      { "q": "25.", "options": ["utmost", "utter", "ultimate", "absolute"], "answer": 0 },
      { "q": "26-30. Read the following article excerpt and choose the best answer for each blank:\n\nThe business world is undergoing a digital ______, a fundamental change in how companies operate and deliver value. This is not merely about adopting new technology; it is a cultural shift that requires organizations to challenge the status quo and experiment. Companies must become more agile and customer-centric in their ______. The ______ of data analytics is central to this process, enabling businesses to make data-driven decisions. However, this transformation is not without its hurdles. Overcoming resistance to change and bridging the skills gap are ______ challenges that leadership must address ______. The organizations that successfully navigate this transformation will be the leaders of tomorrow.\n\n26.", "options": ["transform", "transforming", "transformation", "transformative"], "answer": 2 },
      { "q": "27.", "options": ["approach", "approaching", "approachable", "approaches"], "answer": 3 },
      { "q": "28.", "options": ["integration", "integrate", "integrating", "integral"], "answer": 0 },
      { "q": "29.", "options": ["significant", "significantly", "significance", "signify"], "answer": 0 },
      { "q": "30.", "options": ["proactive", "proaction", "proactively", "proactiveness"], "answer": 2 },
      { "q": "31-33. Read the following job advertisement and answer the questions:\n\nPosition: Senior Financial Analyst\n\nInnovatech Solutions is seeking a highly analytical and detail-oriented Senior Financial Analyst to join our dynamic finance team. The successful candidate will be responsible for a wide range of duties, including financial forecasting, budgeting, variance analysis, and the preparation of management reports. This role requires the ability to provide insightful financial analysis to support strategic decision-making. The ideal candidate will possess a degree in Finance or Accounting, a minimum of five years of relevant experience, and advanced proficiency in Excel and financial modeling software. A professional designation such as CPA or CFA is highly desirable but not mandatory. We offer a competitive compensation package and significant opportunities for career advancement.\n\n31. What is a key responsibility of the Senior Financial Analyst?", "options": ["Marketing new products", "Managing the IT department", "Financial forecasting and budgeting", "Recruiting new employees"], "answer": 2 },
      { "q": "32. What is a required qualification for this position?", "options": ["A degree in marketing", "At least five years of relevant experience", "Beginner-level Excel skills", "A mandatory CFA designation"], "answer": 1 },
      { "q": "33. What does the term 'highly desirable' imply regarding the CPA or CFA designation?", "options": ["It is a strict requirement.", "It is preferred but not essential.", "It is irrelevant to the position.", "Candidates without it will not be considered."], "answer": 1 },
      { "q": "34-36. Read the following policy excerpt and answer the questions:\n\nThis company is an equal opportunity employer. We are committed to providing a work environment that is free of discrimination and harassment. All employment decisions at our company are based on business needs, job requirements, and individual qualifications, without regard to race, color, religion, gender, national origin, age, disability, or any other status protected by the laws or regulations in the locations where we operate. We will not tolerate any form of discrimination or harassment and will take affirmative action to ensure equal opportunity in all our employment practices.\n\n34. On what basis are employment decisions made at this company?", "options": ["Personal relationships", "Business needs and individual qualifications", "Race, color, or religion", "The preferences of the hiring manager"], "answer": 1 },
      { "q": "35. What is the company's stance on discrimination?", "options": ["It is allowed in some circumstances.", "It is not tolerated.", "It is ignored.", "It is handled by individual departments."], "answer": 1 },
      { "q": "36. What does 'equal opportunity employer' mean?", "options": ["Everyone who applies gets a job.", "The company gives preference to certain groups.", "The company makes employment decisions without discrimination.", "The company only hires from specific locations."], "answer": 2 },
      { "q": "37-39. Read the following email and answer the questions:\n\nTo: Conference Attendees\nFrom: Event Organizers\nSubject: Post-Conference Survey and Materials\n\nDear Attendee,\n\nThank you for attending the 2025 Innovate Forward Conference. We hope you found the event both insightful and valuable. To help us improve future events, we would be grateful if you could take a few minutes to complete our online survey. Your feedback is extremely important to us. The survey can be accessed here: [link]. Furthermore, as promised, presentation slides and recordings of the keynote sessions are now available on the conference portal. You can log in using the same credentials you used during the event. We look forward to seeing you again next year.\n\n37. What is the primary purpose of this email?", "options": ["To sell tickets for next year's conference", "To request feedback and provide access to materials", "To issue refunds to attendees", "To announce the winners of a competition"], "answer": 1 },
      { "q": "38. How can attendees access the presentation slides?", "options": ["They will be mailed to them.", "By requesting them from the speakers.", "By logging into the conference portal.", "They are attached to the email."], "answer": 2 },
      { "q": "39. Why are the organizers asking attendees to complete a survey?", "options": ["To enter them into a prize draw", "To gather their personal information for marketing", "To help improve future conferences", "To test their knowledge of the conference topics"], "answer": 2 },
      { "q": "40-42. Read the following article and answer the questions:\n\nThe proliferation of remote work has led many companies to reconsider their approach to team building and maintaining corporate culture. When employees are not physically in the same space, fostering a sense of community and shared purpose becomes more challenging, yet also more critical. Spontaneous 'water cooler' conversations are replaced by scheduled video calls. To counteract this, successful remote-first companies are intentional about culture. They invest in virtual team-building activities, create clear communication channels, and double down on recognizing employee contributions. The focus shifts from measuring presence to measuring performance and results, requiring a high degree of trust between managers and their teams.\n\n40. What is a major challenge for companies with remote workforces?", "options": ["A decrease in productivity", "An increase in operational costs", "Maintaining corporate culture and a sense of community", "A lack of available technology"], "answer": 2 },
      { "q": "41. What are successful remote-first companies doing to address this challenge?", "options": ["Requiring employees to turn their cameras on at all times", "Scheduling more meetings", "Being intentional about culture through virtual activities and clear communication", "Reducing employee salaries"], "answer": 2 },
      { "q": "42. In a remote work environment, what does the focus of performance measurement shift towards?", "options": ["The number of hours worked", "Physical presence in an office", "Performance and results", "Popularity with colleagues"], "answer": 2 },
      { "q": "43-45. Read the following information and answer the questions:\n\nThis warranty covers the 'Pro-Fit' ergonomic office chair for a period of five years from the date of purchase. The warranty applies to defects in materials and workmanship under normal office use. It covers the replacement of any defective parts, including the pneumatic cylinder, casters, and armrests. This warranty does not cover damage resulting from misuse, abuse, accidents, or alterations to the product. To make a claim, the original purchaser must present the original sales receipt. The company reserves the right to repair or replace the defective part at its discretion. Labor costs are not covered under this warranty.\n\n43. What is the duration of the warranty?", "options": ["One year", "Two years", "Five years", "Ten years"], "answer": 2 },
      { "q": "44. What is NOT covered by the warranty?", "options": ["A defective pneumatic cylinder", "Damage from an accident", "Defective casters", "A defect in the armrest material"], "answer": 1 },
      { "q": "45. What must a customer provide to make a warranty claim?", "options": ["A photograph of the damage", "A written explanation of the problem", "The original sales receipt", "The product's original packaging"], "answer": 2 }
    ]
  },
  "FULL TEST #12": {
    "title": "FULL TEST #12: Đề tổng hợp Giai đoạn 3 (TOEIC 750+) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. No sooner had the CEO finished his speech ______ the audience erupted in applause.", "options": ["than", "then", "when", "that"], "answer": 0 },
      { "q": "2. The project's failure can be ______ a lack of adequate planning and resources.", "options": ["attributed to", "resulted in", "led by", "caused from"], "answer": 0 },
      { "q": "3. ______ the company to invest more in R&D, it could have been a market leader now.", "options": ["If", "Should", "When", "Were"], "answer": 3 },
      { "q": "4. The report provides a ______ analysis of the current market trends.", "options": ["succinct", "succinctly", "succinctness", "succeed"], "answer": 0 },
      { "q": "5. The new regulations are intended to ensure ______ with international safety standards.", "options": ["comply", "compliant", "compliance", "complied"], "answer": 2 },
      { "q": "6. The more convoluted the problem, the more ______ the solution needs to be.", "options": ["innovate", "innovative", "innovation", "innovatively"], "answer": 1 },
      { "q": "7. It is of the ______ importance that we meet the deadline.", "options": ["utmost", "ultimate", "absolute", "utter"], "answer": 0 },
      { "q": "8. The company is committed to ______ business in an ethically responsible manner.", "options": ["conducting", "conduct", "conducted", "to conduct"], "answer": 0 },
      { "q": "9. ______ a few minor setbacks, the project is progressing on schedule.", "options": ["Despite", "Although", "Nevertheless", "However"], "answer": 0 },
      { "q": "10. The changes to the workflow were implemented to ______ efficiency.", "options": ["maximize", "maximum", "maximally", "maximization"], "answer": 0 },
      { "q": "11. The manager had the presentation ______ by the most experienced team member.", "options": ["create", "to create", "created", "creating"], "answer": 2 },
      { "q": "12. The ______ of artificial intelligence is expected to transform many industries.", "options": ["advent", "adventure", "adverse", "advice"], "answer": 0 },
      { "q": "13. ______ you encounter any issues with the software, our technical support team is available 24/7.", "options": ["Unless", "If", "Should", "Were"], "answer": 2 },
      { "q": "14. The CEO's ______ leadership was instrumental in navigating the company through the crisis.", "options": ["decide", "decision", "decisive", "decisively"], "answer": 2 },
      { "q": "15. The purpose of the workshop is to equip participants ______ the latest marketing techniques.", "options": ["of", "for", "with", "to"], "answer": 2 },
      { "q": "16. The financial projections for the next quarter are ______ optimistic.", "options": ["cautious", "cautiously", "caution", "cautiousness"], "answer": 1 },
      { "q": "17. The two firms agreed to ______ on the research project to share costs and expertise.", "options": ["collaborate", "collaboration", "collaborative", "collaborator"], "answer": 0 },
      { "q": "18. All new employees are subject to a six-month ______ period.", "options": ["probation", "probationary", "probe", "probity"], "answer": 1 },
      { "q": "19. The findings from the customer survey are ______ with our own sales data.", "options": ["consist", "consistent", "consistently", "consistency"], "answer": 1 },
      { "q": "20. The company reserves the right to ______ the terms and conditions at any time.", "options": ["amend", "amending", "amendment", "amended"], "answer": 0 },
      { "q": "21-25. Read the following email and choose the best answer for each blank:\n\nTo: Senior Management\nFrom: Legal Department\nSubject: Urgent: Compliance with New GDPR Regulations\n\nThis memo is to underscore the urgency and ______ of complying with the new General Data Protection Regulations (GDPR). These regulations impose strict rules on data handling and user consent. Failure to ______ can result in severe financial penalties. We are currently conducting a full audit of our data processing activities to identify any areas of non-compliance. It is ______ upon every department head to ensure their teams understand and implement the required changes. The legal department will be holding mandatory seminars to ______ the key aspects of the GDPR. Your full and immediate cooperation is essential.\n\n21.", "options": ["magnitude", "magnificent", "magnify", "magnet"], "answer": 0 },
      { "q": "22.", "options": ["comply", "compliant", "compliance", "complied"], "answer": 2 },
      { "q": "23.", "options": ["incumbent", "incoming", "incumbency", "incumbently"], "answer": 0 },
      { "q": "24.", "options": ["elucidate", "elusive", "elocution", "emanate"], "answer": 0 },
      { "q": "25.", "options": ["crucially", "crucialty", "crucible", "crucial"], "answer": 3 },
      { "q": "26-30. Read the following passage and choose the best answer for each blank:\n\nIn an era of rapid technological advancement, lifelong learning has transitioned from a personal development ideal to an economic ______. The shelf life of skills is shrinking, and what is relevant today may be ______ tomorrow. As a result, both individuals and organizations must embrace a culture of continuous upskilling and reskilling. Companies are increasingly investing in learning platforms and development programs to ensure their workforce remains ______. For employees, a commitment to lifelong learning enhances career ______ and adaptability. This proactive approach to skill development is no longer just beneficial; it is ______ for navigating the future of work.\n\n26.", "options": ["imperative", "imperially", "imperious", "imperial"], "answer": 0 },
      { "q": "27.", "options": ["obsolete", "obsolescence", "obstinate", "obstruct"], "answer": 0 },
      { "q": "28.", "options": ["compete", "competitive", "competition", "competitively"], "answer": 1 },
      { "q": "29.", "options": ["longevity", "longitude", "longing", "long-standing"], "answer": 0 },
      { "q": "30.", "options": ["indispensable", "indisposed", "indisputable", "indistinct"], "answer": 0 },
      { "q": "31-33. Read the following report excerpt and answer the questions:\n\nThird Quarter Performance Review: The company has demonstrated remarkable resilience in a challenging economic climate. While the domestic division experienced a marginal decline of 2% in revenue, this was more than offset by a robust 18% growth in our international operations, largely fueled by strategic acquisitions in the Southeast Asian market. Operating margins improved by 50 basis points, a direct result of stringent cost-control measures implemented at the beginning of the fiscal year. However, we must remain vigilant. Projections indicate a potential softening in global demand and continued volatility in supply chains for the upcoming quarter.\n\n31. What was the overall performance of the company in the third quarter?", "options": ["It suffered a significant loss.", "It showed resilience with overall growth.", "It broke even.", "It was entirely dependent on the domestic market."], "answer": 1 },
      { "q": "32. What was the reason for the improvement in operating margins?", "options": ["A surge in domestic sales", "Strategic acquisitions", "Strict cost-control measures", "A new marketing campaign"], "answer": 2 },
      { "q": "33. What is the company's outlook for the next quarter?", "options": ["Guaranteed growth and stability", "A focus on domestic expansion", "Cautious due to potential challenges in demand and supply chains", "An anticipated surge in domestic demand"], "answer": 2 },
      { "q": "34-36. Read the following email and answer the questions:\n\nTo: j.anderson@corporate.com\nFrom: t.roberts@logistics.com\nSubject: RE: Shipment #INV7892-Delay\n\nDear Mr. Anderson,\n\nI am writing to offer my sincerest apologies for the delay in the delivery of your recent order, #INV7892. The consignment was unfortunately held up at customs for an unscheduled inspection, a situation which was entirely beyond our control. The shipment has now been cleared and is scheduled for priority delivery tomorrow before noon. As a gesture of goodwill, we have waived all shipping charges for this order. We deeply regret any inconvenience this may have caused and are reviewing our procedures with our customs brokerage partners to mitigate the risk of such occurrences in the future.\n\n34. What is the reason for the email?", "options": ["To confirm a new order", "To request payment", "To apologize for a delivery delay", "To change a delivery address"], "answer": 2 },
      { "q": "35. What caused the delay?", "options": ["The item was out of stock.", "There was an issue with the delivery vehicle.", "The shipment was held for a customs inspection.", "The delivery address was incorrect."], "answer": 2 },
      { "q": "36. What has the company done to compensate for the inconvenience?", "options": ["Offered a discount on the next order", "Cancelled the order", "Upgraded the product", "Waived the shipping charges"], "answer": 3 },
      { "q": "37-39. Read the following passage and answer the questions:\n\nSustainable business practices are no longer a peripheral concern but are now central to corporate strategy. Beyond the ethical and environmental imperatives, sustainability offers a tangible competitive advantage. Companies that integrate sustainability into their core operations often find it drives innovation, leading to new products and more efficient processes. It can also enhance brand reputation and customer loyalty, as consumers are increasingly drawn to environmentally and socially responsible brands. Moreover, proactive management of environmental, social, and governance (ESG) factors can mitigate risks and attract investment from a growing pool of socially responsible investors.\n\n37. According to the passage, how does sustainability provide a competitive advantage?", "options": ["By increasing short-term profits", "By driving innovation and enhancing brand reputation", "By reducing the need for a large workforce", "By being a legal requirement"], "answer": 1 },
      { "q": "38. What is the trend among consumers mentioned in the passage?", "options": ["They are primarily concerned with the lowest price.", "They are increasingly loyal to responsible brands.", "They are unaware of corporate social responsibility.", "They prefer brands that do not engage in sustainability."], "answer": 1 },
      { "q": "39. What does managing ESG factors help a company to do?", "options": ["Avoid all business risks", "Mitigate risks and attract investment", "Guarantee higher stock prices", "Simplify business operations"], "answer": 1 },
      { "q": "40-42. Read the following meeting agenda and answer the questions:\n\nQuarterly Board Meeting Agenda\nDate: November 28, 2025\nTime: 9:00 AM - 1:00 PM\n\n1.  Call to Order (9:00 AM)\n2.  Approval of Previous Meeting's Minutes (9:05 AM)\n3.  Q3 Financial Performance Review - Presented by CFO (9:15 AM)\n4.  Project 'Odyssey' Update & Go/No-Go Decision - Presented by VP of Strategy (10:00 AM)\n5.  Proposed 2026 Budget Overview - Presented by CFO (11:00 AM)\n6.  Discussion of International Expansion Feasibility Study (11:45 AM)\n7.  New Business / Adjournment (12:45 PM)\n\n40. What is a key decision that needs to be made during the meeting?", "options": ["Whether to approve the previous minutes", "Whether to proceed with Project 'Odyssey'", "Whether to hire a new CFO", "Whether to change the company's name"], "answer": 1 },
      { "q": "41. Who will be presenting the financial information?", "options": ["The CEO", "The Vice President of Strategy", "The Chief Financial Officer (CFO)", "An external auditor"], "answer": 2 },
      { "q": "42. What topic is scheduled for discussion just before the meeting concludes?", "options": ["The Q3 financial performance", "The proposed budget for 2026", "The feasibility of international expansion", "New business"], "answer": 3 },
      { "q": "43-45. Read the following text and answer the questions:\n\nThe modern workplace is increasingly characterized by matrix organizational structures. In a matrix organization, employees report to both a functional manager and a project manager. The functional manager oversees aspects like professional development and administrative tasks, while the project manager is responsible for the employee's work on a specific project. This structure is designed to foster collaboration and allow for the flexible sharing of resources and expertise across projects. However, it can also create ambiguity and potential conflict due to the dual reporting lines. Clear communication and a well-defined delineation of authority are crucial for a matrix structure to function effectively.\n\n43. What is a defining feature of a matrix organization?", "options": ["Employees report to only one manager.", "It is only used in small companies.", "Employees have dual reporting lines.", "It is a very rigid and inflexible structure."], "answer": 2 },
      { "q": "44. What is a potential advantage of a matrix structure?", "options": ["It simplifies the reporting process.", "It fosters collaboration and flexible resource sharing.", "It eliminates all workplace conflicts.", "It reduces the number of managers needed."], "answer": 1 },
      { "q": "45. What is essential for a matrix structure to be effective?", "options": ["Vague job descriptions", "Less communication between managers", "Clear communication and delineation of authority", "Employees working independently of each other"], "answer": 2 }
    ]
  },
  "FINAL TEST": {
    "title": "FINAL TEST: Đề tổng hợp Nâng cao (TOEIC 750++) - Reading Only (45 câu)",
    "questions": [
      { "q": "1. Scarcely had the delegates been seated ______ the chairman began his opening remarks.", "options": ["than", "that", "when", "then"], "answer": 2 },
      { "q": "2. The memorandum delineates the protocol ______ the handling of sensitive client data.", "options": ["pertaining", "in respect of", "concerning", "appertaining to"], "answer": 2 },
      { "q": "3. ______ the board's timely intervention, the company would have faced insolvency.", "options": ["Except for", "But for", "Apart from", "Other than"], "answer": 1 },
      { "q": "4. The CEO is looking for an executive assistant who is not only proficient but also ______ in anticipating needs.", "options": ["proactive", "reactive", "inactive", "active"], "answer": 0 },
      { "q": "5. The ______ of the new fiscal policy on small businesses is yet to be fully assessed.", "options": ["ramifications", "implementations", "establishments", "foundations"], "answer": 0 },
      { "q": "6. The more ______ the terms of the contract are, the less room there is for misinterpretation.", "options": ["explicit", "implicit", "explicitness", "explicitly"], "answer": 0 },
      { "q": "7. The professor demanded that the thesis ______ submitted without further delay.", "options": ["is", "was", "be", "has been"], "answer": 2 },
      { "q": "8. The company's decision to divest its non-core assets was a ______ move to streamline operations.", "options": ["strategy", "strategist", "strategic", "strategically"], "answer": 2 },
      { "q": "9. His argument, ______ cogent, failed to persuade the skeptical board members.", "options": ["nonetheless", "albeit", "whereas", "otherwise"], "answer": 1 },
      { "q": "10. The ______ of big data has enabled companies to personalize marketing to an unprecedented degree.", "options": ["outset", "advent", "event", "onset"], "answer": 1 },
      { "q": "11. The chairman had the financial statements ______ by an independent auditor.", "options": ["scrutinize", "scrutinized", "to scrutinize", "scrutinizing"], "answer": 1 },
      { "q": "12. The two companies worked in ______ to develop the groundbreaking technology.", "options": ["synergy", "sympathy", "symphony", "synchronicity"], "answer": 0 },
      { "q": "13. ______ you to reconsider your position, we are prepared to offer a more attractive package.", "options": ["Providing", "Should", "If", "Were"], "answer": 3 },
      { "q": "14. The speaker's ______ remarks on the economy were both insightful and thought-provoking.", "options": ["extemporaneous", "expedient", "explicit", "exquisite"], "answer": 0 },
      { "q": "15. The firm has built its reputation on a foundation of ______ integrity and professionalism.", "options": ["unwavering", "unwilling", "unwitting", "unwieldy"], "answer": 0 },
      { "q": "16. The market is ______ with similar products, making differentiation a key challenge.", "options": ["saturated", "satiated", "sanctioned", "sanctified"], "answer": 0 },
      { "q": "17. The new software is designed to ______ seamlessly with our existing systems.", "options": ["integrate", "disintegrate", "segregate", "aggregate"], "answer": 0 },
      { "q": "18. The negotiations reached an ______, with neither side willing to compromise.", "options": ["impact", "impetus", "impasse", "implant"], "answer": 2 },
      { "q": "19. The manager's ______ handling of the crisis prevented it from escalating.", "options": ["adept", "adopt", "adapt", "addict"], "answer": 0 },
      { "q": "20. The research aims to ______ the causal link between advertising and consumer behavior.", "options": ["elucidate", "eliminate", "emulate", "estimate"], "answer": 0 },
      { "q": "21-25. Read the following passage and choose the best answer for each blank:\n\nTo: All Department Managers\nFrom: Executive Board\nSubject: Forthcoming Organizational Restructuring\n\nThis communication is to formally apprise you of a significant organizational restructuring scheduled for implementation in the next fiscal quarter. This initiative is a strategic ______ to the evolving market dynamics and is designed to enhance operational agility and foster cross-functional synergy. Certain roles will be redefined, and new reporting structures will be established. We acknowledge that such transitions can be a source of ______, and we are committed to managing this process with transparency and empathy. A series of town hall meetings will be conducted to ______ the rationale behind these changes and address your concerns. We are confident that this restructuring will ______ position our organization for sustained, long-term success.\n\n21.", "options": ["response", "responsive", "respond", "respondent"], "answer": 0 },
      { "q": "22.", "options": ["apprehension", "apprehend", "apprehensive", "apprehensively"], "answer": 0 },
      { "q": "23.", "options": ["delineate", "delinquent", "delirious", "delegate"], "answer": 0 },
      { "q": "24.", "options": ["ultimate", "ultimatum", "ultimately", "ulterior"], "answer": 2 },
      { "q": "25.", "options": ["advantageously", "advantage", "advantages", "advantageous"], "answer": 0 },
      { "q": "26-30. Read the following article excerpt and choose the best answer for each blank:\n\nThe principles of corporate governance are fundamental to maintaining investor confidence and ensuring the long-term ______ of a company. At its core, it involves a system of rules and practices by which a company is directed and controlled. The board of directors is the primary ______ for the governance of their companies. Their responsibilities include setting the company's strategic aims and ensuring that the necessary financial and human resources are in place to meet its objectives. There is a growing consensus that good corporate governance goes beyond mere regulatory ______; it is about building a culture of integrity and accountability. Companies with robust governance frameworks are often better at managing risk and are seen as more ______ by investors.\n\n26.", "options": ["viability", "vial", "viable", "vibrancy"], "answer": 0 },
      { "q": "27.", "options": ["force", "body", "power", "entity"], "answer": 1 },
      { "q": "28.", "options": ["comply", "compliant", "compliance", "complied"], "answer": 2 },
      { "q": "29.", "options": ["attract", "attractive", "attraction", "attractively"], "answer": 1 },
      { "q": "30.", "options": ["trustworthy", "trusting", "trustee", "trustfully"], "answer": 0 },
      { "q": "31-33. Read the following passage and answer the questions:\n\nIn its latest quarterly report, Axiom Corp. disclosed that while overall revenue growth was modest at 3%, the company's profitability saw a significant uptick. The gross profit margin expanded by 200 basis points, a feat the Chief Financial Officer attributed to a successful supply chain optimization strategy and favorable commodity pricing. However, the report also issued a word of caution regarding the North American market, where increasing competition and pricing pressure from rivals are beginning to erode market share. The company plans to counteract this by accelerating its product innovation pipeline and launching a more aggressive marketing campaign in the next quarter.\n\n31. What was the primary reason for Axiom Corp.'s increased profitability?", "options": ["A large increase in overall revenue", "Expansion into new geographic markets", "Supply chain optimization and favorable commodity prices", "A decrease in the marketing budget"], "answer": 2 },
      { "q": "32. What challenge is Axiom Corp. facing in North America?", "options": ["Regulatory hurdles", "A decline in product quality", "Eroding market share due to competition", "A shortage of skilled labor"], "answer": 2 },
      { "q": "33. How does Axiom Corp. plan to address the challenge in North America?", "options": ["By reducing prices", "By acquiring a competitor", "By increasing innovation and marketing efforts", "By exiting the North American market"], "answer": 2 },
      { "q": "34-36. Read the following legal disclaimer and answer the questions:\n\nThis document and any attachments are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this communication in error, please notify the sender immediately and delete this document from your system. Any unauthorized use, dissemination, forwarding, printing, or copying of this communication is strictly prohibited. The views and opinions expressed herein do not necessarily state or reflect those of the company. The company accepts no liability for any damage caused by any virus transmitted by this email.\n\n34. What should you do if you receive this communication by mistake?", "options": ["Forward it to your supervisor", "Print it for your records", "Reply to the sender and ask for clarification", "Notify the sender and delete the document"], "answer": 3 },
      { "q": "35. What does the disclaimer say about the views expressed in the document?", "options": ["They are the official position of the company.", "They are not necessarily the company's views.", "They have been approved by the legal department.", "They must be followed by all employees."], "answer": 1 },
      { "q": "36. What is the company's position on liability for viruses?", "options": ["It accepts full liability.", "It accepts no liability.", "It shares liability with the recipient.", "Liability is determined on a case-by-case basis."], "answer": 1 },
      { "q": "37-39. Read the following article and answer the questions:\n\nThe Internet of Things (IoT) is a paradigm shift that involves embedding computing devices into everyday objects, enabling them to send and receive data. The implications for business are profound. In manufacturing, IoT sensors can predict maintenance needs, reducing downtime. In logistics, they can track shipments in real-time, optimizing routes and delivery schedules. However, this hyper-connectivity also presents significant challenges, particularly in the realm of cybersecurity. Each connected device represents a potential entry point for malicious actors. Therefore, building a robust security framework is not an afterthought but a prerequisite for any successful IoT implementation.\n\n37. What is the core concept of the Internet of Things?", "options": ["A new type of internet browser", "A faster wireless internet standard", "Embedding connectivity into everyday objects", "A new social media platform"], "answer": 2 },
      { "q": "38. What is a key benefit of IoT in manufacturing?", "options": ["Predictive maintenance to reduce downtime", "Creating more jobs for maintenance workers", "Lowering the cost of everyday objects", "Making products more complex"], "answer": 0 },
      { "q": "39. What is the most significant challenge associated with IoT mentioned in the article?", "options": ["The high cost of sensors", "Lack of consumer interest", "Cybersecurity vulnerabilities", "The complexity of the technology"], "answer": 2 },
      { "q": "40-42. Read the following business proposal excerpt and answer the questions:\n\nOur proposed solution involves a complete overhaul of your current customer relationship management (CRM) system. We will implement our proprietary 'ConnectMax' platform, a cloud-based solution that offers superior scalability and a suite of advanced analytics tools. The migration process will be conducted in phases to ensure minimal disruption to your daily operations, with a dedicated project manager assigned to oversee the entire transition. We project that the implementation of ConnectMax will lead to a 15% increase in lead conversion rates and a 20% improvement in customer retention within the first year.\n\n40. What is the main purpose of this proposal?", "options": ["To sell a new hardware product", "To offer consulting services on marketing", "To propose the implementation of a new CRM system", "To recruit a new project manager"], "answer": 2 },
      { "q": "41. What is a key feature of the 'ConnectMax' platform?", "options": ["It is an open-source platform.", "It is a desktop application.", "It is a cloud-based solution with advanced analytics.", "It is designed for personal use only."], "answer": 2 },
      { "q": "42. What is a projected outcome of implementing the new system?", "options": ["A decrease in operational costs", "An increase in lead conversion and customer retention", "A reduction in the number of sales staff", "A complete stop to all daily operations during migration"], "answer": 1 },
      { "q": "43-45. Read the following passage and answer the questions:\n\nQuantitative easing (QE) is an unconventional monetary policy tool used by central banks to stimulate an economy when standard monetary policy has become ineffective. In QE, a central bank purchases predetermined amounts of government bonds or other financial assets from the open market in order to increase the money supply and encourage lending and investment. The intention is to lower interest rates, boost investment, and thereby stimulate economic growth. Critics, however, argue that QE can lead to inflation, create asset bubbles, and exacerbate income inequality by boosting stock prices, which disproportionately benefits the wealthy.\n\n43. When is quantitative easing typically used?", "options": ["During periods of high economic growth", "When standard monetary policy is no longer effective", "As a regular, day-to-day policy tool", "To decrease the money supply"], "answer": 1 },
      { "q": "44. What is the intended effect of QE?", "options": ["To raise interest rates", "To decrease the money supply", "To lower interest rates and stimulate the economy", "To increase government debt"], "answer": 2 },
      { "q": "45. What is a potential negative consequence of QE, according to critics?", "options": ["Deflation", "A decrease in stock prices", "The creation of asset bubbles and inflation", "A reduction in income inequality"], "answer": 2 }
    ]
  }
};


let currentState = {
  view: 'phase-1', // 'phase-1', 'phase-2', 'phase-3', 'resources'
  week: 1,
  completedTasks: JSON.parse(localStorage.getItem('toeic750_completedTasks_v14')) || {},
  scores: JSON.parse(localStorage.getItem('toeic750_scores_v14')) || { labels: [], data: [] }
};

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

const phases = [
  { id: 1, name: "Giai Đoạn 1" },
  { id: 2, name: "Giai Đoạn 2" },
  { id: 3, name: "Giai Đoạn 3" }
];

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

  if (!testData) {
    modalTitle.textContent = "Hướng dẫn làm bài";
    modalBody.innerHTML = `<p>Nội dung cho bài kiểm tra này sẽ sớm được cập nhật. Hiện tại, bạn hãy tìm một bộ đề thi thử (ví dụ: ETS TOEIC) và làm bài trong điều kiện thi thật (120 phút).</p>`;
    checkAnswersBtn.style.display = 'none';
  } else {
    modalTitle.textContent = testData.title;
    modalBody.innerHTML = testData.questions.map((q, index) => `<div class="question-block" data-answer="${q.answer}"><p class="font-semibold">${index + 1}. ${q.q}</p><div class="mt-2 space-y-1">${q.options.map((opt, optIndex) => `<label class="flex items-center p-2 rounded-md border border-stone-200 hover:bg-stone-50 cursor-pointer"><input type="radio" name="q${index}" value="${optIndex}" class="mr-3"><span>${opt}</span></label>`).join('')}</div><div class="answer-feedback hidden mt-2 p-2 text-sm rounded-md"></div></div>`).join('');
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function checkAnswers() {
  modalBody.querySelectorAll('.question-block').forEach(block => {
    const correctAnswerIndex = parseInt(block.dataset.answer);
    const userAnswer = block.querySelector('input[type="radio"]:checked');
    const feedbackEl = block.querySelector('.answer-feedback');
    feedbackEl.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    if (userAnswer && parseInt(userAnswer.value) === correctAnswerIndex) {
      feedbackEl.textContent = `Chính xác!`;
      feedbackEl.classList.add('bg-green-100', 'text-green-800');
      feedbackEl.style.animation = 'correctShake 0.4s';
      setTimeout(() => feedbackEl.style.animation = '', 400);
    } else {
      const correctAnswerText = block.querySelectorAll('span')[correctAnswerIndex].textContent;
      feedbackEl.textContent = `Sai rồi. Đáp án đúng là: "${correctAnswerText}"`;
      feedbackEl.classList.add('bg-red-100', 'text-red-800');
      feedbackEl.style.animation = 'wrongShake 0.4s';
      setTimeout(() => feedbackEl.style.animation = '', 400);
    }
  });
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
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

const ctx = document.getElementById('scoreChart').getContext('2d');
let scoreChart = new Chart(ctx, { type: 'line', data: { labels: currentState.scores.labels, datasets: [{ label: 'Điểm TOEIC', data: currentState.scores.data, borderColor: '#c2410c', backgroundColor: 'rgba(234, 88, 12, 0.1)', fill: true, tension: 0.3 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { suggestedMin: 300, suggestedMax: 800 } }, plugins: { legend: { display: false } } } });

init();
