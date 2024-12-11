// Giả sử đây là thời gian kết thúc
const saleEndTime = new Date("2024-12-15T23:59:59").getTime();

// Hàm update thời gian
function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = saleEndTime - now;
    
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown__item-time").textContent = "Đã Kết Thúc Sale!";
        return;
    }

    // Tính toán thời gian
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Chọn tất cả các <span> theo class
    const countdownUnits =  document.querySelectorAll("#countdown__item-time .countdown-unit");

    // Cập nhật nội dung từng <span>
  countdownUnits[0].textContent = days.toString().padStart(2, "0"); // Ngày
  countdownUnits[1].textContent = hours.toString().padStart(2, "0"); // Giờ
  countdownUnits[2].textContent = minutes.toString().padStart(2, "0"); // Phút
  countdownUnits[3].textContent = seconds.toString().padStart(2, "0"); // Giây
}

// Gọi hàm đếm ngược mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);
// Gọi ngay lập tức để tránh delay 1 giây đầu tiên
updateCountdown();