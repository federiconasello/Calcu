const pantalla = document.querySelector(".pantalla");
const pantalla2 = document.querySelector(".pantalla2")
const buttons = document.querySelectorAll(".btn");


buttons.forEach(btn =>{
    let numberA;
    let numberB;
    const operadores = ['+', '-', '*', "/", "="]
    btn.addEventListener('click', (e) =>{
        const { target } = e
        const { textContent } = target
        
        if(!operadores.includes(textContent)) {
            pantalla.innerHTML = pantalla.innerText + textContent
        }

        if(textContent === "C"){
            pantalla.innerHTML = ''
            pantalla2.innerHTML = ''
        }
        if(textContent === "←"){
            pantalla.innerHTML = pantalla.innerText.substring(0, pantalla.innerText.length - 2);
        }
        if( textContent === "*" || textContent === "-" || textContent === "+" || textContent === "/"){
            numberA = pantalla.innerText
            pantalla2.innerHTML = numberA + ' ' + textContent
        }
        if( textContent === "="){
        }
    })

})





























//const saludo = "hola mundo";
//console.log(saludo);
//const chau = "adios";
//console.log(chau);
//
//const horarios = ["15hs", "16hs", "20hs"];
//console.log(horarios);
//
//const auto = {
//  colores: ["azul", "verde", "negro"],
//  tamanio: "2mts",
//  autonomia: 55,
//  doblarIzquierda: (grados) => {
//    console.log(`doblar a la izquierda ${grados} falopa`);
//  },
//  acelerar: () => {
//    console.log("acelerando");
//  },
//};
//console.log({ auto });
//const paredon = true;
//if (paredon) {
//  auto.doblarIzquierda(90);
//} else {
//  auto.acelerar();
//}
//const suma = (a, b) => {
//  return a + b;
//};
//console.log(suma(5, 8));

// pasos para realizar la calculadora 
// escuchar clicks del navegador e identificar en que boton se hizo click consologueando el valor del mismo . 
//addeventlistener mirar videos ,y docu


