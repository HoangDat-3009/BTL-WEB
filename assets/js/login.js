// begin check input
const listAccount =[
    {
        userName: 'admin',
        passwordInput:'admin'
    }
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
