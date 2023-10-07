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
    const markup = books.map(({ id, title }) => {
        return `<li id='${id}'><p>${title}</p>
        <button class='delete'>Delete</button><button class='edit'>Edit</button></li>`
    }).join('');
    // вставляем сгенерированные строки в список list
    list.insertAdjacentHTML('afterbegin', markup);
}

renderList();