let div = document.createElement("div"); // создаем блок div 
let centralBlock = document.querySelector(".centralBlock"); // получаем доступ к блоку в который вставим созданный div





for (let i = 0; i <= 6; i++){

    div.innerHTML = "Welcome";
    div.style.width = 100 + 'px';
    div.style.height = 100 +'px';
    div.style.backgroundColor = 'red';
    div.style.margin = 10 + 'px';

    centralBlock.appendChild(div);
    
    console.log(i);

}
