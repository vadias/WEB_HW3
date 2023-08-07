let name = document.getElementById("name");
nm = prompt("Имя?");
alert ("Привет," + nm + "!");
let a = parseInt(prompt("Введите возраст от 30 до 40"));
switch(a){
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
        alert("мало");
        break;
    case 35:
        alert("точно!");
        break;
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
        alert("много");
        break;
    default:
        break;
}

function changecolor() 
{
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    name.classList.toggle("red");
    name.textContent = "Имя: " + nm;
    age.classList.toggle("red");
    age.textContent = "Возраст: 35";

}

let element = document.getElementById("el1");
    
let btn = document.getElementById("btn");   // добавляем объект кнопка
btn.addEventListener('click', changecolor); // добавляем событие нажатия на кнопку
