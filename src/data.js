import Abstraccion from "./assets/abstraccion-verbal.png";
import Asociacion from "./assets/asociacion.png";
import Colores from "./assets/colores.png";
import ComprensionVerbal from "./assets/comprension-verbal.png";
import Escritura from "./assets/escritura.png";
import Geografia from "./assets/geografia.png";
import Gestos from "./assets/gestos.png";
import Informacion from "./assets/informacion.png";
import LenguajeAutomatico from "./assets/lenguaje-automatico.png";
import LenguajeEspontaeno from "./assets/lenguaje-espontaneo.png";
import Matematico from "./assets/matematico.png";
import MemoriaVisual from "./assets/memoria-visual.png";
import Posturas from "./assets/posturas.png";
import Superpuestas from "./assets/superpuestas.png";

// assets/images.js

import boca from "./assets/boca.png";
import cabeza from "./assets/cabeza.png";
import dorado from "./assets/dorado.png";
import fucsia from "./assets/fucsia.png";
import gesto1 from "./assets/gesto1.png";
import gesto2 from "./assets/gesto2.png";
import gesto3 from "./assets/gesto3.png";
import gesto4 from "./assets/gesto4.png";
import gestos2 from "./assets/gestos2.png";
import mano from "./assets/mano.png";
import nariz from "./assets/nariz.png";
import ojos from "./assets/ojos.png";
import oreja from "./assets/oreja.png";
import pie from "./assets/pie.png";
import plateado from "./assets/plateado.png";
import tinto from "./assets/tinto.png";
import bajaCalifornia from "./assets/bajaCalifornia.png";
import belice from "./assets/belice.png";
import chihuahua from "./assets/chihuahua.png";
import jalisco from "./assets/jalisco.png";
import nayarit from "./assets/nayarit.png";
import sinaloa from "./assets/sinaloa.png";
import rosa from "./assets/rosa.png";
import morado from "./assets/morado.png";
import verde from "./assets/verde.png";

export const imgPreguntas = {
  boca,
  cabeza,
  dorado,
  fucsia,
  gesto1,
  gesto2,
  gesto3,
  gesto4,
  gestos2,
  mano,
  nariz,
  ojos,
  oreja,
  pie,
  plateado,
  tinto,
  bajaCalifornia,
  belice,
  chihuahua,
  jalisco,
  nayarit,
  sinaloa,
  rosa,
  morado,
  verde,
};

export const imgs = [
  Abstraccion,
  Asociacion,
  Colores,
  ComprensionVerbal,
  Escritura,
  Geografia,
  Gestos,
  Informacion,
  LenguajeAutomatico,
  LenguajeEspontaeno,
  Matematico,
  MemoriaVisual,
  Posturas,
  Superpuestas,
];

export const categories = {
  abstraccionVerbal: "Abstracción verbal (comprensión)",
  asociacion: "Evocación categorial en asociación",
  colores: "Colores",
  comprensionVerbal: "Comprensión verbal",
  escritura: "Escritura al dictado",
  geografia: "Geografía",
  gestos: "Gesto simbólico e imitación de posturas",
  informacion: "Información",
  lenguajeAutomatico: "Lenguaje automático-control mental",
  lenguajeEspontaneo: "Lenguaje espontáneo",
  matematico: "Cálculo y problemas aritméticos",
  memoriaVisual: "Aprendizaje seriado y memoria visual",
  posturas: "Secuencia de posturas",
  superpuestas: "Discriminación de imágenes superpuestas",
};

const {
  abstraccionVerbal,
  asociacion,
  colores,
  comprensionVerbal,
  escritura,
  geografia,
  gestos,
  informacion,
  lenguajeAutomatico,
  lenguajeEspontaneo,
  matematico,
  memoriaVisual,
  posturas,
  superpuestas,
} = categories;

