
var user;
var enemy;
var sarahBtn;
var jaredBtn;
var hoggleBtn;
var blutoBtn;
var fireGangBtn;
var userChosen = false;
var enemyChosen = false;
var btnArr =[];
var baseAp;

var characterArr =[  
     obj1 ={
        name: "Sarah",  
        hp: 100,
        ap: 10,
        cap: 20,
        image: "assets/images/sarah.jpg"
    },

     obj2 = {
        name: "Jareth",
        hp: 150,
        ap: 15,
        cap: 25,
        image: "../images/jareth.jpg"
    },

    obj3 = {
        name: "Hoggle",
        hp: 90,
        ap: 11,
        cap: 21,
        image: "../images/hoggle.jpg"
    },

    obj4 = {
        name: "Bluto",
        hp: 140,
        ap: 14,
        cap: 23,
        image: "../images/bluto.jpg"
    },

    obj5 = {
        name: "Fire Gange",
        hp: 120,
        ap: 12,
        cap: 22,
        image: "../images/fireGang.jpg"
    }

];

$(document).ready(function() {


    sarahBtn = $("<img>");
    sarahBtn.addClass("characterBtn");
    sarahBtn.attr("hp", obj1.hp);
    sarahBtn.attr("ap", obj1.ap);
    sarahBtn.attr("cap", obj1.cap);
    sarahBtn.attr("src", "assets/images/sarah.jpg");
    $("#characters").append(sarahBtn);
    btnArr.push(sarahBtn);

    jarethBtn = $("<img>");
    jarethBtn.addClass("characterBtn");
    jarethBtn.attr("hp", obj2.hp);
    jarethBtn.attr("ap", obj2.ap);
    sarahBtn.attr("cap", obj2.cap);
    jarethBtn.attr("src", "assets/images/jareth2.jpg");
    $("#characters").append(jarethBtn);
    btnArr.push(jarethBtn);

    hoggleBtn = $("<img>");
    hoggleBtn.addClass("characterBtn");
    hoggleBtn.attr("hp", obj3.hp);
    hoggleBtn.attr("ap", obj3.ap);
    hoggleBtn.attr("cap", obj3.cap);
    hoggleBtn.attr("src", "assets/images/hoggle2.jpg");
    $("#characters").append(hoggleBtn);
    btnArr.push(hoggleBtn);

    blutoBtn = $("<img>");
    blutoBtn.addClass("characterBtn");
    blutoBtn.attr("hp", obj4.hp);
    blutoBtn.attr("ap", obj4.ap);
    blutoBtn.attr("cap", obj4.cap);
    blutoBtn.attr("src", "assets/images/bluto2.jpg");
    $("#characters").append(blutoBtn);
    btnArr.push(blutoBtn);

    fireGangBtn = $("<img>");
    fireGangBtn.addClass("characterBtn");
    fireGangBtn.attr("hp", obj5.hp);
    fireGangBtn.attr("ap", obj5.ap);
    fireGangBtn.attr("cap", obj5.cap);
    fireGangBtn.attr("src", "assets/images/fireGang2.jpg");
    $("#characters").append(fireGangBtn);
    btnArr.push(fireGangBtn);

    function reset(){
        // for(var i =0; i < characterArr.length; i++){
        //     var characterBtn = $("<button>");

        //     characterBtn.addClass("characterBtn");
        //     characterBtn.attr("hp", characterArr[i].hp);
        //     characterBtn.attr("ap", characterArr[i].ap);
        //     characterBtn.attr("cap", characterArr[i].cap);
        //     $("#characters").append(characterBtn);
        //     console.log(characterBtn);
        // } Try to find a way to create buttons with loop
        sarahBtn = $("<button>");
        sarahBtn.addClass("characterBtn sarah sarahBg");
        sarahBtn.attr("hp", sarah.hp);
        sarahBtn.attr("ap", sarah.ap);
        sarahBtn.attr("cap", sarah.cap);
        $("#characters").append(sarahBtn);
    
        jarethBtn = $("<button>");
        jarethBtn.addClass("characterBtn jareth jarethBg");
        jarethBtn.attr("hp", jareth.hp);
        jarethBtn.attr("ap", jareth.ap);
        sarahBtn.attr("cap", jareth.cap);
        $("#characters").append(jarethBtn);
    
        hoggleBtn = $("<button>");
        hoggleBtn.addClass("characterBtn hoggle hoggleBg");
        hoggleBtn.attr("hp", hoggle.hp);
        hoggleBtn.attr("ap", hoggle.ap);
        hoggleBtn.attr("cap", hoggle.cap);
        $("#characters").append(hoggleBtn);
    
        blutoBtn = $("<button>");
        blutoBtn.addClass("characterBtn bluto blutoBg");
        blutoBtn.attr("hp", bluto.hp);
        blutoBtn.attr("ap", bluto.ap);
        blutoBtn.attr("cap", bluto.cap);
        $("#characters").append(blutoBtn);
    
        fireGangBtn = $("<button>");
        fireGangBtn.addClass("characterBtn fireGang fireGangBg");
        fireGangBtn.attr("hp", fireGang.hp);
        fireGangBtn.attr("ap", fireGang.ap);
        fireGangBtn.attr("cap", fireGang.cap);
        $("#characters").append(fireGangBtn);

        $("#yourCharacter, #enemies, #opponent, #message").empty();       
    
    }

    function characterSelect(userChosen, enemyChosen){
        if(userChosen && enemyChosen){
            return;
        }
        else if (!userChosen){
            user = this;
            $("#yourCharacter").append(user);
            userChosen = true;
            console.log()
        }
        else if(userChosen){
            enemy = this;
            $("#opponent").append(enemy);
            enemyChosen = true;
        }
    } // will make clicked character to be user character and move it to yourCharacter div and move rest of characters move to Enemies div
    
    function enemySelect(){
    
    
    } // will make clicked character to be user enemy and move it to the enemy div
    
    function attack(){
    
    } // will: 1. decrease opponents hit points
            // 2. decrease users healthPoints by opponents counterAttackPower
            // 3. update users attackPower by base power
    
    function checkHealth(){
    
    }// will 

    console.log(userChosen);


    $(".characterBtn").on("click", function() {

        // characterSelect(userChosen, enemyChosen);
        if(userChosen && enemyChosen){
            return;
        }
        else if(!userChosen){
            user = this;
            $("#yourCharacter").append(this);
            baseAp = parseInt($("#yourCharacter img").attr("ap"));
            userChosen = true;
        }
        else if(userChosen){
            enemy = this;
            $("#opponent").append(this);
            enemyChosen = true;
            $("#characters").appendTo("#enemies");
            var fightBtn = $("<button>");
            fightBtn.text("Attack");
            $("#fightSection").append(fightBtn);
        }   /// need to have a fight button created but hidden and only displayed when opponent is selected

        $("#fightSection button").on("click", function() {
            console.log("fight btn hit");
            var opponentHP = parseInt($("#opponent img").attr("hp") - parseInt($("#yourCharacter img").attr("ap")));
            $("#opponent img").attr("hp", opponentHP);
            console.log("opponent HP: " + opponentHP);
            var newAp = (parseInt($("#yourCharacter img").attr("ap")) + baseAp);
            $("#yourCharacter img").attr("ap", newAp);
            console.log("newAp" + newAp);
            $("#yourCharacter img").attr("ap", newAp);
            if (opponentHP <= 0 && enemyChosen === true){
                console.log("in clear opponent block");
                $("#opponent").empty();
                enemyChosen = false; 
                return;  
            }/// need to reset to opponent hp to the value of the new img that is selected
        })





    })

    // reset();
});
