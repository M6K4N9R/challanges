import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  //======================== Without immer

  // const [mountain, setMountain] = useState({
  //   name: "Mount Everest",
  //   values: {
  //     altitude: 8848,
  //     mountainRange: "Himalayas",
  //   },
  // });
  //   function handleNameChange(event) {
  //     event.preventDefault();
  //     let updatedName = setMountain({ ...mountain, name: event.target.value });
  //   }

  //   function handleAltitudeChange(event) {
  //     event.preventDefault();
  //     let updatedAltitude = setMountain({
  //       ...mountain,
  //       values: { ...mountain.values, altitude: event.target.value },
  //     });
  //   }

  //   function handleMountainRangeChange(event) {
  //     event.preventDefault();
  //     let updatedRange = setMountain({
  //       ...mountain,
  //       values: { ...mountain.values, mountainRange: event.target.value },
  //     });
  //======================================

  //================== With IMMER=====

  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });
  function handleNameChange(event) {
    event.preventDefault();
    let updatedName = event.target.value;
    updateMountain((draft) => {
      draft.name = updatedName;
    });
  }

  function handleAltitudeChange(event) {
    event.preventDefault();
    let updatedAltitude = event.trget.value;
    updateMountain((draft) => {
      draft.values.altitude = updatedAltitude;
    });
  }

  function handleMountainRangeChange(event) {
    event.preventDefault();
    let updatedRange = event.target.value;
    updateMountain((draft) => {
      draft.values.mountainRange = updatedRange;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
