const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/teams`
console.log(URL);


export const fetchTeams = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
