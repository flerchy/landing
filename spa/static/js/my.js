let c = document.getElementById('bg');
let $ = c.getContext('2d');

let draw = function(a, b, t) {
	let w = c.width = window.innerWidth-1;
	let h = c.height = window.innerHeight-4;
  	$.lineWidth = 1;

  	let my_gradient = $.createLinearGradient(0, 0, 0, h + h / 5);
	my_gradient.addColorStop(0, "hsla(200, 100%, 85%, 1");
	my_gradient.addColorStop(1, "hsla(120, 70%, 75%, 1");

	$.fillStyle = my_gradient;
    $.fillRect(0, 0, w, h);

    for (let i = -60; i < 10; i += 10) {
		$.strokeStyle = 'hsla(180,20%,40%, .16)';
		$.beginPath();
		$.moveTo(0, h / 50);
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
	let t = new Date().getTime() % 1000;
	draw(33, 52 * Math.sin(t / 2400), t);
}

addEvent(window, "resize", drawline);

drawline();