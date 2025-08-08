import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sinhVienList, setSinhVienList] = useState([]);
  const [sinhVienDangSua, setSinhVienDangSua] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    masv: '',
    hoten: '',
    email: '',
    ngaysinh: '',
    gioitinh: '',
    ghichu: ''
  });

  // Load dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const savedData = localStorage.getItem('sinhVienList');
    if (savedData && JSON.parse(savedData).length > 0) {
      setSinhVienList(JSON.parse(savedData));
    } else {
      // Dữ liệu mẫu ban đầu
      const initialData = [
        {
          id: 1,
          masv: 'SV001',
          hoten: 'Nguyễn Văn An',
          email: 'nguyenvanan@email.com',
          gioitinh: 'Nam',
          ngaysinh: '2002-01-15',
          ghichu: 'Sinh viên xuất sắc, tham gia nhiều hoạt động ngoại khóa'
        },
        {
          id: 2,
          masv: 'SV002',
          hoten: 'Trần Thị Bình',
          email: 'tranthibinh@email.com',
          gioitinh: 'Nữ',
          ngaysinh: '2002-03-22',
          ghichu: 'Có năng khiếu về nghệ thuật, tham gia CLB âm nhạc'
        },
        {
          id: 3,
          masv: 'SV003',
          hoten: 'Lê Văn Cường',
          email: 'levancuong@email.com',
          gioitinh: 'Nam',
          ngaysinh: '2002-05-10',
          ghichu: 'Thành viên đội tuyển thể thao của trường'
        },
        {
          id: 4,
          masv: 'SV004',
          hoten: 'Phạm Thị Dung',
          email: 'phamthidung@email.com',
          gioitinh: 'Nữ',
          ngaysinh: '2002-07-08',
          ghichu: 'Lớp trưởng, có khả năng lãnh đạo tốt'
        },
        {
          id: 5,
          masv: 'SV005',
          hoten: 'Hoàng Văn Em',
          email: 'hoangvanem@email.com',
          gioitinh: 'Nam',
          ngaysinh: '2002-09-14',
          ghichu: 'Thành viên CLB lập trình, có dự án cá nhân'
        },
        {
          id: 6,
          masv: 'SV006',
          hoten: 'Vũ Thị Phương',
          email: 'vuthiphuong@email.com',
          gioitinh: 'Nữ',
          ngaysinh: '2002-11-30',
          ghichu: 'Thành viên đội tuyển học sinh giỏi Toán'
        },
        {
          id: 7,
          masv: 'SV007',
          hoten: 'Đỗ Văn Giang',
          email: 'dovangiang@email.com',
          gioitinh: 'Nam',
          ngaysinh: '2002-12-25',
          ghichu: 'Thành viên CLB nhiếp ảnh, có tác phẩm đoạt giải'
        },
        {
          id: 8,
          masv: 'SV008',
          hoten: 'Ngô Thị Hương',
          email: 'ngothihuong@email.com',
          gioitinh: 'Nữ',
          ngaysinh: '2002-04-18',
          ghichu: 'Thành viên CLB tiếng Anh, có chứng chỉ IELTS 7.0'
        },
        {
          id: 9,
          masv: 'SV009',
          hoten: 'Bùi Văn Inh',
          email: 'buivaninh@email.com',
          gioitinh: 'Nam',
          ngaysinh: '2002-06-05',
          ghichu: 'Thành viên CLB báo chí, phóng viên tòa soạn trường'
        },
        {
          id: 10,
          masv: 'SV010',
          hoten: 'Lý Thị Kim',
          email: 'lythikim@email.com',
          gioitinh: 'Nữ',
          ngaysinh: '2002-08-12',
          ghichu: 'Thành viên CLB tình nguyện, tích cực tham gia hoạt động xã hội'
        }
      ];
      setSinhVienList(initialData);
    }
  }, []);

  // Lưu dữ liệu vào localStorage khi sinhVienList thay đổi
  useEffect(() => {
    localStorage.setItem('sinhVienList', JSON.stringify(sinhVienList));
  }, [sinhVienList]);

  // Hiển thị thông báo
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      masv: '',
      hoten: '',
      email: '',
      ngaysinh: '',
      gioitinh: '',
      ghichu: ''
    });
    setSinhVienDangSua(null);
  };

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validation
  const validateForm = () => {
    if (!formData.masv.trim() || !formData.hoten.trim() || !formData.email.trim()) {
      showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
      return false;
    }

    // Kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Email không hợp lệ!', 'error');
      return false;
    }

    // Kiểm tra mã sinh viên trùng lặp
    const masvTonTai = sinhVienList.find(sv => 
      sv.masv === formData.masv && sv.id !== sinhVienDangSua?.id
    );
    if (masvTonTai) {
      showNotification('Mã sinh viên đã tồn tại!', 'error');
      return false;
    }

    return true;
  };

  // Thêm/Cập nhật sinh viên
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (sinhVienDangSua) {
      // Cập nhật sinh viên
      setSinhVienList(prev => prev.map(sv => 
        sv.id === sinhVienDangSua.id 
          ? { ...sv, ...formData }
          : sv
      ));
      showNotification('Cập nhật sinh viên thành công!');
    } else {
      // Thêm sinh viên mới
      const sinhVienMoi = {
        id: Date.now(),
        ...formData
      };
      setSinhVienList(prev => [...prev, sinhVienMoi]);
      showNotification('Thêm sinh viên thành công!');
    }

    resetForm();
  };

  // Sửa sinh viên
  const handleEdit = (sinhVien) => {
    setSinhVienDangSua(sinhVien);
    setFormData({
      masv: sinhVien.masv,
      hoten: sinhVien.hoten,
      email: sinhVien.email,
      ngaysinh: sinhVien.ngaysinh,
      gioitinh: sinhVien.gioitinh,
      ghichu: sinhVien.ghichu
    });
    
    // Scroll to form
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
  };

  // Xóa sinh viên
  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
      setSinhVienList(prev => prev.filter(sv => sv.id !== id));
      
      // Nếu đang sửa sinh viên bị xóa, reset form
      if (sinhVienDangSua && sinhVienDangSua.id === id) {
        resetForm();
      }
      
      showNotification('Xóa sinh viên thành công!');
    }
  };

  // Hủy sửa
  const handleCancel = () => {
    resetForm();
  };

  // Lọc danh sách theo từ khóa tìm kiếm
  const filteredSinhVien = sinhVienList.filter(sv => 
    sv.masv.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sv.hoten.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sv.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h1>🎓 Quản Lý Sinh Viên - React</h1>
        <p>Ứng dụng quản lý sinh viên với đầy đủ chức năng CRUD</p>
      </div>

      {/* Thông báo */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Form thêm/sửa sinh viên */}
      <div className="form-container">
        <h2>{sinhVienDangSua ? 'Sửa Sinh Viên' : 'Thêm Sinh Viên Mới'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="masv">Mã sinh viên *</label>
            <input
              type="text"
              id="masv"
              name="masv"
              value={formData.masv}
              onChange={handleInputChange}
              placeholder="Nhập mã sinh viên..."
              required
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="hoten">Họ và tên *</label>
            <input
              type="text"
              id="hoten"
              name="hoten"
              value={formData.hoten}
              onChange={handleInputChange}
              placeholder="Nhập họ và tên..."
              required
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email..."
              required
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="ngaysinh">Ngày sinh</label>
            <input
              type="date"
              id="ngaysinh"
              name="ngaysinh"
              value={formData.ngaysinh}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-row-1">
            <label>Giới tính</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gioitinh"
                  value="Nam"
                  checked={formData.gioitinh === 'Nam'}
                  onChange={handleInputChange}
                />
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  name="gioitinh"
                  value="Nữ"
                  checked={formData.gioitinh === 'Nữ'}
                  onChange={handleInputChange}
                />
                Nữ
              </label>
            </div>
          </div>
          
          <div className="form-row">
            <label htmlFor="ghichu">Ghi chú</label>
            <textarea
              id="ghichu"
              name="ghichu"
              value={formData.ghichu}
              onChange={handleInputChange}
              rows="2"
              placeholder="Nhập ghi chú..."
            />
          </div>
          
          <div className="form-row">
            <button type="submit" className="btn btn-success">
              {sinhVienDangSua ? 'Cập nhật sinh viên' : 'Thêm sinh viên'}
            </button>
            {sinhVienDangSua && (
              <button type="button" className="btn btn-warning" onClick={handleCancel}>
                Hủy
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tìm kiếm */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm theo mã SV, họ tên, email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Danh sách sinh viên */}
      <div className="table-container">
        <h2>Danh Sách Sinh Viên ({filteredSinhVien.length})</h2>
        {filteredSinhVien.length === 0 ? (
          <div className="no-data">
            <p>Không tìm thấy sinh viên nào.</p>
            {searchTerm && <p>Thử tìm kiếm với từ khóa khác.</p>}
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Giới tính</th>
                <th>Ngày sinh</th>
                <th>Ghi chú</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredSinhVien.map((sinhVien, index) => (
                <tr key={sinhVien.id}>
                  <td>{index + 1}</td>
                  <td>{sinhVien.masv}</td>
                  <td>{sinhVien.hoten}</td>
                  <td>{sinhVien.email}</td>
                  <td>{sinhVien.gioitinh}</td>
                  <td>{sinhVien.ngaysinh}</td>
                  <td>
                    <div className="ghichu-cell">
                      {sinhVien.ghichu ? (
                        <span title={sinhVien.ghichu}>
                          {sinhVien.ghichu.length > 50 
                            ? `${sinhVien.ghichu.substring(0, 50)}...` 
                            : sinhVien.ghichu}
                        </span>
                      ) : (
                        <span className="no-ghichu">-</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn-sua"
                      onClick={() => handleEdit(sinhVien)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn-xoa"
                      onClick={() => handleDelete(sinhVien.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
