import sliceHaven from "../assets/sliceHaven.png"
import codeClothes from "../assets/codeclothes.png"
import moviesCode from "../assets/moviesCode.png"
import guisky from "../assets/guisky.png"
import guisky1 from "../assets/carrusel/guisky1.png"
import guisky2 from "../assets/carrusel/guisky2.png"
import guisky3 from "../assets/carrusel/guisky3.png"
import sliceHaven1 from "../assets/carrusel/sliceHaven1.png"
import sliceHaven2 from "../assets/carrusel/sliceHaven2.png"
import sliceHaven3 from "../assets/carrusel/sliceHaven3.png"
import moviesCode1 from "../assets/carrusel/moviesCode1.png"
import moviesCode2 from "../assets/carrusel/moviesCode2.png"
import moviesCode3 from "../assets/carrusel/moviesCode3.png"
import codeClothes1 from "../assets/carrusel/codeClothes1.png"
import codeClothes2 from "../assets/carrusel/codeClothes2.png"
import codeClothes3 from "../assets/carrusel/codeClothes3.png"




export const projects = [
  {
    id: 1,
    imgSource: guisky,
    images: [
      guisky1,
      guisky2,
      guisky3
    ],
    text1: "Güisky",
    text2: "ABRIR EN LA WEB",
    link: "https://guisky.netlify.app/",
    desc: "Plataforma diseñada para eventos. Ofrece un home de bienvenida elegante, una galería privada para que los invitados disfruten de las fotos y videos de su evento, y un panel de administración intuitivo para que los organizadores gestionen el contenido fácilmente. Además, incluye una aplicación móvil para capturar fotos y videos al instante.",
    techStack: "Stack de Tecnologías: React.js, Javascript, Mongoose, Express.js, Node.js"
  },
  {
    id: 2,
    imgSource: sliceHaven,
    images: [
      sliceHaven1,
      sliceHaven2,
      sliceHaven3
    ],
    text1: "SliceHaven",
    text2: "ABRIR EN LA WEB",
    link: "https://slicehavenn.netlify.app/",
    desc: "Sistema de gestión de reserva de mesas en un restaurante, el usuario registrado podrá realizar reservas para un día y hora especifica, el administrador podrá gestionar tanto a los usuarios como a las reservas.",
    techStack: "Stack de Tecnologías: React.js 18.1, Javascript, Mongoose 8.0, Express.js 4.18, Node.js20.10"
  },
  {
    id: 3,
    imgSource: moviesCode,
    images: [
      moviesCode1,
      moviesCode2,
      moviesCode3
    ],
    text1: "MoviesCode",
    text2: "ABRIR EN LA WEB",
    link: "https://moviescodee.netlify.app/",
    desc: "Pagina de películas con inicio de sesión y tabla de administración.",
    techStack: "Stack de Tecnologías: React.js 18.1, Javascript, Mongoose 8.0, Express.js 4.18, Node.js20.10"
  },
  {
    id: 4,
    imgSource: codeClothes,
    images: [
      codeClothes1,
      codeClothes2,
      codeClothes3
    ],
    text1: "CodeClothes",
    text2: "ABRIR EN LA WEB",
    link: "https://codeclothes.netlify.app/",
    desc: "Este proyecto consiste en una página web básica para una tienda de ropa. La página incluye un diseño limpio y responsive, ideal para ofrecer una experiencia de usuario fluida en cualquier dispositivo.",
    techStack: "Stack de Tecnologías: Html5, css3, bootstrap 5."
  },
];