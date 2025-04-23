
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");
  cartData.items.forEach(item => {
    const tag = `${item.type}-card`;
    const el = document.createElement(tag);
    el.setAttribute("config", JSON.stringify(item));
    container.appendChild(el);
  });
});
