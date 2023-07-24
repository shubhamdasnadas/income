var bal=document.querySelector('.balance')
var amount=document.querySelector('.screen');
var add=document.querySelector('.start');
var debt=document.querySelector('.debit')
var cred=document.querySelector('.Credit')



add.addEventListener('click',function(){
    
     var number1=Number(bal.value);
     var number2=Number(amount.value);
   
     
     if(amount.value>0)
     debt.innerHTML+="<h4>"+amount.value+"</h4>";
     else
     cred.innerHTML+="<h4>"+amount.value+"</h4>";
     
     typeof()
     number1=number1+number2;
     bal.value=number1;
     console.log(number1)
     console.log(number2)

})



// console.log(typeof(bal.value));

// console.log(typeof(amount.value))



