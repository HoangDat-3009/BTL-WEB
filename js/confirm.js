function confirmOrder(button) {
    var row = button.closest('tr');
    row.remove();
}

function cancelOrder(button) {
    var row = button.closest('tr');
    var note = row.querySelector('.note').value;
    if (note.trim() === '') {
        alert('Bạn phải nhập lí do vào ghi chú trước khi huỷ đơn hàng.');
    } else {
        row.remove();
    }
}