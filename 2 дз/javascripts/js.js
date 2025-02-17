document.addEventListener("DOMContentLoaded", function(){
    
    // 1 задание
    let age = prompt("Введите ваш возраст")
    if (age < 65){
        console.log("Вам ещё рано на пенсию")
    }
    else {
        console.log("Поздравляем с пенсионным возрастом!")
    }
    
    // 2 задание
    let firstNumber = prompt("Введите первое число")
    let secondNumber = prompt("Введите второе число")
    if (firstNumber < secondNumber){
        console.log("Первое число больше")
    }
    else if (secondNumber < firstNumber){
        console.log("Второе число больше")
    }
    else if (secondNumber === firstNumber){
        console.log("Числа равны")
    }
    
    // 3 задание
    let = prompt("Введите число");
    if (number % 2 === 0) {
        console.log("Это чётное число");
    }
    else {
        console.log("Это нечётное число");
    }
    
    // 4 задание
    let theNumber = prompt("Угадай число")
    if (theNumber = "7"){
        console.log("Ты угадал!")
    }
    else {
        console.log("Ты не угадал")
    }
    
    
    // 5 задание
    let login = prompt("Введите логин")
    let password = prompt("Введите пароль")
    if (login === "admin" && password === "12345"){
        console.log("Добро пожаловать!")
    }
    else {
        console.log("Неверный логин или пароль")
    }
    
    // 6 задание
    let year = prompt("Введите год");
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log("Это високосный год");
    }
    else {
        console.log("Это невисокосный год");
    }
    
    // 7 задание
    let number = prompt("Введите любое число")
    if (number < 100){
        console.log("Маленькое число")
    }
    else if(number > 100){
        console.log("Большое число")
    }
    else {
        console.log("Ровно 100!")
    }
    });