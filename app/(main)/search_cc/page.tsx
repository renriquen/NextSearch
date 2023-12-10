import { cn } from "@/lib/utils"
import { Search } from "@/app/(main)/search_cc/components/search"
import { Container } from "@/app/components/Cotainer"

export default function Page() {
  return (
    <main className={cn("py-16")}>
      <Container>
        <Search />
      </Container>
    </main>
  )
}
