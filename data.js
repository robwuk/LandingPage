const author = "Robert Worth";
const intro = " ~ Personal Profile ~";

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
                  ["fab fa-html5", "HTML5", "high"],
                  ["fab fa-css3-alt", "CSS3", "high"],
                  ["fab fa-js-square", "Javascript", "medium"],
                  ["fab fa-angular", "Angular", "low"],
                  ["fab fa-github", "GitHub", "low"]
                ]

var about = ["<h2>About Me</h2>",
"<p>I have been an IT Project Manager for over 15 years but was originally a developer (mid->late '90s). As part of my personal development, I am revisiting coding using HTML, CSS and JavaScript as", 'languages and <a href="https://github.com/" target="_blank">GitHub</a> as my version management tool. My long term goal is to move back in to  front-end development.</br></br>/n',
'The below pages are the projects I am currently working on, one being  development site for the church I attend (and whose website I maintain) and the second being the area I try new skills/techniques in.</br></br>',
'Feel free to have a look at my work, I can be contacted on any of the usual Social Media platforms or vial email.']
