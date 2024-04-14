document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của việc gửi form

    // Lấy giá trị từ các trường input
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[0]
      .value;

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp. Vui lòng nhập lại!");
      return;
    }

    // Kiểm tra xem username đã tồn tại trong Local Storage chưa
    if (localStorage.getItem(username)) {
      alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác!");
      return;
    }

    // Lưu thông tin tài khoản vào Local Storage
    const user = {
      username: username,
      password: password,
    };
    localStorage.setItem(username, JSON.stringify(user));

    // Thông báo đăng ký thành công
    alert("Đăng ký tài khoản thành công!");
    window.location.href = "/vn/login.html";
    // Reset form
    form.reset();
  });
});
