//Variables globales
let bulbasaurImg, charmanderImg, squirtleImg
let pokemonsImg = [bulbasaurImg, charmanderImg, squirtleImg]
let urls = ["https://pokeapi.co/api/v2/pokemon/bulbasaur", "https://pokeapi.co/api/v2/pokemon/squirtle",  "https://pokeapi.co/api/v2/pokemon/charmander"]


async function asignarImgs() {
for(let i = 0; i < pokemonsImg.length; i++){
  pokemonsImg[i] = await fetchApi(urls[i])
 }


 let hipodoge = new Mokepon(
  "Hipodoge",
  pokemonsImg[1],
  5,
  "AGUA",
  "https://mokeponcompletojdvp.netlify.app/hipodoge.webp"
);

let hipodogeEnemigo = new Mokepon(
  "Hipodoge",
  pokemonsImg[1],
  5,
  "AGUA",
  "https://mokeponcompletojdvp.netlify.app/hipodoge.webp",
  40,
  40
);

let capipepo = new Mokepon(
  "Capipepo",
  pokemonsImg[0],
  5,
  "PLANTA",
  "https://mokeponcompletojdvp.netlify.app/capipepo.webp"
);

let capipepoEnemigo = new Mokepon(
  "Capipepo",
  pokemonsImg[0],
  5,
  "PLANTA",
  "https://mokeponcompletojdvp.netlify.app/capipepo.webp"
);

let ratigueya = new Mokepon(
  "Ratigueya",
  pokemonsImg[2],
  5,
  "FUEGO",
  "https://mokeponcompletojdvp.netlify.app/ratigueya.webp"
);

let ratigueyaEnemigo = new Mokepon(
  "Ratigueya",
  pokemonsImg[2],
  5,
  "FUEGO",
  "https://mokeponcompletojdvp.netlify.app/ratigueya.webp"
);

let pydos = new Mokepon(
  "Pydos",
  "https://i.postimg.cc/7Z15NN0p/mokepons-mokepon-pydos-attack.png",
  5,
  "PLANTA",
  "https://i.postimg.cc/7Z15NN0p/mokepons-mokepon-pydos-attack.png",
  70,
  70
);

let pydosEnemigo = new Mokepon(
  "Pydos",
  "https://i.postimg.cc/7Z15NN0p/mokepons-mokepon-pydos-attack.png",
  5,
  "PLANTA",
  "https://i.postimg.cc/7Z15NN0p/mokepons-mokepon-pydos-attack.png",
  70,
  70
);

let langostelvis = new Mokepon(
  "Langostelvis",
  "https://i.postimg.cc/6qMwh1vN/mokepons-mokepon-langostelvis-attack.png",
  5,
  "FUEGO",
  "https://i.postimg.cc/6qMwh1vN/mokepons-mokepon-langostelvis-attack.png",
  70,
  70
);
let langostelvisEnemigo = new Mokepon(
  "Langostelvis",
  "https://i.postimg.cc/6qMwh1vN/mokepons-mokepon-langostelvis-attack.png",
  5,
  "FUEGO",
  "https://i.postimg.cc/6qMwh1vN/mokepons-mokepon-langostelvis-attack.png",
  70,
  70
);

let tucapalmaEnemigo = new Mokepon(
  "Tucapalma",
  "https://i.postimg.cc/Y0m9LNtD/mokepons-mokepon-tucapalma-attack.png",
  5,
  "AGUA",
  "https://i.postimg.cc/Y0m9LNtD/mokepons-mokepon-tucapalma-attack.png",
  70,
  70
);

let tucapalma = new Mokepon(
  "Tucapalma",
  "https://i.postimg.cc/Y0m9LNtD/mokepons-mokepon-tucapalma-attack.png",
  5,
  "AGUA",
  "https://i.postimg.cc/Y0m9LNtD/mokepons-mokepon-tucapalma-attack.png",
  70,
  70
);
mokepones.push(hipodoge, capipepo, ratigueya, pydos, langostelvis, tucapalma);

let HIPODOGE_ATAQUES = [
  { nombre: "Pistola de agua", id: "boton-agua", titulo: "AGUA" },
  { nombre: "Burbujas", id: "boton-agua", titulo: "AGUA" },
  { nombre: "Acua Jet", id: "boton-agua", titulo: "AGUA" },
  { nombre: "Ascuas", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Latigo Cepa", id: "boton-planta", titulo: "PLANTA" },
];

hipodoge.ataques.push(...HIPODOGE_ATAQUES);
hipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES);

let CAPIPEPO_ATAQUES = [
  { nombre: "Latigo cepa", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Absorber", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Megaagotar", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Ascuas", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Burbujas", id: "boton-agua", titulo: "AGUA" },
];

capipepo.ataques.push(...CAPIPEPO_ATAQUES);
capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES);

