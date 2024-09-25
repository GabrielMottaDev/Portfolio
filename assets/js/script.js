window.onload = function() {
    changeYears();
    changeAges();
};

function changeYears(){
    let date = new Date();
    let fullYear = date.getFullYear();
    let yearsObj = document.getElementsByClassName("js-year");
    for(let i = 0; i < yearsObj.length; i++){
        let yearObj = yearsObj[i];
        yearObj.innerText = fullYear;
    }
}

function changeAges(){
    let birthDate = new Date("07/02/2002");
    let date = new Date();
    let years = (date.getTime()-birthDate.getTime())/1000/60/60/24/30/12;
    years = Math.floor(years);
    let agesObj = document.getElementsByClassName("js-age");
    for(let i = 0; i < agesObj.length; i++){
        let ageObj = agesObj[i];
        ageObj.innerText = years;
    }
}