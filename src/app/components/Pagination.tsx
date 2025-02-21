import type React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, basePath }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link href={`${basePath}/${currentPage - 1}`} className="p-2 rounded-full hover:bg-gray-200">
          <ChevronLeft className="w-6 h-6" />
        </Link>
      )}
      <span className="text-lg font-medium">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link href={`${basePath}/${currentPage + 1}`} className="p-2 rounded-full hover:bg-gray-200">
          <ChevronRight className="w-6 h-6" />
        </Link>
      )}
    </div>
  )
}

export default Pagination

