/*
	(╯°□°)╯︵ ┻━┻ ¯\_(ツ)_/¯
	@kelvin___
*/

// @codekit-prepend 'fastclick.js';
// @codekit-prepend 'myParticles.js';

$(function() {
	FastClick.attach( document.body );

/*	app.js starts here
---------------------------------------------------------------------------------- */
    $( '#my-particles' ).myParticles({
    	// change settings or else can remove them
    	particleNum : 100,  // total number of particles
		phoneNum    : 30,   // total number of particles on phones
		vx          : 4,    // x velocity
		vy          : -4,   // y velocity
		sizez       : 4,    // size of particle
		alpha       : 0,    // higher number less transparent
		colorz      : 0.3,  // amount of black particles 0 to 1
		movement    : 0.005 // rate of change of movement
    });
});