let RATIGUEYA_ATAQUES = [
  { nombre: "Ascuas", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Nitrocarga", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Fuego fatuo", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Latigo cepa", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Burbujas", id: "boton-agua", titulo: "AGUA" },
];

ratigueya.ataques.push(...RATIGUEYA_ATAQUES);
ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES);

let TUCAPALMA_ATAQUES = [
  { nombre: "Hidrobomba", id: "boton-agua", titulo: "AGUA" },
  { nombre: "Nitrocarga", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Absorber", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Latigo cepa", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Burbujas", id: "boton-agua", titulo: "AGUA" },
];

tucapalma.ataques.push(...TUCAPALMA_ATAQUES);
tucapalmaEnemigo.ataques.push(...TUCAPALMA_ATAQUES);

let PYDOS_ATAQUES = [
  { nombre: "Megaagotar", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Ascuas", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Fuego fatuo", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Latigo cepa", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Burbujas", id: "boton-agua", titulo: "AGUA" },
];

pydos.ataques.push(...PYDOS_ATAQUES);
pydosEnemigo.ataques.push(...PYDOS_ATAQUES);

let LANGOSTELVIS_ATAQUES = [
  { nombre: "Ascuas", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Nitrocarga", id: "boton-fuego", titulo: "FUEGO" },
  { nombre: "Acua Jet", id: "boton-agua", titulo: "AGUA" },
  { nombre: "Latigo cepa", id: "boton-planta", titulo: "PLANTA" },
  { nombre: "Burbujas", id: "boton-agua", titulo: "AGUA" },
];

langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES);

langostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES);



 
mokepones.forEach((mokepon) => {
  opcionDeMokepones = `
     <input type="radio" name="mascota" id="${mokepon.nombre}" class="input" />
          <label for="${mokepon.nombre}" class="input"
            ><img class="fotos"
              src=${mokepon.foto}
              alt=${mokepon.nombre}
            />${mokepon.nombre}</label
    `;
  contenedorTarjetas.innerHTML += opcionDeMokepones;

  inputPydos = document.getElementById("Pydos");
  inputLangostelvis = document.getElementById("Langostelvis");
  inputTucapalma = document.getElementById("Tucapalma");
  inputCapipepo = document.getElementById("Capipepo");
  inputHipodoge = document.getElementById("Hipodoge");
  inputRatigueya = document.getElementById("Ratigueya");

  botonSeleccionarJugador.addEventListener("click", seleccionarMascotaJugador);
});
}

async function fetchApi(url){
  let response = await fetch(url)
  let data = await response.json()
  let sprites = await data.sprites.other["dream_world"]
  let front = await sprites["front_default"]

  return front
} 




const sectionSeleccionarMascota = document.getElementById("selMascota");
const sectionSelAtaque = document.getElementById("selAtaque");
const sectionMensajesss = document.getElementById("mensajes");
const sectionReiniciar = document.getElementById("reiniciar");
const botonSeleccionarJugador = document.getElementById("boton-seleccionar");
const contenedorAtaques = document.getElementById("contenedorAtaques");
const spanMascotaJugador = document.getElementById("mascotaJugador");
const spanVidasJugador = document.getElementById("vidasJ");
const spanVidasEnemigo = document.getElementById("vidasE");

