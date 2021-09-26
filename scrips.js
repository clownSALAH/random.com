document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#d1ccc0';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});