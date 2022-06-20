// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():
// Объединить массивы destination, native, hero в общий массив rainbow.
// Сделать реверс элементов полученного массива rainbow.
// Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
// Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.

colors = ["red", "orange", "yellow", "green", "deepskyblue", "blue", "darkviolet"];

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = hero.concat(native, destination);
rainbow.reverse();

console.log(rainbow);

rainbow.pop();
rainbow.push("Gave","Battle","In","Vain");
rainbow.shift();
rainbow.shift();
rainbow.unshift("Richard");

console.log(rainbow);


document.write(`<div class="wrapp">`);

for(i = 0; i < colors.length; i++) {
    document.write(`<div class="circle" style="background-color: ${colors[i]}"></div>`)
}
document.write(`</div>`);


document.write(`<div class="text">`);

for(i = 0; i < rainbow.length; i++) {
    document.write(`<div class="text">${rainbow[i]}</div>`)
}
document.write(`</div>`);