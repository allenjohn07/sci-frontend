const URL =
  "https://sci-temporary-bucket.s3.us-west-2.amazonaws.com/competitions.json";

export const fetchCompetitions = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch competitions: ${response.status}`);
  }
  const data = await response.json();
  return data?.competitions;
};
