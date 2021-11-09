import * as React from 'react';

type FormProps = {
  onSubmit: (n: number) => void;
};


const Form = ({onSubmit}: FormProps) => {
  const [numberOfFacts, setNumberOfFacts] = React.useState(3)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input 
          type="number" 
          value={numberOfFacts} 
          min="1" 
          max="10" 
          id="number-of-facts" 
          onChange={e => setNumberOfFacts(+e.target.value)}
        />
      </div>
      <input 
        type="submit" 
        value="Fetch Dog Facts" 
      />
    </form>
  );
};

export default Form;