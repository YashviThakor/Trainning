declare var Toastify: any;

export function showToast(message: string, type: string = "success") {
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
