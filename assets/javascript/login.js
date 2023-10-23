// begin check input
// const btnLogIn = document.getElementById("btn-log-in");
// btnLogIn?.addEventListener("click", function () {
//     event.preventDefault()
//     var userName = document.getElementById("userName");
//     var passwordInput = document.getElementById("passwordInput");
//     if (userName.value == "" && passwordInput.value == "") {
//         alert("Vui lòng nhập đầy đủ thông tin");
//     }
//     else if (userName.value == "") {
//         alert("Vui lòng nhập tên tài khoản");
//     }else if(userName.value.length < 6){
//         alert('Tài khoản phải có ít nhất 6 kí tự');
//     } else if (passwordInput.value == "") {
//         alert("Vui lòng nhập mật khẩu");
//     } else if (passwordInput.value.length < 8) {
//         alert("Mật khẩu phải có ít nhất 8 ký tự");
//     } else if (!/[A-Z]/.test(passwordInput.value)) {
//         alert("Mật khẩu phải chứa ít nhất 1 chữ in hoa");
//     } else if (!/[!@#$%^&*]/.test(passwordInput.value)) {
//         alert("Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%^&*)");
//     } else if (!/\d/.test(passwordInput.value)) {
//         alert("Mật khẩu phải chứa ít nhất 1 số");
//     }
//     else {
//         alert("Đăng nhập thành công");
//         window.location.href = '/index.html';
//     }
// });
const listAccount =[
    {
        userName: 'hoangdat',
        passwordInput:'HoangDat39@'
    },
    {
        userName: 'thuyduong',
        passwordInput:'ThuyDuong68@'
    },
    {
        userName: 'duybien',
        passwordInput:'DuyBien09@'
    },
    {
        userName: 'duchung',
        passwordInput:'DucHung01'
    },
    {
        userName: 'haidang',
        passwordInput:'HaiDang123@'
    },
]
// let isLogin =!!localStorage.getItem('isLogin');
let isLogin =localStorage.getItem('token') ? true : false;
function Checkinput(){
    if(isLogin){
        window.location.href = './index.html';
    }
    window.localStorage.clear();

}
function Login(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("passwordInput").value;
    let checkLogin = listAccount.some(value => value.userName === userName && value.passwordInput === password);
    if(checkLogin) {
        localStorage.setItem('token', userName);
        isLogin = true;
        Checkinput();
    }else {
        alert("Tài khoản hoặc mật khẩu không đúng");
    }
}
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