window.onload = function() {
    var element = document.getElementById('contact');
    element.scrollIntoView();
};


const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Vô hiệu hóa nút submit
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const province = document.getElementById('province').value;
    const message = document.getElementById('message').value;

    fetch('https://script.google.com/macros/s/AKfycbzazkxh0VJRJQfxS-LyyBb_3Mqo_bQNamgc54_VXRP-5kd-UbRh5D3KAwvqJLAuJV4I/exec', {
            method: 'POST',
            body: new URLSearchParams({
                fullname: fullname,
                phone: phone,
                province: province,
                message: message
            })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            form.reset();
            // Bật lại nút submit sau khi lưu thành công
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Đã xảy ra lỗi!');
            // Bật lại nút submit nếu có lỗi
            submitButton.disabled = false;
        });
});