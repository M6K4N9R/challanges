console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const firstName = data["first-name"];
  const firstNameFocus = event.target.elements["first-name"].value;
  const ageValue = event.target.elements.age.value;
  const badness = data.badness;
  const ageBadnessSum = ageValue + badness;
  event.target.elements["first-name"].focus();
  console.log(
    "For data as an object: ",
    data,
    "The age-badness-sum of",
    firstName,
    "is ",
    ageBadnessSum
  );
});
