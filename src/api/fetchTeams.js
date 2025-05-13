const URL = "http://localhost:4000/teams"

export const fetchTeams = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
}