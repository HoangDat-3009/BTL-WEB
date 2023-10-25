// Hiển thị dữ liệu ban đầu
document.addEventListener("DOMContentLoaded", function () {
  displayData();
  updatePageButtons();
});
const itemsPerPage = 10; // Số hàng trên mỗi trang
let currentPage = 1;
function displayData() {
  const dataTable = document.getElementById("data-table");
  const rows = dataTable.querySelectorAll("tr");
  const numRows = rows.length;

  // Bỏ qua hàng tiêu đề
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, numRows);

  // Ẩn tất cả các hàng trước khi hiển thị lại
  for (let i = 0; i < numRows; i++) {
    rows[i].style.display = "none";
  }

  // Hiển thị các hàng ở trang hiện tại
  for (let i = startIndex; i < endIndex; i++) {
    rows[i].style.display = "";
  }
}
// Hàm cập nhật nút trang cụ thể
function updatePageButtons() {
  const dataTable = document.getElementById("data-table");
  const rows = dataTable.querySelectorAll("tr");
  const numRows = rows.length;

  const totalPages = Math.ceil(numRows / itemsPerPage);
  const pageButtons = document.getElementById("page-buttons");
  pageButtons.innerHTML = "";

  let startPage, endPage;
  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 2) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", function () {
      currentPage = i;
      displayData();
      updatePageButtons();
    });
    pageButtons.appendChild(pageButton);
  }
}

// Hàm xử lý khi nhấn nút "Trang đầu"
function firstPage() {
  currentPage = 1;
  displayData();
  updatePageButtons();
}

// Hàm xử lý khi nhấn nút "Trang cuối"
function lastPage() {
  const dataTable = document.getElementById("data-table");
  const rows = dataTable.querySelectorAll("tr");
  const numRows = rows.length;
  const totalPages = Math.ceil(numRows / itemsPerPage);
  currentPage = totalPages;
  displayData();
  updatePageButtons();
}
// Hàm xử lý khi nhấn nút "Trang trước"
function previousPage() {
  if (currentPage > 1) {
    currentPage -= 1;
    displayData();
    updatePageButtons();
  }
}

// Hàm xử lý khi nhấn nút "Trang sau"
function nextPage() {
  const dataTable = document.getElementById("data-table");
  const rows = dataTable.querySelectorAll("tr");
  const numRows = rows.length;
  const totalPages = Math.ceil(numRows / itemsPerPage);

  if (currentPage < totalPages) {
    currentPage += 1;
    displayData();
    updatePageButtons();
  }
}
// Kết nối các nút với các hàm xử lý
document.getElementById("first-page").addEventListener("click", firstPage);
document
  .getElementById("previous-page")
  .addEventListener("click", previousPage);
document.getElementById("next-page").addEventListener("click", nextPage);
document.getElementById("last-page").addEventListener("click", lastPage);

// begin search informationPersonnel
var input = document.getElementById("searchInput");
var table = document.getElementById("informationPersonnel");
input.addEventListener("input", function () {
  var searchText = input.value.toLowerCase();
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var found = false;
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      if (cell.textContent.toLowerCase().indexOf(searchText) > -1) {
        found = true;
        break;
      }
    }
    if (found) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
// end of search informationPersonnel

// chek input

function checknoteTimekeeping() {
  var NamenoteTimekeeping = getElementById("NamenoteTimekeeping");
  var IDnoteTimekeeping = getElementById("IDnoteTimekeeping");
  var DatenoteTimekeeping = getElementById("DatenoteTimekeeping");
  var NoteTimekeeping = getElementById("NoteTimekeeping");
  if (
    NamenoteTimekeeping.value === "" ||
    IDnoteTimekeeping.value === "" ||
    DatenoteTimekeeping.value === "" ||
    NoteTimekeeping.value === ""
  ) {
    alert("Hãy nhập đày đủ thông tin");
  } else {
    alert("Đã nhập thành công ghi chú");
  }
}

