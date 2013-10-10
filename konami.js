function konami(callback) {
    var i = 0
        , code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    $(document).keydown(function (e) {
        if (e.keyCode === code[i]) {
	    i++;
	} else {
	    i = 0;
	}
	if (i === code.length) {
	    i = 0;
	    callback();
	}
    });
}
