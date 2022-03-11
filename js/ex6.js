const dictionary = () => {
	const words = [
		{
			term: "Procrastination",
			definition: "Avoidance of doing a task that needs to be accomplished",
		},
		{
			term: "Tautology",
			definition: "logical argument constructed in such a way that it is logically irrefutable",
		},
		{
			term: "Oxymoron",
			definition: "figure of speech that juxtaposes elements that appear to be contradictory",
		},
	];
  const dl = document.createElement('dl');

  words.map(word => {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');

    dt.appendChild(document.createTextNode(word.term));
    dd.appendChild(document.createTextNode(word.definition));
    dl.appendChild(dt);
    dl.appendChild(dd);
  })
  document.getElementById('content').appendChild(dl);
};

dictionary();