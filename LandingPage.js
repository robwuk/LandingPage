var navigation =[
                  ["HOME", "HOME", "nav1"],
                  ["Biography", "ABOUT", "nav1"],
                  ["Personal Projects", "PERSONAL", "nav1"],
                  ["freeCodeCamp Responsive Web Desgn", "FCCRWD", "nav1"],
                  ["freeCodeCamp Front End Libraries", "FCCFEL", "nav1"],
                  ["Certificates", "CERTS", "nav1"]
                ];

var personalNav =[
                  ["Monkton Park Church", "MPC", "https://robwuk.github.io/MPC_Boot/", "MPC_Old_Photo.jpg", ["JavaScript", "HTML", "Bootstrap", "CSS"], "Development website for Monkton Park Methodist Church", "nav2"],
                  ["Sandbox", "SANDBOX", "https://robwuk.github.io/MPC_Boot/", "WIP.jpg", ["JavaScript", "HTML", "Bootstrap", "CSS"], "Development website I use for trying new techniques", "nav2"]];

var fccRWDNav =[
                  ["Tribute Page", "TRIBUTE", "https://robwuk.github.io/TributePage/", "Tribute.PNG", ["HTML", "CSS"], "freeCodeCamp Tribute Page", "nav2"],
                  ["Technical Documentation", "TECHDOC", "https://robwuk.github.io/TechDoc/", "TechDoc.PNG", ["HTML", "CSS"], "freeCodeCamp Technical Documentation Page", "nav2"],
                  ["Survey Form", "SURVEY", "https://robwuk.github.io/SurveyForm/", "Survey.PNG", ["HTML", "CSS"], "freeCodeCamp Survey Form Page", "nav2"],
                  ["Personal Profile", "PROFILE", "https://robwuk.github.io/Profile/", "RW_Profile.PNG", ["HTML", "CSS"], "freeCodeCamp Personal Profile Page", "nav2"],
                  ["Product Overview", "PRODUCT", "https://robwuk.github.io/ProductPage/", "Product.PNG", ["HTML", "CSS"], "freeCodeCamp Product Overview Page", "nav2"]
                ];

var fccFELNav =[
                  ["Random Quote Generator", "RQG", "https://robwuk.github.io/FCC_RQG/", "Tribute.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Random Quote Generator", "nav2"],
                  ["Calculator", "CALC", "https://robwuk.github.io/FCC_Calc/", "TechDoc.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Javascript Calculator", "nav2"],
                  ["Drumkit", "DRUMKIT", "https://robwuk.github.io/fcc_drum/", "Survey.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Javascriupt Drumkit", "nav2"],
                  ["Pomodoro Clock", "CLOCK", "https://robwuk.github.io/pomodoro/", "RW_Profile.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Pomodoro Clcok", "nav2"],
                  ["GitHub Markdown Previewer", "MARKDOWN", "https://robwuk.github.io/Git_Parse/", "Product.PNG", ["HTML", "CSS"], "freeCodeCamp GitHub Markdown Previewer", "nav2"]
                ];



var navDivOne = document.getElementById("navigation");
var navDivTwo = document.getElementById("subnav");

function nav1OnClick(caller) {
  switch (caller) {
    case "HOME":
      secondNavVisible("hidden");
      break;
    case "PERSONAL":
      createNav2(personalNav);
      break;
    case "FCCRWD":
      createNav2(fccRWDNav);
      break;
    case "FCCFEL":
      createNav2(fccFELNav);
      break;
  };
}

function secondNavVisible(visible){
  navDivTwo.style.visibility = visible;
}

function createNav2(navArray) {
  secondNavVisible("hidden");
  navDivTwo.innerHTML="";
  for (i=0; i<navArray.length;i++) {
    var node = document.createElement("span");
    console.log("here");
    node.innerHTML = navArray[i][0];
    node.id = navArray[i][1];
    node.className = navArray[i][6];
    navDivTwo.appendChild(node);
  }

  secondNavVisible("visible");
}

function createPage(){

  secondNavVisible("hidden");

  for (i=0; i<navigation.length;i++) {
    var node = document.createElement("span");
    console.log(navigation[i][0]);
    node.innerHTML = navigation[i][0];
    node.id = navigation[i][1];
    node.className = navigation[i][2];
    node.setAttribute("onclick", "nav1OnClick('"+navigation[i][1]+"')");
    navDivOne.appendChild(node);
  }
  //createNav2(personalNav);

}

window.onload = createPage();
