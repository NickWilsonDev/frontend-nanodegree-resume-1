/*
This is empty on purpose! Your code to build the resume will go here.
 */


$("#main").append(internationalizeButton);
var bio = {
    "name" : "Nick Wilson",
    "role" : "Software Developer",
    "contacts": {
        "mobile": "xxx-xxx-1626",
        "email": "logikfx@gmail.com",
        "github": "NickWilsonDev",
        "twitter": "",
        "location": "Faiview"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc.",
    "skills": [
        "awesomeness", "programming", "teaching", "JS"
    ],
    "bioPic": "images/fry.jpg"
};

var education = {
    "name": "Western Carolina University",
    "location": "Cullowhee",
    "major": "Computer Science",
    "minor": "Mathematics",
    "graduationDate": "May 2014"
};

var work = [{
    "name": "All Points Bulk Transportation, LLC",
    "startDate": "Nov 2014",
    "endDate": "Current"
}];

var projects = [
    {
        "name": "Webbroker",
        "description": "Web based CRUD application that keeps carriers and customers organized",
        "toolsUsed": "Python, Django, JavaScript"
    },
    {
        "name": "ContactBook",
        "description": "Web based application for easily and quickly searching for contact information",
        "tools": "MEAN stack"
    },
    {
        "name": "Fuel Tax Tracker",
        "description": "Web based application for generating reports from amount of fuel purchased and mileage in each states",
        "tools": "Java, Spring-Boot"
    }
];

if(bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
}


function displayWork() {
    for(job in work) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].name);
        $(".work-entry:last").append(formattedEmployer);
        var startDate = HTMLworkDates.replace("%data%", work[job].startDate);
        $(".work-entry:last").append(startDate);
        var endDate = HTMLworkDates.replace("%data%", work[job].endDate);
        $(".work-entry:last").append(endDate);

    }
}
function inName(name) {
    name = name.trim().split(" ");
    var last = name[1];
    var first = name[0];
    last = last.toUpperCase();
    first = first.slice(0, 1).toUpperCase() + first.slice(1, first.length).toUpperCase();
    return first + last;
}


displayWork();

