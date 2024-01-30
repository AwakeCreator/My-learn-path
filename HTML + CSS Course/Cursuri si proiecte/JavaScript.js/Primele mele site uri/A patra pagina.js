html = document.querySelector("html");
html.style.backgroundImage = "url(Sfondo3.jpg)";

const titoloWeb = document.createElement("title");
titoloWeb.appendChild(document.createTextNode("The forth webpage"));
document.querySelector("head").appendChild(titoloWeb);

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width initial-scale=1.0/";

const header = document.createElement("header");

document.querySelector("body").appendChild(header);

const nav = document.createElement("nav");
nav.style.textAlign = "center";
document.querySelector("header").appendChild(nav);

const pLinks = document.createElement("p");
document.querySelector("nav").appendChild(pLinks);

const titoloPagina  = document.createElement("h1");
titoloPagina.appendChild(document.createTextNode("Welcome to my forth webpage"));
titoloPagina.id = "titoloPagina"
document.querySelector("p").appendChild(titoloPagina);

const home = document.createElement("a");
home.appendChild(document.createTextNode("Home"));
home.href = "#";
home.className = "links";
document.querySelector("p").appendChild(home);

const gallery = document.createElement("a");
gallery.appendChild(document.createTextNode("Gallery"));
gallery.href = "https://unsplash.com/";
gallery.target = "_blank"
gallery.className = "links";
document.querySelector("p").appendChild(gallery);

const aboutUs = document.createElement("a");
aboutUs.appendChild(document.createTextNode("About Us"));
aboutUs.href = "#";
aboutUs.className = "links";
document.querySelector("p").appendChild(aboutUs);

const contact = document.createElement("a");
contact.appendChild(document.createTextNode("Contact"));
contact.href = "#";
contact.className = "links";
document.querySelector("p").appendChild(contact);

google = document.createElement("a");
google.href = "https://google.com";
google.target = "_blank";
google.className = "links";
google.appendChild(document.createTextNode("Search on Google"));
document.querySelector("p").appendChild(google);

const benvenuti = document.createElement("h2");
benvenuti.style.fontFamily = "Comic Sans MS";
benvenuti.style.marginTop = "80px";
benvenuti.appendChild(document.createTextNode("Welcome to my forth webpage, entirely created with JavaScript dom and css. "));
document.querySelector("p").appendChild(benvenuti);

// crea una tabella con paesi e selezionando il paese comparira la capitale 

const cssLinks = document.getElementsByClassName("links");
const cssLinksArray = Array.from(cssLinks);
cssLinksArray.forEach(function(styleLinks) {
styleLinks.style.margin = "40px";
styleLinks.style.textDecoration = "none";
styleLinks.style.fontSize = "30px";
styleLinks.style.textShadow = "1px 1px 2px black, 0 0 25px yellow, 0 0 5px violet";
styleLinks.style.transition = " 0.5s";
})

const messaggio = document.createElement("h1");
messaggio.appendChild(document.createTextNode("At this point I realized that doing this is bullshit, I have to create a site with all three elements trying to do it dynamically. See you on page 5"));
document.querySelector("p").appendChild(messaggio);
















