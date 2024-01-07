"use strict"; 
let shablones=[
    { 
        img: "url(images/поздравление.png)",
        name: "Поздравление с днём рождения", 
        price:200
    }, 
    { 
        img: "url(images/дрребёнка.png)",
        name: "Приглашение на день рождения ребёнка", 
        price:200
    }, 
    { 
        img: "url(images/леосбокалом.png)",
        name: "Поздравление с известными личностями", 
        price:200
    }, 
    { 
        img: "url(images/леосденьгами.png)",
        name: "Поздравление с персонажами из фильмов", 
        price:200
    }, 
    { 
        img: "url(images/поздравлениестони.png)",
        name: "Поздравление с персонажами из фильмов", 
        price:200
    },
    { 
        img: "url(images/новоселье.png)",
        name: "Новоселье", 
        price:200
    }, 
    { 
        img: "url(images/рождениеребёнка.png)",
        name: "Рождение ребёнка", 
        price:200
    }, 
    { 
        img: "url(images/свадьба1.png)",
        name: "Приглашение на свадьбу", 
        price:200
    }, 
    { 
        img: "url(images/свадьба2.png)",
        name: "Приглашение на свадьбу", 
        price:200
    }
] 
let shabcontain=document.querySelector(".shablones"); 
shablones.forEach(showProduct);
function showProduct(item){
 let shablonesdiv=document.createElement("div"); 
 shablonesdiv.className="shablon"; 
 shabcontain.prepend(shablonesdiv); 
 shablonesdiv.innerHTML=`<strong>${item.name}</strong<br> 
 <p>${item.price} ₽</p>` 
 let shabimg=document.createElement("div");
 shabimg.className="shabimg"; 
 shablonesdiv.prepend(shabimg); 
 shabimg.style.backgroundImage=item.img;
}