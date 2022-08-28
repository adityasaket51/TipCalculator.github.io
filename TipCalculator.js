const calculate = document.querySelector('#calculate')
// console.log(calculate);
calculate.addEventListener('click',() => {
    const amount = document.querySelector('#totalBill').value;
    const tip = document.querySelector('#tipPercent').value;
    const totalPerson = document.querySelector('#split').value;
    
    

    // validate
    if(amount === '' || tip == 0 || totalPerson == 0){
        alert('Please enter value');
        return;
    } 


    // calculate
    let perPerson = (amount*tip)/totalPerson;
    perPerson = perPerson.toFixed(2);
    document.getElementById('tip').innerHTML = perPerson;

})