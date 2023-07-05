//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
<div data-say-hi="yes">Привет!</div>

// Задача №2.
// Получить в переменную элемент с текстом Йончи
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>

// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>













































//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


// // WINDOW
// const windowWidth = window.innerWidth;
// console.log(`Ширина окна браузера: ${windowWidth}px`);

//========================================================================================================================================================
//BOM

//Navigator
/*
С помощью объекта navigator,
мы можем получить информацию о самом
браузере и операционной системе.
*/

//Платформа
// console.log(navigator.platform);
// console.log((navigator.userAgent));

// document.writeln(navigator.userAgent);

// if (navigator.userAgent.includes("Chrome")) {
// 	console.log('Ваш браузер Гугл Хром');
// }	else if (navigator.userAgent.includes('FireFox')) {
// 	console.log('Ваш браузер ФаерФокс');
// } else {
// 	console.log('Ваш браузер хуйня какая-то.');
// }




//=================

//Location
/*
С помощью объекта location мы можем
получить текущий URL или
перенаправить браузер по новому адресу.
*/

//Получаем URL
// console.log(location.href);
//Меняем URL
// location.href = "https://natribu.org/ru/";

// if (navigator.userAgent.includes("Chrome")) {
// 	console.log(location.href);
// 	location.href = "https://pornhub.com"
// 	console.log('Твой браузер Хром');
// } else if (navigator.userAgent.includes('FireFox')) {
// 	console.log(location.href);
// 	location.href = "https://pornhub.com"
// }

//=================

//History
/*
Объект history позволяет
управлять историей браузера,
передвигаться по посещенным ранее страницам.
*/

// history.back();
// // history.forward();



//=================

//Alert
//alert("Привет!");

//Сonfirm
//const confirmResult = confirm("Хочешь научиться верстать?");
//console.log(confirmResult);

//Prompt
//const promptResult = prompt("Кто ты по жизни?");
//console.log(promptResult);

//========================================================================================================================================================

// DOM
// Навигация по документу

/*
Самые верхние элементы дерева
доступны как свойства объекта document
*/

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

// const htmlElement = document.documentElement;
// const headElement = document.head;


// console.log(htmlElement);
// console.log(headElement);
//------------------------------------------

// Получаем объект body
// const bodyElement = document.body;

// Первый и последний дочерние элементы
// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;

// console.log(firstChildNode);
// console.log(lastChildNode);

// let bodyElement1 = document.body;

// for (let i = 0; i < bodyElement1.children.length; i++) {
// 	let childElement = bodyElement1.children[i];
// 	console.log(childElement)
// 	let result = childElement[2];
// }


/*
В документе, возможено, есть ещё «какой-то HTML-код»,
но на момент выполнения скрипта браузер ещё
до него не дошёл.
Поэтому следует размещать скрипт в самом конце
документа
*/

//------------------------------------------

//Коллекция childNodes содержит список всех детей, 
//включая текстовые узлы.
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

//Для проверки наличия дочерних узлов 
//существует также специальная функция hasChildNodes()
// console.log(bodyElement.hasChildNodes());

/*
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция – особый перебираемый объект - псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция – это не массив
*/

// const bodyElement = document.body;
// const childNodes = bodyElement.childNodes;
// 	console.log(childNodes[5]);


//Перебор коллекции
// const bodyElement = document.body;
// const childNodes = bodyElement.childNodes;
// const ChildEleven = childNodes[11];
// console.log(ChildEleven);

// for (let node of childNodes) {
// 	console.log(node); // покажет все узлы из коллекции
// }






// "Живые" коллекции
/*
Почти все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы в DOM, то они появятся в сохранённой коллекции автоматически.
Еще вернемся к этому позже.
*/

//Только для чтения
/*
DOM-коллекции, и даже более – все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ....
Для изменения DOM требуются другие методы.
*/
//------------------------------------------


// Соседние и родительский узлы

// const bodyElement = document.body;
// const previousSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;

// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);


//------------------------------------------

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов

// const bodyElement = document.body;
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

// Получаем коллекцию всех дочерних элементов
// const bodyElement = document.body;

// const bodyСhildren = bodyElement.children;
// console.log(bodyСhildren);
// const thirdElem = bodyСhildren[2]
// console.log(thirdElem);
// const thirdChildren = thirdElem.nextElementSibling;
// console.log(thirdChildren);

// let findElem = document.querySelector('.nigga');
// console.log(findElem.textContent);
// findElem.textContent = 'Я Максим!'



