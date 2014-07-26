function replaceATag(input) {
	input = input.replace(/<a/g, "[URL");
	input = input.replace(/<\/a>/g, "[/URL]");
	return input;
};

replaceATag("<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>");