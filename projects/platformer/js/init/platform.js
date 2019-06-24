(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(350, 525);      //x(left and right), y(up and down) higher numbers are down lower numbers are up
        platform.create(465, 255, .15);
        platform.create(650, 355, .15);
        platform.create(365, 210, .15);
        platform.create(3, 100, .55);
        platform.create(260, 160, .15);
        platform.create(565, 305, .15);
    
        platform.create(820, 305,.2);
        
        platform.create(150, 500, .5);
        platform.create(100,350,.2,10);
        platform.create(60,570,.1);
        platform.create (65,450,.09);
        platform.create(69,350,.08);
        platform.create(805, 590, .21);
        platform.create(820, 470, 2);
        platform.create(180, 380, .25);
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);