function wsppSendTextMessage(source, wQ = true) {
	data = source;
	output = wQ;
	let info = "https://wa.me/" + data[0] + "?text=";
	for (let x = 1; x < data.length; x++) {
		x == data.length - 1 ? info += data[x] : info += data[x] + "%0D%0A";
	}
	if (output == true) {
		window.open(info);
	}
	return info;
}