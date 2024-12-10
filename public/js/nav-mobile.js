document.querySelectorAll(".menu__item").forEach((item) => {
  item.addEventListener("click", function () {
    const checkboxId = this.dataset.checkbox;
    const checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
    const url = this.dataset.url;
    if (checkbox) {
        checkbox.checked = true;
      }

      window.location.href = url;
  });
});
