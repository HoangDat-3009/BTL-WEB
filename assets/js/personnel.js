

// item page

// hien thi du lieu khi vao trang
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

  // an cac hang
  for (let i = 0; i < numRows; i++) {
    rows[i].style.display = "none";
  }

  // hien thi cac hang o trang hien tai
  for (let i = startIndex; i < endIndex; i++) {
    rows[i].style.display = "";
  }
}
// ham cap nhap nut trang
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

// nut trang dau
function firstPage() {
  currentPage = 1;
  displayData();
  updatePageButtons();
}

// nut trang cuoi
function lastPage() {
  const dataTable = document.getElementById("data-table");
  const rows = dataTable.querySelectorAll("tr");
  const numRows = rows.length;
  const totalPages = Math.ceil(numRows / itemsPerPage);
  currentPage = totalPages;
  displayData();
  updatePageButtons();
}
// nut trang truoc
function previousPage() {
  if (currentPage > 1) {
    currentPage -= 1;
    displayData();
    updatePageButtons();
  }
}

// trang sau
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
// ket noi nut voi ham
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

  // lay hang va chuyen no thanh mang
  var rows = Array.from(tbody.getElementsByTagName("tr"));

  // sap xep noi dung dua tren o ten
  rows.sort(function (a, b) {
    var nameA = a.getElementsByTagName("td")[2].textContent;
    var nameB = b.getElementsByTagName("td")[2].textContent;
    return nameA.localeCompare(nameB);
  });

  // xoa phan than bang
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // them hang da sap xep vao
  rows.forEach(function (row) {
    tbody.appendChild(row);
  });
  // danh so thu tu tu dong
  //lay danh sach cac so tu bang
  var row = document.querySelectorAll("#data-table tr");

  // lap qua tung hang
  for (var i = 0; i < row.length; i++) {
    // Lấy thẻ td đầu tiên trong hàng hiện tại
    var firstCell = row[i].querySelector("td");

    // gan so tu dong cho o dau 
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
  
  // lay bang
  var table = document.getElementById("data-table");

  // lay cac hang trong mang
  var rows = table.rows;

  // chuyen thanh mang
  var arrayOfRows = Array.prototype.slice.call(rows, 1); 

  // sap xep mang cac hang dua tren cot ngay tham gia
  arrayOfRows.sort(function (rowA, rowB) {
    var dateA = rowA.cells[7].innerHTML.split("/").reverse().join("-");
    var dateB = rowB.cells[7].innerHTML.split("/").reverse().join("-");
    return new Date(dateA) - new Date(dateB);
  });

  // them tung hang vao mang
  for (var i = 0; i < arrayOfRows.length; i++) {
    table.appendChild(arrayOfRows[i]);
  }
  // danh so thu tu tu dong
  // lay cac hang trong bang
  var row = document.querySelectorAll("#data-table tr");

  // lap qua cac hang
  for (var i = 0; i < row.length; i++) {
    // Lấy thẻ td đầu tiên trong hàng hiện tại
    var firstCell = row[i].querySelector("td");

    // gan so thu tu tu dong cho the dau tien
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
