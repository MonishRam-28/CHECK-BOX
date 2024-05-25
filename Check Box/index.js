const myCheckBox = document.getElementById("myCheckBox");
const VisaBtn = document.getElementById("VisaBtn");
const MastercardBtn = document.getElementById("MastercardBtn");
const PaypalBtn = document.getElementById("PaypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed`;
    }
    if(VisaBtn.checked){
        paymentResult.textContent = `You are paying through Visa`;
    }
    else if(MastercardBtn.checked){
        paymentResult.textContent = `You are paying through Mastercard`;
    }
    else if(PaypalBtn.checked){
        paymentResult.textContent = `You are paying through Paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`; 
    }
}