import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  searchParams: any
}

export default function Pagination({ currentPage, totalPages, searchParams }: PaginationProps) {
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    return `/search?${params.toString()}`
  }

  const pages = []
  const maxVisiblePages = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {currentPage > 1 && (
        <Link href={createPageUrl(currentPage - 1)} className="btn btn-outline">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      )}
      
      {startPage > 1 && (
        <>
          <Link href={createPageUrl(1)} className="btn btn-outline">
            1
          </Link>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map(page => (
        <Link
          key={page}
          href={createPageUrl(page)}
          className={`btn ${page === currentPage ? 'btn-primary' : 'btn-outline'} min-w-[2.5rem]`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <Link href={createPageUrl(totalPages)} className="btn btn-outline">
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link href={createPageUrl(currentPage + 1)} className="btn btn-outline">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}
