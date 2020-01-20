/*
    Released under the license found at the root of the git repo, probably MIT.
    @author Sean Grimes
    @contact sean@seanpgrimes.com
*/

var darkGrey = "rgb(36, 36, 36)";
var medGrey = "rgb(56, 55, 52)";
var lightGrey = "rgb(60, 64, 67)";
var lightFont = "rgb(171, 171, 171)";

// Big areas of the document
document.body.style.backgroundColor = darkGrey;
document.body.style.color = lightFont;

// Header background
var header = document.getElementById("b_header");
header.style.backgroundColor = darkGrey;
header.style.color = "rgb(171, 171, 171)";

// Related searches background
var relatedSearches = document.getElementById("b_rrsr");
relatedSearches.style.backgroundColor = medGrey;