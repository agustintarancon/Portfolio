import sliceHaven from "../assets/sliceHaven.png"
import codeClothes from "../assets/codeclothes.jpg"
import moviesCode from "../assets/moviesCode.jpg"


export const projects = [
  {
    id: 1,
    imgSource: sliceHaven,
    text1: "SliceHaven",
    text2: "ABRIR EN LA WEB",
    link: "https://slicehaven-project.netlify.app/",
    desc: "Sistema de gestión de reserva de mesas en un restaurante, el usuario registrado podrá realizar reservas para un día y hora especifica, el administrador podrá gestionar tanto a los usuarios como a las reservas.",
    techStack: "Stack de Tecnologías: React.js 18.1, Javascript, Mongoose 8.0, Express.js 4.18, Node.js20.10"
  },
  {
    id: 2,
    imgSource: moviesCode,
    text1: "MoviesCode",
    text2: "ABRIR EN LA WEB",
    link: "https://moviescodee.netlify.app/",
    desc: "Pagina de películas con inicio de sesión y tabla de administración.",
    techStack: "Stack de Tecnologías: React.js 18.1, Javascript, Mongoose 8.0, Express.js 4.18, Node.js20.10"
  },
  {
    id: 3,
    imgSource: codeClothes,
    text1: "CodeClothes",
    text2: "ABRIR EN LA WEB",
    link: "https://codeclothes.netlify.app/",
    desc: "Este proyecto consiste en una página web básica para una tienda de ropa. La página incluye un diseño limpio y responsive, ideal para ofrecer una experiencia de usuario fluida en cualquier dispositivo.",
    techStack: "Stack de Tecnologías: Html5, css3, bootstrap 5."
  },
];