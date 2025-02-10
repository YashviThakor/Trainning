export function renderContent(containerId, htmlContent) {
  document.getElementById(containerId).innerHTML = htmlContent;
}
export function showToast(message, type = "success") {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: type === "success" ? "#28a745" : "#dc3545",
      color: "white",
    },
  }).showToast();
}
