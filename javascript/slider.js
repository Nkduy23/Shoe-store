document.addEventListener("DOMContentLoaded", () => {
  initImageUpdate();
  initSlider();
});

// Hàm xử lú logic đổi ảnh
function initImageUpdate() {
  const images = document.querySelectorAll(".slider__img");

  function updateImageSources() {
    images.forEach((img) => {
      const largeSrc = img.getAttribute("data-large");
      const smallSrc = img.getAttribute("data-small");
      const currentSrc = img.getAttribute("src");

      if (window.innerWidth <= 768 && currentSrc !== smallSrc) {
        img.setAttribute("src", smallSrc);
      } else if (window.innerWidth > 768 && currentSrc !== largeSrc) {
        img.setAttribute("src", largeSrc);
      }
    });
  }
  updateImageSources();
  window.addEventListener("resize", updateImageSources);
}

// Hàm thêm tính năng chuyển ảnh và tự động chuyển ảnh
function initSlider() {
  const slider = document.querySelector(".slider__wrap");
  const slides = document.querySelectorAll(".slider__img");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  let currentIndex = 0;
  let autoSlideInterval;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  // Cập nhật vị trí slider
  function updateSliderPosition(transition = true) {
    slider.style.transition = transition ? "transform 0.3s ease" : "none";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Chuyển đến slide tiếp theo hoặc trước
  function changeSlide(direction) {
    clearInterval(autoSlideInterval);
    if (direction === "next") {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
        updateSliderPosition(false); // Nhảy ngay về slide đầu tiên
      }
    } else if (direction === "prev") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
        updateSliderPosition(false); // Nhảy ngay về slide cuối cùng
      }
    }
    setTimeout(() => {
      updateSliderPosition();
    }, 20);
    startAutoPlay();
  }

  // Hàm tự động chạy
  function startAutoPlay() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
        updateSliderPosition(false); // Nhảy ngay về slide đầu tiên
      }
      setTimeout(() => {
        updateSliderPosition();
      }, 20);
    }, 3000);
  }

  // Lắng nghe sự kiện khi bắt đầu kéo/chạm
  function startDragging(e) {
    startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    isDragging = true;
    slider.style.transition = "none";
  }

  // Lắng nghe sự kiện khi đang kéo/chạm
  function dragging(e) {
    if (!isDragging) return;
    const currentDragX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    currentX = currentDragX - startX;
    slider.style.transform = `translateX(calc(${-currentIndex * 100}% + ${currentX}px))`;
  }

  // Lắng nghe sự kiện khi kết thúc kéo/chạm
  function stopDragging() {
    if (!isDragging) return;
    isDragging = false;

    // Nếu kéo đủ xa (ví dụ: hơn 100px), chuyển slide
    if (Math.abs(currentX) > 100) {
      if (currentX < 0) {
        currentIndex++;
      } else {
        currentIndex--;
      }
    }

    // Đảm bảo currentIndex trong phạm vi hợp lệ
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    updateSliderPosition();
    startAutoPlay();
  }

  // Lắng nghe sự kiện khi rời chuột hoặc chạm
  slider.addEventListener("mouseleave", stopDragging);
  slider.addEventListener("mouseup", stopDragging);
  slider.addEventListener("touchend", stopDragging);

  // Gắn sự kiện cho nút next và prev
  nextButton.addEventListener("click", () => changeSlide("next"));
  prevButton.addEventListener("click", () => changeSlide("prev"));

  // Lắng nghe sự kiện khi bắt đầu kéo/chạm
  slider.addEventListener("mousedown", startDragging);
  slider.addEventListener("touchstart", startDragging);

  // Lắng nghe sự kiện khi đang kéo/chạm
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("touchmove", dragging);

  // Khởi chạy autoplay
  startAutoPlay();
}
