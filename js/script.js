const btnNuevoJuego = document.querySelector('#nuevoJuego');
const botonArriba = document.querySelector('.botonArriba');
const titulo = document.querySelector('.letra');
const intentos = document.querySelector('#intentos');
const juego = document.querySelector('#juego');
const entrada = document.querySelector('#entrada');
const numeroElegido1 = document.querySelector('#numeroElegido1');
const numeroElegido2 = document.querySelector('#numeroElegido2');
const numeroElegido3 = document.querySelector('#numeroElegido3');
const btnOK = document.querySelector('#btnOK');
const imagen = document.querySelector('.flecha');
const historia = document.querySelector('#historia');

var num1, num2,num3,num4;
var nIntento=0;
var bien=0;
var regular=0;

  const tituloNumEleg1 = document.createElement("div");
  const tituloNumEleg2 = document.createElement("div");
  const tituloNumEleg3 = document.createElement("div");
  const inputNumero1 = document.createElement("select");
  const inputNumero2 = document.createElement("select");
  const inputNumero3 = document.createElement("select");
  const inputNumero4 = document.createElement("select");

  tituloNumEleg1.classList.add("acomoda");

  tituloNumEleg2.classList.add("acomoda2");
  tituloNumEleg3.classList.add("acomoda3");
  const addBtnOK = document.createElement("button");
addBtnOK.classList.add("btn");
addBtnOK.classList.add("btn-warning");
addBtnOK.classList.add("margenOK");
addBtnOK.textContent="OK";

/*const addBtnBorrar = document.createElement("button");
addBtnBorrar.classList.add("btn");
addBtnBorrar.classList.add("btn-warning");
addBtnBorrar.classList.add("mr-1");
addBtnBorrar.textContent="Borrar";*/

const addBtnAbandona= document.createElement("button");
addBtnAbandona.classList.add("btn");
addBtnAbandona.classList.add("btn-info");
addBtnAbandona.textContent="Abandona";

const lista = document.createElement('ul');
historia.appendChild(lista); 

for (var i = 0; i <= 9; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  inputNumero1.appendChild(optionElement);
}
inputNumero1.classList.add("margen");
inputNumero1.classList.add("numeroE");

for (var i = 0; i <= 9; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  inputNumero2.appendChild(optionElement);
}
inputNumero2.classList.add("numeroE");

for (var i = 0; i <= 9; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  inputNumero3.appendChild(optionElement);
}
inputNumero3.classList.add("numeroE");

for (var i = 0; i <= 9; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  inputNumero4.appendChild(optionElement);
}
inputNumero4.classList.add("numeroE");

btnNuevoJuego.addEventListener('click',(e)=>{
    e.preventDefault();
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
 
    botonArriba.appendChild(btnNuevoJuego);
    titulo.classList.add("letra2");
    imagen.classList.add("borro");
nIntento=0;
bien=0;
regular=0;

  //  juego.removeChild(juego.firstChild);
    var numerosAleatorios = [];
  
    while (numerosAleatorios.length < 4) {
      var numero = Math.floor(Math.random() * 10);
      if (!numerosAleatorios.includes(numero)) {
        numerosAleatorios.push(numero);
      }
    }

tituloNumEleg1.innerHTML=`Numero Sorteado: `
tituloNumEleg2.innerHTML=` ?  ?  ?  ? `
tituloNumEleg3.innerHTML=`Eligí un Número: `
numeroElegido1.appendChild(tituloNumEleg1);
numeroElegido2.appendChild(tituloNumEleg2);
numeroElegido3.appendChild(tituloNumEleg3);

entrada.appendChild(inputNumero1);
entrada.appendChild(inputNumero2);
entrada.appendChild(inputNumero3);
entrada.appendChild(inputNumero4);

inputNumero1.disabled=false;
inputNumero2.disabled=false;
inputNumero3.disabled=false;
inputNumero4.disabled=false;

inputNumero1.selectedIndex = -1;
inputNumero2.selectedIndex = -1;
inputNumero3.selectedIndex = -1;
inputNumero4.selectedIndex = -1;

botones.appendChild(addBtnOK);
//botones.appendChild(addBtnBorrar);
botones.appendChild(addBtnAbandona);

addBtnAbandona.addEventListener('click',(e)=>{
  e.preventDefault();
  inputNumero1.disabled=true;
  inputNumero2.disabled=true;
  inputNumero3.disabled=true;
  inputNumero4.disabled=true;
  tituloNumEleg2.classList.add("abandNro");
tituloNumEleg2.innerHTML=`${numerosAleatorios[0]} ${numerosAleatorios[1]} ${numerosAleatorios[2]} ${numerosAleatorios[3]}`
Swal.fire({
  title: '¡¡¡Perdiste!!!',
  width: 500,
  padding: '1em',
  color: '#716add',
  
 // background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("img/perder.gif")
    right bottom
    no-repeat
  `
})

})

/*addBtnBorrar.addEventListener('click',(eee)=>{
    eee.preventDefault();
    inputNumero1.selectedIndex = -1;
    inputNumero2.selectedIndex = -1;
    inputNumero3.selectedIndex = -1;
    inputNumero4.selectedIndex = -1;
    
})
*/

addBtnOK.addEventListener('click',(ee)=>{
    ee.preventDefault();
    

num1= inputNumero1.value;
num2= inputNumero2.value;
num3= inputNumero3.value;
num4= inputNumero4.value;
    if (inputNumero1.selectedIndex == -1 || inputNumero2.selectedIndex == -1 || inputNumero3.selectedIndex == -1 || inputNumero4.selectedIndex == -1)
    {alert("Tenés que ingresar 4 números."); }
    else if  (num1==num2 || num1==num3 || num1==num4 || num2==num3 || num2==num4 || num3==num4)
    {alert("Todos los números tienen que ser distintos.");}
    else{
      nIntento++;
//verifica
bien=0;
regular=0;
if (num1==numerosAleatorios[0]){
  bien++;
 }
 if (num2==numerosAleatorios[1]){
  bien++;
 }
 if (num3==numerosAleatorios[2]){
  bien++;
 }
 if (num4==numerosAleatorios[3]){
  bien++;
 }

 if (num1==numerosAleatorios[1] || num1==numerosAleatorios[2] || num1==numerosAleatorios[3]){
  regular++;
 }
 if (num2==numerosAleatorios[0] || num2==numerosAleatorios[2] || num2==numerosAleatorios[3]){
  regular++;
 }
 if (num3==numerosAleatorios[0] || num3==numerosAleatorios[1] || num3==numerosAleatorios[3]){
  regular++;
 }
 if (num4==numerosAleatorios[0] || num4==numerosAleatorios[1] || num4==numerosAleatorios[2]){
  regular++;
 }
if (num1==numerosAleatorios[0] && num2==numerosAleatorios[1] && num3==numerosAleatorios[2] && num4==numerosAleatorios[3])
{


Swal.fire({
  title: '¡¡¡Ganaste!!!',
  width: 600,
  padding: '2rem',
  color: '#716add',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("img/ganaste1.gif")
    left top
    no-repeat
  `
})
    }

 const li = document.createElement('li');
const p = document.createElement("p");

      p.innerHTML = `Intento ${nIntento} &#8594 ${num1} ${num2} ${num3} ${num4} &#8594 ${bien} bien y ${regular} regulares`;
    li.appendChild(p);
    lista.appendChild(li);
    
    }
})
})
