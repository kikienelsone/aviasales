export async function getSearchId(): Promise<void> {
  let res = await fetch('https://aviasales-test-api.kata.academy/search')
  let searchId = await res.json()
  localStorage.setItem('searchId', searchId.searchId)
}

export async function getTickets(data: any): Promise<void> {
  let ls = localStorage.getItem('searchId')
  let res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${ls}`)
  let tickets = await res.json()
  data(tickets.tickets)
}
