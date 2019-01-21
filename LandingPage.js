var navigation =[["HOME", "HOME", "nav1"],
                ["Biography", "ABOUT", "nav1"],
                ["Personal Projects", "PERSONAL", "nav1"],
                ["freeCodeCamp Responsive Web Desgn", "FCCRWD", "nav1"],
                ["freeCodeCamp Front End Libraries", "FCCFEL", "nav1"],
                ["Certificates", "CERTS", "nav1"]];

var personalNav =[["Monkton Park Church", "MPC", "https://robwuk.github.io/MPC_Boot/", "MPC_Old_Photo", ["JavaScript", "HTML", "Bootstrap", "CSS"], "Development website for Monkton Park Methodist Church", "nav2"],
                  ["Sandbox", "SANDBOX", "https://robwuk.github.io/MPC_Boot/", "WIP", ["JavaScript", "HTML", "Bootstrap", "CSS"], "Development website I use for trying new techniques", "nav2"]];


function nav1OnClick(caller) {
  switch (caller) {
    case "PERSONAL":
      createNav2(personalNav);
      break;
  };
}

function createNav2(navArray) {
  var navDiv = document.getElementById("subnav");

  for (i=0; i<navArray.length;i++) {
    var node = document.createElement("span");
    console.log(navArray[i][0]);
    node.innerHTML = navArray[i][0];
    node.id = navArray[i][1];
    node.className = navArray[i][6];
    navDiv.appendChild(node);
  }
}

function createPage(){
  var navDiv = document.getElementById("navigation");

  for (i=0; i<navigation.length;i++) {
    var node = document.createElement("span");
    console.log(navigation[i][0]);
    node.innerHTML = navigation[i][0];
    node.id = navigation[i][1];
    node.className = navigation[i][2];
    navDiv.appendChild(node);
  }
  createNav2(personalNav);
}

window.onload = createPage();
