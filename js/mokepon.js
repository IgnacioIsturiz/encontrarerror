
//iniciarJuego()
const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionReiniciar = document.getElementById("REINICIAR")
const sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
const botonReiniciar = document.getElementById ("boton-reiniciar")



//seleccionarMascotaJugador()
const sectionSeleccionarMascota = document.getElementById("Seleccionar-mascota")
const sectionSeleccionarAtaque2 = document.getElementById("Seleccionar-ataque")

const spanMascotaJugador = document.getElementById('mascota-jugador')

//seleccionarMascotaEnemigo
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

//ataqueAleatorioEnemigo
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

// combate()
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataqueJugador')
const ataqueDelEnemigo = document.getElementById('ataqueEnemigo')

// crearMensajeFinal
const sectionMensajes2= document.getElementById('resultado')
const botonFuego2 = document.getElementById("boton-fuego")
const botonAgua2 = document.getElementById("boton-agua")
const botonTierra2 = document.getElementById("boton-tierra")
const sectionReiniciar2 = document.getElementById("REINICIAR")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

//const contenedorAtaques = document.getElementById(contenedorAtaques)


let mokepones = []
//let ataqueJugador
let ataqueEnemigo =[]
let resultado
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonTierra
let botones = []
let ataqueJugadorArray = []
let ataquesMokeponEnemigo
let indexAtaqueEnemigo
let indexAtaqueJugador
let vidasJugador = 3
let vidasEnemigo = 3

//CLASES
class Mokepon{
    constructor(nombre, foto, vida) {
        this.nombre = nombre 
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
//ACABA LA CLASE

hipodoge.ataques.push(
    { nombre:'💧', id: 'boton-agua'},
    { nombre:'💧', id: 'boton-agua'},
    { nombre:'💧', id: 'boton-agua'},
    { nombre:'🔥', id: 'boton-fuego'},
    { nombre:'🌱', id: 'boton-tierra'}, 
)

capipepo.ataques.push(
    { nombre:'🌱', id: 'boton-tierra'},
    { nombre:'🌱', id: 'boton-tierra'},
    { nombre:'🌱', id: 'boton-tierra'},
    { nombre:'💧', id: 'boton-agua'},
    { nombre:'🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    { nombre:'🔥', id: 'boton-fuego'},
    { nombre:'🔥', id: 'boton-fuego'},
    { nombre:'🔥', id: 'boton-fuego'},
    { nombre:'💧', id: 'boton-agua'},
    { nombre:'🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
                <input type="radio" name = "mascota" id = ${mokepon.nombre} />
                <label class="tarjeta-de-mokepon" for=${mokepon.nombre}> 
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt=${mokepon.nombre}>
                </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')      

    }) 

  


    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = 'none'

   
    sectionSeleccionarAtaque2.style.display = 'flex'


    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        document.getElementById('imagen-jugador').src = './assets/mokepons_mokepon_hipodoge_attack.webp';
        mascotaJugador = inputHipodoge.id
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        document.getElementById('imagen-jugador').src = './assets/mokepons_mokepon_capipepo_attack.webp';
        mascotaJugador = inputCapipepo.id
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        document.getElementById('imagen-jugador').src = './assets/mokepons_mokepon_ratigueya_attack.webp';
        mascotaJugador = inputRatigueya.id
    }
    else {
        alert('Seleccione una mascota SI O SI')
    }
    
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
       if (mascotaJugador == mokepones[i].nombre) {
        ataques = mokepones[i].ataques
       }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll('.BAtaque')
    

   /* botonFuego.addEventListener('click', ataqueFuego)

  
    botonAgua.addEventListener('click', ataqueAgua)

    
    botonTierra.addEventListener('click', ataqueTierra)
    
    ESTOS CLICKS YA NO FUNCIONAN, ESTAN DOCUMENTADOS POR SI ACASO
    */
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == '🔥') {
                ataqueJugadorArray.push('FUEGO')
                console.log(ataqueJugadorArray)
                boton.style.background = '#808000'
                
            } else if (e.target.textContent == '💧'){
                ataqueJugadorArray.push('AGUA')
                console.log(ataqueJugadorArray)
                boton.style.background = '#808000'

            } else {
                ataqueJugadorArray.push('TIERRA')
                console.log(ataqueJugadorArray)
                boton.style.background = '#808000'

            }
            ataqueAleatorioEnemigo()
        })
    })

    
}


