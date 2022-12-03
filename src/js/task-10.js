// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

destroyBtn.addEventListener("click", destroyBoxes);
createBtn.addEventListener("click", makeDivMarkup);

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  const elements = [];
  for (let i = 0, j = 30; i < amount; i += Number(input.step), j += 10) {
    const boxEl = document.createElement("div");
    boxEl.style.height = `${j}px`;
    boxEl.style.width = `${j}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    elements.push(boxEl);
  }

  boxes.append(...elements);
}

function makeDivMarkup() {
  input.addEventListener("input", () => {
    return input.value;
  });

  createBoxes(input.value);
}