const sectionMensaje = document.getElementById("mensajes");
const sectionResultado = document.getElementById("resultado");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataqueDelJugador");
const ataqueDelEnemigo = document.getElementById("ataqueDelEnemigo");
const botonReiniciar = document.getElementById("boton-reiniciar");
const juego = document.getElementById("selAtaque");

let mascotaEnemiga = document.getElementById("mascotaEnemiga");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");

const spanImgMascotaCombate = document.getElementById("imgMascotaCombate");
const spanImgMascotaCombateEnemiga = document.getElementById(
  "imgMascotaCombateEnemiga"
);

const sectionVerMapa = document.getElementById("verMapa");
const mapa = document.getElementById("mapa");
let jugador = 0;

let jugadorId = null;

let ataqueJugador = [];

let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let ataquesMokepon;
let atqEnemigo = [];
let ataquesMokeponEnemigo;
let jugar = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let parrafo;
let mokepones = [];
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let ataques;
let botonAgua;
let botonFuego;
let botonPlanta;

let tipoMascotaEnemigo;
let tipoMascotaJugador;

let lienzo = mapa.getContext("2d");
let imgMokepon = new Image();
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "https://mokeponcompletojdvp.netlify.app/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.png";
let anchoDelMapa; 
let alturaQuerida;


    const anchoMaximoDelMapa = 600;
    anchoDelMapa = window.innerWidth - 20;
    if (anchoDelMapa > anchoMaximoDelMapa) {
        anchoDelMapa = anchoMaximoDelMapa - 40;
      }
    alturaQuerida = (anchoDelMapa * 600) / 800;
    mapa.width = anchoDelMapa;
    mapa.height = alturaQuerida;






    




  


let mokeponEnemigo = null;

