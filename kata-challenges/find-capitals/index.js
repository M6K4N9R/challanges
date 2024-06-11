const mixedCapitals = [
    { state: "Maine", capital: "Augusta" },
    { country: "Spain", capital: "Madrid" },
  ];
  
  function phrase(array) {
    const sentense = array.map(
      (capital) =>
        `The capital of ${capital.state || capital.country} is ${capital.capital}`
    );
    return sentense;
  }
  
  const result = phrase(mixedCapitals)
  
  console.log(result);