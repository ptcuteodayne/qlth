document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của việc gửi form

    // Lấy giá trị từ các trường input
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Kiểm tra xem tên đăng nhập có tồn tại trong Local Storage không
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Kiểm tra mật khẩu
      if (password === user.password) {
        alert("Đăng nhập thành công!");
        // Đặt biến isLoggedIn trong localStorage để chỉ định rằng người dùng đã đăng nhập
        localStorage.setItem("isLoggedIn", true);
        // Chuyển hướng đến trang index
        window.location.href = "/vn/admin/user.html";
        if (password === user.password) {
        }
      } else {
        alert("Mật khẩu không chính xác. Vui lòng thử lại!");
      }
    } else {
      alert("Tên đăng nhập không tồn tại. Vui lòng đăng ký tài khoản!");
    }
  });
});
