document.addEventListener('DOMContentLoaded', function() {
    const temp203Element = document.getElementById('temp203');
    const temp202Element = document.getElementById('temp202');
    const temp302Element = document.getElementById('temp302');
    const refreshButton = document.getElementById('refreshButton');

      // Функция для генерации начальной температуры в диапазоне 21.8-22.0
      function generateInitialTemperature() {
          return (Math.random() * 0.2 + 21.8).toFixed(1);
      }
    // Функция для генерации начальной температуры в диапазоне 21.9-22.2 для 302 кабинета
     function generateInitialTemperature302() {
          return (Math.random() * 0.3 + 21.9).toFixed(1);
      }

      // Функция для изменения температуры
        function adjustTemperature(currentTemp, is302, otherTemp1, otherTemp2) {
        const changeProbability = 0.15;
        const maxChange = 0.1;
        let minTemp = is302 ? 21.9 : 21.8;
        let maxTemp = is302 ? 22.2 : 22.0;

        let tempChange;
            if (Math.random() < changeProbability) {
                tempChange = (Math.random() * maxChange * 2 - maxChange);
            } else {
                  tempChange = 0;
            }

         let newTemp = parseFloat(currentTemp) + tempChange;

            if (is302) {
              const maxOtherTemp = Math.max(parseFloat(otherTemp1), parseFloat(otherTemp2)); // Берем максимальную из других
              minTemp = Math.max(minTemp, maxOtherTemp + 0.1);

            if (newTemp < minTemp) {
                   newTemp = minTemp;
                }
              }


        if (newTemp < minTemp) {
            newTemp = minTemp;
        } else if (newTemp > maxTemp) {
              newTemp = maxTemp;
        }

         return newTemp.toFixed(1);
    }




      // Функция для обновления температуры
      function updateTemperatures() {
            const temp203 = temp203Element.textContent.slice(0, 4);
            const temp202 = temp202Element.textContent.slice(0, 4);

          temp203Element.textContent = adjustTemperature(temp203, false, 0, 0) + ' °C';
          temp202Element.textContent = adjustTemperature(temp202, false, 0, 0) + ' °C';
          temp302Element.textContent = adjustTemperature(temp302Element.textContent.slice(0,4), true, temp203Element.textContent.slice(0, 4) , temp202Element.textContent.slice(0, 4)) + ' °C';
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
      temp302Element.textContent = generateInitialTemperature302() + ' °C';

    // Добавляем обработчик события на кнопку "Обновить"
    refreshButton.addEventListener('click', updateTemperatures);
});
