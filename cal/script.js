const text = document.getElementById("dis");
let string = "";
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
       
        if(buttons[i].value == "="){
            string=eval(string);
            text.value = string;
        }
        else if(buttons[i].value == "DE"){
            string= (text.value).slice(0,-1);
            text.value = string;
        }
        else if(buttons[i].value == "MOD"){
            string+="%";
            text.value = string;
        }
        
        else if (buttons[i].value == "AC") {
            string=" ";
            text.value = string;

        }
        else {

            string += buttons[i].value;
            text.value= string;
        }

    }
}
