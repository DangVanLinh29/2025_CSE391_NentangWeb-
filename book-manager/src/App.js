import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: ''
  });

  // Load books from localStorage on component mount
  useEffect(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  // Save books to localStorage whenever books state changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.author || !formData.year) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (editingBook) {
      // Update existing book
      setBooks(prev => prev.map(book => 
        book.id === editingBook.id 
          ? { ...book, ...formData }
          : book
      ));
      setEditingBook(null);
    } else {
      // Add new book
      const newBook = {
        id: Date.now(),
        title: formData.title,
        author: formData.author,
        year: formData.year
      };
      setBooks(prev => [...prev, newBook]);
    }

    // Reset form
    setFormData({
      title: '',
      author: '',
      year: ''
    });
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      year: book.year
    });
  };

  const handleDelete = (bookId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa cuốn sách này?')) {
      setBooks(prev => prev.filter(book => book.id !== bookId));
      if (editingBook && editingBook.id === bookId) {
        setEditingBook(null);
        setFormData({
          title: '',
          author: '',
          year: ''
        });
      }
    }
  };

  const handleCancel = () => {
    setEditingBook(null);
    setFormData({
      title: '',
      author: '',
      year: ''
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📚 Quản Lý Sách</h1>
        <p>Ứng dụng quản lý thư viện sách đơn giản</p>
      </div>

      {/* Book Form */}
      <div className="book-form">
        <h2>{editingBook ? 'Sửa Sách' : 'Thêm Sách Mới'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Tiêu đề sách:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Nhập tiêu đề sách..."
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="author">Tác giả:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Nhập tên tác giả..."
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="year">Năm xuất bản:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="Nhập năm xuất bản..."
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          
          <div>
            <button type="submit" className="btn btn-primary">
              {editingBook ? 'Cập nhật' : 'Thêm sách'}
            </button>
            {editingBook && (
              <button type="button" className="btn btn-warning" onClick={handleCancel}>
                Hủy
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Book List */}
      <div className="book-list">
        <h2>Danh Sách Sách ({books.length})</h2>
        {books.length === 0 ? (
          <div className="no-books">
            <p>Chưa có sách nào trong thư viện.</p>
            <p>Hãy thêm sách đầu tiên!</p>
          </div>
        ) : (
          books.map(book => (
            <div key={book.id} className="book-item">
              <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">Tác giả: {book.author}</div>
                <div className="book-year">Năm xuất bản: {book.year}</div>
              </div>
              <div className="book-actions">
                <button 
                  className="btn btn-warning"
                  onClick={() => handleEdit(book)}
                >
                  Sửa
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App; 