// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// function to generate a random numeric value

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
};

// function to start a new game
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) { 
        
        if (playerHealth > 0) {
            //let player know what round they are in, remember that arrays start at zero
            window.alert ("Welcome to Robot Gladiators! Round " + ( i + 1 ));
       

            // pick new enemy to fight based on the index of the enemy Names array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);
            console.log(enemyHealth);
            //use debugger to pause script from running and check whats going on at the moment in the code
        

            fight(pickedEnemyName);
            // if we're not at the last enemy in the array
            // ask if player wants to use the store before the next round
            if(playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, vist the store before the next round?");
                //if yes take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            break;
        }
    }
    //play again
    endGame();
};

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // newcase
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money")
            }
            break;

        case "UPGRADE": //newcase
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money")
            }
            break;

        case "LEAVE"://newcase
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;
        
        default: 
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// function to end the entire game
var endGame = function () {
    //if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert ("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come Back soon!");
    }
    
};


var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth >0) {

        // Alert players that they are starting the round

        // ask player if they want to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = Math.max(0 , playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }

            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            var damage = randomNumber(playerAttack - 3, playerAttack);

            enemyHealth = Math.max(0, enemyHealth - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            // Subtract the value of 'enemyAttack' from the value of 'playerHealth and use that result to update the value in the 'playerHealth' variable
            var damage = randomNumber(enemyAttack - 3 , enemyAttack);
            playerHealth = Math.max(0 , playerHealth - damage);
            // Log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0 ) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    } 
};



// start the game when the page loads
startGame();



//ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    //restart game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come Back soon!");
}