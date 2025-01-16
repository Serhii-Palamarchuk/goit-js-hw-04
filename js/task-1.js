/* Задача 1. Пакування товарів​*/

'use strict';

console.log("<=== TASK-1 ============================================>");

function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0; 
  // Ітеруємо по масиву значень об'єкта products і додаємо кожне значення до totalProducts
  for (const quantity of Object.values(products)) {
    totalProducts += quantity;
  }

  // Повертаємо результат перевірки
  return totalProducts <= containerSize;
}

// Перевірка результатів
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

