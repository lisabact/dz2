document.addEventListener("DOMContentLoaded", function() {
    //задача 1
    let age = prompt('Введите свой возраст', '');
    if (age < 65) {
      alert( 'Вам ещё рано на пенсию' );
    }
    else {
      alert( 'Поздравляем с пенсионным возрастом!' );
    }
    
    
    //задача 2
    let firstN = prompt('Введите первое число', '');
    let secondN = prompt('Введите второе число', '');
    if (firstN > secondN) {
      alert( 'Первое число больше' );
    }
    else if (firstN < secondN) { 
        alert( 'Второе число больше' );
    }
    else if(firstN = secondN){
      alert( 'Числа равны' );
    }
    
    //задача 3
    let num = prompt('Введите число', '');
    if (num % 2 === 0) {
        alert( 'Число чётное' );
    }
    else if (num % 2 !== 0){
        alert( 'Число нечётное' );
    } 
    
    //задача 4
    const secretNumber = 9;
    let secret = prompt('Угадай число', '');
    if (secretNumber == secret) {
        alert( 'Вы угадали!' );
    }
    else {
        alert( 'Попробуйте ещё раз!' );
    }
    
    //задача 5
    const loginconst = "admin"
    let login = prompt('Введите логин', '');
    
    const passwordconst = 12345
    let password = prompt('Введите пароль', '');
    
    if (loginconst == login & passwordconst == password) {
        alert( 'Добро пожаловать!' );
    }
    else {
        alert( 'Неверный логин или пароль' );
    }
    
    
    //задача 6
    let year = prompt('Введите год', '');
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert( 'Это високосный год' );
    }
    
    else {
        alert( 'Это не високосный год' );
    }
    
    //задача 7
    let number = prompt('Введите число', '');
    if (number > 100) {
      alert( 'Большое число' );
    }
    else if (number < 100) { 
        alert( 'Маленькое число' );
    }
    else if(number = 100){
      alert( 'Точно 100!' );
    }
    })