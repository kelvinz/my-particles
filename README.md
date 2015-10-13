# myParticles

A very basic particle system.
Learning to create my first jQuery plugin.

## Assumptions

Assumes usage of:
* [jQuery] (https://jquery.com/) for easier DOM manipulation
* [TweenMax] (https://greensock.com/) for better animation, seriously

## Usage

Add myParticles.js

```
<script src="js/myParticles.js"></script>
```

Have a div with the id of myParticles.

```
<div id="myParticles"></div>
```

Add the script that attaches myParticles to the div.

```
<script type="text/javascript">
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
</script>
```

## Notes

Many more configurations to be added like; movement direction and particle shapes.
But this will do for what I need now.
Till laters.
Cheers!

Feel free to use this or point out any mistakes.

[@Kelvin___] (https://twitter.com/Kelvin___)
