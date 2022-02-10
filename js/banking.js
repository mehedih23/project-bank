const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function () {
    // Previous Balance //
    let previousDeposit = document.getElementById('deposit');
    let myDeposit = previousDeposit.innerText;
    let preDeposit = parseFloat(myDeposit);

    // New Balance //
    let newDeposit = document.getElementById('deposit-input').value;
    let nDeposit = parseFloat(newDeposit);

    // Total Deposit //
    let totalDeposit = preDeposit + nDeposit;
    previousDeposit.innerText = totalDeposit;
    document.getElementById('deposit-input').value = '';


    // My total Balance //
    let myTotalPreviousBal = document.getElementById('totalAccBalance');
    let myTotalBalance = parseFloat(myTotalPreviousBal.innerText);
    let myBala = myTotalBalance + nDeposit;

    myTotalPreviousBal.innerText = myBala;

    // simple error handling //
    // if (typeof newDeposit != "number") {
    //     alert('Please Enter the correct amount of money');
    //     myTotalPreviousBal.innerText = myTotalBalance;
    // }

});

document.getElementById('withdraw-button').addEventListener('click', function () {

    // input  Withdraw //
    let newWithdraw = document.getElementById('withdraw-input').value;
    let nWithdraw = parseFloat(newWithdraw);

    document.getElementById('withdraw-input').value = '';
    // previous withdraw //
    let previousWithdraw = document.getElementById('withdraw');
    let underWithdraw = parseFloat(previousWithdraw.innerText)
    let preWithdraw = parseFloat(underWithdraw);

    let totalWithdraw = nWithdraw + preWithdraw;
    previousWithdraw.innerText = totalWithdraw;



    let myTotalPreviousBal = document.getElementById('totalAccBalance');
    let myTotalBalance = parseFloat(myTotalPreviousBal.innerText);


    // simple error handling //
    if (nWithdraw > myTotalBalance) {
        alert("You don't have enough balance")
        previousWithdraw.innerText = preWithdraw;
    }
    else {
        let myBala = myTotalBalance - nWithdraw;
        myTotalPreviousBal.innerText = myBala;
    }


})