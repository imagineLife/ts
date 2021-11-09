import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';
import Form from './form.tsx';
import Fact from './fact.tsx'

const Application = () => {

  const [apiFacts, setApiFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => {
      setFacts(facts);
    });
  };

  
  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts.map((fact, index) => (
          <Fact key={index} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
};

export default Application;
