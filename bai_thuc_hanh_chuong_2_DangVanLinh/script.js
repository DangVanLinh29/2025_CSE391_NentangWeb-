// Khởi tạo mảng sinh viên từ localStorage hoặc mảng rỗng
let danhSachSinhVien = JSON.parse(localStorage.getItem('sinhVien')) || [
    {
        id: 1,
        masv: 'SV001',
        hoten: 'Nguyễn Văn A',
        email: 'vana@email.com',
        gioitinh: 'Nam',
        ngaysinh: '2002-01-01',
        ghichu: ''
    },
    {
        id: 2,
        masv: 'SV002',
        hoten: 'Trần Thị B',
        email: 'thib@email.com',
        gioitinh: 'Nữ',
        ngaysinh: '2002-02-02',
        ghichu: ''
    },
    {
        id: 3,
        masv: 'SV003',
        hoten: 'Lê Văn C',
        email: 'lec@email.com',
        gioitinh: 'Nam',
        ngaysinh: '2002-03-03',
        ghichu: ''
    }
];

// Biến để theo dõi sinh viên đang sửa
let sinhVienDangSua = null;

// Lưu danh sách vào localStorage
function luuVaoLocalStorage() {
    localStorage.setItem('sinhVien', JSON.stringify(danhSachSinhVien));
}

// Hiển thị thông báo
function hienThiThongBao(message, type = 'success') {
    const thongBao = document.getElementById('thongBao');
    thongBao.textContent = message;
    thongBao.style.color = type === 'success' ? 'green' : 'red';
    thongBao.style.display = 'block';
    
    setTimeout(() => {
        thongBao.style.display = 'none';
    }, 3000);
}

// Reset form
function resetForm() {
    document.getElementById('masv').value = '';
    document.getElementById('hoten').value = '';
    document.getElementById('email').value = '';
    document.getElementById('ngaysinh').value = '';
    document.getElementById('ghichu').value = '';
    
    // Reset radio buttons
    const radioButtons = document.querySelectorAll('input[name="gioitinh"]');
    radioButtons.forEach(radio => radio.checked = false);
    
    // Reset button text
    document.getElementById('btnThem').textContent = 'Thêm sinh viên';
    sinhVienDangSua = null;
}

// Hiển thị danh sách sinh viên
function hienThiDanhSach() {
    const tbody = document.querySelector('#bangSinhVien tbody');
    tbody.innerHTML = '';
    
    danhSachSinhVien.forEach((sinhVien, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${sinhVien.masv}</td>
            <td>${sinhVien.hoten}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.gioitinh}</td>
            <td>${sinhVien.ngaysinh}</td>
            <td>
                <button onclick="suaSinhVien(${sinhVien.id})" class="btn-sua">Sửa</button>
                <button onclick="xoaSinhVien(${sinhVien.id})" class="btn-xoa">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Thêm sinh viên mới
function themSinhVien(event) {
    event.preventDefault();
    
    const masv = document.getElementById('masv').value.trim();
    const hoten = document.getElementById('hoten').value.trim();
    const email = document.getElementById('email').value.trim();
    const ngaysinh = document.getElementById('ngaysinh').value;
    const ghichu = document.getElementById('ghichu').value.trim();
    const gioitinh = document.querySelector('input[name="gioitinh"]:checked')?.value || '';

    // Validation
    if (!masv || !hoten || !email) {
        hienThiThongBao('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }

    // Kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        hienThiThongBao('Email không hợp lệ!', 'error');
        return;
    }

    // Kiểm tra mã sinh viên đã tồn tại
    const masvTonTai = danhSachSinhVien.find(sv => sv.masv === masv && sv.id !== sinhVienDangSua?.id);
    if (masvTonTai) {
        hienThiThongBao('Mã sinh viên đã tồn tại!', 'error');
        return;
    }

    if (sinhVienDangSua) {
        // Cập nhật sinh viên hiện có
        const index = danhSachSinhVien.findIndex(sv => sv.id === sinhVienDangSua.id);
        if (index !== -1) {
            danhSachSinhVien[index] = {
                ...sinhVienDangSua,
                masv,
                hoten,
                email,
                ngaysinh,
                gioitinh,
                ghichu
            };
            hienThiThongBao('Cập nhật sinh viên thành công!');
        }
    } else {
        // Thêm sinh viên mới
        const sinhVienMoi = {
            id: Date.now(),
            masv,
            hoten,
            email,
            ngaysinh,
            gioitinh,
            ghichu
        };
        danhSachSinhVien.push(sinhVienMoi);
        hienThiThongBao('Thêm sinh viên thành công!');
    }

    // Lưu vào localStorage và cập nhật giao diện
    luuVaoLocalStorage();
    hienThiDanhSach();
    resetForm();
}

// Sửa sinh viên
function suaSinhVien(id) {
    const sinhVien = danhSachSinhVien.find(sv => sv.id === id);
    if (sinhVien) {
        sinhVienDangSua = sinhVien;
        
        // Điền thông tin vào form
        document.getElementById('masv').value = sinhVien.masv;
        document.getElementById('hoten').value = sinhVien.hoten;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('ngaysinh').value = sinhVien.ngaysinh;
        document.getElementById('ghichu').value = sinhVien.ghichu;
        
        // Chọn giới tính
        const radioButtons = document.querySelectorAll('input[name="gioitinh"]');
        radioButtons.forEach(radio => {
            radio.checked = radio.value === sinhVien.gioitinh;
        });
        
        // Đổi text button
        document.getElementById('btnThem').textContent = 'Cập nhật sinh viên';
        
        // Scroll to form
        document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
    }
}

// Xóa sinh viên
function xoaSinhVien(id) {
    if (confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
        danhSachSinhVien = danhSachSinhVien.filter(sv => sv.id !== id);
        
        // Nếu đang sửa sinh viên bị xóa, reset form
        if (sinhVienDangSua && sinhVienDangSua.id === id) {
            resetForm();
        }
        
        luuVaoLocalStorage();
        hienThiDanhSach();
        hienThiThongBao('Xóa sinh viên thành công!');
    }
}

// Tìm kiếm sinh viên
function timKiemSinhVien() {
    const tuKhoa = document.getElementById('tuKhoa').value.toLowerCase();
    const tbody = document.querySelector('#bangSinhVien tbody');
    tbody.innerHTML = '';
    
    const ketQua = danhSachSinhVien.filter(sv => 
        sv.masv.toLowerCase().includes(tuKhoa) ||
        sv.hoten.toLowerCase().includes(tuKhoa) ||
        sv.email.toLowerCase().includes(tuKhoa)
    );
    
    ketQua.forEach((sinhVien, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${sinhVien.masv}</td>
            <td>${sinhVien.hoten}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.gioitinh}</td>
            <td>${sinhVien.ngaysinh}</td>
            <td>
                <button onclick="suaSinhVien(${sinhVien.id})" class="btn-sua">Sửa</button>
                <button onclick="xoaSinhVien(${sinhVien.id})" class="btn-xoa">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị danh sách ban đầu
    hienThiDanhSach();
    
    // Thêm event listener cho form
    document.querySelector('form').addEventListener('submit', themSinhVien);
    
    // Thêm event listener cho tìm kiếm (nếu có)
    const tuKhoaInput = document.getElementById('tuKhoa');
    if (tuKhoaInput) {
        tuKhoaInput.addEventListener('input', timKiemSinhVien);
    }
});