// Первый и последний дочерние элементы
// const bodyElement = document.body;

// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

// // Соседние и родительский элементы
// const previousSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextElementSibling;
// const parentElement = bodyElement.parentElement;

// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentElement);


//========================================================================================================================================================

// Поиск произвольного элемента

/*
// Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Поиск по смешанному селектору тега и класса
const elemsThree =
	document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

// Поиск по тегу первого уровня вложенности
const elemsFour =
	document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Поиск по нескольким классам
const elemsFive =
	document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

// Поиск по вложенным классам
const elemsSix =
	document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

// Поиск по ID
const elemsSeven =
	document.querySelectorAll('#listItem');
console.log(elemsSeven);

// Поиск по атрибуту
const elemsEight =
	document.querySelectorAll('[data-item]');
console.log(elemsEight);

// Поиск по атрибуту со значением
const elemsNine =
	document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);
*/

//--------------


// querySelectorAll - статичная коллекция

// Получение конкретного элемента коллекции
//const elems = document.querySelectorAll('li');
//console.log(elems[2]);

/*
for (const item of elems) {
	console.log(item);
}
*/
/*
elems.forEach(item => {
	console.log(item);
});
*/


//--------------


/*
Искать можно не только в document
*/

// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems);

//----------

/*
Неожиданный результат поиска
*/

// const subList =
// 	document.querySelectorAll('.lesson__sub-list');
// const listItems =
// 	subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
// console.log(listItems);

/*
В данном примере,
когда мы выбрали ".lesson__list .lesson__item-sub-list"
в контексте <ul> с классом "lesson__sub-list", элемент с классом
".lesson__item-sub-list" были всё равно найден, хотя
.lesson__list не является потомком элемента в котором происходил
поиск (".lesson__sub-list").

По умолчанию, querySelectorAll() проверяет только последний
элемент без учёта контекста.
*/

//---------------------

// elem.querySelector(CSS);

// Возвращает первый элемент внутри elem, соответствующий
// данному CSS-селектору.



// const lessonList = document.querySelectorAll('.lesson__list')[0];
// const lessonList = document.querySelector('.lesson__list');
// console.log(lessonList);



//---------------------

//document.getElementById(ID)
/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(id),
где бы он ни находился.
*/
/*
const elem = document.getElementById('listItem');
console.log(elem);
*/
/*
1. id - уникален
2. Поиск полько внутри document.
*/

//-------

/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию.Передав "*" вместо тега, можно получить всех потомков.
*/
/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/
//-------

/*
elem.getElementsByClassName(className)
возвращает элементы, которые имеют данный CSS - класс.
*/
/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/
//-------

//document.getElementById(ID) и elem.getElementsBy*
/*
На данный момент, они используются редко,
так как querySelectorAll может их заменить.
Но отличия все же есть!
*/

//getElementsBy*
// ВНИМАНИЕ - getElementsBy.. а не getElementBy..

/*
document.getElementsByName(name) возвращает элементы с
заданным атрибутом name.Очень редко используется.
Поиск полько внутри document.
*/
/*
const elems = document.getElementsByName('list');
console.log(elems);
*/

//---------------------

// Живая статическа коллекции
/*
// Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.lesson__item-list');

// Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('lesson__item-list');

console.log(listStatic);
console.log(listLive);


// Создаем новый HTML-объект.
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новый пункт</li>'
);
*/
//---------------------

//closest
/*
Метод elem.closest(css) ищет ближайшего предка,
который соответствует CSS - селектору.Сам элемент
также включается в поиск.

Предки элемента это родитель, родитель родителя,
его родитель и так далее.Вместе они образуют цепочку
иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх от
элемента и проверяет каждого из родителей.Если он
соответствует селектору, поиск прекращается. Метод возвращает
либо предка, либо null, если такой элемент не найден.

Напомню свойство parentElement возвращает только
непосредственного родителя элемента
*/

// const elem = document.querySelector('.Class__list3');
// const parentList = elem.closest('.punc3');
// console.log(parentList);

/*
Очень полезный метод, часто используется для проверки
на существование того или иного родителя, либо для изменения
родителя конкретного элемента
*/

//---------------------------

// Проверка matches
/*
ничего не ищет, а проверяет, удовлетворяет ли
элемент CSS-селектору, и возвращает true или false.
*/
/*
const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}
*/

//---------------------------

/*
Стоит добавить, что получив объект тем или иным способом
мы можем применять свойства навигации о которых говорили ранее
*/

// const text = document.querySelector('.punc2');
// const list = text.nextElementSibling;
// console.log(list);


