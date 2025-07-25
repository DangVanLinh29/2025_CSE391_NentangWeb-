document.getElementById('helloForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('yourName').value.trim();
    if(name) {
        alert(`Xin chào, ${name}!`);
    }
});

// Tính tổng 2 số
document.getElementById('sumForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('sumResult').textContent = `Tổng: ${num1 + num2}`;
    } else {
        document.getElementById('sumResult').textContent = 'Vui lòng nhập số hợp lệ';
    }
});         