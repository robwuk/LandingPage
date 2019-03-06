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
    mainArea.appendChild(node);
}

function coursePage(pageArray) {
  clearMain();
  createContainer('45% 7% 45%');

  var container = document.getElementById("container");

  for (let i=0; i<pageArray.length; i++){
    var node = document.createElement("section");
    node.id = pageArray[i][1] + "__text";
    node.className = "course";
    var variable = window[pageArray[i][1]];
    node.innerHTML =  "<br />" + variable[0];

    if (variable[4] != "") { //display certificate link if there is a certificate
      node.innerHTML += "<section class='certificate' onclick='displayCertificate(\"" + variable[4] + "\")'>see certificate...</section>";
    };

    if (variable[1] != "") { //display detail link if there are further websites
    node.innerHTML += "<section class='moreinfo' onclick='displayProjects(\"" + variable[3] + "\", \""+ variable[2] + "\")'>see detail...</section>";
    }

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

    createContainer('18% 10% 10% 40% 18%');

    if (projectList.length > 1){
      scrollButton(project, source, "next", "fas fa-chevron-circle-right", 5);
      scrollButton(project, source, "previous", "fas fa-chevron-circle-left", 1);
    }

    var node = document.createElement("section");
    node.id = projectList[ProjectId][1] + "__text";
    node.className = "project";
    node.innerHTML = projectList[ProjectId][0]/* + "<br />"*/;
    node.style.textShadow = '2px 2px 1px #DDDDDD';
    node.style.textAlign = "center";
    node.style.fontSize = "200%";
    node.style.gridColumn = "2 / span 3";

    if (projectList[ProjectId][7] === "G") {
      node.innerHTML += " <a href='" + githubRepo + projectList[ProjectId][2] + "' target='_blank' style='font-size: 50%; line-height: 12px'>Code</a> ";
      node.innerHTML += " <a href='" + githubPage + projectList[ProjectId][2] + "' target='_blank' style='font-size: 50%; line-height: 12px'>Site</a>";
    }
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
    node.style.gridRow = "2 / span 3";
    node.style.boxShadow = '5px 5px 13px #AAAAAA';
    container.appendChild(node);

}

function createContainer(columnDetail){
  var node = document.createElement("section");
  node.id = "container";
  node.class = "container";
  node.style.gridTemplateColumns = columnDetail;
  node.style.display = "grid";
  node.style.gridColumnGap = "1vw";
  node.style.marginTop = "10vh";
  mainArea.appendChild(node);
}

function scrollButton(project, source, name, classid, column) {
  var node = document.createElement("section");
  node.id = name;
  node.style.textShadow = '2px 2px 1px #DDDDDD';
  node.style.textAlign = "center";
  node.style.gridColumn = column;
  node.style.gridRow = "1";
  container.appendChild(node);

  var iconLocation = document.getElementById(name);

  var node = document.createElement("i");
  node.id = name + "__icon";
  node.className = "scroll";
  node.style.textShadow = '2px 2px 1px #DDDDDD';
  node.className=classid;
  node.style.fontSize = "400%";
  node.style.filter = "invert(80%)";
  node.style.borderRadius = "50%";
  node.style.boxShadow = '5px 5px 13px #AAAAAA';
  node.setAttribute("onclick", name + "Project('" + project + "', '" + source + "')");
  node.setAttribute("onmouseover", "highlightButton('" + node.id + "')");
  node.setAttribute("onmouseout", "resetButton('" + node.id + "')");

  iconLocation.appendChild(node);
}

function highlightButton(node){
  var button = document.getElementById(node);
  button.style.cursor = "pointer";
  button.style.filter = "invert(0%)";
}

function resetButton(node){
  var button = document.getElementById(node);
  button.style.filter = "invert(80%)";
}

function previousProject(project, source){
  if (ProjectId === 0) {
    ProjectId = window[project].length-1;
  } else {
    ProjectId--;
  }

  displayProjects(project, source);
}

function nextProject(project, source){
  if (ProjectId === window[project].length-1) {
    ProjectId = 0;
  } else {
    ProjectId++;
  }

  displayProjects(project, source);
}

function displayCertificate(cert){
  clearMain();

  var node = document.createElement("img");
  node.id = cert + "__image";
  node.className = "certificateImage";
  node.src = cert;
  node.borderRadius = "50%";
  node.style.boxShadow = '5px 5px 13px #AAAAAA';
  mainArea.appendChild(node);
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