//========================================================================================================================================================

// Изменение документа

/*
// Cодержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.innerHTML);
*/

//====================


// Cодержимое элемента целиком outerHTML

// Получаем объект
// const textElement = document.querySelector('.punc--active');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);


// textElement.outerHTML = `<p>Живи, а работай в
// // 	<span class="yellow">свободное</span> время!</p>`;

// console.log(textElement.outerHTML);


//====================

// Просто текст элемента textContent

// Получаем объект
// const textElement = document.querySelector('.punc--active');
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

/*
Полезная возможность textContent - записывать
текст «безопасным способом».
*/

// textElement.textContent = `<p>Живи, а работай в
	// <span class="yellow">свободное</span> время!</p>`;

// console.log(textElement.textContent);

/*
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код.
Присваивание через textContent – один из способов от
этого защититься.
*/

//====================


// data.
// Cодержимое текстового узла/комментария

// Получаем объект
// const textElement = document.querySelector('.lesson__text');
// const getComment = textElement.nextSibling;

// console.log(getComment);
// console.log(getComment.data);


// Изменение текстового узла/комментария
// getComment.data = 'Привет';
// console.log(getComment.data);


//=====================


// Создание элементов и узлов.

// Создание нового элемента (тега)
// const newElement = document.createElement('div');

// // Наполняем новый элемент
// newElement.innerHTML = `Живи, а работай в
// 	<span class="yellow">свободное</span> время!`;
// console.log(newElement);

// Создание нового текстового узла
// const newText = document.createTextNode('Привет!');
// console.log(newText);

/*
Созданные объекты находятся в константах,
но не являются частью документа
*/

//===================

// Методы вставки


// Получаем объект
// const textElement = document.querySelector('.punc--active');

// // Создание нового элемента (тега)
// const newElement = document.createElement('div');
// // Наполняем новый элемент
// newElement.innerHTML = `Это
// 	<span class="red">новый</span> подпункт  14!`;



// Вставляем новый элемент...

//...перед объектом
// textElement.before(newElement);
//...после объекта
// textElement.after(newElement);
//...внутрь и в начало объекта
// textElement.prepend(newElement);
//...внутрь и в конец объекта
// textElement.append(newElement);

// Вставка нескольких фрагментов сразу
// textElement.append(newElement, "Привет!");


// Можно вставлять строку
// textElement.append(`Живи, а работай в
// 	<span class="red">свободное</span> время!`);

 /*
Другими словами, строки вставляются безопасным способом,
как делает это textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тегами и прочим,
как это делает innerHTML?
*/

//-------------------

// insertAdjacentHTML/Text/Element
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);
*/
/*
"beforebegin" – вставить html непосредственно перед textElement,
"afterbegin" – вставить html в начало textElement,
"beforeend" – вставить html в конец textElement,
"afterend" – вставить html непосредственно после textElement.
*/

//--------------
/*
Дополнительно существуют
insertAdjacentText и insertAdjacentElement
*/
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Вставляем текст
textElement.insertAdjacentText(
	'beforeend',
	`Живи, а работай в
	<span class="yellow">свободное</span> время!`
)
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;

// Вставляем элемент
textElement.insertAdjacentElement(
	'beforeend',
	newElement
);
*/
/*
На практике часто используется только insertAdjacentHTML.
Потому что для элементов и текста у нас есть методы
append/prepend/before/after – их быстрее написать,
и они могут вставлять как узлы, так и текст.
*/
//=========================================

// Перенос элемента

/*
Мы можем вставлять не только новые узлы,
но и переносить существующие.
Все методы вставки автоматически
удаляют узлы со старых мест.
*/
/*
// Получаем объект
const lessonBlock = document.querySelector('.lesson');
// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);
*/

//=========================================

// Клонирование узлов cloneNode

/*
Если нужен не перенос а именно копия элемента
*/

// Получаем объект
// const textElement = document.querySelector('.punch1');
// // Клонирование без дочерних элементов
// // const cloneTextElement = textElement.cloneNode();

// // Глубокое клонирование вместе с содержимым
// const cloneTextElement = textElement.cloneNode(true);

// const lessonBlock = document.querySelector('.punch1');
// lessonBlock.append(cloneTextElement);


// //=========================================


// // Удаление узлов

// // Получаем объект
// const textElement2 = document.querySelector('.punch1');
// // Удаляем объект
// textElement2.remove();


//========================================================================================================================================================

// Стили и классы

// Управление классами
// Свойства className и classList

