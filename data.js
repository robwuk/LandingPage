const author = "Robert Worth";
const intro = "Frontend Developer / Project Manager / Music Lover";

var navigation = [
                  ["<i class='fas fa-home'></i> HOME", "HOME", "nav1", "#000000"],
                  ["Biography", "ABOUT", "nav1", "#DDAA66"],
                  ["Personal Projects", "PERSONAL", "nav1", "#DDAA66"],
                  //["freeCodeCamp Responsive Web Desgn", "FCCRWD", "nav1"],
                  //["freeCodeCamp Front End Libraries", "FCCFEL", "nav1"],
                  ["Online Coursework","COURSES", "nav1", "#DDAA66"],
                  ["Certificates", "CERTS", "nav1", "#DDAA66"]
                ];

var courseNav = [
                  ["freeCodeCamp Responsive Web Desgn", "FCCRWD", "", "", "", "", "nav2"],
                  ["freeCodeCamp Front End Libraries", "FCCFEL", "", "", "", "", "nav2"],
                  ["Frontend Mentor", "FEM", "", "", "","", "nav2"]
                ];

var personalNav = [
                  ["Monkton Park Church", "MPC", "https://robwuk.github.io/MPC_Boot/", "MPC_Old_Photo.jpg", ["JavaScript", "HTML", "Bootstrap", "CSS"], "Development website for Monkton Park Methodist Church", "nav2"],
                  ["Sandbox", "SANDBOX", "https://robwuk.github.io/MPC_Boot/", "WIP.jpg", ["JavaScript", "HTML", "Bootstrap", "CSS"], "Development website I use for trying new techniques", "nav2"]
                ];

var fccRWDNav = [
                  ["Tribute Page", "TRIBUTE", "https://robwuk.github.io/TributePage/", "Tribute.PNG", ["HTML", "CSS"], "freeCodeCamp Tribute Page", "nav2"],
                  ["Technical Documentation", "TECHDOC", "https://robwuk.github.io/TechDoc/", "TechDoc.PNG", ["HTML", "CSS"], "freeCodeCamp Technical Documentation Page", "nav2"],
                  ["Survey Form", "SURVEY", "https://robwuk.github.io/SurveyForm/", "Survey.PNG", ["HTML", "CSS"], "freeCodeCamp Survey Form Page", "nav2"],
                  ["Personal Profile", "PROFILE", "https://robwuk.github.io/Profile/", "RW_Profile.PNG", ["HTML", "CSS"], "freeCodeCamp Personal Profile Page", "nav2"],
                  ["Product Overview", "PRODUCT", "https://robwuk.github.io/ProductPage/", "Product.PNG", ["HTML", "CSS"], "freeCodeCamp Product Overview Page", "nav2"]
                ];

var fccFELNav = [
                  ["Random Quote Generator", "RQG", "https://robwuk.github.io/FCC_RQG/", "Tribute.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Random Quote Generator", "nav2"],
                  ["Calculator", "CALC", "https://robwuk.github.io/FCC_Calc/", "TechDoc.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Javascript Calculator", "nav2"],
                  ["Drumkit", "DRUMKIT", "https://robwuk.github.io/fcc_drum/", "Survey.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Javascriupt Drumkit", "nav2"],
                  ["Pomodoro Clock", "CLOCK", "https://robwuk.github.io/pomodoro/", "RW_Profile.PNG", ["HTML", "CSS", "JavaScript", "Bootstrap"], "freeCodeCamp Pomodoro Clcok", "nav2"],
                  ["GitHub Markdown Previewer", "MARKDOWN", "https://robwuk.github.io/Git_Parse/", "Product.PNG", ["HTML", "CSS"], "freeCodeCamp GitHub Markdown Previewer", "nav2"]
                ];

var home = [
            ["Robert Worth", "home__name", "author"],
            ["Welcome to my Project Landing Page", "home__welcome", "welcome"]
]

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
                  ["html5.svg", "HTML5", "high"],
                  ["css3_full.svg", "CSS3", "high"],
                  ["js_badge.svg", "Javascript", "medium"],
                  ["bootstrap.svg", "Bootstrap", "medium"],
                  ["angular_simple.svg", "Angular", "low"],
                  ["github_badge.svg", "GitHub", "low"]
                ]


var FCCRWD = [['<courseTitle>freeCodeCamp Responsive Web Design Projects</courseTitle><br /><br />',
              'As part of the <a href="https://learn.freecodecamp.org" target="_blank">freeCodeCamp</a>',
              ' <i>Responsive Web Design</i> certificate there are 5 projects that need to be completed, ',
              'tested and submitted, These projects cover all of the elements the course goes over and are ',
              'used to confirm learning. Click the corresponding link to see the finished project'].join(""),
              "test"]

var FCCFEL = [['<courseTitle>freeCodeCamp Front End Library Projects</courseTitle><br /><br />',
              'As part of the <a href="https://learn.freecodecamp.org" target="_blank">freeCodeCamp</a>',
              ' <i>Responsive Web Design</i> certificate there are 5 projects that need to be completed, ',
              'tested and submitted, These projects cover all of the elements the course goes over and are ',
              'used to confirm learning. Click the corresponding link to see the finished project'].join(""),
              "test"]

var FEM = [['<courseTitle>Front End Mentor Projects</courseTitle><br /><br />',
              'As part of the <a href="https://learn.freecodecamp.org" target="_blank">freeCodeCamp</a>',
              ' <i>Responsive Web Design</i> certificate there are 5 projects that need to be completed, ',
              'tested and submitted, These projects cover all of the elements the course goes over and are ',
              'used to confirm learning. Click the corresponding link to see the finished project'].join(""),
              "test"]

var MPC = [['<courseTitle>Monkton Park Church</courseTitle><br /><br />',
              'Development website for Monkton Park Methodist Chruch. Built using HTML5, CSS3 and ',
              'Javascript it gives people an insight to the church, regular events and any special ',
              'occassions in the newa future.'].join(""),
              "test"]

var SANDBOX = [['<courseTitle>Sandbox</courseTitle><br /><br />',
              'Test bed site in which I will look to use different techniques as/when I come across them. ',
              'The contents may vary and look a bit disjointed and have errors but that is all part of ',
              'my style of learning.'].join(""),
              "test"]
