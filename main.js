function calculate(){
    let a=document.getElementById('first number').value;
    let b=document.getElementById('second number').value;
    let symbol=document.getElementById('symbol').value;
    a=parseInt(a);
    b=parseInt(b);
    let total="error";
    if (symbol==='+'){
        total=Addition(a,b);
    }
    else if(symbol==='-'){
        total=substraction(a,b);
    }

    document.getElementById('result_space').innerHTML=total;
}
function Addition(a,b){
    let sum=a+b;
    return sum;
}
function substraction(a,b){
    return a-b;
}
    