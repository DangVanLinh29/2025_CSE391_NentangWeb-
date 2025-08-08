# 🎓 React Student Management App

Ứng dụng React quản lý sinh viên với đầy đủ chức năng CRUD (Create, Read, Update, Delete).

## ✨ Tính năng

- **Thêm sinh viên mới** với validation đầy đủ
- **Hiển thị danh sách sinh viên** với giao diện đẹp
- **Sửa thông tin sinh viên** với form tự động điền
- **Xóa sinh viên** với xác nhận
- **Tìm kiếm sinh viên** theo mã SV, họ tên, email
- **Lưu trữ dữ liệu** trong Local Storage
- **Giao diện responsive** cho mobile và desktop
- **Thông báo real-time** cho các thao tác

## 🛠️ Công nghệ sử dụng

- **React 18** - Framework JavaScript
- **React Hooks** - useState, useEffect
- **CSS3** - Styling và animations
- **Local Storage** - Lưu trữ dữ liệu
- **HTML5** - Semantic markup

## 📁 Cấu trúc project

```
react-student-manager/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Component chính
│   ├── App.css         # Styles cho App
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Cách chạy

1. **Cài đặt dependencies:**

   ```bash
   npm install
   ```

2. **Chạy ứng dụng:**

   ```bash
   npm start
   ```

3. **Mở trình duyệt:**
   - Truy cập: http://localhost:3000

## 📋 Validation Rules

- **Mã sinh viên:** Bắt buộc, không được trùng lặp
- **Họ và tên:** Bắt buộc
- **Email:** Bắt buộc, phải đúng định dạng email
- **Ngày sinh:** Tùy chọn
- **Giới tính:** Tùy chọn (Nam/Nữ)
- **Ghi chú:** Tùy chọn

## 💾 Dữ liệu mẫu

Ứng dụng có sẵn 10 sinh viên mẫu với thông tin chi tiết:

- Nguyễn Văn An (SV001)
- Trần Thị Bình (SV002)
- Lê Văn Cường (SV003)
- Phạm Thị Dung (SV004)
- Hoàng Văn Em (SV005)
- Vũ Thị Phương (SV006)
- Đỗ Văn Giang (SV007)
- Ngô Thị Hương (SV008)
- Bùi Văn Inh (SV009)
- Lý Thị Kim (SV010)

## 🎨 Giao diện

- **Modern UI** với thiết kế clean và professional
- **Responsive design** hoạt động tốt trên mọi thiết bị
- **Smooth animations** cho trải nghiệm người dùng tốt
- **Color scheme** xanh dương chuyên nghiệp
- **Hover effects** và transitions mượt mà

## 🔧 Các hooks React được sử dụng

- **useState:** Quản lý state cho danh sách sinh viên, form data, search term
- **useEffect:** Load/save data từ Local Storage, side effects

## 🚀 Tính năng nâng cao có thể thêm

- **Pagination** cho danh sách lớn
- **Sorting** theo các cột
- **Export data** ra Excel/CSV
- **Import data** từ file
- **Backend API** integration
- **Authentication** và authorization
- **Dark mode** toggle
- **Multi-language** support

## 📱 Responsive Design

- **Desktop:** Layout đầy đủ với sidebar
- **Tablet:** Layout thu gọn
- **Mobile:** Single column layout

## 🎯 Performance

- **Optimized rendering** với React best practices
- **Efficient filtering** và searching
- **Minimal re-renders** với proper state management
- **Fast loading** với optimized CSS

## 📄 License

MIT License - Tự do sử dụng và phát triển.

---

**Tác giả:** Đặng Văn Linh  
**Ngày tạo:** 2025  
**Phiên bản:** 1.0.0
