console.clear();

const body = document.getElementsByTagName("body");

const newPost = document.createElement("section");
newPost.classList.add("post");
document.body.append(newPost);

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.innerHTML =
  "Hey there! Please disregard that I use innerHtml.</br>I want to try out different things <strong>bigger</strong> and beeing able to jump to the next line, that's all.";
newPost.append(newParagraph);

console.log(newPost);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
