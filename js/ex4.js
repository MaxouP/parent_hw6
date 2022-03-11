const addLink = () => {
	const a = document.createElement("a");
  a.setAttribute('href', 'https://www.csulb.edu/college-of-business');
	
  const text = document.createTextNode("College of Business");
	a.innerText = text.nodeValue;
	const li = document.createElement("li");
	li.appendChild(a);
	
  const links = document.querySelector('li > a[href="https://www.csulb.edu/college-of-business/information-systems"]').parentNode;
	const elem = document.getElementsByTagName("ul")[2];
  
  elem.insertBefore(li, links)
};

addLink();
