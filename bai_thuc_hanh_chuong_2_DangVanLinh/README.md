# 📚 Ứng Dụng Quản Lý Sinh Viên - CRUD Hoàn Chỉnh

Ứng dụng web quản lý sinh viên với đầy đủ chức năng CRUD (Create, Read, Update, Delete) được xây dựng bằng HTML, CSS và JavaScript thuần.

## 🚀 Tính Năng

### ✅ **CRUD Operations:**
- **Create (Thêm)**: Thêm sinh viên mới với validation
- **Read (Đọc)**: Hiển thị danh sách sinh viên
- **Update (Cập nhật)**: Sửa thông tin sinh viên
- **Delete (Xóa)**: Xóa sinh viên với confirmation

### ✅ **Tính Năng Bổ Sung:**
- **Tìm kiếm**: Tìm kiếm theo mã SV, họ tên, email
- **Validation**: Kiểm tra dữ liệu nhập vào
- **Local Storage**: Lưu trữ dữ liệu trên trình duyệt
- **Responsive Design**: Giao diện thân thiện mobile
- **Thông báo**: Hiển thị thông báo thành công/lỗi

## 🛠️ Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc giao diện
- **CSS3**: Styling và responsive design
- **JavaScript (ES6+)**: Logic xử lý CRUD
- **Local Storage API**: Lưu trữ dữ liệu

## 📁 Cấu Trúc Dự Án

```
bai_thuc_hanh_chuong_2_DangVanLinh/
├── bai_thuc_hanh_chuong_2_DangVanLinh.html  # File HTML chính
├── style.css                                  # CSS styling
├── script.js                                  # JavaScript logic
└── README.md                                  # Hướng dẫn này
```

## 🎯 Cách Sử Dụng

### **1. Thêm Sinh Viên Mới:**
1. Điền thông tin vào form:
   - Mã sinh viên (bắt buộc)
   - Họ và tên (bắt buộc)
   - Email (bắt buộc, phải hợp lệ)
   - Ngày sinh (tùy chọn)
   - Giới tính (tùy chọn)
   - Ghi chú (tùy chọn)
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
- Kết quả sẽ được lọc theo mã SV, họ tên, email

## 🔧 Validation Rules

### **Dữ Liệu Bắt Buộc:**
- Mã sinh viên: Không được để trống
- Họ và tên: Không được để trống
- Email: Phải đúng định dạng email

### **Kiểm Tra Trùng Lặp:**
- Mã sinh viên không được trùng với sinh viên khác

### **Định Dạng Email:**
- Phải có @ và domain hợp lệ

## 💾 Lưu Trữ Dữ Liệu

- Dữ liệu được tự động lưu vào Local Storage
- Dữ liệu không bị mất khi refresh trang
- Mỗi sinh viên có ID duy nhất được tạo bằng `Date.now()`

## 🎨 Giao Diện

### **Thiết Kế:**
- Giao diện hiện đại, clean design
- Màu sắc hài hòa (xanh dương, cam, đỏ)
- Responsive design cho mobile
- Animation mượt mà

### **Tính Năng UI:**
- Hover effects trên buttons và table rows
- Focus effects trên input fields
- Thông báo tự động biến mất sau 3 giây
- Smooth scrolling khi sửa sinh viên

## 🚀 Cách Chạy

1. **Mở file HTML:**
   - Double-click vào file `bai_thuc_hanh_chuong_2_DangVanLinh.html`
   - Hoặc mở bằng trình duyệt web

2. **Sử dụng ngay:**
   - Ứng dụng đã có sẵn 3 sinh viên mẫu
   - Có thể thêm, sửa, xóa ngay lập tức

## 🔍 Tính Năng Nâng Cao (Có Thể Thêm)

- **Export/Import**: Xuất nhập dữ liệu CSV/Excel
- **Phân trang**: Cho danh sách dài
- **Sắp xếp**: Theo cột
- **Filter**: Lọc theo giới tính, năm sinh
- **Upload ảnh**: Thêm ảnh sinh viên
- **Backup**: Sao lưu dữ liệu

## 📝 Ghi Chú

- Ứng dụng hoạt động hoàn toàn offline
- Dữ liệu chỉ lưu trên trình duyệt hiện tại
- Không cần cài đặt thêm thư viện nào
- Tương thích với tất cả trình duyệt hiện đại

---

**Tác giả:** DangVanLinh  
**Phiên bản:** 1.0  
**Ngày tạo:** 2024
