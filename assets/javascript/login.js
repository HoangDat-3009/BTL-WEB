// begin check input
const btnLogIn = document.getElementById("btn-log-in");
btnLogIn?.addEventListener("click", function () {
    event.preventDefault()
    var userName = document.getElementById("userName");
    var passwordInput = document.getElementById("passwordInput");
    if (userName.value == "" && passwordInput.value == "") {
        alert("Vui lòng nhập đầy đủ thông tin");
    }
    else if (userName.value == "") {
        alert("Vui lòng nhập tên tài khoản");
    }else if(userName.value.length < 6){
        alert('Tài khoản phải có ít nhất 6 kí tự');
    } else if (passwordInput.value == "") {
        alert("Vui lòng nhập mật khẩu");
    } else if (passwordInput.value.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự");
    } else if (!/[A-Z]/.test(passwordInput.value)) {
        alert("Mật khẩu phải chứa ít nhất 1 chữ in hoa");
    } else if (!/[!@#$%^&*]/.test(passwordInput.value)) {
        alert("Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%^&*)");
    } else if (!/\d/.test(passwordInput.value)) {
        alert("Mật khẩu phải chứa ít nhất 1 số");
    }
    else {
        alert("Đăng nhập thành công");
        window.location.href = '/index.html';
    }
});
// end check input
// begin show password
const inputPwd = document.getElementById("passwordInput");
const btnIcon = document.getElementById("togglePassword");
btnIcon?.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của nút
    const inputType = inputPwd?.getAttribute("type");
    inputPwd?.setAttribute(
        "type",
        inputType === "password" ? "text" : "password"
    );
    const icons = this.children;
    [...icons]?.forEach((item) => item.classList.toggle("fa-eye"));
});


// end show password