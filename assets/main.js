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



let currentIndex = 0;
const cards = document.querySelectorAll('.profile-card');
const totalCards = cards.length;

function showCards() {
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + getCardsPerView()) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function getCardsPerView() {
    return window.innerWidth <= 767 ? 1 : 3; // 1 thẻ trên điện thoại, 3 thẻ trên máy tính
}

function next() {
    if (currentIndex < totalCards - getCardsPerView()) {
        currentIndex++;
    } else {
        currentIndex = 0; // Quay lại thẻ đầu tiên nếu đang ở thẻ cuối
    }
    showCards();
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - getCardsPerView(); // Quay lại thẻ cuối nếu đang ở thẻ đầu
    }
    showCards();
}

document.getElementById('nextBtn').addEventListener('click', next);
document.getElementById('prevBtn').addEventListener('click', prev);

// Khởi tạo hiển thị thẻ đầu tiên
showCards();

// Cập nhật khi thay đổi kích thước màn hình
window.addEventListener('resize', showCards);