const URL = "https://sci-temporary-bucket.s3.us-west-2.amazonaws.com/rankings.json"

export const fetchRankings = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    }catch (error) {
      throw error;
    }
  };
  