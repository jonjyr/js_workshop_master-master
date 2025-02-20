// Exercise 3

function calculate() {
    let quantity = parseInt(document.forms["calcForm"]["quantity"].value);
    let price = parseFloat(document.forms["calcForm"]["price"].value);
    let tax = parseFloat(document.forms["calcForm"]["tax"].value);
    let discount = parseFloat(document.forms["calcForm"]["discount"].value);
    let shipping = parseFloat(document.forms["calcForm"]["shipping"].value);
    let total = null;

    if (quantity >= 100) {
        total = (quantity * price * (1 + (tax / 100)) * (1 - (discount * 2 / 100)) + shipping);
        document.getElementById("quantityDiscount").innerHTML = " <b>Bulk buy discount applied!</b>";
    } else {
        total = (quantity * price * (1 + (tax / 100)) * (1 - (discount / 100)) + shipping);
        document.getElementById("quantityDiscount").innerHTML = "";
    }

    if (total < 0) {
        total = 0;
    }

    document.getElementById("total").value = total.toFixed(2);
}