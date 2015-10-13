/*
	(╯°□°)╯︵ ┻━┻ ¯\_(ツ)_/¯
	@kelvin___
*/

;(function( $, window, document, undefined ) {
	'use strict';

	$.fn.myParticles = function( options ) {
		// prevent scope issues
		var me = this;

		// canvas set up
		var canvas = document.createElement( 'canvas' ),
			context = canvas.getContext( '2d' ),
			particles = {},
			particleIndex = 0,
			particleNum = 0;

		canvas.width = me.width();
		canvas.height = me.height();

		// add canvas to dom
		me.append( canvas );

		// load up settings if any
		var settings = $.extend( true, {}, {
			// default settings
			particleNum : 100,
			phoneNum    : 30,
			vx          : 4,
			vy          : -4,
			sizez       : 4,
			alpha       : 0,
			colorz      : 0.3,
			movement    : 0.005
		}, options);

		// change number of particles for phones
		if ( canvas.width < 415 ) {
			particleNum = settings.phoneNum;
		} else {
			particleNum = settings.particleNum;
		}

		// setup particle
		function Particle() {
			this.x = Math.random() * canvas.width * 2 - canvas.width;
			this.y = Math.random() * canvas.height;
			birth( this );

			particleIndex++;
			particles[particleIndex] = this;
			this.id = particleIndex;
		}

		// give birth to particle!
		function birth( who ) {
			who.vx = Math.random() * settings.vx;
			who.vy = Math.random() * settings.vy;
			who.sizez = Math.random() * settings.sizez;
			who.alpha = Math.random() + settings.alpha;
			who.colorz = Math.random();
		}

		Particle.prototype.draw = function() {
			// move
			this.x += this.vx;
			this.y += this.vy;

			// change movement randomly
			if ( Math.random() < settings.movement ) {
				this.vx = Math.random() * 4;
				this.vy = Math.random() * -4;
			}

			// when out of screen, reborn!
			if ( this.x > canvas.width || this.y < 0 ) {
				this.x = Math.random() * canvas.width * 2 - canvas.width;
				this.y = canvas.height + settings.sizez;
				birth( this );
			}

			// drawing circle
			context.beginPath();

			// black or white
			if ( this.colorz < settings.colorz ) {
				context.fillStyle = 'rgba(0, 0, 0, ' + this.alpha + ')';
			} else {
				context.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')';
			}

			// drawing circle cont.
			context.arc( this.x, this.y, this.sizez, 0, Math.PI * 2, true );
			context.closePath();
			context.fill();
		};

		// init particles creation
		for ( var i = 0; i < particleNum; i++ ) {
			new Particle();
		}

		// animation loop
		function loop() {
			clearx();
			draw();
			queue();
		}

		function clearx() {
			context.clearRect( 0, 0, canvas.width, canvas.height );
		}

		function draw() {
			for ( var i in particles ) {
				particles[i].draw();
			}
		}

		function queue() {
			window.requestAnimationFrame( loop );
		}

		loop();
	};

})( jQuery, window, document );
