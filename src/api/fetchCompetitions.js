const URL = "https://sci-temporary-bucket.s3.us-west-2.amazonaws.com/competition.json"

export const fetchCompetitions = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data?.competitions;
    }catch (error) {
      throw error;
    }
  };
  