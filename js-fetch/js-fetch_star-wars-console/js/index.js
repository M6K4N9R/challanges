console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const eyeOfR2D2 = data.results[2].eye_color;
      console.log(eyeOfR2D2);
      return data;
    } else if (!response.ok) {
      console.log("You have the wrong url");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
