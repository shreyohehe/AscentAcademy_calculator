let string="";
let buttons=document.querySelectorAll("input[type=button].btn");
buttons.forEach((i)=>{
    i.addEventListener('click',()=>{
        console.log(i.value);
        string+= i.value;
        document.querySelector("input[type=text]#dis").value=string;
    })

})