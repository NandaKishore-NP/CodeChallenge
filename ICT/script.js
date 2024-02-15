var productPrices = {
    "1": 30000, 
    "2": 50000, 
    "3": 20000  
};

function calculateBagTotal() {
    var quantity = document.getElementById('quantity').value;
    var product = document.getElementById('product').value;
    var mode = document.getElementById('mode').value;
    var bagTotal = quantity * productPrices[product];
    if (mode == "2") { 
        bagTotal *= 0.95; 
    }
    return bagTotal;
}

function calculateCoupon() {
    var bagTotal = calculateBagTotal();
    var customerName = document.getElementById('custname').value;
    var prefix = customerName.substring(0, 3).toUpperCase();
    if (bagTotal >= 100000) {
        return prefix + String(bagTotal).substring(0, 4);
    } else {
        return prefix + "0000";
    }
}

function disableSubmit() {
    document.getElementById('submit').disabled = true;
}

function activateButton(checkbox) {
    if (checkbox.checked) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}

function calculateFinalAmount() {
    var bagTotal = calculateBagTotal();
    var coupon = calculateCoupon();
    var delivery = document.querySelector('input[name="delivery"]:checked').value;
    var deliveryCharge = (delivery == "Express") ? 500 : 0;
    var finalAmount = bagTotal - Number(coupon.substring(3)) + deliveryCharge;

    var customerName = document.getElementById('custname').value;
    var email = document.getElementById('email').value;
    var deliveryTime = (delivery == "Express") ? "24" : "72";

    var resultMessage = "Dear " + customerName + ",\n" +
                        "Your Final bill is Rs : " + finalAmount + "/-, Product will be " +
                        "delivered in next " + deliveryTime + " hrs.\n" +
                        "Invoice Copy is mailed on : " + email;

    document.getElementById('result').innerHTML = resultMessage;
    return false;
}
