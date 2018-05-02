var user;
var enemy;
var sarahBtn;
var jarethBtn;
var hoggleBtn;
var blutoBtn;
var fireGangBtn;
var userChosen = false;
var enemyChosen = false;
var baseAp;
var newAp;
var counter = 0;
var opponentHP;
var userHp;

var fightBtnbool = false;

var characterArr =[  
     obj1 ={
        name: "Sarah",  
        hp: 50,
        ap: 7,
        cap: 7,
        image: "assets/images/sarah.jpg"
    },

     obj2 = {
        name: "Jareth",
        hp: 60,
        ap: 9,
        cap: 6,
        image: "../images/jareth.jpg"
    },

    obj3 = {
        name: "Hoggle",
        hp: 54,
        ap: 7,
        cap: 4,
        image: "../images/hoggle.jpg"
    },

    obj4 = {
        name: "Bluto",
        hp: 58,
        ap: 8,
        cap: 6,
        image: "../images/bluto.jpg"
    },

    obj5 = {
        name: "Firey",
        hp: 52,
        ap: 8,
        cap: 6,
        image: "../images/fireGang.jpg"
    }

];

$(document).ready(function() {
  
    function reset(){
        console.log("in reset block");
        // $("#characters").empty();
        // $("#yourCharacter").empty();
        // $("#opponent").empty();
        // $("#enemies").empty();
        // userChosen = false;
        // enemyChosen = false;
        // fightBtnbool = false;
        // baseAp = 0;
        // newAp =0;
        // counter = 0;
        // opponentHP = 1;
        // userHp =1;

        $("#playAgain button").addClass("invisible");
        $("#fightSection button").addClass("invisible");
        $("#message").html("Select the character you would like to play.....");
        $("#charDiv").append("<div class='col-md-12' id='characters'>");

        sarahBtn = $("<div>");
        sarahBtn.addClass("characterBtn");
        sarahBtn.text(characterArr[0].name);
        sarahBtn.attr("data-name", obj1.name);
        sarahBtn.attr("data-hp", obj1.hp);
        sarahBtn.attr("data-ap", obj1.ap);
        sarahBtn.attr("data-cap", obj1.cap);
        sarahBtn.append("<img src='assets/images/sarah.jpg' alt='Sarah image'>");
        sarahBtn.append("<p id='health'><b>Health Points: " + characterArr[0].hp + "<b><p>");   
        $("#characters").append(sarahBtn);
    
        jarethBtn = $("<div>");
        jarethBtn.addClass("characterBtn");
        jarethBtn.text(characterArr[1].name);
        jarethBtn.attr("data-name", obj2.name);
        jarethBtn.attr("data-hp", obj2.hp);
        jarethBtn.attr("data-ap", obj2.ap);
        jarethBtn.attr("data-cap", obj2.cap);
        jarethBtn.append("<img src='assets/images/jareth2.jpg' alt=Jareth image'>");
        jarethBtn.append("<p id='health'><b>Health Points: " + characterArr[1].hp + "<b><p>"); 
        $("#characters").append(jarethBtn);
    
    
        hoggleBtn = $("<div>");
        hoggleBtn.addClass("characterBtn");
        hoggleBtn.text(characterArr[2].name);
        hoggleBtn.attr("data-name", obj3.name);
        hoggleBtn.attr("data-hp", obj3.hp);
        hoggleBtn.attr("data-ap", obj3.ap);
        hoggleBtn.attr("data-cap", obj3.cap);
        hoggleBtn.append("<img src='assets/images/hoggle2.jpg' alt='Hoggle image'>");
        hoggleBtn.append("<p id='health'><b>Health Points: " + characterArr[2].hp + "<b><p>"); 
        $("#characters").append(hoggleBtn);
    
    
        blutoBtn = $("<div>");
        blutoBtn.addClass("characterBtn");
        blutoBtn.text(characterArr[3].name);
        blutoBtn.attr("data-name", obj4.name);
        blutoBtn.attr("data-hp", obj4.hp);
        blutoBtn.attr("data-ap", obj4.ap);
        blutoBtn.attr("data-cap", obj4.cap);
        blutoBtn.append("<img src='assets/images/bluto2.jpg' alt='Bluto image'>");
        blutoBtn.append("<p id='health'><b>Health Points: " + characterArr[3].hp + "<b><p>"); 
        $("#characters").append(blutoBtn);
    
    
        fireGangBtn = $("<div>");
        fireGangBtn.addClass("characterBtn");
        fireGangBtn.text(characterArr[4].name);
        fireGangBtn.attr("data-name", obj5.name);
        fireGangBtn.attr("data-hp", obj5.hp);
        fireGangBtn.attr("data-ap", obj5.ap);
        fireGangBtn.attr("data-cap", obj5.cap);
        fireGangBtn.append("<img src='assets/images/fireGang2.jpg' alt='Fire Gang image'>");
        fireGangBtn.append("<p id='health'><b>Health Points: " + characterArr[4].hp + "<b><p>"); 
        $("#characters").append(fireGangBtn);  
        return;
    }

    function attack(){
        console.log("in attack block");
        $("#message").html("You attack " + enemy + " for " + ($("#yourCharacter .characterBtn").attr("data-ap")) + "!!!  " +
        enemy + " counter attacks you for  " + ($("#opponent .characterBtn").attr("data-cap")) + "!!!");
        console.log($("#opponent .characterBtn").attr("data-name") + " hp: " + $("#opponent .characterBtn").attr("data-hp"));
        opponentHP = parseInt($("#opponent .characterBtn").attr("data-hp") - parseInt($("#yourCharacter .characterBtn").attr("data-ap")));
        $("#opponent .characterBtn").attr("data-hp", opponentHP);
        $("#opponent #health").text("Health Points: " + opponentHP);
        userHp = parseInt($("#yourCharacter .characterBtn").attr("data-hp") - parseInt($("#opponent .characterBtn").attr("data-cap")));
        $("#yourCharacter .characterBtn").attr("data-hp", userHp);
        $("#yourCharacter #health").text("Health Points: " + userHp);
        console.log("opponent hp after hit: " + opponentHP);
        console.log("User hp: " + userHp);
        newAp = (parseInt($("#yourCharacter .characterBtn").attr("data-ap")) + baseAp);
        $("#yourCharacter .characterBtn").attr("data-ap", $("#yourCharacter .characterBtn").attr("data-ap") + baseAp);
        console.log("User newAp: " + newAp);
        $("#yourCharacter .characterBtn").attr("data-ap", newAp);
        checkHealth(); 
    }
    
    function checkHealth(){
        if(userHp <= 0){
            console.log("in overall loss block")
            $("#yourCharacter").empty();
            $("#message").html("You have been defeated by " + enemy + "!!!")
            $(".vid").append("<audio autoplay src='assets/images/womp-womp.mp3'>");
            $("#playAgain button").removeClass("invisible");
            // $("#playAgain button").on("click", function() {
            //     reset();
            // });
            return;
        }
        else if(counter === characterArr.length - 1){
            console.log("in overall win block");
            $("#opponent").empty();
            $("#message").html("Congratulations.... You have defeated all enemies!!!")
            $(".vid").append("<iframe src='https://www.youtube.com/embed/ZvyNOg4jSRg?autoplay=1' frameborder='0 allow='encrypted-media' allowfullscreen></iframe>");
            $("#playAgain button").removeClass("invisible");
            // $("#playAgain button").on("click", function() {
            //     $("#characters").empty();
            //     $("#yourCharacter").empty();
            //     $("#opponent .characterBtn").empty();
            //     $("#enemies #characters").empty();
            //     userChosen = false;
            //     enemyChosen = false;
            //     fightBtnbool = false;
            //     baseAp = 0;
            //     newAp =0;
            //     counter = 0;
            //     opponentHP = 1;
            //     userHp =1;
            //     reset();
            // });
 
            return;
        }
        else if (opponentHP <= 0){
            console.log("in clear opponent block");
            $("#message").html("You have defeated " + ($("#opponent .characterBtn").attr("data-name")) + "!!!  Please select your next opponent.");    
            $("#opponent").empty();
            enemyChosen = false; 
        } 
    }

    reset();

    $(".characterBtn").on("click", function() {
        if(userChosen && enemyChosen){
            return;
        }
        else if(!userChosen){
            console.log("in choose user block")
            $("#yourCharacter").append(this);
            user = ($("#yourCharacter .characterBtn").attr("data-name"));
            $("#message").html("You have chosen " + user + "!!!  Please select your opponent.");   
            baseAp = parseInt($("#yourCharacter .characterBtn").attr("data-ap"));
            userChosen = true;
        }
        else if(userChosen){
            console.log("in chose enemy block");
            $("#opponent").append(this);
            enemy = ($("#opponent .characterBtn").attr("data-name"));
            console.log(this);
            counter++;
            opponentHP = parseInt($("#opponent").attr("data-hp"));
            enemyChosen = true;
            $("#characters").appendTo("#enemies");
            $("#message").html("You have chosen " + enemy + " as your enemy!!!  Please hit the attack button to start the fight.")
            // debugger;
            if(!fightBtnbool){
                console.log("in fight button bool block")
                $("#fightSection button").removeClass("invisible");
                fightBtnbool = true;
            }
            else{
                return 0;
            }
        }

        console.log("user chosen? " + userChosen);
        console.log("enemy chosen?: " + enemyChosen)

        if(userChosen && enemyChosen){
            $("#fightSection button").on("click", function(){
                attack();                    
            })
        }
    })

});
