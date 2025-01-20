document.addEventListener('DOMContentLoaded', function() {
    const temp203Element = document.getElementById('temp203');
    const temp202Element = document.getElementById('temp202');
    const temp302Element = document.getElementById('temp302');
    const refreshButton = document.getElementById('refreshButton');

    // Функция для генерации случайной температуры в заданном диапазоне
    function generateRandomTemperature() {
        const min = 21,8;
        const max = 21,9;
        return (Math.random() * (max - min) + min).toFixed(1);
    }


    // Функция для обновления температуры
    function updateTemperatures() {
        temp203Element.textContent = generateRandomTemperature() + ' °C';
        temp202Element.textContent = generateRandomTemperature() + ' °C';
        temp302Element.textContent = generateRandomTemperature() + ' °C';

          // Добавим небольшую анимацию при обновлении
          temp203Element.style.transition = 'transform 0.2s ease';
          temp203Element.style.transform = 'scale(1.1)';
          setTimeout(() => {
            temp203Element.style.transform = 'scale(1)';
             temp203Element.style.transition = 'transform 0.2s ease';
          }, 200); // Восстанавливаем масштаб через 200мс

        temp202Element.style.transition = 'transform 0.2s ease';
        temp202Element.style.transform = 'scale(1.1)';
         setTimeout(() => {
            temp202Element.style.transform = 'scale(1)';
             temp202Element.style.transition = 'transform 0.2s ease';
          }, 200);


        temp302Element.style.transition = 'transform 0.2s ease';
        temp302Element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            temp302Element.style.transform = 'scale(1)';
             temp302Element.style.transition = 'transform 0.2s ease';
          }, 200);
    }

    // Вызываем функцию для начального отображения температуры
    updateTemperatures();

    // Добавляем обработчик события на кнопку "Обновить"
    refreshButton.addEventListener('click', updateTemperatures);
});
