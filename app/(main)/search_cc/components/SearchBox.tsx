"use client"

import { JSX, SVGProps, useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchBox() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const keywordParam = searchParams.get("keywords")
  const searchTypeParam = searchParams.get("search-type")
  const [keywords, setKeywords] = useState(keywordParam ? keywordParam : "")
  const [searchType, setSearchType] = useState(
    searchTypeParam ? searchTypeParam : "all"
  )

  useEffect(() => {
    setKeywords(searchParams?.get("keywords") || "")
    setSearchType(searchTypeParam ? searchTypeParam : "all")
  }, [searchParams])

  return (
    <div className="flex items-center mb-6">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded mr-4"
        placeholder="Search..."
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.set("keywords", e.currentTarget.value)
            router.push(pathname + `?${newSearchParams}`)
          }
        }}
      />
      <Select
        onValueChange={(value) => {
          const newSearchParams = new URLSearchParams(searchParams)
          newSearchParams.set("search-type", value)
          router.push(pathname + `?${newSearchParams}`)
        }}
        value={searchType}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select search type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="clients">Clients</SelectItem>
            <SelectItem value="projects">Projects</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

function ChevronDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
