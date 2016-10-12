function copyToClipboard(id) {
	if (typeof id == 'undefined') {
		console.log('Specify an element first!');
		return false;
	}
	var copiedEl = document.getElementById(id);  
	if (copiedEl) {
		try {
			var range = document.createRange();  	
			range.selectNode(copiedEl);  
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range)
			document.execCommand('copy');	
			return true;
		} catch(err) {
			console.log(err);
		}
	}
	return false;
}