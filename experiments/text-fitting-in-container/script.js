function updateData() {
	document.getElementById("size").textContent = window.innerWidth + "x" + window.innerHeight;
}

function setNames() {
	for (let i = 1; i < 10; i++) {
		let className = `textfit-v${i}`;
		let xs = document.getElementsByClassName(className);
		if (xs.length != 1) break;
		console.log(className);
		let x = xs[0];
		x.textContent = className + ": " + x.textContent;
	}
}

function setTextSizes() {
	let x = document.getElementsByClassName("textfit-v5")[0];
	let width = getTextWidth(x.textContent);
	x.style.fontSize = `calc(100cqw * ${28.9 / width})`;
	// x.style.fontSize = "calc(5cqw)";
	console.log(x.style.fontSize);
}


function getTextWidth(text) {
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	context.font = "32px serif";
	const metrics = context.measureText(text);
	return metrics.width;
}

addEventListener("load", _ => {
	setTimeout(updateData, 1);
	addEventListener("resize", updateData);
	setNames();
	setTextSizes();
});
