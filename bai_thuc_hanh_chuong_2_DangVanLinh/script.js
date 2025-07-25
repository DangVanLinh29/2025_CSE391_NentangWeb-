let editingRow = null;

// Chuyển đổi các <a> Sửa/Xóa mẫu thành <button> khi trang load
window.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById("bangSinhVien").getElementsByTagName("tbody")[0];
    for (let row of table.rows) {
        let cell = row.cells[6];
        if (cell) {
            cell.innerHTML = '<button onclick="suaDong(this)">Sửa</button> <button onclick="xoaDong(this)">Xóa</button>';
        }
    }
});

document.getElementById("btnThem").addEventListener("click", function (event) {
    event.preventDefault();
    let masv = document.getElementById("masv").value.trim();
    let hoten = document.getElementById("hoten").value.trim();
    let email = document.getElementById("email").value.trim();
    let ngaysinh = document.getElementById("ngaysinh").value;
    let radios = document.getElementsByName("gioitinh");
    let gioitinh = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gioitinh = radios[i].value;
            break;
        }
    }

    if (editingRow) {
        // Cập nhật dòng đang sửa
        editingRow.cells[1].innerText = masv;
        editingRow.cells[2].innerText = hoten;
        editingRow.cells[3].innerText = email;
        editingRow.cells[4].innerText = gioitinh;
        editingRow.cells[5].innerText = ngaysinh;
        document.getElementById("thongBao").innerText = "Cập nhật sinh viên thành công!";
        setTimeout(() => {
            document.getElementById("thongBao").innerText = "";
        }, 2000);
        editingRow = null;
        document.getElementById("btnThem").innerText = "Thêm sinh viên";
    } else {
        // Thêm dòng mới vào bảng
        let table = document.getElementById("bangSinhVien").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow();
        let stt = table.rows.length;
        newRow.insertCell(0).innerText = stt;
        newRow.insertCell(1).innerText = masv;
        newRow.insertCell(2).innerText = hoten;
        newRow.insertCell(3).innerText = email;
        newRow.insertCell(4).innerText = gioitinh;
        newRow.insertCell(5).innerText = ngaysinh;
        newRow.insertCell(6).innerHTML = '<button onclick="suaDong(this)">Sửa</button> <button onclick="xoaDong(this)">Xóa</button>';
        document.getElementById("thongBao").innerText = "Thêm sinh viên thành công!";
        setTimeout(() => {
            document.getElementById("thongBao").innerText = "";
        }, 2000);
    }
    document.querySelector("form").reset();
});

/*function xoaDong(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    let table = document.getElementById("bangSinhVien").getElementsByTagName("tbody")[0];
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerText = i + 1;
    }
    if (editingRow === row) {
        editingRow = null;
        document.getElementById("btnThem").innerText = "Thêm sinh viên";
        document.querySelector("form").reset();
    }
}

function suaDong(btn) {
    let row = btn.parentNode.parentNode;
    editingRow = row;
    document.getElementById("masv").value = row.cells[1].innerText;
    document.getElementById("hoten").value = row.cells[2].innerText;
    document.getElementById("email").value = row.cells[3].innerText;
    let gioitinh = row.cells[4].innerText;
    let radios = document.getElementsByName("gioitinh");
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = radios[i].value === gioitinh;
    }
    document.getElementById("ngaysinh").value = row.cells[5].innerText;
    document.getElementById("btnThem").innerText = "Cập nhật";
}*/