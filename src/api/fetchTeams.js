const URL = "http://localhost:4000/teams"

export const fetchTeams = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
