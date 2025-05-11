function handleClick(name) {
  alert(name + " button clicked!");
}

document.querySelectorAll('.partner').forEach((el, i) => {
  setTimeout(() => {
    el.style.opacity = '1';
  }, 300 + i * 300);
});
