function homePage() {
    var node = document.createElement("header");
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
  var quoteText = quotes[(i-1)][0];
  var authorName = quotes[(i-1)][1];

  node.innerHTML = '"' + quoteText + '" - ' + authorName;
  node.id = "quote";
  mainArea.appendChild(node);
}

function techArea() {
  var node = document.createElement("section")
  node.id = "techarea";

  for (let i=0; i<techIcons.length; i++) {
    var tech = document.createElement("i");
    tech.className = techIcons[i][0] + " icon " + techIcons[i][2];
    tech.id = techIcons[i][1];
    node.appendChild(tech);
  }

  mainArea.append(node);
}

function createPage(){
  secondNavVisible("hidden");
  createNav1();
}


window.onload = createPage();
window.onload = homePage();
