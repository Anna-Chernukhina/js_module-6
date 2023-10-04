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

