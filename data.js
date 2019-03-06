const author = "Robert Worth";
const intro = "Frontend Developer / Project Manager / Music Lover";
const githubRepo = "https://github.com/robwuk/";
const githubPage = "https://robwuk.github.io/";

var ProjectId = 0;

var navigation = [
                  ["<i class='fas fa-home'></i> HOME", "HOME", "nav1", "#000000"],
                  ["Biography", "ABOUT", "nav1", "#DDAA66"],
                  ["Personal Projects", "PERSONAL", "nav1", "#DDAA66"],
                  ["Online Coursework","COURSES", "nav1", "#DDAA66"]
                ];

var courseNav = [
                  ["freeCodeCamp Responsive Web Desgn", "FCCRWD", "", "", "", "", "nav2"],
                  ["freeCodeCamp Front End Libraries", "FCCFEL", "", "", "", "", "nav2"],
                  ["freeCodeCamp Javascript Algorithms And Data Structures", "FCCJS", "", "", "", "", "nav2"],
                  ["Frontend Mentor", "FEM", "", "", "","", "nav2"]
                ];

var personalNav = [
                  ["Monkton Park Church", "MPC", "", "", "", "", "nav2","G"],
                  ["Sandbox", "SANDBOX", "", "", "", "", "nav2","G"]
                ];

var fccRWDNav = [
                  ["Tribute Page", "TRIBUTE", "TributePage", "Tribute.PNG", ["HTML", "CSS"], "freeCodeCamp Tribute Page", "nav2", "G"],
                  ["Technical Documentation", "TECHDOC", "TechDoc", "TechDoc.PNG", ["HTML", "CSS"], "freeCodeCamp Technical Documentation Page", "nav2", "G"],
                  ["Survey Form", "SURVEY", "SurveyForm", "Survey.PNG", ["HTML", "CSS"], "freeCodeCamp Survey Form Page", "nav2", "G"],
                  ["Personal Profile", "PROFILE", "Profile", "FCC_Profile_Small.jpg", ["HTML", "CSS"], "freeCodeCamp Personal Profile Page", "nav2", "G"],
                  ["Product Overview", "PRODUCT", "ProductPage", "Product.PNG", ["HTML", "CSS"], "freeCodeCamp Product Overview Page", "nav2", "G"]
                ];

var fccFELNav = [
                  ["Random Quote Generator", "RQG", "FCC_RQG", "FCC_RQG.JPG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Random Quote Generator", "nav2", "G"],
                  ["Calculator", "CALC", "FCC_Calc", "FCC_Calculator.JPG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Javascript Calculator", "nav2", "G"],
                  ["Drumkit", "DRUMKIT", "fcc_drum", "FCC_Drumkit.JPG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Javascriupt Drumkit", "nav2", "G"],
                  ["Pomodoro Clock", "CLOCK", "pomodoro", "FCC_Pomodoro.JPG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Pomodoro Clcok", "nav2", "G"],
                  ["GitHub Markdown Previewer", "MARKDOWN", "Git_Parse", "FCC_Previewer.JPG", ["HTML", "CSS"], "freeCodeCamp GitHub Markdown Previewer", "nav2", "G"]
                ];

var sandBoxProject = [
                  ["Sandbox", "SANDBOX", "Sandbox", "webdevelopment.jpg", ["HTML", "CSS", "JavaScript"], "Sandbox", "nav2", "G"]
                ];

var FEMNav = [
                  ["Challenge 1", "FEM1", "huddle-lp", "FM_Huddle_Page_small.jpg", ["HTML", "CSS", "JavaScript"], "Front End Montor Challenge 1", "nav2", "G"]
                ];

var MPCProject = [
                  ["Monkton Park Church", "MPC", "MPC_Boot", "MPC_Old_Photo.jpg", ["HTML", "CSS", "JavaScript"], "Monkton Park Church", "nav2", "G"]
                ];

var quotes = [
              ["For the best return on your money, pour your purse into your head.", "Benjamin Franklin"],
              ["Absorb what is useful, Discard what is not, Add what is uniquely your own.", "Bruce Lee"],
              ["Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.", "Vikto Frankl"],
              ["We must become the change we want to see.", "Mahatma Ghandi"],
              ["Investing in yourself is the best investment you will ever make. It will not only improve your life, it will improve the lives of all those around you.", "Robin Sharma"],
              ["Look in the mirror that’s your competition.", "Anon."],
              ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"]
]

