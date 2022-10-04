export async function getSearchId(): Promise<void> {
  const res = await fetch('https://aviasales-test-api.kata.academy/search');
  const searchId = await res.json();
  localStorage.setItem('searchId', searchId.searchId);
}
