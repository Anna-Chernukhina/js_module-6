//* задача: при нажатии на элемент списка открывается модальное окно с текстом из нажатого  li
const list = document.querySelector("ul");
const modalText = document.querySelector(".modal-text");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector("button");

//реализуем делегирование. Нажатие на li, слушаем событие на ul
list.addEventListener("click", openModal);

//! т.к. event это объект, а нас интересует его свойство target, то можно event не объявлять в функции, а деструктуризовать его свойство target
function openModal({target}) {
    // console.log(target);
    let content; //переменная для текста
    if (target.nodeName === "P") {  // свойство nodeName для получения названия тега, тег пишется капсом
        content = target.textContent; 
    }
    else if (target.nodeName === "LI") {
        content = target.firstElementChild.textContent;
    }
    else {
        return; // прерывание функции если пользователь не нажал ни на элемент списка или ни на текст, а куда-то в другое место
    }
    // console.log(content);

    modalText.textContent = content; // вставляем текст в параграф р модального окна
    backdrop.classList.add("open"); // добавляем модальному окну класс open  для свойства opacity
    window.addEventListener("keydown", closeByEsc);
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
    backdrop.classList.remove("open");
    modalText.textContent = "";
    window.removeEventListener("keydown", closeByEsc);
}

//* добавляем закрытие модального окна по нажатию на кнопку ESC
function closeByEsc({code}) { // деструктуризуем физический код клавиши
    if (code === "Escape") {
        closeModal();
    }
}

//* добавляем закрытие модального окна по нажатию на фон backdrop
backdrop.addEventListener("click", closeByBackdrop);

