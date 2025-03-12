const URL =
  "https://sci-temporary-bucket.s3.us-west-2.amazonaws.com/states.json";

export const fetchStates = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data?.states;
  } catch (error) {
    throw error;
  }
};