var techIcons = [
                  ["HTML.svg", "HTML5", "high"],
                  ["CSS.svg", "CSS3", "high"],
                  ["JavaScript.svg", "Javascript", "medium"],
                  ["Bootstrap.svg", "Bootstrap", "medium"],
                  ["Angular.svg", "Angular", "low"],
                  ["github_badge.svg", "GitHub", "low"]
                ]

var FCCJS = [['<courseTitle>freeCodeCamp Javascript Algorithms And Data Structures</courseTitle><br /><br />',
              'As part of the <a href="https://learn.freecodecamp.org" target="_blank">freeCodeCamp</a>',
              ' <i>Javascript Algorithms And Data Structures</i> certificate there are 5 projects that need to be completed, ',
              'tested and submitted, These projects cover all of the elements the course goes over and are ',
              'used to confirm learning. These exercises do not result in an external website'].join(""),
              "", "", "FCCFEL","Cert_JS.JPG"]


var FCCRWD = [['<courseTitle>freeCodeCamp Responsive Web Design Projects</courseTitle><br /><br />',
              'As part of the <a href="https://learn.freecodecamp.org" target="_blank">freeCodeCamp</a>',
              ' <i>Responsive Web Design</i> certificate there are 5 projects that need to be completed, ',
              'tested and submitted, These projects cover all of the elements the course goes over and are ',
              'used to confirm learning.'].join(""),
              "fccRWDNav", "courseNav", "FCCRWD","Cert_RWD.JPG"]

var FCCFEL = [['<courseTitle>freeCodeCamp Front End Library Projects</courseTitle><br /><br />',
              'As part of the <a href="https://learn.freecodecamp.org" target="_blank">freeCodeCamp</a>',
              ' <i>Frontend Libraries</i> certificate there are 5 projects that need to be completed, ',
              'tested and submitted, These projects cover all of the elements the course goes over and are ',
              'used to confirm learning.'].join(""),
              "fccFELNav", "courseNav", "FCCFEL","Cert_FEL.JPG"]

var FEM = [['<courseTitle>Front End Mentor Projects</courseTitle><br /><br />',
             '<a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a> provides a number of ',
              '<em>challenges</em> to help cement HTML/CSS/JavaScript skills. For each challenge you are provided ',
              'with a design specification (fonts to use, colour schemes etc.), any site-specific images and an ',
              'image of the layout you need to achieve. You then develop the HTML/CSS/Javascript to deliver the ',
              'brief.'].join(""),
              "FEMNav", "courseNav", "FEM",""]

var MPC = [['<courseTitle>Monkton Park Church</courseTitle><br /><br />',
              'Development website for Monkton Park Methodist Church. Built using HTML5, CSS3 and ',
              'Javascript it gives people an insight in to the church, regular events and any special ',
              'occassions in the near future.'].join(""),
              "MPCProject", "personalNav", "MPC",""]

var SANDBOX = [['<courseTitle>Sandbox</courseTitle><br /><br />',
              'Test bed site in which I will look to use different techniques as/when I come across them. ',
              'The contents may vary and look a bit disjointed and have errors but that is all part of ',
              'my style of learning.'].join(""),
              "sandBoxProject", "personalNav", "SANDBOX",""]

var CERTS = [['<issuer>FreeCodeCamp</issuer>','<a href="https://www.freecodecamp.org/" target="_blank">Website</a>',
            [["Responsive Web Design","Cert_RWD.JPG","RWD"],["JavaScript","Cert_JS.JPG","JS"],["Frontend Libraries","Cert_FEL.JPG","FEL"]]],
            ['<issuer>SoloLearn</issuer>','<a href="https://www.freecodecamp.org/" target="_blank">Solo Website</a>',
            [["Solo Responsive Web Design","Cert_RWD.JPG"],["Solo JavaScript","Cert_JS.JPG"],["Solo Frontend Libraries","Cert_FEL.JPG"]]]]
