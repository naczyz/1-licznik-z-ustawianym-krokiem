const Step = (props) => {
  // const handleStepChange = (e) => {
  //   const stepValue = parseInt(e.target.value);

  //   if (stepValue >= 1) {
  //     props.setStepValue(stepValue);
  //   }
  // };

  return (
    <div>
      <label>Krok: </label>
      <input
        type="number"
        id="imputNumber"
        onChange={(e) => props.setStepValue(+e.target.value)}
        value={props.stepValue}
      />
    </div>
  );
};

export default Step;
