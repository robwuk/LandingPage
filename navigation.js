var mainArea = document.getElementById("mainarea");
var navDivOne = document.getElementById("navigation");
var navDivTwo = document.getElementById("subnav");

function nav1OnClick(caller) {
  switch (caller) {
    case "HOME":
      secondNavVisible("hidden");
      homePage();
      break;
    case "ABOUT":
      secondNavVisible("hidden");
      bioPage();
      break;
    case "PERSONAL":
      createNav2(personalNav);
      break;
    case "COURSES":
      createNav2(courseNav);
      break;
  //  case "FCCRWD":
  //    createNav2(fccRWDNav);
  //    break;
  //  case "FCCFEL":
  //    createNav2(fccFELNav);
  //    break;
  };
}

function secondNavVisible(visible){
  navDivTwo.style.visibility = visible;
}

function createNav1() {
  for (i=0; i<navigation.length;i++) {
    var node = document.createElement("span");
    console.log(navigation[i][0]);
    node.innerHTML = navigation[i][0];
    node.id = navigation[i][1];
    node.className = navigation[i][2];
    node.setAttribute("onclick", "nav1OnClick('"+navigation[i][1]+"')");
  //  node.setAttribute("onmouseover", "nav1OnMouseOver('" + navigation[i][3] + "', '" + navigation[i][1] + "')")
    navDivOne.appendChild(node);
  }
}

function createNav2(navArray) {
  secondNavVisible("hidden");
  navDivTwo.innerHTML="";
  for (i=0; i<navArray.length;i++) {
    var node = document.createElement("span");
    node.innerHTML = navArray[i][0];
    node.id = navArray[i][1];
    node.className = navArray[i][6];
    navDivTwo.appendChild(node);
  }

  secondNavVisible("visible");
}
