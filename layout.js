function homePage() {
    var node = document.createElement("header");
    clearMain();
    node.innerHTML = author;
    node.id = "author";
    node.className = "header";
    mainArea.appendChild(node);
    node = document.createElement("header");
    node.innerHTML = intro;
    node.id = "intro";
    node.className = "header";
    mainArea.appendChild(node);
    newQuote();
    techArea();
}

function newQuote(){
  var node = document.createElement("section");
  var i = Math.floor(Math.random() * quotes.length + 1);

  node.innerHTML = '"' + quotes[(i-1)][0] + '"<br />' + quotes[(i-1)][1];
  node.id = "quote";
  mainArea.appendChild(node);
}

function techArea() {
  var node = document.createElement("section")
  node.id = "techarea";

  for (let i=0; i<techIcons.length; i++) {
    var tech = document.createElement("img");
    tech.src = techIcons[i][0];
    tech.title = techIcons[i][1] + " : " + techIcons[i][2];
    tech.className = "icon " + techIcons[i][2];
    tech.id = techIcons[i][1];
    node.appendChild(tech);
  }

  mainArea.append(node);
}

function bioPage() {
    var node = document.createElement("section");
    clearMain();

    var source = document.getElementById("internalabout");
    node.id = "aboutme";
    node.innerHTML = source.innerHTML;
//    node.data = 'about.html';
    mainArea.appendChild(node);
}

function coursePage(pageArray) {
  clearMain();

  var node = document.createElement("section");
  node.id = "container";
  node.class = "container";
  node.style.gridTemplateColumns = '"40vw" "20vw" "40vw"';
  node.style.display = "grid";
  node.style.gridColumnGap = "1vw";
  node.style.marginTop = "10vh";
  mainArea.appendChild(node);

  var container = document.getElementById("container");

  for (let i=0; i<pageArray.length; i++){
    var node = document.createElement("section");
    node.id = pageArray[i][1] + "__text";
    node.className = "course";
    var variable = window[pageArray[i][1]];
    node.innerHTML =  variable[0];
    if ((i + 1) % 2 === 0) {
      node.alignItems = "center";
      node.style.backgroundColor = "black";
      node.style.color = "white";
      node.style.padding = "15px";
      node.className = node.className + " right";
      node.style.gridColumnStart = "3";
      node.style.textAlign = "left";
    } else {
      node.style.backgroundColor = "black";
      node.style.color = "white";
      node.style.padding = "15px";
      node.style.gridColumnStart = "1";
      node.style.textAlign = "right";
      node.className = node.className + " left";
    }
    node.style.gridRowStart = i + 1;
    container.appendChild(node);
  }
}

function clearMain() {
  mainArea.innerHTML="";
}

function createPage(){
  secondNavVisible("hidden");
  createNav1();
}

function nav1OnMouseOver(colour, dom) {
  document.getElementById(dom).style.backgroundColor=colour;
}

window.onload = createPage();
window.onload = homePage();