export const questions = [
  {
    id: 1,
    difficulty: "BÁSICO",
    question: "¿Cuántos segundos tiene un minuto?",
    category: "Lenguaje espontáneo",
    correct_answer: "60 segundos",
    incorrect_answers: ["30 segundos", "45 segundos", "90 segundos"],
  },
  {
    id: 2,
    difficulty: "BÁSICO",
    question: "¿Cuántas horas tiene un día?",
    category: "Lenguaje espontáneo",
    correct_answer: "24 horas",
    incorrect_answers: ["12 horas", "36 horas", "48 horas"],
  },
  {
    id: 3,
    difficulty: "BÁSICO",
    question: "¿Cuántos días tiene el mes de febrero en año bisiesto?",
    category: "Lenguaje espontáneo",
    correct_answer: "29 días",
    incorrect_answers: ["28 días", "30 días", "31 días"],
  },
  {
    id: 4,
    difficulty: "BÁSICO",
    question: "¿Cuántos meses tarda un embarazo?",
    category: "Lenguaje espontáneo",
    correct_answer: "9 meses",
    incorrect_answers: ["6 meses", "7 meses", "12 meses"],
  },
  {
    id: 5,
    difficulty: "BÁSICO",
    question: "¿Cuántos meses faltan para su próximo año?",
    category: "Lenguaje espontáneo",
    correct_answer: "7 meses",
    incorrect_answers: ["6 meses", "8 meses", "12 meses"],
  },
  {
    id: 6,
    difficulty: "MEDIO",
    question: "¿Cuáles son los 4 puntos cardinales?",
    category: "Lenguaje espontáneo",
    correct_answer: "Norte, Sur, Este, Oeste",
    incorrect_answers: [
      "Noreste, Sudeste, Noroeste, Sudoeste",
      "Arriba, Abajo, Izquierda, Derecha",
      "Norte, Sur, Occidente, Oriente",
    ],
  },
  {
    id: 7,
    difficulty: "MEDIO",
    question: "¿Cuántos planetas existen en el sistema solar?",
    category: "Lenguaje espontáneo",
    correct_answer: "8 planetas",
    incorrect_answers: ["7 planetas", "9 planetas", "10 planetas"],
  },
  {
    id: 8,
    difficulty: "MEDIO",
    question: "¿Cuántas estaciones tiene el año? Mencionarlas",
    category: "Lenguaje espontáneo",
    correct_answer: "4 estaciones: Primavera, Verano, Otoño, Invierno",
    incorrect_answers: [
      "3 estaciones: Calor, Frío, Lluvias",
      "2 estaciones: Seca, Lluviosa",
      "5 estaciones: Primavera, Verano, Otoño, Invierno, Monzón",
    ],
  },
  {
    id: 9,
    difficulty: "MEDIO",
    question: "¿Cada cuántos años hay cambio de presidente de la república?",
    category: "Lenguaje espontáneo",
    correct_answer: "6 años",
    incorrect_answers: ["4 años", "8 años", "10 años"],
  },
  {
    id: 10,
    difficulty: "MEDIO",
    question: "¿Cuántos años tiene un siglo?",
    category: "Lenguaje espontáneo",
    correct_answer: "100 años",
    incorrect_answers: ["50 años", "200 años", "500 años"],
  },
  {
    id: 11,
    difficulty: "AVANZADO",
    question: "¿Cuántos números tiene un reloj?",
    category: "Lenguaje espontáneo",
    correct_answer: "12 números",
    incorrect_answers: ["10 números", "24 números", "30 números"],
  },
  {
    id: 12,
    difficulty: "AVANZADO",
    question: "¿En qué estado vive?",
    category: "Lenguaje espontáneo",
    correct_answer: "Jalisco",
    incorrect_answers: ["Nayarit", "Colima", "Michoacán"],
  },
  {
    id: 13,
    difficulty: "AVANZADO",
    question: "¿Cuántos metros tiene un kilómetro?",
    category: "Lenguaje espontáneo",
    correct_answer: "1000 metros",
    incorrect_answers: ["500 metros", "2000 metros", "1500 metros"],
  },
  {
    id: 14,
    difficulty: "BÁSICO",
    question: "¿Cuáles son las prendas básicas de vestir?",
    category: "Lenguaje espontáneo",
    correct_answer: "Camisa, Pantalón, Zapatos",
    incorrect_answers: [
      "Corbata, Sombrero, Guantes",
      "Vestido, Bufanda, Botas",
      "Chaleco, Corbata, Sandalias",
    ],
  },
  {
    id: 15,
    difficulty: "MEDIO",
    question: "¿Cuáles son las vocales, te las sabes? Mencionelas",
    category: "Lenguaje automático-control mental",
    correct_answer: "a, e, i, o, u",
    incorrect_answers: ["a, b, c, d, e", "i, o, u, g, e", "e, o, u, a, f"],
  },
  {
    id: 16,
    difficulty: "MEDIO",
    question: "Ahora repitelas desde la última a la primera (u, o, i, e, a)",
    category: "Lenguaje automático-control mental",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 17,
    difficulty: "MEDIO",
    question: "Menciona 5 pares de sílabas",
    category: "Lenguaje automático-control mental",
    correct_answer: "ma-me, pe-po, ti-ta, lo-la, re-ri",
    incorrect_answers: [
      "sa-se, cu-ca, de-di, ga-go, bo-bu",
      "pi-pa, mu-mo, ni-na, so-su, le-la",
      "be-bi, fu-fo, mo-mu, ra-ro, ve-vi",
    ],
  },
  {
    id: 18,
    difficulty: "AVANZADO",
    question: "¿Cuáles son las notas musicales?",
    category: "Lenguaje automático-control mental",
    correct_answer: "do, re, mi, fa, sol, la, si",
    incorrect_answers: [
      "sol, la, si, do, re, mi, fa",
      "do, re, mi, fa, la, si, sol",
      "mi, fa, sol, la, si, do, re",
    ],
  },
  {
    id: 19,
    difficulty: "AVANZADO",
    question: "¿Quién descubrió América?",
    category: "Lenguaje automático-control mental",
    correct_answer: "Cristóbal Colón",
    incorrect_answers: [
      "Amerigo Vespucci",
      "Vasco da Gama",
      "Fernando de Magallanes",
    ],
  },
  {
    id: 20,
    difficulty: "AVANZADO",
    question: "Menciona 5 colores",
    category: "Lenguaje automático-control mental",
    correct_answer: "Rojo, Azul, Amarillo, Verde, Negro",
    incorrect_answers: [
      "Blanco, Morado, Naranja, Gris, Rosa",
      "Cyan, Magenta, Amarillo, Negro, Blanco",
      "Verde, Azul, Naranja, Rosa, Marrón",
    ],
  },
  {
    id: 21,
    difficulty: "BÁSICO",
    question:
      "A continuación deberás de mencionar el número de animales posibles",
    category: "Evocación categorial en asociación",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 22,
    difficulty: "MEDIO",
    question:
      "¡Excelente! Ahora deberás mencionar todas las palabras que empiecen con la letra M. Tendrá 40 segundos. No podrá decir diminutivos es decir, si dijo mamá no podrá decir mamita, si dice motor, no podrá decir motorcito.",
    category: "Evocación categorial en asociación",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 23,
    difficulty: "MEDIO",
    category: "Evocación categorial en asociación",
    question:
      "Has llegado a la recta final. Tendrá que decir 10 palabras que terminen con ar, er, ir. Dispondrá de 30 segundos.",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 24,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: ojos,
    correct_answer: "ojo",
    incorrect_answers: ["nariz", "cabeza", "pie"],
  },
  {
    id: 25,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: nariz,
    correct_answer: "nariz",
    incorrect_answers: ["ojo", "cabeza", "pie"],
  },
  {
    id: 26,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: boca,
    correct_answer: "boca",
    incorrect_answers: ["ojo", "cabeza", "oreja"],
  },
  {
    id: 27,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: oreja,
    correct_answer: "oreja",
    incorrect_answers: ["nariz", "cabeza", "mano"],
  },
  {
    id: 28,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: mano,
    correct_answer: "mano",
    incorrect_answers: ["ojo", "cabeza", "oreja"],
  },
  {
    id: 29,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: pie,
    correct_answer: "pie",
    incorrect_answers: ["mano", "cabeza", "oreja"],
  },
  {
    id: 28,
    difficulty: "BÁSICO",
    category: "Comprensión verbal",
    question:
      "Se te mostrará una lámina y deberás ubicar cada una de las partes del cuerpo en su lugar correcto.",
    img: cabeza,
    correct_answer: "cabeza",
    incorrect_answers: ["ojo", "mano", "oreja"],
  },
  {
    id: 29,
    difficulty: "MEDIO",
    category: "Comprensión verbal",
    question:
      "A continuación se te mostrará una serie de círculos, deberás identificar el color de cada uno de ellos",
    img: dorado,
    correct_answer: "dorado",
    incorrect_answers: ["rojo", "verde", "azul"],
  },
  {
    id: 30,
    difficulty: "MEDIO",
    category: "Comprensión verbal",
    question:
      "A continuación se te mostrará una serie de círculos, deberás identificar el color de cada uno de ellos",
    img: plateado,
    correct_answer: "plateado",
    incorrect_answers: ["amarillo", "rosa", "verde"],
  },
  {
    id: 31,
    difficulty: "MEDIO",
    category: "Comprensión verbal",
    question:
      "A continuación se te mostrará una serie de círculos, deberás identificar el color de cada uno de ellos",
    img: tinto,
    correct_answer: "tinto",
    incorrect_answers: ["azul", "rojo", "verde"],
  },
  {
    id: 32,
    difficulty: "MEDIO",
    category: "Comprensión verbal",
    question:
      "A continuación se te mostrará una serie de círculos, deberás identificar el color de cada uno de ellos",
    img: fucsia,
    correct_answer: "fucsia",
    incorrect_answers: ["azul", "rojo", "amarillo"],
  },
  {
    id: 33,
    difficulty: "MEDIO",
    category: "Comprensión verbal",
    question: "¿Qué medio de transporte viaja sobre el agua?",
    correct_answer: "Barco",
    incorrect_answers: ["Tren", "Submarino", "Avión"],
  },
  {
    id: 34,
    difficulty: "AVANZADO",
    category: "Comprensión verbal",
    question:
      "A continuación te contaremos una historia. Deberás recordar cada suceso, pues con ello responderás las siguientes preguntas. Doña Gloria, cumple 3 años de aniversario con su esposo, por el cual realizará un pastel, necesita 3 huevos, 1 litro de leche, y 2 kilos de harina. Al llegar al super se dio cuenta que no traía suficiente dinero, ajustando solamente para 2 huevos, medio litro de leche y un kilo de harina. A causa de ello el pastel le quedó chiquito.",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 35,
    difficulty: "AVANZADO",
    category: "Comprensión verbal",
    question: "¿Para cuántos huevos le ajustó el dinero?",
    correct_answer: "2",
    incorrect_answers: ["3", "4", "5"],
  },
  {
    id: 36,
    difficulty: "AVANZADO",
    category: "Comprensión verbal",
    question: "¿Por qué no pudo comprar los ingredientes necesarios?",
    correct_answer: "no tenía suficiente dinero",
    incorrect_answers: [
      "Estaban más caros",
      "No estaba abierto",
      "No había ingredientes",
    ],
  },
  {
    id: 37,
    difficulty: "AVANZADO",
    category: "Comprensión verbal",
    question: "¿Cómo se llamaba la señora?",
    correct_answer: "Gloria",
    incorrect_answers: ["María", "Guadalupe", "Ana"],
  },
  {
    id: 38,
    difficulty: "AVANZADO",
    category: "Comprensión verbal",
    question: "¿ Por qué motivo realizaba el pastel?",
    correct_answer: "Aniversario",
    incorrect_answers: ["Cumpleaños", "Graduación", "Fiesta"],
  },
  {
    id: 39,
    difficulty: "BÁSICO",
    category: "Escritura al dictado",
    question:
      "¿Sabes que es una falta de ortografía? ¡Excelente! la siguiente palabra tiene falta de ortografía, ¿Cuál es?",
    correct_answer: "Javon",
    incorrect_answers: ["Jardín", "Computadora", "Escritorio"],
  },
  {
    id: 40,
    difficulty: "BÁSICO",
    category: "Escritura al dictado",
    question:
      "¿Sabes que es una falta de ortografía? ¡Excelente! la siguiente palabra tiene falta de ortografía, ¿Cuál es?",
    correct_answer: "Baso",
    incorrect_answers: ["Beso", "Avión", "Ventana"],
  },
  {
    id: 41,
    difficulty: "BÁSICO",
    category: "Escritura al dictado",
    question:
      "¿Sabes que es una falta de ortografía? ¡Excelente! la siguiente palabra tiene falta de ortografía, ¿Cuál es?",
    correct_answer: "Ezcuela",
    incorrect_answers: ["Libro", "Gato", "Teléfono"],
  },
  {
    id: 42,
    difficulty: "BÁSICO",
    category: "Escritura al dictado",
    question:
      "¿Sabes que es una falta de ortografía? ¡Excelente! la siguiente palabra tiene falta de ortografía, ¿Cuál es?",
    correct_answer: "Keso",
    incorrect_answers: ["Beso", "Jabón", "Teléfono"],
  },
  {
    id: 44,
    difficulty: "MEDIO",
    category: "Escritura al dictado",
    question:
      "A continuación deberás seleccionar el inciso en que se escribe la palabra de manera correcta",
    correct_answer: "Hielo",
    incorrect_answers: ["Yello", "Llelo", "Ielo"],
  },
  {
    id: 45,
    difficulty: "MEDIO",
    category: "Escritura al dictado",
    question: "¿cuál es la manera correcta de escribirlo?",
    correct_answer: "Avión",
    incorrect_answers: ["Abion", "Havion", "Aviom"],
  },
  {
    id: 46,
    difficulty: "AVANZADO",
    category: "Escritura al dictado",
    question:
      "deberás leer y después corregir las faltas de ortografía de la siguiente frase que se te muestra 'El cero se está qemando, yamale a los bomveros, ¿Cúal es la primer falta de ortografía?",
    correct_answer: "Cero",
    incorrect_answers: ["El", "se", "está"],
  },
  {
    id: 47,
    difficulty: "AVANZADO",
    category: "Escritura al dictado",
    question:
      "deberás leer y después corregir las faltas de ortografía de la siguiente frase que se te muestra 'El cero se está qemando, yamale a los bomveros, ¿Cúal es la segunda falta de ortografía?",
    correct_answer: "qemando",
    incorrect_answers: ["El", "se", "está"],
  },
  {
    id: 48,
    difficulty: "AVANZADO",
    category: "Escritura al dictado",
    question:
      "deberás leer y después corregir las faltas de ortografía de la siguiente frase que se te muestra 'El cero se está qemando, yamale a los bomveros, ¿Cúal es la tercer falta de ortografía?",
    correct_answer: "yamale",
    incorrect_answers: ["a", "los", "está"],
  },
  {
    id: 49,
    difficulty: "AVANZADO",
    category: "Escritura al dictado",
    question:
      "deberás leer y después corregir las faltas de ortografía de la siguiente frase que se te muestra 'El cero se está qemando, yamale a los bomveros, ¿Cúal es la cuarta falta de ortografía?",
    correct_answer: "bomveros",
    incorrect_answers: ["a", "los", "está"],
  },
  {
    id: 50,
    difficulty: "BÁSICO",
    category: "Gesto simbólico e imitación de posturas",
    question: "Ahora identifica los gestos que se te presentan a continuación",
    img: gesto1,
    correct_answer: "Feliz",
    incorrect_answers: ["estresado", "disgustado", "enojado"],
  },
  {
    id: 51,
    difficulty: "BÁSICO",
    category: "Gesto simbólico e imitación de posturas",
    question: "Ahora identifica los gestos que se te presentan a continuación",
    img: gesto2,
    correct_answer: "Enojado",
    incorrect_answers: ["Feliz", "disgustado", "Asqueado"],
  },
  {
    id: 52,
    difficulty: "BÁSICO",
    category: "Gesto simbólico e imitación de posturas",
    question: "Ahora identifica los gestos que se te presentan a continuación",
    img: gesto3,
    correct_answer: "Triste",
    incorrect_answers: ["Feliz", "Alegre", "Enojado"],
  },
  {
    id: 53,
    difficulty: "BÁSICO",
    category: "Gesto simbólico e imitación de posturas",
    question: "Ahora identifica los gestos que se te presentan a continuación",
    img: gesto4,
    correct_answer: "Disgustado",
    incorrect_answers: ["Feliz", "Alegre", "Enojado"],
  },
  {
    id: 54,
    difficulty: "BÁSICO",
    category: "Gesto simbólico e imitación de posturas",
    question: "Buen trabajo👍ahora sonríe para la foto.",
    img: gesto1,
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 55,
    difficulty: "BÁSICO",
    category: "Secuencia de posturas",
    question:
      "¡Vamos avanzando! Ahora deberás realizar los siguientes movimientos que se te presentan, primero con la mano izquierda, y después con la derecha. ¡Tú puedes!.",
    img: gestos2,
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 56,
    difficulty: "BÁSICO",
    category: "Secuencia de posturas",
    question:
      "¡Lo lograste! Ahora realiza los siguientes movimientos. Aplaude 2 veces y 2 veces haz un chasquido con tus dedos",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 57,
    difficulty: "BÁSICO",
    category: "Secuencia de posturas",
    question:
      "Excelente! Te encuentras en la parte final. Ahora deberás realizar las primeras posturas que realizaste al inicio, solamente sin verlas.",
    img: gestos2,
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 58,
    difficulty: "BÁSICO",
    category: "Geografía",
    question:
      "Encuentra el estado de jalisco en el mapa de la república mexicana",
    img: jalisco,
    correct_answer: "(b)",
    incorrect_answers: ["(a)", "(c)", "(d)"],
  },
  {
    id: 59,
    difficulty: "MEDIO",
    category: "Geografía",
    question:
      "Encuentra el estado de Baja california sur en el mapa de la república mexicana",
    img: bajaCalifornia,
    correct_answer: "(c)",
    incorrect_answers: ["(a)", "(b)", "(d)"],
  },
  {
    id: 59,
    difficulty: "MEDIO",
    category: "Geografía",
    question:
      "Encuentra el estado de Baja california sur en el mapa de la república mexicana",
    img: bajaCalifornia,
    correct_answer: "(c)",
    incorrect_answers: ["(a)", "(b)", "(d)"],
  },
  {
    id: 60,
    difficulty: "MEDIO",
    category: "Geografía",
    question:
      "Encuentra el estado de Chihuahua en el mapa de la república mexicana",
    img: chihuahua,
    correct_answer: "(d)",
    incorrect_answers: ["(a)", "(b)", "(c)"],
  },
  {
    id: 61,
    difficulty: "AVANZADO",
    category: "Geografía",
    question:
      "Encuentra el estado de Nayarit en el mapa de la república mexicana",
    img: nayarit,
    correct_answer: "(d)",
    incorrect_answers: ["(a)", "(b)", "(c)"],
  },
  {
    id: 62,
    difficulty: "AVANZADO",
    category: "Geografía",
    question:
      "Encuentra el estado de Sinaloa en el mapa de la república mexicana",
    img: sinaloa,
    correct_answer: "(b)",
    incorrect_answers: ["(a)", "(d)", "(c)"],
  },
  {
    id: 63,
    difficulty: "AVANZADO",
    category: "Geografía",
    question: "Encuentra el país de belice",
    img: sinaloa,
    correct_answer: "(c)",
    incorrect_answers: ["(a)", "(d)", "(b)"],
  },
  {
    id: 64,
    difficulty: "BÁSICO",
    category: "Colores",
    question:
      "Ahora responderás que colores son los adecuados para los siguientes objetos 1- ¿Qué colores tiene un árbol?",
    correct_answer: "Verde, café",
    incorrect_answers: ["Verde, negro", "Verde, azúl", "Verde, morado"],
  },
  {
    id: 65,
    difficulty: "BÁSICO",
    category: "Colores",
    question: "¿Qué colores son más comunes en la cruz roja?",
    correct_answer: "Rojo, blanco",
    incorrect_answers: ["Azul, verde.", "Amarillo, azul.", "Verde, morado"],
  },
  {
    id: 66,
    difficulty: "MEDIO",
    category: "Colores",
    question:
      "Ahora se te mostrarán unas imagenes, las cuales deberás unir a la palabra correspondiente",
    img: rosa,
    correct_answer: "Rosa",
    incorrect_answers: ["Azul", "Amarillo", "Verde"],
  },
  {
    id: 67,
    difficulty: "MEDIO",
    category: "Colores",
    question:
      "Ahora se te mostrarán unas imagenes, las cuales deberás unir a la palabra correspondiente",
    img: verde,
    correct_answer: "Verde",
    incorrect_answers: ["Azul", "Amarillo", "Rosa"],
  },
  {
    id: 68,
    difficulty: "MEDIO",
    category: "Colores",
    question:
      "Ahora se te mostrarán unas imagenes, las cuales deberás unir a la palabra correspondiente",
    img: morado,
    correct_answer: "Morado",
    incorrect_answers: ["Verde", "Amarillo", "Rosa"],
  },
  {
    id: 69,
    difficulty: "BÁSICO",
    category: "Aprendizaje seriado y memoria visual",
    question:
      "A continuación aparecerán, 5 palabras que deberás repetir: Perro, vaca, pollo, peine, carro",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  },
  {
    id: 70,
    difficulty: "MEDIO",
    category: "Aprendizaje seriado y memoria visual",
    question:
      "¿Muy bien! ahora deberás mencionar 5 palabras que tengan color azul. Primer palabra",
    correct_answer: "cielo",
    incorrect_answers: ["sol", "nube", "luna"],
  },
  {
    id: 71,
    difficulty: "MEDIO",
    category: "Aprendizaje seriado y memoria visual",
    question:
      "¿Muy bien! ahora deberás mencionar 5 palabras que tengan color azul. Segunda palabra",
    correct_answer: "pitufo",
    incorrect_answers: ["corazón", "Vaca", "Perro"],
  },
  {
    id: 72,
    difficulty: "MEDIO",
    category: "Aprendizaje seriado y memoria visual",
    question:
      "¿Muy bien! ahora deberás mencionar 5 palabras que tengan color azul. Tercera palabra",
    correct_answer: "Ballena",
    incorrect_answers: ["lapiz", "llave", "Gallina"],
  },
  {
    id: 73,
    difficulty: "MEDIO",
    category: "Aprendizaje seriado y memoria visual",
    question:
      "¿Muy bien! ahora deberás mencionar 5 palabras que tengan color azul. Cuarta palabra",
    correct_answer: "Jeans",
    incorrect_answers: ["Camisa", "Manzana", "Gorra"],
  },
  {
    id: 74,
    difficulty: "MEDIO",
    category: "Aprendizaje seriado y memoria visual",
    question:
      "¿Muy bien! ahora deberás mencionar 5 palabras que tengan color azul. Cuarta palabra",
    correct_answer: "Arandano",
    incorrect_answers: ["Uva", "Manzana", "Cereza"],
  },
  {
    id: 75,
    difficulty: "AVANZADO",
    category: "Aprendizaje seriado y memoria visual",
    question: "¿Una palabra que recuerdes del primer nivel? ",
    correct_answer: "perro",
    incorrect_answers: ["toro", "gallina", "camión"],
  },
  {
    id: 76,
    difficulty: "AVANZADO",
    category: "Aprendizaje seriado y memoria visual",
    question: "¿Una palabra que recuerdes del primer nivel? ",
    correct_answer: "vaca",
    incorrect_answers: ["toro", "cepillo", "camión"],
  },
  {
    id: 77,
    difficulty: "AVANZADO",
    category: "Aprendizaje seriado y memoria visual",
    question: "¿Una palabra que recuerdes del primer nivel? ",
    correct_answer: "pollo",
    incorrect_answers: ["gallina", "cepillo", "camisa"],
  },
  {
    id: 78,
    difficulty: "BÁSICO",
    category: "Cálculo y problemas aritméticos",
    question: "A continuación tendrás que sumar  '25+38='",
    correct_answer: "63",
    incorrect_answers: ["73", "56", "65"],
  },
  {
    id: 79,
    difficulty: "BÁSICO",
    category: "Cálculo y problemas aritméticos",
    question: "A continuación tendrás que sumar '50 + 40='",
    correct_answer: "90",
    incorrect_answers: ["80", "60", "70"],
  },
  {
    id: 80,
    difficulty: "BÁSICO",
    category: "Cálculo y problemas aritméticos",
    question: "A continuación tendrás que sumar '2 + 18='",
    correct_answer: "20",
    incorrect_answers: ["22", "16", "24"],
  },
  {
    id: 81,
    difficulty: "BÁSICO",
    category: "Cálculo y problemas aritméticos",
    question: "A continuación tendrás que sumar '15 + 10='",
    correct_answer: "25",
    incorrect_answers: ["20", "26", "30"],
  },
  {
    id: 82,
    difficulty: "MEDIO",
    category: "Cálculo y problemas aritméticos",
    question: "¡Excelente! Ahora deberás multiplicar '6 x 6='",
    correct_answer: "36",
    incorrect_answers: ["30", "42", "48"],
  },
  {
    id: 83,
    difficulty: "MEDIO",
    category: "Cálculo y problemas aritméticos",
    question: "¡Excelente! Ahora deberás multiplicar '10 x 10='",
    correct_answer: "100",
    incorrect_answers: ["110", "90", "120"],
  },
  {
    id: 84,
    difficulty: "MEDIO",
    category: "Cálculo y problemas aritméticos",
    question: "¡Excelente! Ahora deberás multiplicar '7 x 2='",
    correct_answer: "14",
    incorrect_answers: ["12", "16", "10"],
  },
  {
    id: 85,
    difficulty: "MEDIO",
    category: "Cálculo y problemas aritméticos",
    question: "¡Excelente! Ahora deberás multiplicar '9 x 9='",
    correct_answer: "81",
    incorrect_answers: ["90", "72", "100"],
  },
  {
    id: 86,
    difficulty: "AVANZADO",
    category: "Cálculo y problemas aritméticos",
    question:
      "¡Lo has hecho muy bien! Finalmente deberás resolver el siguiente problema.\nAndrea y Jimena van a jugar maquinitas, una lleva $28 y la otra lleva $30, al final les cobraron $55. ¿Les faltó dinero o les sobró? ¿De cuánto dinero le tocó dar a cada una?",
    correct_answer:
      "Les sobró dinero. A Andrea le tocó dar $25 y a Jimena $30.",
    incorrect_answers: [
      "Les faltó dinero. A Andrea le tocó dar $27 y a Jimena $28.",
      "Les faltó dinero. A Andrea le tocó dar $25 y a Jimena $30.",
      "Les sobró dinero. A Andrea le tocó dar $25 y a Jimena $28.",
    ],
  },
  {
    id: 87,
    difficulty: "BÁSICO",
    category: "Información",
    question: "¡Comencemos! ¿Dónde se encuentran los cubiertos?",
    correct_answer: "Los cubiertos se encuentran en la cocina o en la mesa.",
    incorrect_answers: [
      "Los cubiertos se encuentran en el baño.",
      "Los cubiertos se encuentran en el jardín.",
      "Los cubiertos se encuentran en el dormitorio.",
    ],
  },
  {
    id: 88,
    difficulty: "BÁSICO",
    category: "Información",
    question: "¡Comencemos! ¿Qué es un peine?",
    correct_answer: "Un peine es un objeto utilizado para peinar el cabello.",
    incorrect_answers: [
      "Un peine es un tipo de pájaro.",
      "Un peine es un utensilio de cocina.",
      "Un peine es un instrumento musical.",
    ],
  },
  {
    id: 89,
    difficulty: "BÁSICO",
    category: "Información",
    question: "¡Comencemos! ¿Qué es una escoba?",
    correct_answer:
      "Una escoba es una herramienta utilizada para barrer el suelo.",
    incorrect_answers: [
      "Una escoba es una prenda de vestir.",
      "Una escoba es un tipo de vehículo.",
      "Una escoba es un animal marino.",
    ],
  },
  {
    id: 90,
    difficulty: "MEDIO",
    category: "Información",
    question:
      "¡Ya te encuentras en el penúltimo nivel! En este nivel, deberás mencionar para qué funciona lo siguiente. ¿Para qué funciona una motosierra?",
    correct_answer: "Una motosierra se utiliza para cortar madera.",
    incorrect_answers: [
      "Una motosierra se utiliza para cortar metal.",
      "Una motosierra se utiliza para cocinar alimentos.",
      "Una motosierra se utiliza para limpiar alfombras.",
    ],
  },
  {
    id: 91,
    difficulty: "MEDIO",
    category: "Información",
    question:
      "¡Ya te encuentras en el penúltimo nivel! En este nivel, deberás mencionar para qué funciona lo siguiente. ¿Para qué funciona un automóvil?",
    correct_answer:
      "Un automóvil se utiliza para transportarse de un lugar a otro.",
    incorrect_answers: [
      "Un automóvil se utiliza para cocinar alimentos.",
      "Un automóvil se utiliza para cortar madera.",
      "Un automóvil se utiliza para limpiar alfombras.",
    ],
  },
  {
    id: 92,
    difficulty: "MEDIO",
    category: "Información",
    question:
      "¡Ya te encuentras en el penúltimo nivel! En este nivel, deberás mencionar para qué funciona lo siguiente. ¿Para qué se utiliza una estufa?",
    correct_answer:
      "Una estufa se utiliza para cocinar alimentos y calentar espacios.",
    incorrect_answers: [
      "Una estufa se utiliza para cortar madera.",
      "Una estufa se utiliza para transportarse de un lugar a otro.",
      "Una estufa se utiliza para limpiar alfombras.",
    ],
  },
  {
    id: 93,
    difficulty: "AVANZADO",
    category: "Información",
    question:
      "¡Excelente! Finalmente, deberás mencionar la función de lo siguiente. ¿Qué es el telégrafo y qué función tiene?",
    correct_answer:
      "El telégrafo es un dispositivo de comunicación que transmite señales eléctricas a larga distancia a través de cables. Su función es enviar mensajes en forma de código Morse.",
    incorrect_answers: [
      "El telégrafo es un instrumento musical que produce sonidos mediante la vibración de cuerdas. Su función es entretener a las personas.",
      "El telégrafo es un utensilio de cocina que se utiliza para cortar alimentos. Su función es facilitar la preparación de comidas.",
      "El telégrafo es un animal marino que vive en aguas profundas. Su función es alimentarse de otros organismos.",
    ],
  },
  {
    id: 94,
    difficulty: "AVANZADO",
    category: "Información",
    question:
      "¡Excelente! Finalmente, deberás mencionar la función de lo siguiente. ¿Para qué funciona el fax?",
    correct_answer:
      "El fax es un dispositivo que se utiliza para enviar documentos impresos a través de una línea telefónica. Su función es permitir la transmisión rápida de información escrita.",
    incorrect_answers: [
      "El fax es un tipo de vehículo que se utiliza para transportar personas y mercancías. Su función es facilitar el desplazamiento.",
      "El fax es un término médico que se refiere a una prueba diagnóstica. Su función es detectar enfermedades en el cuerpo humano.",
      "El fax es un instrumento musical que se utiliza para producir sonidos. Su función es proporcionar entretenimiento.",
    ],
  },
  {
    id: 95,
    difficulty: "AVANZADO",
    category: "Información",
    question:
      "¡Excelente! Finalmente, deberás mencionar la función de lo siguiente. ¿Qué es un correo electrónico?",
    correct_answer:
      "El correo electrónico es un sistema de comunicación digital que permite el intercambio de mensajes y archivos a través de Internet. Su función es facilitar la comunicación rápida y eficiente entre personas.",
    incorrect_answers: [
      "Un correo electrónico es un servicio postal que entrega cartas y paquetes a domicilio. Su función es garantizar la correspondencia física.",
      "Un correo electrónico es un dispositivo electrónico que se utiliza para recibir y enviar mensajes de texto. Su función es enviar notificaciones a los usuarios.",
      "Un correo electrónico es un tipo de documento que se utiliza en el ámbito empresarial. Su función es proporcionar información sobre productos y servicios.",
    ],
  },
  {
    id: 96,
    difficulty: "BÁSICO",
    category: "Abstracción verbal (comprensión)",
    question:
      "¡Continúa, estamos en la recta final! En la siguiente actividad deberás encontrar la similitud de los objetos. ¿En qué se parece una manzana y una pera?",
    correct_answer: "Ambas son frutas.",
    incorrect_answers: [
      "Una es una fruta y la otra es una verdura.",
      "Una es roja y la otra es verde.",
      "Una es dulce y la otra es ácida.",
    ],
  },
  {
    id: 97,
    difficulty: "BÁSICO",
    category: "Abstracción verbal (comprensión)",
    question:
      "¡Continúa, estamos en la recta final! En la siguiente actividad deberás encontrar la similitud de los objetos. ¿En qué se parece un avión y un papalote?",
    correct_answer: "Ambos vuelan.",
    incorrect_answers: [
      "Uno es grande y el otro es pequeño.",
      "Uno es un medio de transporte y el otro es un juguete.",
      "Uno lleva pasajeros y el otro lleva hilos.",
    ],
  },
  {
    id: 98,
    difficulty: "BÁSICO",
    category: "Abstracción verbal (comprensión)",
    question:
      "¡Continúa, estamos en la recta final! En la siguiente actividad deberás encontrar la similitud de los objetos. ¿En qué se parece un trapeador y un recogedor?",
    correct_answer: "Ambos se utilizan para limpiar.",
    incorrect_answers: [
      "Uno es para lavar y el otro es para secar.",
      "Uno es largo y el otro es corto.",
      "Uno es de plástico y el otro es de metal.",
    ],
  },
  {
    id: 99,
    difficulty: "MEDIO",
    category: "Abstracción verbal (comprensión)",
    question:
      "Menciona en qué se parecen los siguientes objetos. ¿En qué se parecen un perro y un gato?",
    correct_answer: "Ambos son mascotas.",
    incorrect_answers: [
      "Uno ladra y el otro maulla.",
      "Uno tiene bigotes y el otro no.",
      "Uno es grande y el otro es pequeño.",
    ],
  },
  {
    id: 100,
    difficulty: "MEDIO",
    category: "Abstracción verbal (comprensión)",
    question:
      "Menciona en qué se parecen los siguientes objetos. ¿En qué se parece un teléfono y una tablet?",
    correct_answer: "Ambos son dispositivos electrónicos.",
    incorrect_answers: [
      "Uno se utiliza para llamar y el otro se utiliza para escribir.",
      "Uno tiene pantalla táctil y el otro no.",
      "Uno es grande y el otro es pequeño.",
    ],
  },
  {
    id: 101,
    difficulty: "MEDIO",
    category: "Abstracción verbal (comprensión)",
    question:
      "Menciona en qué se parecen los siguientes objetos. ¿En qué se parece una paloma y un cotorro?",
    correct_answer: "Ambos son aves.",
    incorrect_answers: [
      "Uno es blanco y el otro es verde.",
      "Uno come semillas y el otro come carne.",
      "Uno vuela alto y el otro vuela bajo.",
    ],
  },
  {
    id: 102,
    difficulty: "AVANZADO",
    category: "Abstracción verbal (comprensión)",
    question:
      "¡Felicidades, estás por terminar! Finalmente deberás mencionar la similitud de lo siguiente. ¿En qué se parece una retroexcavadora y una emparejadora?",
    correct_answer: "Ambas son maquinarias de construcción.",
    incorrect_answers: [
      "Una es para cavar y la otra es para nivelar terrenos.",
      "Una tiene ruedas y la otra tiene orugas.",
      "Una es pequeña y la otra es grande.",
    ],
  },
  {
    id: 103,
    difficulty: "AVANZADO",
    category: "Abstracción verbal (comprensión)",
    question:
      "¡Felicidades, estás por terminar! Finalmente deberás mencionar la similitud de lo siguiente. ¿En qué se parece un tren y un carro?",
    correct_answer: "Ambos son medios de transporte.",
    incorrect_answers: [
      "Uno va sobre rieles y el otro va sobre carreteras.",
      "Uno es grande y el otro es pequeño.",
      "Uno lleva muchas personas y el otro lleva pocas personas.",
    ],
  },
  {
    id: 104,
    difficulty: "AVANZADO",
    category: "Abstracción verbal (comprensión)",
    question:
      "¡Felicidades, estás por terminar! Finalmente deberás mencionar la similitud de lo siguiente. ¿En qué se parece una bicicleta y una motocicleta?",
    correct_answer: "Ambas son vehículos de dos ruedas.",
    incorrect_answers: [
      "Una es para deporte y la otra es para transporte.",
      "Una funciona con pedal y la otra con motor.",
      "Una es silenciosa y la otra es ruidosa.",
    ],
  },
  //falta Discriminación de imágenes superpuestas
];
