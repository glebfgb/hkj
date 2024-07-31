let guess = prompt("Угодай число",0);
do {
    if (guess !=100){
        guess = prompt("попробуй еще раз",0);
    }
    else
    alert("Молодец ты угодал");
} while (guess != 53 );

// Переменная для хранения текущего количества кликов
let clicks = 0;

// Функция для увеличения количества кликов при каждом клике
function increaseClicks() {
    clicks++;
    document.getElementById('score').innerText = clicks;

    // Сохраняем количество кликов в LocalStorage
    localStorage.setItem('clicks', clicks);
}

// Получаем количество кликов из LocalStorage, если оно там есть
const storedClicks = localStorage.getItem('clicks');
if (storedClicks) {
    clicks = parseInt(storedClicks);
    document.getElementById('score').innerText = clicks;
}

// Добавляем обработчик события клика к элементу с id 'clicker'
document.getElementById('clicker').addEventListener('click', increaseClicks);
