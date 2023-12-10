"use client"

import { Suspense, useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchBox } from "@/app/(main)/search_cc/components/SearchBox"

function initSelectedTab(
  selectedTab: string | null,
  searchType: string | null
) {
  return selectedTab ? selectedTab : "clients"
}
export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const selectedTabParam = searchParams.get("tab")
  const searchTypeParam = searchParams.get("search-type")
  const [selectedTab, setSelectedTab] = useState(
    initSelectedTab(selectedTabParam, searchTypeParam)
  )

  useEffect(() => {
    setSelectedTab(initSelectedTab(selectedTabParam, searchTypeParam))
  }, [searchParams])

  return (
    <div className="container mx-auto p-6">
      <Suspense key={searchParams.toString()} fallback={<h1>Search Box</h1>}>
        <SearchBox />
      </Suspense>

      <Tabs
        value={selectedTab}
        onValueChange={(value) => {
          const newSearchParams = new URLSearchParams(searchParams)
          newSearchParams.set("tab", value)
          router.push(pathname + `?${newSearchParams}`)
        }}
      >
        <TabsList className="flex gap-4 mb-6 justify-start">
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="clients">
          <Card>
            <CardHeader>
              <CardTitle>Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <h1>Clients</h1>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <h1>Projects</h1>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
