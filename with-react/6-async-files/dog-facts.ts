export type DogFactType = {
  id: number;
  fact: string;
};

export const fetchDogFacts = (n: number) => {
  return Promise.resolve(data).then((facts) => facts.slice(0, n));
};
