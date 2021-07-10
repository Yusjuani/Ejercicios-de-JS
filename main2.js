function mayorNum(){
 
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if(num1 && num2){
        if (num1 >= num2){
        if (num1 ==num2){
            alert("los numeros son iguales")
 
       }else{
            alert("el num1 es mayor")
        }
 }else{
     alert("el numero 2 es mayor")

}
}else{
    alert("uno de los numeros no se relleno")
}
}