/*
Изменение класса является одним
из наиболее часто используемых действий в JavaScript.
*/


// Свойство className

// Получаем элемент
// const element = document.querySelector('.punc3');

// // Получаем имена классов
// const elementClassNames = element.className;
// console.log(elementClassNames);

// // Перезаписываем имя класса
// element.className = "red";


//-----------------------------

// Свойство classList
/*
Специальный объект с методами для добавления/удаления
одного класса.
*/

// Получаем элемент
//const element = document.querySelector('.lesson__item-list_red');

/*
// Добавить класс
element.classList.add('active');
// Удалить класс
element.classList.remove('active');
// Добавить класс, если его нет, а если есть удалить.
element.classList.toggle('active');
// Проверка наличия класса, возвращает true/false.
element.classList.contains('active');
*/

/*
// Добавляем класс
element.classList.add('active');
// Проверяем наличие класса
if (element.classList.contains('active')) {
	console.log(`У element есть класс active!`);
}*/

//classList является перебираемым, поэтому можно 
//перечислить все классы при помощи for..of
/*
for (let className of element.classList) {
	console.log(className);
}
*/

//---------------------------------------------------

// Управление стилями

// element.style

/*
// Задаем стиль с помощью CSS свойства
element.style.color = "red";

// Для свойства из нескольких слов используется camelCase:
// margin-bottom
element.style.marginBottom = "30px";
// z-index
element.style.zIndex = "10";
// и т.д.

// Каждое свойство пишется отдельно

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom);

// Сброс стиля
element.style.marginBottom = "";

//---------------
*/

/*
//Полная перезапись стилей
//style.cssText

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
	margin-bottom: 30px;
	color:red;
`;
*/

// -----

//Вычисленные стили. getComputedStyle(element, [pseudo])

/*
// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.fontSize);

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);
*/

/*
// Чтобы получить конкретное значение
// Следует писать точное (полное) свойство

// Получаем точное значение
console.log(elementStyle.paddingLeft);
// Получаем не предсказуемую запись
console.log(elementStyle.padding); // В FF <empty string>
*/

/*
// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);

//Только для чтения
elementStyle.paddingLeft = "50px";
*/


/*
// Лайвхаки

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingLeft);

//Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);


//Помним про единицы измерения
element.style.marginLeft = "20px";
*/

/*
Как мы уже поняли, из JS мы можем управлять как классами
так и стилями объекта.

Управлять классами – более приоритетный вариант по
сравнению со стилями.

Манипулировать свойством style следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету.

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путем манипуляции с классами,
то так и следует сделать!
*/

//========================================================================================================================================================

// Атрибуты и свойства 

/*
У разных DOM-элементов могут быть разные свойства.
Например, у тега <a>, есть свойства, связанные со ссылками,
а у тега <input> – свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM-объекты для тегов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу.
*/
/*
const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(input.value);
console.log(link.value);

//Получить список доступных свойств
console.dir(link);
*/
//---------------------------

// Произвольные атрибуты

//Получаем элемент
//const lessonText = document.querySelector('.lesson__text');
/*
//Проверяем наличие атрибута.
lessonText.hasAttribute('name');
//Получаем значение атрибута.
lessonText.getAttribute('name');
//Устанавливаем значение атрибута.
lessonText.setAttribute('name', 'value');
//Удаляем атрибут.
lessonText.removeAttribute('name');
*/
/*
// Пример
// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}
*/

//------------------------------

// Синхронизация между атрибутами и свойствами

/*
Мы можем обратиться к тому или иному свойству через
методы доступа к атрибутам.
Когда стандартный атрибут изменяется, соответствующее
свойство автоматически обновляется.
Это работает и в обратную сторону (за некоторыми исключениями).
*/

//Получаем элемент
//const input = document.querySelector('.lesson__input');
/*
input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));
*/

// НО
/*
input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));
*/

//------------------------------

// Нестандартные атрибуты, dataset

/*
Мы уже использовали произвольные атрибуты,
но это рискованно.

Все атрибуты, начинающиеся с префикса «data-»,
зарезервированы для использования программистами.
Они доступны в свойстве dataset.
*/
/*
//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

//Получаем data-атрибут
console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

// data-size-value
console.log(lessonText.dataset.sizeValue);
*/

//------------------------------

// Полезные свойства
/*
const link = document.querySelector('.lesson__link');

//Получаем тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
link.hidden = true;
console.log(link.hidden);
*/

//========================================================================================================================================================
//========================================================================================================================================================