class Mokepon {
  constructor(
    nombre,
    foto,
    vida,
    tipo,
    fotoMapa,
    ancho = anchoDelMapa / 10,
    alto =  anchoDelMapa / 10,
    x = 10,
    y = 10
  ) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.tipo = tipo;
    this.ancho = ancho;
    this.alto = alto;
    (this.x = aleatorio(0, mapa.width - this.ancho)),
      (this.y = aleatorio(0, mapa.height - this.alto));
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;

    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

asignarImgs()


sectionVerMapa.style.display = "none";
sectionSelAtaque.style.display = "none";
sectionMensajesss.style.display = "none";
sectionReiniciar.style.display = "none";


botonReiniciar.addEventListener("click", reiniciarJuego);

//Function aleatorio para ataques aleatorios y mascotas aleatorias
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let newMokeponesArray;
let mokeponesArrayRandom 
//funcion que indica que mascota eligio el jugador

function seleccionarMascotaJugador() {
  let inputsArray = []
  let inputMokeponesArray = [inputHipodoge, inputCapipepo, inputRatigueya, inputPydos, inputLangostelvis, inputTucapalma]
  for(let i = 0; i < mokepones.length; i++){
    inputsArray.push({id: document.getElementById(mokepones[i].nombre),
      nombre: mokepones[i].nombre
    })
  }

  inputsArray.forEach(mokepon => {
      if(mokepon.id.checked){
        spanMascotaJugador.innerHTML = mokepon.nombre;
    spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[inputsArray.indexOf(mokepon)].foto} alt=""
                  />`;
    jugar = 1;
    mascotaJugador = inputMokeponesArray[inputsArray.indexOf(mokepon)].id;
    tipoMascotaJugador = mokepones[inputsArray.indexOf(mokepon)];
      }}
    )
    newMokeponesArray = mokepones.filter(mokepon => mokepon.nombre != tipoMascotaJugador.nombre)
    mokeponesArrayRandom = newMokeponesArray.sort(() => Math.random - 0.5).slice(0,3)


  // if (document.getElementById("Hipodoge").checked) {
  //   spanMascotaJugador.innerHTML = inputHipodoge.id;
  //   spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[0].foto} alt=""
  //                 />`;
  //   jugar = 1;
  //   mascotaJugador = inputHipodoge.id;
  //   tipoMascotaJugador = mokepones[0];
  // } else if (document.getElementById("Capipepo").checked) {
  //   spanMascotaJugador.innerHTML = inputCapipepo.id;
  //   spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[1].foto} alt=""
  //                 />`;
  //   jugar = 1;
  //   mascotaJugador = inputCapipepo.id;
  //   tipoMascotaJugador = mokepones[1];
  // } else if (document.getElementById("Ratigueya").checked) {
  //   mascotaJugador = inputRatigueya.id;
  //   spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[2].foto} alt=""
  //                 />`;
  //   spanMascotaJugador.innerHTML = inputRatigueya.id;
  //   jugar = 1;
  //   tipoMascotaJugador = mokepones[2];
  // } else if (document.getElementById("Pydos").checked) {
  //   spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[3].foto} alt=""
  //                 />`;
  //   mascotaJugador = inputPydos.id;
  //   spanMascotaJugador.innerHTML = inputPydos.id;
  //   jugar = 1;
  //   tipoMascotaJugador = mokepones[3];
  // } else if (document.getElementById("Langostelvis").checked) {
  //   mascotaJugador = inputLangostelvis.id;
  //   spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[4].foto} alt=""
  //                 />`;
  //   spanMascotaJugador.innerHTML = inputLangostelvis.id;
  //   jugar = 1;
  //   tipoMascotaJugador = mokepones[4];
  // } else if (document.getElementById("Tucapalma").checked) {
  //   spanImgMascotaCombate.innerHTML = `<img class="imgMascotaCombate" src=${mokepones[5].foto} alt=""
  //                 />`;
  //   mascotaJugador = inputTucapalma.id;
  //   spanMascotaJugador.innerHTML = inputTucapalma.id;
  //   jugar = 1;
  //   tipoMascotaJugador = mokepones[5];
  // } else {
  //   alert("AÚN NO HAZ ELEGIDO A TU MASCOTA");
  //   jugar = 0;
  // }

  if (jugar == 1) {
    // sectionMensajesss.style.display = "flex";
    sectionVerMapa.style.display = "flex";
    iniciarMapa();

    sectionSeleccionarMascota.style.display = "none";
  }
}

function tipoDeLaMascotaJugador() {
  if (
    (tipoMascotaJugador.tipo == "FUEGO" &&
      mascotaEncontrada.tipo == "PLANTA") ||
    (tipoMascotaJugador.tipo == "AGUA" && mascotaEncontrada.tipo == "FUEGO") ||
    (tipoMascotaJugador.tipo == "PLANTA" && mascotaEncontrada.tipo == "AGUA")
  ) {
    console.log("Y solo mirameee");
    tipoMascotaJugador.tipo == "FUEGO"
      ? tipoMascotaJugador.ataques.push({
          nombre: "FUEGO INFERNAL",
          id: "boton-fuego",
          titulo: "FUEGO",
        })
      : tipoMascotaJugador.tipo == "PLANTA"
      ? tipoMascotaJugador.ataques.push({
          nombre: "LLUEVEHOJAS",
          id: "boton-planta",
          titulo: "PLANTA",
        })
      : tipoMascotaJugador.tipo == "AGUA"
      ? tipoMascotaJugador.ataques.push({
          nombre: "AGUA ETERNA",
          id: "boton-agua",
          titulo: "AGUA",
        })
      : "";
  } else if (
    (tipoMascotaJugador.tipo == "AGUA" && mascotaEncontrada.tipo == "PLANTA") ||
    (tipoMascotaJugador.tipo == "PLANTA" &&
      mascotaEncontrada.tipo == "FUEGO") ||
    (tipoMascotaJugador.tipo == "FUEGO" && mascotaEncontrada.tipo == "AGUA")
  ) {
    mascotaEncontrada.tipo == "FUEGO"
      ? mascotaEncontrada.ataques.push({
          nombre: "FUEGO INFERNAL",
          id: "boton-fuego",
          titulo: "FUEGO",
        })
      : mascotaEncontrada.tipo == "PLANTA"
      ? mascotaEncontrada.ataques.push({
          nombre: "LLUEVEHOJAS",
          id: "boton-planta",
          titulo: "PLANTA",
        })
      : mascotaEncontrada.tipo == "AGUA"
      ? mascotaEncontrada.ataques.push({
          nombre: "AGUA ETERNA",
          id: "boton-agua",
          titulo: "AGUA",
        })
      : "";
  }
}

//Ataques disponibles

function mostrarAtaques(ataques) {
  tipoDeLaMascotaJugador();

  ataques.forEach((ataques) => {
    ataquesMokepon = `<button id=${ataques.id} class="boton-ataque  ${ataques.id} BAtaque">${ataques.nombre}</button>`;

    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonAgua = document.getElementById("boton-agua");
  botonFuego = document.getElementById("boton-fuego");
  botonPlanta = document.getElementById("boton-planta");
  botones = document.querySelectorAll(".BAtaque");

  secuenciaAtaque();
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (
        e.target.textContent == "Ascuas" ||
        e.target.textContent == "Nitrocarga" ||
        e.target.textContent == "Fuego fatuo" ||
        e.target.textContent == "FUEGO INFERNAL"
      ) {
        ataqueJugador.push("FUEGO");
        boton.style.background = "#112f58";
        console.log(ataqueJugador);
        boton.disabled = true;
      } else if (
        e.target.textContent == "Pistola de agua" ||
        e.target.textContent == "Burbujas" ||
        e.target.textContent == "Acua Jet" ||
        e.target.textContent == "AGUA ETERNA" ||
        e.target.textContent == "Hidrobomba"
      ) {
        ataqueJugador.push("AGUA");
        boton.style.background = "#112f58";
        console.log(ataqueJugador);
        boton.disabled = true;
      } else {
        ataqueJugador.push("PLANTA");
        boton.style.background = "#112f58";
        console.log(ataqueJugador);
        boton.disabled = true;
      }

      // tipoDeLaMascotaJugador();
      ataqueAleatorioEnemigo();
      iniciarPelea();
    });
  });
}

//Mascota aleatoria enemiga

function laMascotaEnemiga(mascotaDelEnemigo) {
  mascotaEnemiga.innerHTML = mascotaDelEnemigo.nombre;
  spanImgMascotaCombateEnemiga.innerHTML = `<img class="imgMascotaCombate" src=${mascotaDelEnemigo.foto} alt=""
                  />`;
  tipoMascotaEnemigo = mascotaDelEnemigo;

  return mascotaDelEnemigo;
}

//COMBATE
let pc = aleatorio(0, mokepones.length - 1);

let ataqueAleatorio;

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    botones.forEach((boton) => {
      boton.disabled = true;
      boton.style.background = "#112f58";
    });
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = atqEnemigo[enemigo];
}

