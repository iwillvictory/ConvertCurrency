function convertCurrency(){
    let amountFrom= document.getElementById("amount").value;
    let amountTo;
    let from= document.getElementById("from").value;
    let to= document.getElementById("to").value;
    let arr1=from.split("-");
    let arr2=to.split("-");
    let tyGiaFrom=parseFloat(arr1[0]);
    let tyGiaTo=parseFloat(arr2[0]);
    amountTo= (amountFrom*tyGiaTo)/tyGiaFrom;
    document.getElementById("result").innerText=amountTo + "  " +  arr2[1];


}