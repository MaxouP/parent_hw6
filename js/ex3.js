const changePFontWeightandBg = () => {
	const paragraph = document.getElementsByTagName('p');

	for(let i = 0; i < paragraph.length; i++) {
		paragraph[i].style.backgroundColor = 'yellow';
		paragraph[i].style.fontWeight = '700'
	}
}

changePFontWeightandBg();