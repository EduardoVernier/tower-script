// Namespace Manager
var Manager = {};
Manager.PowerUps = (function(){
    // Private members
    var fez = false;
    var goggles = false;
    var bowTie = false;
    // Private method
    var renderPowerUpButtons = function(){
        // Update color of powerup
        if (!fez)
            if(totalMoney > 300)
                document.getElementById('fezText').style.color = "#4EFF42";
            else
                document.getElementById('fezText').style.color = "#AAAAAA";
        
        if (!goggles)
            if(totalMoney > 400)
                document.getElementById('g3dText').style.color = "#4EFF42";
            else
                document.getElementById('g3dText').style.color = "#AAAAAA";
        if (!bowTie)
            if(totalMoney > 500)
                document.getElementById('bowTieText').style.color = "#4EFF42";
            else
                document.getElementById('bowTieText').style.color = "#AAAAAA";
    };
    
    // Public members (closure)
    return {
        initialize: function(){renderPowerUpButtons();},
        // Setters
        buyFez: function(){
            if (totalMoney > 300){
                YellowTower.cooldown *= 0.8; 
                GreenTower.cooldown *= 0.8; 
                BlueTower.cooldown *= 0.8; 
                OrangeTower.cooldown *= 0.8; 
                totalMoney-=300;
                var elem = document.getElementById('fezBlock');
                elem.parentNode.removeChild(elem);
                fez = true;
                updateK9Images();
                renderPowerUpButtons();
            }
        },
        buyGoggles: function(){
            if (totalMoney > 400){
                YellowTower.radius *= 1.3; 
                GreenTower.radius *= 1.3; 
                BlueTower.radius *= 1.3; 
                OrangeTower.radius *= 1.3; 
                totalMoney-=400;
                var elem = document.getElementById('g3dBlock');
                elem.parentNode.removeChild(elem);
                goggles = true;
                updateK9Images();
                renderPowerUpButtons();
            }
        },
        buyBowTie: function(){
            if (totalMoney > 500){
                YellowTower.impact = YellowTower.impact*1.3; 
                GreenTower.impact = GreenTower.impact*1.3; 
                BlueTower.impact = BlueTower.impact*1.3; 
                OrangeTower.impact = OrangeTower.impact*1.3; 
                totalMoney-=500;
                var elem = document.getElementById('bowTieBlock');
                elem.parentNode.removeChild(elem);
                bowTie = true;
                updateK9Images();
                renderPowerUpButtons();
            }
        },
        // Getters
        getFez: function(){ return fez; },
        getGoggles: function(){ return goggles; },
        getBowTie: function(){ return bowTie; }
    };
    
})();
