let books = [
  {
    id: "1",
    title: `Apple. Computer evolution`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Richly illustrated chronological guide to the history of computers in which
       and structured information about the creation and development of Apple technology against the backdrop of history
       personal computers in general.
       The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
       accompanied by a large number of original studio photographs.
       The book is intended for a wide range of readers interested in the history of electronics.
       It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
  },
  {
    id: "2",
    title: `How to explain computer science to a child`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
       in informatics. Explains step by step how children can get the most out of computers and internet services,
       staying safe.
       The book covers everything from data storage to life on the Internet,
       from programming to computer attacks. About how computers function, about modern software
       software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
       explained clearly with illustrations and diagrams.`,
  },
  {
    id: "3",
    title: `The path of the Scrum Master. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
       It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
       knowledge throughout your career.
       Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
       how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
       What tools does he need to use?`,
  },
];

// получаем ссылку на входной div
const root = document.querySelector('#root');
// то же самое, только ищет по id
//const root = document.getElementById('root');

// console.log(root);

// cоздаем два еще div, прописываем им классы
//! createElement используется только на document
const firstDiv = document.createElement("div");
firstDiv.classList.add("leftDiv");
const secondDiv = document.createElement("div");
secondDiv.classList.add("rightDiv");

// добавляем созданные div в DOM-дерево в div root, за одну операцию
root.append(firstDiv, secondDiv);

// cоздаем элемент заголовок с содержимым, добавляем его в DOM-дерево в div firstDiv
const title = document.createElement("h1");
title.textContent = "Library";
// cоздаем элемент список, добавляем его в DOM-дерево в div firstDiv
const list = document.createElement("ul");
const addButton = document.createElement('button');
addButton.textContent = 'Add book';
firstDiv.append(title, list, addButton);

// создаем список элементов из массива объектов через функцию
//перебираем массив через map и деструктуризируем
//join используется для преобразования результата в виде массива в строку для insertAdjacentHTML()
function renderList() {
  //! I. вариант через createElement, не подходит для создания вложенных элементов
  //   const markup = books.map(({ title }) => {
  //     const item = document.createElement('li');
  //     item.textContent = title;
  //     return item;
  //   })

  //   console.log(...markup)
  // }

  //! II. дз №3
  const markup = books.map(({ id, title }) => {
    return `<li id='${id}'><p class='book-title'>${title}</p>
        <button class='delete'>Delete</button><button class='edit'>Edit</button></li>`
  }).join("");

 //*  вставляем сгенерированные строки в список list
  // list.innerHTML = "";
  // list.insertAdjacentHTML('afterbegin', markup);
  
  list.innerHTML = markup;

  //* выбираем все параграфы, перебираем через forEach и добавляем слушатель событий
  const titles = document.querySelectorAll('.book-title');
  titles.forEach(title => title.addEventListener('click', renderPreview))

  //* добавляем слушатель событий на кнопки delete
  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach(btn => btn.addEventListener('click', deleteBook))
}

renderList();

//! дз №1
//! задача, найти содержимое всех абразцев элементов списка ul
// const ul = document.querySelector("ul");
// const items = document.querySelectorAll("li");
// console.log(items);

// items.forEach(item => {
//   // I.
//   //  console.log(item.firstElementChild.textContent);

//   // II. вариант доступ через querySelector из элемента li
//   console.log(item.querySelector("p").textContent);
// });

//! -----------------------Module 6-2 Events-----------------------
//* добавляем функционал для приложения. При клике на название книги справа появляется превью. События на кнопки.
//* добавляет слушатель событий на абзац р в функцию renderList

// функция для определения книги, на название которой нажали
function renderPreview(event) {
  const bookName = event.target.textContent;

  // ищем по массиву объектов книгу, где title = нажатому названию
  // делаем деструктуризацию по title
  const book = books.find(({ title }) => title === bookName);

  const markup = createPreviewMarkup(book);
  console.log(markup);
  secondDiv.innerHTML = markup;
}

// отдельная функция для создания разметки справа
function createPreviewMarkup({id, title, author, img, plot}) {
  return `<div data-id='${id}' class='book-info'>
  <h2>${title}</h2>
  <p>${author}</p>
  <img src='${img}' alt='${title}'>
  <p>${plot}</p>
  </div>`;
}

function deleteBook(event) {
  // получаем id книги из li через кнопку
  const bookId = event.target.parentNode.id;
  
  // фильтруем список объектов 
  books = books.filter(({ id }) => id !== bookId);
  renderList();
  const bookInfo = document.querySelector('.book-info');
  if (bookInfo && bookInfo.dataset.id === bookId) {
    secondDiv.innerHTML = "";
  }
  
}