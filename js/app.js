import  { titlePage }  from "./components/TitlePage.js";
import { Clipboard } from "./services/Clipboard.js";
import { Navbar } from './components/Navbar.js';

/** Navbar */
const navElement = [
    {name : "Accueil",  link : "index.html"},
    {name : "À propos", link : "apropos.html"},
    {name : "Contact",  link : "#contact"},
];
new Navbar(navElement).render();
titlePage();
/** */ 


/** CopyEmail */
new Clipboard("#email", "a", "data-email").getEmail();
/** */