function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === atqEnemigo[index]) {
      indexAmbosOponentes(index, index);
      crearMensaje("EMPATE");
    } else if (
      ataqueJugador[index] === "FUEGO" &&
      atqEnemigo[index] === "PLANTA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "AGUA" &&
      atqEnemigo[index] === "FUEGO"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "PLANTA" &&
      atqEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVidas();
}

function revisarVidas() {
  if (victoriasEnemigo == victoriasJugador) {
    crearMensajeFinal("¡HA SIDO UN EMPATE!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("¡FELICITACIONES, TU MASCOTA ES PODEROSA!");
  } else {
    crearMensajeFinal("HAZ PERDIDO, SIGUE ENTRENANDO");
  }
}

//Indica que ataque eligio el pc y el jugador

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");
  // parrafo.innerHTML =

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let parrafo = document.createElement("p");

  parrafo.innerHTML = resultadoFinal;
  sectionMensaje.appendChild(parrafo);

  sectionReiniciar.style.display = "flex";

  sectionResultado.style.display = "none";
}




function pintarCanvas() {
  tipoMascotaJugador.x += tipoMascotaJugador.velocidadX;
  tipoMascotaJugador.y += tipoMascotaJugador.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  tipoMascotaJugador.pintarMokepon();



    if(tipoMascotaJugador.velocidadX !== 0 || tipoMascotaJugador.velocidadY !== 0){
      mokeponesArrayRandom.forEach(mokepon => revisarColision(mokepon))
    }

    
   
    mokeponesArrayRandom.forEach(mokepon => mokepon.pintarMokepon())
  // console.log(newMokeponesArray)

  // if (tipoMascotaJugador.nombre === "Hipodoge") {
  //   if (
  //     tipoMascotaJugador.velocidadX !== 0 ||
  //     tipoMascotaJugador.velocidadY !== 0
  //   ) {
  //     revisarColision(capipepoEnemigo);
  //     revisarColision(ratigueyaEnemigo);
  //     revisarColision(pydosEnemigo);
  //     revisarColision(langostelvisEnemigo);
  //     revisarColision(tucapalmaEnemigo);
  //   }
  //   hipodogeEnemigo = null;
  //   capipepoEnemigo.pintarMokepon();
  //   ratigueyaEnemigo.pintarMokepon();
  //   langostelvisEnemigo.pintarMokepon();
  //   pydosEnemigo.pintarMokepon();
  //   tucapalmaEnemigo.pintarMokepon();
  // } else if (tipoMascotaJugador.nombre === "Capipepo") {
  //   if (
  //     tipoMascotaJugador.velocidadX !== 0 ||
  //     tipoMascotaJugador.velocidadY !== 0
  //   ) {
  //     revisarColision(hipodogeEnemigo);

  //     revisarColision(ratigueyaEnemigo);
  //     revisarColision(pydosEnemigo);
  //     revisarColision(langostelvisEnemigo);
  //     revisarColision(tucapalmaEnemigo);
  //   }
  //   capipepoEnemigo = null;
  //   hipodogeEnemigo.pintarMokepon();
  //   ratigueyaEnemigo.pintarMokepon();
  //   langostelvisEnemigo.pintarMokepon();
  //   pydosEnemigo.pintarMokepon();
  //   tucapalmaEnemigo.pintarMokepon();
  // } else if (tipoMascotaJugador.nombre === "Ratigueya") {
  //   if (
  //     tipoMascotaJugador.velocidadX !== 0 ||
  //     tipoMascotaJugador.velocidadY !== 0
  //   ) {
  //     revisarColision(hipodogeEnemigo);
  //     revisarColision(capipepoEnemigo);

  //     revisarColision(pydosEnemigo);
  //     revisarColision(langostelvisEnemigo);
  //     revisarColision(tucapalmaEnemigo);
  //   }
  //   ratigueyaEnemigo = null;
  //   hipodogeEnemigo.pintarMokepon();
  //   capipepoEnemigo.pintarMokepon();
  //   langostelvisEnemigo.pintarMokepon();
  //   pydosEnemigo.pintarMokepon();
  //   tucapalmaEnemigo.pintarMokepon();
  // } else if (tipoMascotaJugador.nombre === "Pydos") {
  //   if (
  //     tipoMascotaJugador.velocidadX !== 0 ||
  //     tipoMascotaJugador.velocidadY !== 0
  //   ) {
  //     revisarColision(hipodogeEnemigo);
  //     revisarColision(capipepoEnemigo);
  //     revisarColision(ratigueyaEnemigo);

  //     revisarColision(langostelvisEnemigo);
  //     revisarColision(tucapalmaEnemigo);
  //   }
  //   pydosEnemigo = null;
  //   hipodogeEnemigo.pintarMokepon();
  //   ratigueyaEnemigo.pintarMokepon();
  //   langostelvisEnemigo.pintarMokepon();
  //   capipepoEnemigo.pintarMokepon();
  //   tucapalmaEnemigo.pintarMokepon();
  // } else if (tipoMascotaJugador.nombre === "Langostelvis") {
  //   if (
  //     tipoMascotaJugador.velocidadX !== 0 ||
  //     tipoMascotaJugador.velocidadY !== 0
  //   ) {
  //     revisarColision(hipodogeEnemigo);
  //     revisarColision(capipepoEnemigo);
  //     revisarColision(ratigueyaEnemigo);
  //     revisarColision(pydosEnemigo);
  //     revisarColision(tucapalmaEnemigo);
  //   }
  //   langostelvisEnemigo = null;
  //   hipodogeEnemigo.pintarMokepon();
  //   ratigueyaEnemigo.pintarMokepon();

  //   capipepoEnemigo.pintarMokepon();
  //   tucapalmaEnemigo.pintarMokepon();
  //   pydosEnemigo.pintarMokepon();
  // } else if (tipoMascotaJugador.nombre === "Tucapalma") {
  //   if (
  //     tipoMascotaJugador.velocidadX !== 0 ||
  //     tipoMascotaJugador.velocidadY !== 0
  //   ) {
  //     revisarColision(hipodogeEnemigo);
  //     revisarColision(capipepoEnemigo);
  //     revisarColision(ratigueyaEnemigo);
  //     revisarColision(pydosEnemigo);
  //     revisarColision(langostelvisEnemigo);
  //   }
  //   tucapalmaEnemigo = null;
  //   hipodogeEnemigo.pintarMokepon();
  //   ratigueyaEnemigo.pintarMokepon();

  //   capipepoEnemigo.pintarMokepon();
  //   langostelvisEnemigo.pintarMokepon();
  //   pydosEnemigo.pintarMokepon();
  // }
}
function moverMokeponDerecha() {
  console.log("Derecha");
  tipoMascotaJugador.velocidadX = 10;
}

