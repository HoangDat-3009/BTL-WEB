const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
	item.addEventListener("click", () => {
		let isActive = item.classList.contains("active");

		listItems.forEach((el) => {
			el.classList.remove("active");
		});

		if (isActive) item.classList.remove("active");
		else item.classList.add("active");
	});
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
	sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
	sidebar.classList.toggle("close");
});

// ----------------------MAIN --------------------
$(".menu-btn").click(function () {
	$(".home").toggleClass("active");
})

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const home = document.getElementById('home');

menuBar.addEventListener('click', function () {
	home.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})
