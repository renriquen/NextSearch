import { doClientSearch } from "@/lib/actions/do-client-search"

export async function ClientResult() {
  const result = await doClientSearch({ page: 1, keywords: "" })
  console.log(result)

  return (
    <div>
      <h3>Clients go here</h3>
    </div>
  )
}
