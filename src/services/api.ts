export async function getUserReposUrl(slug: string) {
  const response = await fetch(`https://api.github.com/search/users?q=${slug}`);
  const data = await response.json();
  return data.items[0].repos_url;
}

export async function getUserRepositories(reposUrl: string) {
  const response = await fetch(reposUrl);
  const data = await response.json();
  return data;
}
