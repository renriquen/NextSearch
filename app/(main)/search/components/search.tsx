"use client"

import { Suspense, useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchBox } from "@/app/(main)/search/components/SearchBox"

function validateSelectedTab(
  selectedTabParam: string | null,
  searchTypeParam: string | null
) {
  if (!searchTypeParam || searchTypeParam == "all") {
    return selectedTabParam ? selectedTabParam : "clients"
  } else if (searchTypeParam == "clients") {
    return "clients"
  } else {
    return "projects"
  }
}
export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const selectedTabParam = searchParams.get("tab")
  const searchTypeParam = searchParams.get("search-type")
  const [selectedTab, setSelectedTab] = useState(
    validateSelectedTab(selectedTabParam, searchTypeParam)
  )

  useEffect(() => {
    setSelectedTab(validateSelectedTab(selectedTabParam, searchTypeParam))
  }, [selectedTabParam, searchTypeParam])

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
          {(searchTypeParam == "all" ||
            searchTypeParam == "clients" ||
            !searchTypeParam) && (
            <TabsTrigger value="clients">Clients</TabsTrigger>
          )}
          {(searchTypeParam == "all" ||
            searchTypeParam == "projects" ||
            !searchTypeParam) && (
            <TabsTrigger value="projects">Projects</TabsTrigger>
          )}
        </TabsList>
        {(searchTypeParam == "all" ||
          searchTypeParam == "clients" ||
          !searchTypeParam) && (
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
        )}
        {(searchTypeParam == "all" ||
          searchTypeParam == "projects" ||
          !searchTypeParam) && (
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
        )}
      </Tabs>
    </div>
  )
}
