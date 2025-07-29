
const showAddFormBtn = document.getElementById('showAddForm');
const addEmployeeForm = document.getElementById('addEmployeeForm');
const closeAddForm = document.getElementById('closeAddForm');
const cancelAddForm = document.getElementById('cancelAddForm');
if (showAddFormBtn && addEmployeeForm) {
    const addForm = addEmployeeForm.querySelector('form');
    showAddFormBtn.addEventListener('click', () => {
        addEmployeeForm.style.display = 'block';
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    closeAddForm.addEventListener('click', () => {
        addEmployeeForm.style.display = 'none';
    });
    cancelAddForm.addEventListener('click', () => {
        addEmployeeForm.style.display = 'none';
    });
    // Validate form
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Xóa thông báo lỗi cũ
        let oldError = addForm.querySelector('.form-error');
        if (oldError) oldError.remove();
        const name = addForm.name.value.trim();
        const email = addForm.email.value.trim();
        const address = addForm.address.value.trim();
        const phone = addForm.phone.value.trim();
        let error = "";
        if (!name || !email || !address || !phone) {
            error = "Vui lòng nhập đầy đủ thông tin.";
        } else if (!/^0\d{9}$/.test(phone)) {
            error = "Số điện thoại phải có 10 ký tự và bắt đầu bằng số 0.";
        }
        if (error) {
            const errDiv = document.createElement('div');
            errDiv.className = 'form-error';
            errDiv.style.color = 'red';
            errDiv.style.marginBottom = '10px';
            errDiv.textContent = error;
            addForm.insertBefore(errDiv, addForm.firstChild);
            return;
        }
        // Nếu hợp lệ, có thể xử lý thêm dữ liệu vào bảng hoặc CSDL
        alert('Thêm nhân viên thành công!');
        addEmployeeForm.style.display = 'none';
        addForm.reset();
    });
}
// Modal Add Employee
const openAddModal = document.getElementById('openAddModal');
const addEmployeeModal = document.getElementById('addEmployeeModal');
const closeAddModal = document.getElementById('closeAddModal');
const cancelAddModal = document.getElementById('cancelAddModal');

openAddModal.addEventListener('click', () => {
    addEmployeeModal.classList.add('show');
});
closeAddModal.addEventListener('click', () => {
    addEmployeeModal.classList.remove('show');
});
cancelAddModal.addEventListener('click', () => {
    addEmployeeModal.classList.remove('show');
});
