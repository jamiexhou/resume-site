var maxOptions = 2;
var styles = ["test.css", "rustic.css", "cute.css"];

// https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
// do we change css for all the sheets or like... just th eone page???
function swapScript(selection) {
	for (i = 0; i <= maxOption; i++) {
		if (i == selection) {
			var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

			var newlink = document.createElement("link");
			newlink.setAttribute("rel", "stylesheet");
			newlink.setAttribute("type", "text/css");
			newlink.setAttribute("href", styles[i]);

			document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
		}
	}
}