document.addEventListener('DOMContentLoaded', function() {
    const temp203Element = document.getElementById('temp203');
    const temp202Element = document.getElementById('temp202');
    const temp302Element = document.getElementById('temp302');
    const refreshButton = document.getElementById('refreshButton');

    // Функция для генерации начальной температуры в диапазоне 21.8-22.0
    function generateInitialTemperature() {
        return (Math.random() * 0.2 + 21.8).toFixed(1);
    }

      // Функция для изменения температуры
    function adjustTemperature(currentTemp) {
        const changeProbability = 0.15; // Вероятность изменения температуры
        const maxChange = 0.1;   // Максимальное изменение температуры

        if (Math.random() < changeProbability) { // Проверяем вероятность изменения
            const change = (Math.random() * maxChange * 2 - maxChange).toFixed(1); // Случайное изменение от -0.1 до 0.1
           let newTemp = parseFloat(currentTemp) + parseFloat(change);

           // Проверка границ
            if (newTemp < 21.8) {
                  newTemp = 21.8;
              } else if (newTemp > 22.0) {
                newTemp = 22.0;
              }

             return newTemp.toFixed(1);

        } else {
            return currentTemp; // Не меняем температуру
        }
    }


    // Функция для обновления температуры
    function updateTemperatures() {
        temp203Element.textContent = adjustTemperature(temp203Element.textContent.slice(0,4)) + ' °C';
        temp202Element.textContent = adjustTemperature(temp202Element.textContent.slice(0,4)) + ' °C';
        temp302Element.textContent = adjustTemperature(temp302Element.textContent.slice(0,4)) + ' °C';

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


    // Устанавливаем начальную температуру при загрузке страницы
      temp203Element.textContent = generateInitialTemperature() + ' °C';
      temp202Element.textContent = generateInitialTemperature() + ' °C';
      temp302Element.textContent = generateInitialTemperature() + ' °C';

    // Добавляем обработчик события на кнопку "Обновить"
    refreshButton.addEventListener('click', updateTemperatures);
});
