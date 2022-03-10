const bodyNodes = () => {
	const node = document.body
	
	for(let index = 0; index < node.childNodes.length - 1; index++) {
		console.log(node.childNodes[index]);
	}
}

bodyNodes();