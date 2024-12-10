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
  let isDragging = false;
  let currentX = 0;

  // Cập nhật vị trí slider
  function updateSliderPosition(transition = true) {
    slider.style.transition = transition ? "transform 0.3s ease" : "none";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Hàm tự động chạy
  function startAutoPlay() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
        updateSliderPosition(false);
      }
      setTimeout(() => updateSliderPosition(), 20);
    }, 3000);
  }

  // Hàm dừng autoplay
  function stopAutoPlay() {
    clearInterval(autoSlideInterval);
  }

  // Chuyển đến slide tiếp theo
  function changeSlide(direction) {
    stopAutoPlay();
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % slides.length;
    } else if (direction === "prev") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateSliderPosition();
    startAutoPlay();
  }

  // Xử lý sự kiện kéo
  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isDragging = true;
    stopAutoPlay();
    slider.style.transition = "none"; // Tắt animation khi kéo
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    slider.style.transform = `translateX(calc(${-currentIndex * 100}% + ${currentX}px))`;
  });

  slider.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    // Xác định xem có đủ kéo để chuyển slide không
    if (Math.abs(currentX) > 50) {
      if (currentX < 0) {
        currentIndex++;
      } else {
        currentIndex--;
      }
    }

    // Đảm bảo currentIndex hợp lệ
    currentIndex = (currentIndex + slides.length) % slides.length;

    updateSliderPosition();
    startAutoPlay();
  });

  slider.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      updateSliderPosition();
    }
  });

  // Gắn sự kiện cho nút next và prev
  nextButton.addEventListener("click", () => changeSlide("next"));
  prevButton.addEventListener("click", () => changeSlide("prev"));

  // Khởi động autoplay
  startAutoPlay();
}
