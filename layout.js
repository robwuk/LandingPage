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
    node.innerHTML += "<br /><section class='moreinfo' onclick='displayProjects(\"" + variable[3] + "\", \""+ variable[2] + "\")'>see detail...</section>";
    node.style.textShadow = '2px 2px 1px #DDDDDD';
    if ((i + 1) % 2 === 0) {
      node.className = node.className + " right";
      node.style.gridColumnStart = "3";
      node.style.textAlign = "left";
    } else {;
      node.style.gridColumnStart = "1";
      node.style.textAlign = "right";
      node.className = node.className + " left";
    }
    node.style.gridRowStart = i + 1;
    container.appendChild(node);
  }
}

function displayProjects(project, source){
  clearMain();

  var node = document.createElement("section");
  node.id = "projectSection";
  var variable = window[project];
  node.innerHTML =  variable[0];
  mainArea.appendChild(node);

  var projectList = window[variable[1]]
  var node = document.createElement("section");

  if (projectList.length > 1){
    node.id = "container";
    node.class = "container";
    node.style.gridTemplateColumns = '"40vw" "20vw" "40vw"';
    node.style.display = "grid";
    node.style.gridColumnGap = "1vw";
    node.style.marginTop = "10vh";
    mainArea.appendChild(node);

    var container = document.getElementById("container");

    for (let i=0; i<projectList.length; i++){
      var node = document.createElement("section");
      node.id = projectList[i][1] + "__text";
      node.className = "project";
      node.innerHTML = projectList[i][0];
      node.style.textShadow = '2px 2px 1px #DDDDDD';
      if ((i + 1) % 2 === 0) {
        node.className = node.className + " right";
        node.style.gridColumnStart = "3";
        node.style.textAlign = "left";
      } else {;
        node.style.gridColumnStart = "1";
        node.style.textAlign = "right";
        node.className = node.className + " left";
      }
      node.style.gridRowStart = i + 1;
      container.appendChild(node);

      var node = document.createElement("img");
      node.id = projectList[i][1] + "__image";
      node.className = "projectImage";
      node.src = projectList[i][3];
      node.width = "200";
      node.height = "200";
      node.borderRadius = "50%";
      if ((i + 1) % 2 === 0) {
        node.className = node.className + " left";
        node.style.gridColumnStart = "1";
        node.style.textAlign = "left";
      } else {;
        node.style.gridColumnStart = "3";
        node.style.textAlign = "right";
        node.className = node.className + " right";
      }
      node.style.boxShadow = '5px 5px 13px #AAAAAA';
      node.style.gridRowStart = i + 1;
      container.appendChild(node);

    }
  } else {
    alert("just 1 - needs coding");
  };
}

function fade() {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            mainArea.style.display = 'none';
        }
        mainArea.style.opacity = op;
      //  mainArea.style.opacity = parseFloat(mainArea.style.opacity) - 0.1;
        op -= op * 0.1;
    }, 50);
}

function unfade() {
    var op = 0.1;  // initial opacity
    mainArea.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        mainArea.style.opacity = op;
    //    mainArea.style.opacity = parseFloat(mainArea.style.opacity) + 0.1;
        op += op * 0.1;
    }, 10);
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
