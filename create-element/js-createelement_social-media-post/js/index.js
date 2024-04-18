console.clear();

const body = document.getElementsByTagName("body");

const newPost = document.createElement("section");
newPost.classList.add("post");

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.innerHTML =
  "Hey there! Please disregard that I use innerHtml.</br>I want to try out different things <strong>bigger</strong> and beeing able to jump to the next line, that's all.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
// newPost.append(newFooter);

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";

const newLike = document.createElement("button");
newLike.classList.add("post__button");
newLike.setAttribute("type", "button");
newLike.dataset.js = "like-button";
newLike.textContent = "♥ Like";
// newFooter.append(newLike);

document.body.append(newPost);
newPost.append(newParagraph, newFooter);
newFooter.append(newSpan, newLike);

console.log(newPost);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

newLike.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
