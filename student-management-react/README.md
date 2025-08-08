# 🎓 Ứng Dụng Quản Lý Sinh Viên - React Version

Ứng dụng web quản lý sinh viên được xây dựng bằng React với đầy đủ chức năng CRUD (Create, Read, Update, Delete) và các tính năng nâng cao.

## 🚀 Tính Năng

### ✅ **CRUD Operations:**
- **Create (Thêm)**: Thêm sinh viên mới với validation đầy đủ
- **Read (Đọc)**: Hiển thị danh sách sinh viên với thống kê
- **Update (Cập nhật)**: Sửa thông tin sinh viên
- **Delete (Xóa)**: Xóa sinh viên với confirmation

### ✅ **Tính Năng Nâng Cao:**
- **Tìm kiếm thông minh**: Theo mã SV, họ tên, email, ngành học
- **Thống kê real-time**: Tổng số, nam, nữ
- **Validation đầy đủ**: Email, trùng lặp mã SV, dữ liệu bắt buộc
- **Local Storage**: Lưu trữ dữ liệu trên trình duyệt
- **Responsive Design**: Hoạt động tốt trên mọi thiết bị
- **Thông báo thông minh**: Hiển thị kết quả thành công/lỗi
- **Giao diện hiện đại**: Clean design với animation

## 🛠️ Công Nghệ Sử Dụng

- **React 18**: Framework chính
- **React Hooks**: useState, useEffect
- **CSS3**: Styling và responsive design
- **Local Storage API**: Lưu trữ dữ liệu
- **ES6+**: Modern JavaScript features

## 📁 Cấu Trúc Dự Án

```
student-management-react/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── App.js                  # Component chính
│   ├── App.css                 # CSS cho App
│   ├── index.js                # Entry point
│   └── index.css               # Global CSS
├── package.json                # Dependencies
└── README.md                   # Hướng dẫn này
```

## 🎯 Cách Sử Dụng

### **1. Thêm Sinh Viên Mới:**
1. Điền thông tin vào form:
   - Mã sinh viên (bắt buộc)
   - Họ và tên (bắt buộc)
   - Email (bắt buộc, phải hợp lệ)
   - Ngày sinh (tùy chọn)
   - Giới tính (tùy chọn)
   - Số điện thoại (tùy chọn)
   - Địa chỉ (tùy chọn)
   - Ngành học (tùy chọn)
2. Nhấn "Thêm sinh viên"
3. Sinh viên sẽ xuất hiện trong danh sách

### **2. Sửa Sinh Viên:**
1. Nhấn nút "Sửa" bên cạnh sinh viên
2. Thông tin sẽ được điền vào form
3. Chỉnh sửa thông tin cần thiết
4. Nhấn "Cập nhật sinh viên"

### **3. Xóa Sinh Viên:**
1. Nhấn nút "Xóa" bên cạnh sinh viên
2. Xác nhận trong hộp thoại hiện ra
3. Sinh viên sẽ bị xóa khỏi danh sách

### **4. Tìm Kiếm:**
- Nhập từ khóa vào ô tìm kiếm
- Kết quả sẽ được lọc theo mã SV, họ tên, email, ngành học

## 🔧 Validation Rules

### **Dữ Liệu Bắt Buộc:**
- Mã sinh viên: Không được để trống
- Họ và tên: Không được để trống
- Email: Phải đúng định dạng email

### **Kiểm Tra Trùng Lặp:**
- Mã sinh viên không được trùng với sinh viên khác

### **Định Dạng Email:**
- Phải có @ và domain hợp lệ

## 📊 Thống Kê

Ứng dụng hiển thị thống kê real-time:
- **Tổng số sinh viên**: Tổng cộng
- **Nam**: Số sinh viên nam
- **Nữ**: Số sinh viên nữ

## 💾 Lưu Trữ Dữ Liệu

- Dữ liệu được tự động lưu vào Local Storage
- Dữ liệu không bị mất khi refresh trang
- Mỗi sinh viên có ID duy nhất được tạo bằng `Date.now()`

## 🎨 Giao Diện

### **Thiết Kế:**
- Giao diện hiện đại, clean design
- Màu sắc hài hòa (xanh dương, xanh lá, cam, đỏ)
- Responsive design cho mobile
- Animation mượt mà

### **Tính Năng UI:**
- Hover effects trên buttons và table rows
- Focus effects trên input fields
- Thông báo tự động biến mất sau 3 giây
- Smooth scrolling khi sửa sinh viên
- Thống kê cards với animation

## 🚀 Cách Chạy

### **1. Cài đặt dependencies:**
```bash
npm install
```

### **2. Chạy ứng dụng:**
```bash
npm start
```

### **3. Mở trình duyệt:**
- Truy cập `http://localhost:3000`

## 🔍 Tính Năng Nâng Cao (Có Thể Thêm)

- **Export/Import**: Xuất nhập dữ liệu CSV/Excel
- **Phân trang**: Cho danh sách dài
- **Sắp xếp**: Theo cột
- **Filter**: Lọc theo giới tính, ngành học
- **Upload ảnh**: Thêm ảnh sinh viên
- **Backup**: Sao lưu dữ liệu
- **Authentication**: Đăng nhập/đăng ký
- **API Integration**: Kết nối với backend

## 📝 So Sánh Với Version HTML/CSS/JS

### **Ưu điểm của React Version:**
- **Component-based**: Code dễ quản lý và tái sử dụng
- **State Management**: Quản lý state hiệu quả với useState
- **Performance**: Virtual DOM giúp render nhanh hơn
- **Developer Experience**: Hot reload, debugging tools
- **Scalability**: Dễ mở rộng và maintain
- **Modern Stack**: Sử dụng công nghệ hiện đại

### **Tính năng bổ sung:**
- Thống kê real-time
- Validation nâng cao
- Giao diện đẹp hơn
- Responsive design tốt hơn
- Animation mượt mà

## 📝 Ghi Chú

- Ứng dụng hoạt động hoàn toàn offline
- Dữ liệu chỉ lưu trên trình duyệt hiện tại
- Tương thích với tất cả trình duyệt hiện đại
- Có sẵn 3 sinh viên mẫu khi khởi động lần đầu

---

**Tác giả:** DangVanLinh  
**Phiên bản:** 2.0 (React)  
**Ngày tạo:** 2024
