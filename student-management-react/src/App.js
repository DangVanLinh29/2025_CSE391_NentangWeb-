import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '', show: false });
  const [formData, setFormData] = useState({
    studentId: '',
    fullName: '',
    email: '',
    birthDate: '',
    gender: '',
    phone: '',
    address: '',
    major: ''
  });

  // Load students from localStorage on component mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents && savedStudents !== '[]') {
      try {
        const parsedStudents = JSON.parse(savedStudents);
        if (parsedStudents && parsedStudents.length > 0) {
          setStudents(parsedStudents);
        } else {
          // If localStorage is empty or invalid, initialize with sample data
          initializeSampleData();
        }
      } catch (error) {
        console.error('Error parsing students from localStorage:', error);
        initializeSampleData();
      }
    } else {
      // Initialize with sample data
      initializeSampleData();
    }
  }, []);

  // Initialize sample data
  const initializeSampleData = () => {
    const sampleStudents = [
      {
        id: 1,
        studentId: 'SV001',
        fullName: 'Nguyễn Văn A',
        email: 'vana@email.com',
        birthDate: '2002-01-01',
        gender: 'Nam',
        phone: '0123456789',
        address: 'Hà Nội',
        major: 'Công nghệ thông tin'
      },
      {
        id: 2,
        studentId: 'SV002',
        fullName: 'Trần Thị B',
        email: 'thib@email.com',
        birthDate: '2002-02-02',
        gender: 'Nữ',
        phone: '0987654321',
        address: 'TP.HCM',
        major: 'Kinh tế'
      },
      {
        id: 3,
        studentId: 'SV003',
        fullName: 'Lê Văn C',
        email: 'lec@email.com',
        birthDate: '2002-03-03',
        gender: 'Nam',
        phone: '0555666777',
        address: 'Đà Nẵng',
        major: 'Cơ khí'
      }
    ];
    setStudents(sampleStudents);
    localStorage.setItem('students', JSON.stringify(sampleStudents));
  };

  // Save students to localStorage whenever students state changes
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type, show: true });
    setTimeout(() => {
      setNotification({ message: '', type: '', show: false });
    }, 3000);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      studentId: '',
      fullName: '',
      email: '',
      birthDate: '',
      gender: '',
      phone: '',
      address: '',
      major: ''
    });
    setEditingStudent(null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.studentId || !formData.fullName || !formData.email) {
      showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Email không hợp lệ!', 'error');
      return;
    }

    // Check for duplicate student ID
    const duplicateStudent = students.find(
      student => student.studentId === formData.studentId && student.id !== editingStudent?.id
    );
    if (duplicateStudent) {
      showNotification('Mã sinh viên đã tồn tại!', 'error');
      return;
    }

    if (editingStudent) {
      // Update existing student
      setStudents(prev => prev.map(student => 
        student.id === editingStudent.id 
          ? { ...student, ...formData }
          : student
      ));
      showNotification('Cập nhật sinh viên thành công!');
    } else {
      // Add new student
      const newStudent = {
        id: Date.now(),
        ...formData
      };
      setStudents(prev => [...prev, newStudent]);
      showNotification('Thêm sinh viên thành công!');
    }

    resetForm();
  };

  // Edit student
  const handleEdit = (student) => {
    setEditingStudent(student);
    setFormData({
      studentId: student.studentId,
      fullName: student.fullName,
      email: student.email,
      birthDate: student.birthDate,
      gender: student.gender,
      phone: student.phone,
      address: student.address,
      major: student.major
    });
    
    // Scroll to form
    document.querySelector('.student-form').scrollIntoView({ behavior: 'smooth' });
  };

  // Delete student
  const handleDelete = (studentId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
      setStudents(prev => prev.filter(student => student.id !== studentId));
      
      // If editing the student being deleted, reset form
      if (editingStudent && editingStudent.id === studentId) {
        resetForm();
      }
      
      showNotification('Xóa sinh viên thành công!');
    }
  };

  // Cancel editing
  const handleCancel = () => {
    resetForm();
  };

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate statistics
  const totalStudents = students.length;
  const maleStudents = students.filter(student => student.gender === 'Nam').length;
  const femaleStudents = students.filter(student => student.gender === 'Nữ').length;

  return (
    <div className="container">
      <h1>🎓 Quản Lý Sinh Viên</h1>
      
      {/* Notification */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">{totalStudents}</div>
          <div className="stat-label">Tổng sinh viên</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{maleStudents}</div>
          <div className="stat-label">Nam</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{femaleStudents}</div>
          <div className="stat-label">Nữ</div>
        </div>
        <div className="stat-card">
          <button 
            className="btn btn-secondary" 
            onClick={() => {
              if (window.confirm('Bạn có muốn reset về dữ liệu mẫu?')) {
                localStorage.removeItem('students');
                initializeSampleData();
                showNotification('Đã reset về dữ liệu mẫu!');
              }
            }}
            style={{ margin: 0, padding: '8px 16px', fontSize: '14px' }}
          >
            Reset Dữ Liệu
          </button>
        </div>
      </div>

      {/* Student Form */}
      <div className="student-form">
        <h2>{editingStudent ? 'Sửa Sinh Viên' : 'Thêm Sinh Viên Mới'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="studentId">Mã sinh viên *</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              placeholder="Nhập mã sinh viên..."
              required
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="fullName">Họ và tên *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
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
            <label htmlFor="birthDate">Ngày sinh</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-row">
            <label>Giới tính</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={formData.gender === 'Nam'}
                  onChange={handleInputChange}
                />
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={formData.gender === 'Nữ'}
                  onChange={handleInputChange}
                />
                Nữ
              </label>
            </div>
          </div>
          
          <div className="form-row">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại..."
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="address">Địa chỉ</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ..."
              rows="2"
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="major">Ngành học</label>
            <select
              id="major"
              name="major"
              value={formData.major}
              onChange={handleInputChange}
            >
              <option value="">Chọn ngành học</option>
              <option value="Công nghệ thông tin">Công nghệ thông tin</option>
              <option value="Kinh tế">Kinh tế</option>
              <option value="Cơ khí">Cơ khí</option>
              <option value="Điện tử">Điện tử</option>
              <option value="Xây dựng">Xây dựng</option>
              <option value="Y khoa">Y khoa</option>
              <option value="Luật">Luật</option>
              <option value="Sư phạm">Sư phạm</option>
            </select>
          </div>
          
          <div className="form-row">
            <button type="submit" className="btn btn-success">
              {editingStudent ? 'Cập nhật sinh viên' : 'Thêm sinh viên'}
            </button>
            {editingStudent && (
              <>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Hủy
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Student List */}
      <div>
        <h2>Danh Sách Sinh Viên ({filteredStudents.length})</h2>
        
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm theo mã SV, họ tên, email, ngành học..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {filteredStudents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666', fontStyle: 'italic' }}>
            <p>Không tìm thấy sinh viên nào.</p>
            <p>Hãy thử tìm kiếm với từ khóa khác hoặc thêm sinh viên mới!</p>
          </div>
        ) : (
          <table className="student-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Ngành học</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.studentId}</td>
                  <td>{student.fullName}</td>
                  <td>{student.email}</td>
                  <td>{student.birthDate}</td>
                  <td>{student.gender}</td>
                  <td>{student.major}</td>
                  <td className="action-buttons">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(student)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(student.id)}
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
