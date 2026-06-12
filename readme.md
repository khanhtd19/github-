# Học viện lập trình - Trang web khóa học

**Người thực hiện:** Đào Tuấn Khanh  
**MSSV:** 24210501019  
**Lớp:** 27TH

## Mô tả dự án
Trang web giới thiệu các khóa học lập trình và các bài viết nổi bật. Người dùng có thể:
- Xem danh sách khóa học
- Đăng ký khóa học thông qua modal
- Xem danh sách bài viết nổi bật
- Dữ liệu đăng ký lưu vào **LocalStorage**
- Responsive trên desktop và mobile

## 5 phần chính
1. **Navbar**: Logo + menu liên kết Trang chủ, Khóa học, Bài viết, Liên hệ; responsive trên mobile.  
2. **Banner**: Gradient banner với tiêu đề + mô tả; animation khi load.  
3. **Danh sách khóa học**: Cards với ảnh, tên khóa học, giảng viên, thời lượng, mô tả; nút **Đăng ký** mở modal; animation khi scroll.  
4. **Bài viết nổi bật**: Cards hiển thị tiêu đề, tác giả, thời gian đọc; nút **Xem bài viết**; cards ngang và scroll trên mobile.  
5. **Modal đăng ký**: Form đăng ký với Họ tên, Email, Số điện thoại; validation JS; lưu LocalStorage; toast khi đăng ký; có nút `×` và click ngoài để đóng.

## Công nghệ sử dụng
- HTML5, CSS3 (có thể tách file `style.css`)  
- JavaScript: Modal, validation, toast notification, LocalStorage, animation scroll  
- Responsive Design: Flexbox, media queries  
- (Tuỳ chọn) Bootstrap: Grid, card, button  

## Hướng dẫn sử dụng
1. Clone hoặc tải dự án.  
2. Mở file `index.html` trên trình duyệt.  
3. Nhấn nút **Đăng ký** trên một khóa học để mở modal, điền thông tin và gửi.  
4. Thông tin đăng ký lưu LocalStorage, hiển thị toast.  
5. Xem các bài viết nổi bật trong phần **Bài viết nổi bật**.

## Cấu trúc thư mục gợi ý