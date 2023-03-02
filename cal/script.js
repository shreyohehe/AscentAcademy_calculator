const text = document.getElementById("dis");
let string = "";
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        console.log(buttons[i].value);
        if(buttons[i].value == "="){
            string=eval(string);
            text.value = string;
        }
        else if(buttons[i].value == "DE"){
            string= string.slice(0,-1);
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

            string += this.value;
            text.value= string;
        }

    }
}
