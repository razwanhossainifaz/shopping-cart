// add iPhone in cart

const iphoneBtn = document.getElementById("iphonePlus")
iphoneBtn.addEventListener("click" , function(){
    const iphoneNumber = document.getElementById("iphoneNumber").value;
    const currentIphoneNum = parseFloat(iphoneNumber);
    document.getElementById("iphoneNumber").value = currentIphoneNum + 1;
    const currentIphonePrice = document.getElementById("currentIphonePrice").innerText;
    const iphonePriceNum = parseFloat(currentIphonePrice);
    document.getElementById("currentIphonePrice").innerText = iphonePriceNum + 1219;
    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNum = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = subTotalNum + 1278;
    const tax = document.getElementById("tax").innerText;
    const taxNum = parseFloat(tax);
    document.getElementById("tax").innerText = taxNum + 2;
    const total = document.getElementById("total").innerText;
    const totalNum = parseFloat(total);
    document.getElementById("total").innerText = totalNum + 1280;

})