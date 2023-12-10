"use server"

import ClientData from "@/data/client.json"

/*
  {
    "id":"06e0ac7c-198b-4a27-95ff-85f37e5620a7",
    "company_name":"Fliptune",
    "headquarters":"Klemunan",
    "revenue":"$94104554.98",
    "industry":"finance",
    "founded_year":1948,
    "ceo":"Sonya Walczynski",
    "website":"",
    "employees":31226,
    "stock_symbol":"WMIH",
    "description":"Phased even-keeled approach"},

 */

export type Client = {
  id: string
  company_name: string
  headquarters: string
  revenue: string
  industry: string
  founded_year: number
  ceo: string
  website: string
  employees: number
  stock_symbol: string
  description: string
}

export type ClientSearchOptions = {
  page: number
  keywords: string
}

export type ClientSearchResult = {
  error: boolean
  errorMessage: string | null
  result: Client[] | null
  totalMatches: number
}

export async function doClientSearch(
  options: ClientSearchOptions
): Promise<ClientSearchResult> {
  let error = false
  let errorMessage: string | null = null
  let result: Client[] | null = null
  let totalMatches = 0
  let page = options.page < 1 ? 1 : options.page
  let keywords = options.keywords ? options.keywords : ""
  const allClients = ClientData as Client[]

  result = allClients.slice(0, 25)
  totalMatches = 25

  return { error, errorMessage, result, totalMatches }
}
