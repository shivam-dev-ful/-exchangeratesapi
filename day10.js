var url = "https://api.exchangeratesapi.io/latest?base=";

function convert(){
    var base=document.getElementById("base").value;
    var out=document.getElementById("out").value;
    var amount=document.getElementById("amount").value;
    fetch((`${url}${base}`),{method:"GET"} )
    .then((res) => res.json())
    .then((data)=>{
        var final=data.rates[out]*amount;
        var result=`Converted Value of ${amount}${base} is ${final}${out}`;
        document.getElementById("output").innerText=result;
        
    })
}




