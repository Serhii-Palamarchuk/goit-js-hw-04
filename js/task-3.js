/* Задача 3. Профіль гравця */

'use strict';

console.log("<=== TASK-3 ============================================>");

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName; // Змінюємо ім'я профілю
  },

  updatePlayTime(hours) {
    this.playTime += hours; // Додаємо кількість годин до playTime
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`; // Формуємо рядок із інформацією
  },
};

// Перевірка результатів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
