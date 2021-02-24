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
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

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
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;
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
            playerHealth = playerHealth - enemyAttack;
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

for(var i = 0; i < enemyNames.length; i++) { 
    
    if (playerHealth > 0) {
        //let player know what round they are in, remember that arrays start at zero
        window.alert ("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    }
    else {
        window.alert ("You have lost your robot in battle! Game Over");
    }
    // pick new enemy to fight based on the index of the enemy Names array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and check whats going on at the moment in the code

    fight(pickedEnemyName);
}