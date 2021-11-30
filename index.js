let dob1= document.querySelector("#dob");
let num= document.querySelector("#num");
let btn= document.querySelector("#btnCheck");
let output= document.querySelector("#output");


    
btn.addEventListener("click",SumOfDob);

function SumOfDob(){
     
    let birthDate= dob1.value;
    birthDate=birthDate.replaceAll("-","");
    let sum=0;
    for(let i=0;i<birthDate.length;i++){

        sum+=Number(birthDate.charAt(i));
    }
    let luckyNumber=num.value;
   checkDivisiblity(sum,luckyNumber);
}

function checkDivisiblity(sum,luckyNumber){
    if(sum%luckyNumber===0){
        output.innerText="You are lucky. 😎";
    }else{
        output.innerText="You're unlucky. 🙁";
    }
}