function moverMokeponIzquierda() {
  console.log("Izquierda");
  tipoMascotaJugador.velocidadX = -10;
}
function moverMokeponArriba() {
  console.log("Arriba");
  tipoMascotaJugador.velocidadY = -10;
}
function moverMokeponAbajo() {
  console.log("Abajo");
  tipoMascotaJugador.velocidadY = 10;
}

function detenerMovimiento() {
  console.log("se detuvo");
  tipoMascotaJugador.velocidadX = 0;
  tipoMascotaJugador.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverMokeponArriba();
      break;
    case "ArrowDown":
      moverMokeponAbajo();
      break;

    case "ArrowLeft":
      moverMokeponIzquierda();
      break;

    case "ArrowRight":
      moverMokeponDerecha();
      break;

    default:
      break;
  }
}

function iniciarMapa() {
  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener("keydown", sePresionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
}

let mascotaEncontrada;

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaenemigo = enemigo.x;

  const arribaMascota = tipoMascotaJugador.y;
  const abajoMascota = tipoMascotaJugador.y + tipoMascotaJugador.alto;
  const derechaMascota = tipoMascotaJugador.x + tipoMascotaJugador.ancho;
  const izquierdaMascota = tipoMascotaJugador.x;
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaenemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  } else {
    alert("Te haz encontrado con un " + enemigo.nombre + " salvaje");
    sectionSelAtaque.style.display = "flex";
    sectionMensajesss.style.display = "flex";
    sectionVerMapa.style.display = "none";

    console.log("se detecto una colision");
    laMascotaEnemiga(enemigo);
    mascotaEncontrada = enemigo;
    extraerAtaques(mascotaJugador);
    detenerMovimiento();
    clearInterval(intervalo);
    return enemigo;
  }
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function ataqueAleatorioEnemigo() {
  let atqMokeponEnemigo = mascotaEncontrada;
  ataquesMokeponEnemigo = atqMokeponEnemigo.ataques;
  ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
  atqEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].titulo);
  ataquesMokeponEnemigo.splice(ataqueAleatorio, 1);

  console.log(atqEnemigo);
  // iniciarPelea();
}

//Jugadas para el pc

function reiniciarJuego() {
  location.reload();
}

// setCanvasSize()
// window.onresize = () => setCanvasSize()