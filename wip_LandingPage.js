
function showLinks(){

  var ul = document.getElementById("AboutMe");

  var text = "<h2>Links</h2>\n" +
  "<p>The images below will take you to the work I have in progress:</p>\n" +
  "<table align='center'>\n" +
    "<tr>\n" +
      "<td><a href='https://robwuk.github.io/MP_Church/' target='_blank'><img class='body_img_url' alt='Monkton Park Church - Development' src='MPC_Old_Photo.jpg' height='200px'></a></td>\n" +
      "<td><a href='https://robwuk.github.io/Sandbox/' target='_blank'><img class='body_img_url' alt='Monkton Park Church - Development' src='webdevelopment.jpg' height='200px'></a></td>\n" +
    "</tr>\n" +
    "<tr align='center'>\n" +
      "<td>Monkton Park Methodist Church</td>\n" +
      "<td>Sandbox - Learning & Experimenting</td>\n" +
    "</tr>\n" +
  "</table>";








ul.innerHTML=text;
}
