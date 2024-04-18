console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log('Welcome, user');
}

// Call handleUserLogin below!


handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log('Welcome, user. In an anonymous way ');
});