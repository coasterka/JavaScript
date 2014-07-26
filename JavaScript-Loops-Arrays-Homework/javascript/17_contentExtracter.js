function extractContent(html) {
	return html.replace(/<(?:.|\n)*?>/gm, '');
};

extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");