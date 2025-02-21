import type { ReactNode } from "react"

interface PageLayoutProps {
  title: string
  content: ReactNode
}

export default function PageLayout({ title, content }: PageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div>{typeof content === "string" ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content}</div>
    </div>
  )
}

