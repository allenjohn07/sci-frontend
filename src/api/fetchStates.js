const URL =
  "https://sci-temporary-bucket.s3.us-west-2.amazonaws.com/states.json";

export const fetchStates = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data?.states;
};
