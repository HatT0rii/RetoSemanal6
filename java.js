let arreglo = [];

let ingreso= document.querySelector("#add");

let nuevo = document.querySelector("#New");

let divUl = document.querySelector("#ul");

let divLi = document.getElementsByTagName("li");

nuevo.addEventListener('click',function(){
    let tarea = ingreso.value;
    if(tarea === ""){
        alert("No ha ingresado Tarea")
    }else{
    let li= document.createElement('li');
        li.innerHTML= tarea;
        divUl.append(li);
        arreglo.push(tarea);
        console.log(arreglo);
    };
});


divUl.addEventListener('click',function(evento){
    if(evento.target.tagName == 'LI'){
        evento.target.classList.toggle('checked');
    };
});