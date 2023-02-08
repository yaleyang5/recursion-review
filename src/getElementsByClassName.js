// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// I: A class name
// O: A list of element tags sharing that class name, pulled from the html of the window
// C: None come to mind
// E: class not present in html? Maybe some other junk input, check back for weird edges later.
var getElementsByClassName = function(className, currentHtml
) {
  // your code here
  // return array declare
  var returnArray = [];

  // assign current html if html is undefined
  // console.log('current html')
  // console.log(current_html)
  if (currentHtml === undefined) {
    currentHtml = document; // the html of the current document, I think
  }

  // if that element has  the class className, add it to return arra
  // console.log(current_html)
  if (currentHtml.classList && currentHtml.classList.contains(className)) {
    returnArray.push(currentHtml);
  }

  // for each html element that is a child of the window
  for (var node in currentHtml.children) {
    // skip functions for cleanliness
    // variable to make stuff look cleaner
    var thisNode = currentHtml.children[node];
    if (typeof(thisNode) !== 'object') {
      continue;
    }

    // call this function for the child, and put it in a variable
    var childElementArray = getElementsByClassName(className, thisNode);
    // push the kids
    for (var childElement in childElementArray) {
      returnArray.push(childElementArray[childElement]);
    }
  }

  // return the return array (duh)
  return returnArray;
};
