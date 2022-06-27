var database = [
    {
        username: "rajeev",
        password: "@raj"
    },
    {
        username: "bigmom",
        password: "cake"
    },
    {
        username: "kaido",
        password: "bagua"
    },
    {
        username: "luffy",
        password: "meat"
    },
    {
        username: "zoro",
        password: "samurai"
    },
    {
        username: "nami",
        password: "oppai"
    },
    {
        username: "sanji",
        password: "namrob"
    },
    {
        username: "franky",
        password: "supeerr"
    },
    {
        username: "robin",
        password: "ara-ara"
    },
    {
        username: "brook",
        password: "bones"
    },
    {
        username: "chopper",
        password: "doc"
    }
];

var newsfeed = [
    {
        username: "zoro",
        timeline: "Rengoku-onigiri!!!"
    },
    {
        username: "sanji",
        timeline: "Nami-sannn!!"
    },
    {
        username: "franky",
        timeline: "Ore Ssuuppeerr"
    }
];

function isUserOpFan(username, password) {
    for (var i=0; i<database.length;i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if(isUserOpFan(username, password)) {
        console.log(newsfeed);
    } else{
        alert("sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("what's your username ? ");
var passwordPrompt = prompt("what's your password");

signIn(userNamePrompt, passwordPrompt);