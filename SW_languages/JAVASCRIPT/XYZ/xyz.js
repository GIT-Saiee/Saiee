
let lastX, lastY, lastZ;
let moveCounter = 0;
function requestOrientationPermission(){
window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});
	if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
		// (optional) Do something before API request prompt.
		DeviceMotionEvent.requestPermission()
			.then( response => {
					// (optional) Do something after API prompt dismissed.
					if ( response == "granted" ) {
					window.addEventListener( "devicemotion", (e) => {
							// do something for 'e' here.
							let acc = e.acceleration;
							if(!acc.hasOwnProperty('x')) {
							acc = e.accelerationIncludingGravity;
							}

							if(!acc.x) return;

							//only log if x,y,z > 1
							if(Math.abs(acc.x) >= 1 &&
									Math.abs(acc.y) >= 1 &&
									Math.abs(acc.z) >=1) {
							//console.log('motion', acc);
							if(!lastX) {
							lastX = acc.x;
							lastY = acc.y;
							lastZ = acc.z;
							return;
							}

							let deltaX = Math.abs(acc.x - lastX);
							let deltaY = Math.abs(acc.y - lastY);
							let deltaZ = Math.abs(acc.z - lastZ);

							if(deltaX + deltaY + deltaZ > 3) {
								moveCounter++;
							} else {
								moveCounter = Math.max(0, --moveCounter);
							}

							if(moveCounter > 2) {
								console.log('SHAKE!!!');
								moveCounter = 0;
							}

							lastX = acc.x;
							lastY = acc.y;
							lastZ = acc.z;

							}i
					})
					}
			})
		.catch( console.error )
	} else {
		alert( "DeviceMotionEvent is not defined" );
	}
}

