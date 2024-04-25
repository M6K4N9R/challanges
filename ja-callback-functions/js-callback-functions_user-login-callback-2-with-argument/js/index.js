console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName} You are logged in now.`);
}

const showMessage = (userName) => {
  console.log(`Welcome ${userName} You are logged in now.`);
};

handleUserLogin(showWelcomeMessage);
handleUserLogin(showMessage);

handleUserLogin((userName) => {
  console.log(`Welcome ${userName} You are logged in now.`);
});
