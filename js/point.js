
var point_data = []
var point_name = ''

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function promt () {
  let q = prompt("Введіть вашу загадку:", "Загадка");
  let a = prompt("Введіть вашу відповідь:", "Відповідь");
  if (q == null || q == "" || a == null || a == "") {
    window.alert("Помилка");
    return false;
  } else {
    return [q,a];
  }
}

function newpoint(){
 
  if (z = promt()){
    let na = getRandomInt(9999)
    // створюємо новий елемент
    const newPoint = document.createElement("button");
    newPoint.classList += "point active";
    newPoint.setAttribute("name", na);    
    newPoint.setAttribute("id", na);
    newPoint.setAttribute("draggable", true);       
    newPoint.setAttribute("ondragstart","dragStart(event)");    
    newPoint.setAttribute("ondrop","drop(event)");
    newPoint.setAttribute("ondragover","allowDrop(event)");     
    newPoint.setAttribute("onclick","show(event)");   
    newPoint.setAttribute("q", z[0] );      
    newPoint.setAttribute("a", z[1] );

    // створюємо деякий зміст
    const newContent = document.createTextNode("+");    

     // додаємо зміст у наш елемент
     newPoint.appendChild(newContent);

    // додаємо новий елемент у Dom дерево елементів !!! ПЕРЕД деяким елементом
    const currentDiv = document.getElementById("plusNewPoint");
    currentDiv.parentNode.insertBefore(newPoint, currentDiv);
  }
}

function show(event){
  let a = prompt(event.target.getAttribute('q'), "Відповідь");
  if (a === event.target.getAttribute('a')){
    event.target.style.backgroundColor = "green";
    setTimeout(() => {
      event.target.remove();
    }, 3000);
  } else{
    window.alert('Помилка')
  }
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
  point_name = event.target.id;
  point = [point_name, event.x, event.y]
}

function allowDrop(event) {
  const d = event.target.id;
  const e = document.getElementById(point_name);
  console.log(event.x, event.y, e.id, event.x + "px");  
  e.style.left = event.x-25 + "px";
  e.style.top = event.y-100 + "px";
}


  function drop(event) {
    
    const d = event.dataTransfer.getData("Text");
    const e = document.getElementById(point_name)
  }

  //
  function ChangeImg(){
    let imDiv = document.getElementById('place');
    let way = prompt('Вкажіть посилання на картинку', "URL");
    console.log(way);
    imDiv.style.backgroundImage = `url(${way})`;
  }