function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)//SE LLAMA A LA FUNCION "ALEATORIO" E INDICA EL NOMBRE DE LA MASCOTA 
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    document.getElementById('imagen-enemigo').src = mokepones[mascotaAleatoria].foto;
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques


    secuenciaAtaque()
}

/*function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
    
ESTAS FUNCIONES YA NO SE NECESITAN, DOCUMENTADAS POR SI ACASO
*/

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)//SE LLAMA A LA FUNCION "ALEATORIO" E INDICA EL NOMBRE DEL ATAQUE 
    
    //EN ESTE CONDICIONAL LO QUE HACE ES QUE CUANDO ALEATORIO DE 1 ME SALGA FUEGO, 2 ME SALGA AGUA Y ASI CON EL OTRO ATAQUE
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO') 
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA') 
    } else {
        ataqueEnemigo.push('TIERRA') 
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
    crearMensaje()
    
}

function iniciarPelea(){
    if (ataqueJugadorArray.length == 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueEnemigo[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let i = 0; i < ataqueJugadorArray.length; i++) {
        if(ataqueJugadorArray[i] === ataqueEnemigo[i] ){
            indexAmbosOponentes(i, i)
            resultado = 'EMPATASTE &#129300;'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugadorArray[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') {
            indexAmbosOponentes(i,i)
            resultado = 'GANASTE'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugadorArray[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') {
            indexAmbosOponentes(i,i)
            resultado = 'GANASTE'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugadorArray[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA') {
            indexAmbosOponentes(i,i)
            resultado = 'GANASTE'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else{
            indexAmbosOponentes(i,i)
            resultado = 'PERDISTE'
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
                
        crearMensaje()
        revisarVidas()

    

    /*if (ataqueJugador == ataqueEnemigo) {
        resultado = 'EMPATASTE &#129300;'
    }
    else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || 
        ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) {
        resultado = 'GANASTE &#128512;'

        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        resultado = 'PERDISTE &#128557;'

        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
        
    }
    
    crearMensaje()
    revisarVidas()*/
    
}
}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("Ganaste el combate, FELICIDADES &#128512; &#128512; &#128512;")
    } else if (vidasJugador == 0){
        crearMensajeFinal ("Perdiste el combate... &#128557; &#128557; &#128557;")
    }
    
}


function crearMensaje(resultado){
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');
  
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueJugador.textContent = ataqueJugadorArray[indexAtaqueJugador];
    nuevoAtaqueEnemigo.textContent = ataqueEnemigo[indexAtaqueEnemigo];
  
  
    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
/*
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;

    nuevoAtaqueJugador.textContent = ataqueJugadorArray[indexAtaqueJugador];
    //ataqueDelJugador.innerHTML = '';

    nuevoAtaqueEnemigo.textContent = ataqueEnemigo[indexAtaqueEnemigo];
    //ataqueDelEnemigo.innerHTML = '';

    nuevoAtaqueJugador.style.display = 'block';
    nuevoAtaqueEnemigo.style.display = 'block';

    /*let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la del enemigo con ' + ataqueEnemigo + ' entonces tú ' + resultado */

    /*ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

    //revisarVidas()
    */
}


function crearMensajeFinal(resultFinal){
   

    sectionMensajes.innerHTML = resultFinal
  
   
    botonFuego.disabled = true

   
    botonAgua.disabled = true

   
    botonTierra.disabled = true

   
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}


//FUNCION PARA ESCOGER UN NUMERO RANDOM DEL 1 AL 3 (FUEGO, AGUA, TIERRA)
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
