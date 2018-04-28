

// var characterArr =[  
    var sarah ={ 
        hp: 100,
        ap: 10,
        cap: 20,
        image: "assets/images/sarah.jpg"
    }

    var jareth = {
        hp: 150,
        ap: 15,
        cap: 25,
        image: "../images/jareth.jpg"
    }

    var hoggle = {
        hp: 90,
        ap: 11,
        cap: 21,
        image: "../images/hoggle.jpg"
    }

    var bluto = {
        hp: 140,
        ap: 14,
        cap: 23,
        image: "../images/bluto.jpg"
    }

    var fireGang = {
        hp: 120,
        ap: 12,
        cap: 22,
        image: "../images/fireGang.jpg"
    }

// ];
var user;
var enemy;

$(document).ready(function() {

    var sarahBtn = $("<button>");
    sarahBtn.addClass("characterBtn");
    sarahBtn.addClass("sarahBg");
    sarahBtn.attr("hp", sarah.hp);
    sarahBtn.attr("ap", sarah.ap);
    sarahBtn.attr("cap", sarah.cap);
    $("#characters").append(sarahBtn);

    var jarethBtn = $("<button>");
    jarethBtn.addClass("characterBtn");
    jarethBtn.addClass("jarethBg");
    jarethBtn.attr("hp", jareth.hp);
    jarethBtn.attr("ap", jareth.ap);
    sarahBtn.attr("cap", jareth.cap);
    $("#characters").append(jarethBtn);

    var hoggleBtn = $("<button>");
    hoggleBtn.addClass("characterBtn");
    hoggleBtn.addClass("hoggleBg");
    hoggleBtn.attr("hp", hoggle.hp);
    hoggleBtn.attr("ap", hoggle.ap);
    hoggleBtn.attr("cap", hoggle.cap);
    $("#characters").append(hoggleBtn);

    var jarethBtn = $("<button>");
    jarethBtn.addClass("characterBtn");
    jarethBtn.addClass("blutoBg");
    jarethBtn.attr("hp", jareth.hp);
    jarethBtn.attr("ap", jareth.ap);
    sarahBtn.attr("cap", jareth.cap);
    $("#characters").append(jarethBtn);

    var jarethBtn = $("<button>");
    jarethBtn.addClass("characterBtn");
    jarethBtn.addClass("fireGangBg");
    jarethBtn.attr("hp", jareth.hp);
    jarethBtn.attr("ap", jareth.ap);
    sarahBtn.attr("cap", jareth.cap);
    $("#characters").append(jarethBtn);

    function reset(){
        for(var i =0; i < characterArr.length; i++){
            var characterButton = $("<button>");
            characterButton.addClass("characterBtn");
            characterButton.text(this.healthPoints);
            characterButton.html(this.image);
            $("#characters").append(characterButton);
            console.log(characterButton);

        }


        $("#yourCharacter, #enemies, #opponent, #message").empty();       
    
    }

    function characterSelect(){

    } // will make clicked character to be user character and move it to your character div
    
    function enemySelect(){
    
    
    } // will make clicked character to be user enemy and move it to the enemy div
    
    function attack(){
    
    } // will: 1. decrease opponents hit points
            // 2. decrease users healthPoints by opponents counterAttackPower
            // 3. update users attackPower by base power
    
    function checkHealth(){
    
    }// will 



    $("").on("click", function() {


    })

    // reset();
});
