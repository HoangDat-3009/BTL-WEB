function selectService(button) {
    var buttons = document.getElementsByName("service");
    buttons.forEach(function (btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
    document.getElementById('selectedService').value = button.value;
}
function createOrder() {
    // Thực hiện tạo đơn hàng
    alert("Đơn hàng đã được tạo thành công!");
}
function calculatePrice() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        var price = length * width * height;
        document.getElementById("priceResult").innerHTML = "Giá cước: " + price + " đ";

        // Cập nhật tổng cước
        updateTotalPrice();
    } else {
        document.getElementById("priceResult").innerHTML = "Vui lòng nhập đủ kích thước.";
    }
}

function updateTotalPrice() {
    var price = parseFloat(document.getElementById("priceResult").innerText.match(/\d+/)[0]);
    var codAmount = parseFloat(document.getElementById("cod").value);

    // Kiểm tra nếu mã khuyến mãi đúng
    var promoCode = document.getElementById("promoCode").value;
    var discountAmount = 0;
    if (promoCode === "HUNGDEPZAI") {
        discountAmount = 300000;
    }
    var totalPrice = price + codAmount - discountAmount;

    // Hiển thị giá trị
    document.getElementById("totalPrice").innerHTML = totalPrice + " VNĐ";
    document.getElementById("discountAmount").innerHTML = discountAmount + " VNĐ";

    // Cập nhật thời gian giao hàng
    var estimatedDeliveryTime = "3-4 ngày";
    document.getElementById("deliveryTime").innerHTML = estimatedDeliveryTime;
}

document.getElementById("length").addEventListener("input", calculatePrice);
document.getElementById("width").addEventListener("input", calculatePrice);
document.getElementById("height").addEventListener("input", calculatePrice);
document.getElementById("cod").addEventListener("input", updateTotalPrice);
document.getElementById("promoCode").addEventListener("input", updateTotalPrice);

//
const countrySelect = document.getElementById('country');
        const stateSelect = document.getElementById('state');
        const citySelect = document.getElementById('city');

        fetch('vn.json')
            .then(response => response.json())
            .then(data => {
                // Populate the country options
                data.data.forEach(level1 => {
                    const option = document.createElement('option');
                    option.text = level1.name.replace("Thành phố ", "").replace("Tỉnh ", "");
                    option.value = level1.level1_id;
                    countrySelect.appendChild(option);
                });
            });

        // Add event listener to update state options when the country changes
        countrySelect.addEventListener('change', function () {
            const selectedCountry = this.value;

            // Clear the state and city options
            stateSelect.innerHTML = '<option value="">Select State</option>';
            citySelect.innerHTML = '<option value="">Select City</option>';

            fetch('vn.json')
                .then(response => response.json())
                .then(data => {
                    const selectedCountryData = data.data.find(level1 => level1.level1_id === selectedCountry);

                    if (selectedCountryData) {
                        // Populate the state options based on the selected country
                        selectedCountryData.level2s.forEach(level2 => {
                            const option = document.createElement('option');
                            option.text = level2.name.replace("Quận ", "").replace("Huyện ", "").replace("Thành phố ", "").replace("Thành Phố ", "");
                            option.value = level2.level2_id;
                            stateSelect.appendChild(option);
                        });
                    }
                });
        });

        // Add event listener to update city options when the state changes
        stateSelect.addEventListener('change', function () {
            const selectedState = this.value;

            // Clear the city options
            citySelect.innerHTML = '<option value="">Select City</option>';

            fetch('vn.json')
                .then(response => response.json())
                .then(data => {
                    const selectedCountryCode = countrySelect.value;
                    const selectedCountryData = data.data.find(level1 => level1.level1_id === selectedCountryCode);

                    if (selectedCountryData) {
                        const selectedStateData = selectedCountryData.level2s.find(level2 => level2.level2_id === selectedState);

                        if (selectedStateData) {
                            // Populate the city options based on the selected state
                            selectedStateData.level3s.forEach(level3 => {
                                const option = document.createElement('option');
                                option.text = level3.name.replace("Xã ", "").replace("Phường ", "");
                                option.value = level3.level3_id;
                                citySelect.appendChild(option);
                            });
                        }
                    }
                });
        });
        const countrySelect1 = document.getElementById('country2');
        const stateSelect1 = document.getElementById('state2');
        const citySelect1 = document.getElementById('city2');

        fetch('vn.json')
            .then(response => response.json())
            .then(data => {
                // Populate the country options
                data.data.forEach(level1 => {
                    const option = document.createElement('option');
                    option.text = level1.name.replace("Thành phố ", "").replace("Tỉnh ", "");
                    option.value = level1.level1_id;
                    countrySelect1.appendChild(option);
                });
            });

        // Add event listener to update state options when the country changes
        countrySelect1.addEventListener('change', function () {
            const selectedCountry = this.value;

            // Clear the state and city options
            stateSelect1.innerHTML = '<option value="">Select State</option>';
            citySelect1.innerHTML = '<option value="">Select City</option>';

            fetch('vn.json')
                .then(response => response.json())
                .then(data => {
                    const selectedCountryData = data.data.find(level1 => level1.level1_id === selectedCountry);

                    if (selectedCountryData) {
                        // Populate the state options based on the selected country
                        selectedCountryData.level2s.forEach(level2 => {
                            const option = document.createElement('option');
                            option.text = level2.name.replace("Quận ", "").replace("Huyện ", "").replace("Thành phố ", "").replace("Thành Phố ", "");
                            option.value = level2.level2_id;
                            stateSelect1.appendChild(option);
                        });
                    }
                });
        });

        // Add event listener to update city options when the state changes
        stateSelect1.addEventListener('change', function () {
            const selectedState = this.value;

            // Clear the city options
            citySelect1.innerHTML = '<option value="">Select City</option>';

            fetch('vn.json')
                .then(response => response.json())
                .then(data => {
                    const selectedCountryCode = countrySelect1.value;
                    const selectedCountryData = data.data.find(level1 => level1.level1_id === selectedCountryCode);

                    if (selectedCountryData) {
                        const selectedStateData = selectedCountryData.level2s.find(level2 => level2.level2_id === selectedState);

                        if (selectedStateData) {
                            // Populate the city options based on the selected state
                            selectedStateData.level3s.forEach(level3 => {
                                const option = document.createElement('option');
                                option.text = level3.name.replace("Xã ", "").replace("Phường ", "");
                                option.value = level3.level3_id;
                                citySelect1.appendChild(option);
                            });
                        }
                    }
                });
        });