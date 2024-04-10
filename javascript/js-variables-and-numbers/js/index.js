console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Post Title";
const text = "Post Text";
const numberOfLikes = 10;
const postCreator = "John Doe";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(
  "Title is: ",
  title,
  "Text is: ",
  text,
  "Number of Likes is: ",
  numberOfLikes,
  "Creator is: ",
  postCreator,
  "Reported: ",
  isReported
);

numberOfLikes += 1;

console.log("Number of Likes is:", numberOfLikes);
// --^-- write your code here --^--
