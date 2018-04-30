var user;
var enemy;
var sarahBtn;
var jarethBtn;
var hoggleBtn;
var blutoBtn;
var fireGangBtn;
var userChosen = false;
var enemyChosen = false;
var btnArr =[];
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
        ap: 5,
        cap: 7,
        image: "assets/images/sarah.jpg"
    },

     obj2 = {
        name: "Jareth",
        hp: 60,
        ap: 8,
        cap: 6,
        image: "../images/jareth.jpg"
    },

    obj3 = {
        name: "Hoggle",
        hp: 54,
        ap: 4,
        cap: 5,
        image: "../images/hoggle.jpg"
    },

    obj4 = {
        name: "Bluto",
        hp: 58,
        ap: 7,
        cap: 8,
        image: "../images/bluto.jpg"
    },

    obj5 = {
        name: "Fire Gang",
        hp: 52,
        ap: 6,
        cap: 7,
        image: "../images/fireGang.jpg"
    }

];

$(document).ready(function() {

    sarahBtn = $("<img>");
    sarahBtn.addClass("characterBtn");
    sarahBtn.attr("data-name", obj1.name);
    sarahBtn.attr("data-hp", obj1.hp);
    sarahBtn.attr("data-ap", obj1.ap);
    sarahBtn.attr("data-cap", obj1.cap);
    sarahBtn.attr("src", "assets/images/sarah.jpg");
    sarahBtn.html("obj1.ap");
    $("#characters").append(sarahBtn);
    btnArr.push(sarahBtn);

    // var charHp = $("<p class='caption'>");
    // console.log($(sarahBtn).attr("hp"));
    // charHp.append($(sarahBtn).attr("data-hp"));
    // console.log(charHp);

    jarethBtn = $("<img>");
    jarethBtn.addClass("characterBtn");
    jarethBtn.attr("data-name", obj2.name);
    jarethBtn.attr("data-hp", obj2.hp);
    jarethBtn.attr("data-ap", obj2.ap);
    jarethBtn.attr("data-cap", obj2.cap);
    jarethBtn.attr("src", "assets/images/jareth2.jpg");
    $("#characters").append(jarethBtn);
    btnArr.push(jarethBtn);

    hoggleBtn = $("<img>");
    hoggleBtn.addClass("characterBtn");
    hoggleBtn.attr("data-name", obj3.name);
    hoggleBtn.attr("data-hp", obj3.hp);
    hoggleBtn.attr("data-ap", obj3.ap);
    hoggleBtn.attr("data-cap", obj3.cap);
    hoggleBtn.attr("src", "assets/images/hoggle2.jpg");
    $("#characters").append(hoggleBtn);
    btnArr.push(hoggleBtn);

    blutoBtn = $("<img>");
    blutoBtn.addClass("characterBtn");
    blutoBtn.attr("data-name", obj4.name);
    blutoBtn.attr("data-hp", obj4.hp);
    blutoBtn.attr("data-ap", obj4.ap);
    blutoBtn.attr("data-cap", obj4.cap);
    blutoBtn.attr("src", "assets/images/bluto2.jpg");
    $("#characters").append(blutoBtn);
    btnArr.push(blutoBtn);

    fireGangBtn = $("<img>");
    fireGangBtn.addClass("characterBtn");
    fireGangBtn.attr("data-name", obj5.name);
    fireGangBtn.attr("data-hp", obj5.hp);
    fireGangBtn.attr("data-ap", obj5.ap);
    fireGangBtn.attr("data-cap", obj5.cap);
    fireGangBtn.attr("src", "assets/images/fireGang2.jpg");
    $("#characters").append(fireGangBtn);
    btnArr.push(fireGangBtn);

    

    // function reset(){
    //     // for(var i =0; i < characterArr.length; i++){
    //     //     var characterBtn = $("<button>");

    //     //     characterBtn.addClass("characterBtn");
    //     //     characterBtn.attr("hp", characterArr[i].hp);
    //     //     characterBtn.attr("ap", characterArr[i].ap);
    //     //     characterBtn.attr("cap", characterArr[i].cap);
    //     //     $("#characters").append(characterBtn);
    //     //     console.log(characterBtn);
    //     // } Try to find a way to create buttons with loop
    //     sarahBtn = $("<button>");
    //     sarahBtn.addClass("characterBtn sarah sarahBg");
    //     sarahBtn.attr("hp", sarah.hp);
    //     sarahBtn.attr("ap", sarah.ap);
    //     sarahBtn.attr("cap", sarah.cap);
    //     $("#characters").append(sarahBtn);
    
    //     jarethBtn = $("<button>");
    //     jarethBtn.addClass("characterBtn jareth jarethBg");
    //     jarethBtn.attr("hp", jareth.hp);
    //     jarethBtn.attr("ap", jareth.ap);
    //     sarahBtn.attr("cap", jareth.cap);
    //     $("#characters").append(jarethBtn);
    
    //     hoggleBtn = $("<button>");
    //     hoggleBtn.addClass("characterBtn hoggle hoggleBg");
    //     hoggleBtn.attr("hp", hoggle.hp);
    //     hoggleBtn.attr("ap", hoggle.ap);
    //     hoggleBtn.attr("cap", hoggle.cap);
    //     $("#characters").append(hoggleBtn);
    
    //     blutoBtn = $("<button>");
    //     blutoBtn.addClass("characterBtn bluto blutoBg");
    //     blutoBtn.attr("hp", bluto.hp);
    //     blutoBtn.attr("ap", bluto.ap);
    //     blutoBtn.attr("cap", bluto.cap);
    //     $("#characters").append(blutoBtn);
    
    //     fireGangBtn = $("<button>");
    //     fireGangBtn.addClass("characterBtn fireGang fireGangBg");
    //     fireGangBtn.attr("hp", fireGang.hp);
    //     fireGangBtn.attr("ap", fireGang.ap);
    //     fireGangBtn.attr("cap", fireGang.cap);
    //     $("#characters").append(fireGangBtn);

    //     $("#yourCharacter, #enemies, #opponent, #message").empty();       
    
    // }

    // function characterSelect(userChosen, enemyChosen){
    //     if(userChosen && enemyChosen){
    //         return;
    //     }
    //     else if (!userChosen){
    //         user = this;
    //         $("#yourCharacter").append(user);
    //         userChosen = true;
    //         console.log()
    //     }
    //     else if(userChosen){
    //         enemy = this;
    //         $("#opponent").append(enemy);
    //         enemyChosen = true;
    //     }
    // } // will make clicked character to be user character and move it to yourCharacter div and move rest of characters move to Enemies div
    
    // function enemySelect(){
    
    
    // } // will make clicked character to be user enemy and move it to the enemy div
    
    // function attack(){
    
    // } // will: 1. decrease opponents hit points
    //         // 2. decrease users healthPoints by opponents counterAttackPower
    //         // 3. update users attackPower by base power
    
    // function checkHealth(){
    
    // }// will 

    $(".characterBtn").on("click", function() {

        // characterSelect(userChosen, enemyChosen);
        if(userChosen && enemyChosen){
            return;
        }
        else if(!userChosen){
            $("#yourCharacter").append(this);
            user = ($("#yourCharacter img").attr("data-name"));
            $("#message").html("You have chosen " + user + "!!!  Please select your opponent.");   
            baseAp = parseInt($("#yourCharacter img").attr("data-ap"));
            userChosen = true;
        }
        else if(userChosen){

            console.log(this);
            $("#opponent").append(this);
            enemy = ($("#opponent img").attr("data-name"));
            console.log(this);
            counter++;
            opponentHP = parseInt($("#opponent img").attr("data-hp"));
            enemyChosen = true;
            $("#characters").appendTo("#enemies");
            $("#message").html("You have chosen " + enemy + " as your enemy!!!  Please hit the attack button to start the fight.")
            // debugger;
            if(!fightBtnbool){
                var fightBtn = $("<button>");
                fightBtn.text("Attack");
                $("#fightSection").append(fightBtn);
                fightBtnbool = true;
            }
        } 
        console.log("user chosen? " + userChosen);
        console.log("enemy chosen?: " + enemyChosen)
        if(userChosen && enemyChosen){
            $("#fightSection button").on("click", function(){ 
            // $(document).on("click", "#fightSection button", function(event){
                // debugger;
                $("#message").html("You attack " + enemy + " for " + ($("#yourCharacter img").attr("data-ap")) + "!!!  " +
                 enemy + " counter attacks you for  " + ($("#opponent img").attr("data-cap")) + "!!!");
                console.log($("#opponent img").attr("data-name") + " hp: " + $("#opponent img").attr("data-hp"));
                opponentHP = parseInt($("#opponent img").attr("data-hp") - parseInt($("#yourCharacter img").attr("data-ap")));
                $("#opponent img").attr("data-hp", opponentHP);
                userHp = parseInt($("#yourCharacter img").attr("data-hp") - parseInt($("#opponent img").attr("data-cap")));
                $("#yourCharacter img").attr("data-hp", userHp);
                console.log("opponent hp after hit: " + opponentHP);
                console.log("User hp: " + userHp);
                newAp = (parseInt($("#yourCharacter img").attr("data-ap")) + baseAp);
                $("#yourCharacter img").attr("data-ap", $("#yourCharacter img").attr("data-ap") + baseAp);
                console.log("User newAp: " + newAp);
                $("#yourCharacter img").attr("data-ap", newAp);

                if (counter === btnArr.length - 1){
                    $("#opponent").empty();
                    $("#message").html("You have defeated all enemies!!!")

                }
                else if (opponentHP <= 0 && enemyChosen === true && counter !== btnArr.length){
                    console.log("in clear opponent block");
                    $("#message").html("You have defeated " + ($("#opponent img").attr("data-name")) + "!!!  Please select your next opponent.");       
                    $("#opponent").empty();
                    enemyChosen = false; 
                    return;  
                }
            })

        }

    })

    // reset();
});
