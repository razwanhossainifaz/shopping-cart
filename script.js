// add iPhone in cart

const iphonePlusBtn = document.getElementById("iphonePlus")
iphonePlusBtn.addEventListener("click" , function(){
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

// decrease iphone in cart

const iphoneMinusBtn = document.getElementById("iphoneMinus");
iphoneMinusBtn.addEventListener("click" , function(){
    const iphoneNumber = document.getElementById("iphoneNumber").value;
    const currentIphoneNum = parseFloat(iphoneNumber);
    document.getElementById("iphoneNumber").value = currentIphoneNum - 1;
    const currentIphonePrice = document.getElementById("currentIphonePrice").innerText;
    const iphoneNum = parseFloat(currentIphonePrice);
    document.getElementById("currentIphonePrice").innerText = iphoneNum - 1219;
    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNum = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = subTotalNum - 1278;
    const tax = document.getElementById("tax").innerText;
    const taxNum = parseFloat(tax);
    document.getElementById("tax").innerText = taxNum - 2;
    const total = document.getElementById("total").innerText;
    const totalNum = parseFloat(total);
    document.getElementById("total").innerText = totalNum - 1280;
})

// add iPhone case in cart

const casePlusBtn = document.getElementById("casePlus");
casePlusBtn.addEventListener("click", function(){
    const caseNumber = document.getElementById("caseNumber").value;
    const currentCaseNum = parseFloat(caseNumber);
    document.getElementById("caseNumber").value = currentCaseNum + 1;
    const currentCasePrice = document.getElementById("currentCasePrice").innerText;
    const casePriceNum = parseFloat(currentCasePrice);
    document.getElementById("currentCasePrice").innerText = casePriceNum + 59;
    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNum = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = subTotalNum + 59;
    const tax = document.getElementById("tax").innerText;
    const taxNum = parseFloat(tax);
    document.getElementById("tax").innerText = taxNum + 2;
    const total = document.getElementById("total").innerText;
    const totalNum = parseFloat(total);
    document.getElementById("total").innerText = totalNum + 59;
})

//decrease iPhone case in cart

const caseMinusBtn = document.getElementById("caseMinus");
caseMinusBtn.addEventListener("click" , function(){
    const caseNumber = document.getElementById("caseNumber").value;
    const currentCaseNum = parseFloat(caseNumber);
    document.getElementById("caseNumber").value = currentCaseNum - 1;
    const currentCasePrice = document.getElementById("currentCasePrice").innerText;
    const caseNum = parseFloat(currentCasePrice);
    document.getElementById("currentCasePrice").innerText = caseNum - 59;
    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNum = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = subTotalNum - 59;
    const tax = document.getElementById("tax").innerText;
    const taxNum = parseFloat(tax);
    document.getElementById("tax").innerText = taxNum - 2;
    const total = document.getElementById("total").innerText;
    const totalNum = parseFloat(total);
    document.getElementById("total").innerText = totalNum - 59;
})