let c = document.getElementById('bg');
let $ = c.getContext('2d');

let draw = function(a, b, t) {
	let w = c.width = window.innerWidth-1;
	let h = c.height = window.innerHeight-4;
  	$.lineWidth = 1;

  	let my_gradient = $.createLinearGradient(0, 0, 0, h);
	my_gradient.addColorStop(0.1, "hsla(210, 100%, 80%, 1");
	my_gradient.addColorStop(1, "hsla(245, 100%, 75%, 1");

	$.fillStyle = my_gradient;
    $.fillRect(0, 0, w, h);

    for (let i = -60; i < 60; i += 10) {
		$.strokeStyle = 'hsla(0,60%,20%, .16)';
		$.beginPath();
		$.moveTo(0, h / 2);
		for (let j = 0; j < w; j += 1) {
		    $.lineTo(10 * Math.sin(i / 10) + j + 0.008 * j * j,
				     Math.floor(h / 2 + j / 2 *
						 		Math.sin(j / 50 - t / 50 - i / 118) +
						 		(i * 0.9) *
						 		Math.sin(j / 25 - (i + t) / 65)));
		}
		$.stroke();
	}
};

let addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

function drawline() {
	let t = 505050;
	draw(33, 52 * Math.sin(t / 2400), t);
}

addEvent(window, "resize", drawline);

drawline();
