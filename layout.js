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
    node.style.gridTemplateColumns = '20% 10% 10% 40% 20%';
    node.style.display = "grid";
    node.style.gridColumnGap = "1vw";
    node.style.marginTop = "10vh";
    mainArea.appendChild(node);

    var container = document.getElementById("container");

    var node = document.createElement("section");
    node.id = "previous";
    node.className = "scroll";
    node.innerHTML = "<--";
    node.style.textShadow = '2px 2px 1px #DDDDDD';
    node.style.textAlign = "right";
    node.style.gridColumn = "1";
    node.style.gridRow = "2"
    node.setAttribute("onclick", "previousProject('" + project + "', '" + source + "')");
    container.appendChild(node);

    var node = document.createElement("section");
    node.id = "next";
    node.className = "scroll";
    node.innerHTML = "-->";
    node.style.textShadow = '2px 2px 1px #DDDDDD';
    node.style.textAlign = "left";
    node.style.gridColumn = "5";
    node.style.gridRow = "2"
    node.className = node.className + " left";
    node.setAttribute("onclick", "nextProject('" + project + "', '" + source + "')");
    container.appendChild(node);

    var node = document.createElement("section");
    node.id = projectList[ProjectId][1] + "__text";
    node.className = "project";
    node.innerHTML = projectList[ProjectId][0];
    node.style.textShadow = '2px 2px 1px #DDDDDD';
    node.style.textAlign = "center";
    node.style.gridColumn = "2 / span 2";
    node.className = node.className + " left";
    container.appendChild(node);

    var row = 2;
    for (let i=0; i<projectList[ProjectId][4].length; i++) {
      var node = document.createElement("section");
      node.id = projectList[ProjectId][4][i];
      node.style.gridRowStart = Math.floor(row);
      node.style.textAlign = "center";
      row += 0.5;
      if (i % 2 === 0) {
        node.style.gridColumnStart = "2";
      } else {
        node.style.gridColumnStart = "3";
      }
      container.appendChild(node);

      var icon = document.getElementById(projectList[ProjectId][4][i]);
      var tech = document.createElement("img");
      tech.src = projectList[ProjectId][4][i] + ".svg";
      tech.className = "icon";
      icon.appendChild(tech);
    }

    var node = document.createElement("img");
    node.id = projectList[ProjectId][1] + "__image";
    node.className = "projectImage";
    node.src = projectList[ProjectId][3];
    node.width = "500";
    node.height = "360";
    node.borderRadius = "50%";
    node.style.gridColumnStart = "4";
    node.style.gridRow = "1 / span 3";
    node.style.boxShadow = '5px 5px 13px #AAAAAA';
    container.appendChild(node);
  } else {
    alert("just 1 - needs coding");
  };
}

function previousProject(project, source){
  if (ProjectId === 0) {
    ProjectId = window[project].length;
  } else {
    ProjectId--;
  }

  displayProjects(project, source);
}

function nextProject(project, source){
  if (ProjectId === window[project].length) {
    ProjectId = 0;
  } else {
    ProjectId++;
  }

  displayProjects(project, source);
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
