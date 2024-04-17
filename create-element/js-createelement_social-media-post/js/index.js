console.clear();

const body = document.getElementsByTagName("body");

const newPost = document.createElement("section");
newPost.classList.add("post");
document.body.append(newPost);

console.log(newPost);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
