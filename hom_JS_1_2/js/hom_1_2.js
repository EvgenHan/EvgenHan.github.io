alert('Заполнить массив в котором будет список из 5-ти любых имен');

var arr = [];

 for (i = 0; i < 5; i++){
   arr[i] = prompt("Введите " + (i + 1) + "-ое Имя");
 }
 for (i = 0; i < arr.length; i++){
 }
console.log(arr);

   var name = prompt ('Введите Имя');

for (i = 0; i < 5; i++) {
  if (arr[i] == name && name != null){
    alert(' вы успешно вошли ' + name)
  }else if (name !== arr[0]&&
    name !== arr[1]&&
    name !== arr[2]&&
    name !== arr[3]&&
    name !== arr[4]
     ){
    alert('вашего имени нет в списке');
}
    }
