

// item page

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
// sort
var isSortByNameClicked = false;
var isSortByDateClicked = false;
// sort default values
function defaultPage() {
  isSortByNameClicked = false;
  isSortByDateClicked = false;
  location.reload();
}

// sort by name
function sortByName() {
  if (isSortByNameClicked) {
    return;
  }
  isSortByNameClicked = true;
  isSortByDateClicked = false;
  // Lấy phần tử bảng
  var table = document.getElementById("informationPersonnel");
  var tbody = table.getElementsByTagName("tbody")[0];

  // Lấy các hàng và chuyển chúng thành một mảng
  var rows = Array.from(tbody.getElementsByTagName("tr"));

  // Sắp xếp các hàng dựa trên nội dung của ô đầu tiên (tên)
  rows.sort(function (a, b) {
    var nameA = a.getElementsByTagName("td")[2].textContent;
    var nameB = b.getElementsByTagName("td")[2].textContent;
    return nameA.localeCompare(nameB);
  });

  // Xóa phần thân của bảng
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // Thêm các hàng đã sắp xếp trở lại vào bảng
  rows.forEach(function (row) {
    tbody.appendChild(row);
  });
  // danh so thu tu tu dong
  // Lấy danh sách tất cả các hàng (tr) trong bảng
  var row = document.querySelectorAll("#data-table tr");

  // Lặp qua từng hàng
  for (var i = 0; i < row.length; i++) {
    // Lấy thẻ td đầu tiên trong hàng hiện tại
    var firstCell = row[i].querySelector("td");

    // Gán số thứ tự cho thẻ td đầu tiên
    firstCell.textContent = i + 1;
  }
  isSortByNameClicked = false;
  displayData();
  updatePageButtons();
}

// sort by date
function sortByDate() {
  if (isSortByDateClicked) {
    return;
  }
  isSortByNameClicked = false;
  isSortByDateClicked = true;
  
  // Lấy bảng của bạn
  var table = document.getElementById("data-table");

  // Lấy tất cả các hàng trong bảng của bạn
  var rows = table.rows;

  // Chuyển NodeList thành Mảng
  var arrayOfRows = Array.prototype.slice.call(rows, 1); // Loại trừ hàng tiêu đề

  // Sắp xếp mảng các hàng dựa trên ngày trong cột đầu tiên
  arrayOfRows.sort(function (rowA, rowB) {
    var dateA = rowA.cells[7].innerHTML.split("/").reverse().join("-");
    var dateB = rowB.cells[7].innerHTML.split("/").reverse().join("-");
    return new Date(dateA) - new Date(dateB);
  });

  // Thêm từng hàng vào bảng
  for (var i = 0; i < arrayOfRows.length; i++) {
    table.appendChild(arrayOfRows[i]);
  }
  // danh so thu tu tu dong
  // Lấy danh sách tất cả các hàng (tr) trong bảng
  var row = document.querySelectorAll("#data-table tr");

  // Lặp qua từng hàng
  for (var i = 0; i < row.length; i++) {
    // Lấy thẻ td đầu tiên trong hàng hiện tại
    var firstCell = row[i].querySelector("td");

    // Gán số thứ tự cho thẻ td đầu tiên
    firstCell.textContent = i + 1;
  }
  isSortByDateClicked = false;
  displayData();
  updatePageButtons();
}


// check input pop up
const btnCreatePersonnel = document.getElementById("createPersonnel");
btnCreatePersonnel?.addEventListener("click",function(){
  event.preventDefault()
  var checkName = document.getElementById("name");
  var checkMNV = document.getElementById("MNV");
  var firstName = document.getElementById("firstName");
  var phoneNumber = document.getElementById("phoneNumber");
  var email = document.getElementById("email");
  var date = document.getElementById("date");
  var office = document.getElementById("office");
  var job = document.getElementById("job");
  if(checkName.value==""||checkMNV.value==""||firstName.value==""||phoneNumber.value==""||email.value==""||date.value==""||office.value==""||job.value==""){
    alert("Vui lòng nhập đầy đủ thông tin");
  }else if(!/[@]/.test(email.value)){
    alert("Email phải có kí tự @");
  }else{
    alert('Thêm nhân viên thành công!')
  }

});
