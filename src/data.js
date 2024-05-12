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
  geografia: "geografía",
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
    category: "Abstracción verbal (comprensión)",
    correct_answer: "60 segundos",
    incorrect_answers: ["30 segundos", "45 segundos", "90 segundos"],
  },
  {
    id: 2,
    difficulty: "BÁSICO",
    question: "¿Cuántas horas tiene un día?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "24 horas",
    incorrect_answers: ["12 horas", "36 horas", "48 horas"],
  },
  {
    id: 3,
    difficulty: "BÁSICO",
    question: "¿Cuántos días tiene el mes de febrero en año bisiesto?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "29 días",
    incorrect_answers: ["28 días", "30 días", "31 días"],
  },
  {
    id: 4,
    difficulty: "BÁSICO",
    question: "¿Cuántos meses tarda un embarazo?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "9 meses",
    incorrect_answers: ["6 meses", "7 meses", "12 meses"],
  },
  {
    id: 5,
    difficulty: "BÁSICO",
    question: "¿Cuántos meses faltan para su próximo año?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "7 meses",
    incorrect_answers: ["6 meses", "8 meses", "12 meses"],
  },
  {
    id: 6,
    difficulty: "MEDIO",
    question: "¿Cuáles son los 4 puntos cardinales?",
    category: "Abstracción verbal (comprensión)",
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
    category: "Abstracción verbal (comprensión)",
    correct_answer: "8 planetas",
    incorrect_answers: ["7 planetas", "9 planetas", "10 planetas"],
  },
  {
    id: 8,
    difficulty: "MEDIO",
    question: "¿Cuántas estaciones tiene el año? Mencionarlas",
    category: "Abstracción verbal (comprensión)",
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
    category: "Abstracción verbal (comprensión)",
    correct_answer: "6 años",
    incorrect_answers: ["4 años", "8 años", "10 años"],
  },
  {
    id: 10,
    difficulty: "MEDIO",
    question: "¿Cuántos años tiene un siglo?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "100 años",
    incorrect_answers: ["50 años", "200 años", "500 años"],
  },
  {
    id: 11,
    difficulty: "AVANZADO",
    question: "¿Cuántos números tiene un reloj?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "12 números",
    incorrect_answers: ["10 números", "24 números", "30 números"],
  },
  {
    id: 12,
    difficulty: "AVANZADO",
    question: "¿En qué estado vive?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "Jalisco",
    incorrect_answers: ["Nayarit", "Colima", "Michoacán"],
  },
  {
    id: 13,
    difficulty: "AVANZADO",
    question: "¿Cuántos metros tiene un kilómetro?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "1000 metros",
    incorrect_answers: ["500 metros", "2000 metros", "1500 metros"],
  },
  {
    id: 14,
    difficulty: "BÁSICO",
    question: "¿Cuáles son las prendas básicas de vestir?",
    category: "Abstracción verbal (comprensión)",
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
];
