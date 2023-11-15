
function updateProduct(product,price,isIncreasing ){
    const NumberInput =  document.getElementById(product+'-number');
    let  productNumber = NumberInput.value ;
    /* const updateNumber = parseInt(productNumber)+1; */

    /* const updateNumber= parseInt(NumberInput.value)+1; */
    if(isIncreasing ){
         productNumber = parseInt(productNumber)+1;
    }
    else if(productNumber > 0) {
         productNumber = parseInt(productNumber)-1;
    }
    NumberInput.value = productNumber;
   
    const updateTotal= document.getElementById(product + '-total');

    updateTotal.innerText=productNumber*price;
   
   calculation ()
  


}
// calculation
function updateProductNumber (product){
   const updateValu= document.getElementById(product +'-number');
   const productQuantity= parseInt(updateValu.value);
 
    return  productQuantity ;



}

function calculation (){

    const updatePhoneTotal = updateProductNumber('phone')*1219;
    const updateCaseTotal =updateProductNumber('case')*59;
    const updateLaptopTotal =updateProductNumber('Laptop')*4500;
    const updateMBTotal =updateProductNumber('MB')*600;
    const updateBagTotal =updateProductNumber('Bag')*80;

    const subTotal = updatePhoneTotal + updateCaseTotal + updateLaptopTotal+ updateMBTotal + updateBagTotal;
    
    
    const taxt = subTotal / 5;
    const total = subTotal + taxt;


    document.getElementById('sub-total').innerText= subTotal;
    document.getElementById ('tax-ammount').innerText =taxt;
    document.getElementById ('total-price').innerText = total;

}


// for phone

document.getElementById("phone-plus").addEventListener('click',function(){
      updateProduct('phone',1219, true) ;  
})

document.getElementById("phone-minus").addEventListener('click',function(){

    updateProduct('phone',1219,false)
   
/*     const phoneNumberOutPut =  document.getElementById('phone-number');

    const phoneNumber= parseInt(phoneNumberOutPut.value)-1;

    phoneNumberOutPut.value = phoneNumber; */

})

// For case
document.getElementById("case-plus").addEventListener('click',function(){
   /*  const caseNumberInput =  document.getElementById('case-number');

    const caseNumber= parseInt(caseNumberInput.value)+1;

    caseNumberInput.value = caseNumber; */
    updateProduct('case',59, true)

})
document.getElementById("case-minus").addEventListener('click',function(){

    updateProduct('case',59, false)
   /*  const caseNumberOutPut =  document.getElementById('case-number');

    const caseNumber= parseInt(caseNumberOutPut.value)-1;

    caseNumberOutPut.value = caseNumber; */

})

// laptop
document.getElementById('Laptop-plus').addEventListener('click',function(){
    updateProduct('Laptop',4500,true)
    /* const laptopNumberInput= document.getElementById ('Laptop-number');
   const updateLaptop= parseInt (laptopNumberInput.value)+1;
   laptopNumberInput.value =updateLaptop; */

})
document.getElementById('Laptop-minus').addEventListener('click',function(){
    updateProduct('Laptop',4500,false)
    /* const laptopNumberInput= document.getElementById ('Laptop-number');

   const updateLaptop= parseInt (laptopNumberInput.value)-1;
   laptopNumberInput.value =updateLaptop; */

})

// mother-board
document.getElementById('MB-plus').addEventListener('click',function(){

    updateProduct('MB',600,true)
 /*    const mbNumber= document.getElementById('MB-number');
    const newMbNumber= parseInt (mbNumber.value)+1;
    mbNumber.value = newMbNumber; */
/*  */
})
document.getElementById('MB-minus').addEventListener('click',function(){
    updateProduct('MB',600,false)
  /*   const mbNumber= document.getElementById('MB-number');
    const newMbNumber= parseInt (mbNumber.value)-1;
    mbNumber.value = newMbNumber;
 */
})


// bag
document.getElementById('Bag-plus').addEventListener('click',function(){

    updateProduct('Bag',80,true);

    /* const bagUpdate= document.getElementById('Bag-number');

    const newBagUpdate= parseInt (bagUpdate.value)+1;
    bagUpdate.value = newBagUpdate;
 */
})

document.getElementById('Bag-minus').addEventListener('click',function(){
    updateProduct('Bag',80,false);

/*     const bagUpdate= document.getElementById('Bag-number');

    const newBagUpdate= parseInt (bagUpdate.value)-1;
    bagUpdate.value = newBagUpdate; */

})

document.getElementById('thank').addEventListener('click',function(){

    window.location.href = "../welcome.html";
})