"use client"

import PageLayout from "@/app/components/PageLayout"
import Pagination from "@/app/components/Pagination"
import { CalendarIcon } from "lucide-react"
import { useParams } from "next/navigation"

const recentNews = [
  {
    date: "February 2024",
    title: "Special Recognition Award at Engineering Entrepreneurship Conference",
    description: "Honored for outstanding contributions to engineering innovation and entrepreneurship development."
  },
  {
    date: "August 2024",
    title: "Appointed Chairman of NIEEE Epe/Ibeju-Lekki Chapter",
    description: "Assumed leadership of regional electrical engineering professional chapter to drive technological advancement."
  },
  {
    date: "December 2023",
    title: "Nigerian AI Research Grant for Lung Cancer Detection System",
    description: "Awarded funding to develop wearable AI technology for early lung cancer diagnosis using sensor data and machine learning."
  },
  {
    date: "November 2023",
    title: "LASUTECH Renewable Energy Security Project Grant",
    description: "Secured research funding to develop cost-effective solar-powered security systems for Nigerian universities."
  },
  {
    date: "October 2023",
    title: "Double Teaching Excellence Recognition",
    description: "Simultaneously awarded Best Lecturer by Computer Science Students and Engineering Students' Society at Lagos State University."
  },
  {
    date: "September 2023",
    title: "Appointed Faculty Sub-Dean of Engineering",
    description: "Assumed academic leadership role overseeing engineering programs and faculty development initiatives."
  },
  {
    date: "August 2023",
    title: "Chairman of Multiple University Committees",
    description: "Leading critical committees including Power Generation, Examination Integrity, and Staff Housing management."
  },
  {
    date: "July 2023",
    title: "Tetfund Stress Monitoring Research Grant",
    description: "Awarded 2022 grant to develop wearable devices for tracking academic staff stress levels using biometric sensors and AI."
  },
  {
    date: "December 2022",
    title: "Double Honor at LASU Research Innovation Awards",
    description: "Received Best Abstract and Best Presenter awards at 4th Annual Research and Innovation Conference."
  },
  {
    date: "November 2022",
    title: "NIEEE Chapter Establishment Leadership",
    description: "Chaired organizing committee for successful inauguration of new professional engineering chapter in Epe/Ibeju-Lekki."
  }
];

const ITEMS_PER_PAGE = 3

export default function RecentNewsPage() {
  const params = useParams()
  const pageNumber = Math.max(1, 
    Math.min(
      Number(params.page) || 1,
      Math.ceil(recentNews.length / ITEMS_PER_PAGE)
    )
  )
  
  const totalPages = Math.ceil(recentNews.length / ITEMS_PER_PAGE)
  const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE
  const currentNews = recentNews.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <PageLayout
      title="Recent News"
      content={
        <div className="space-y-8">
          {currentNews.map((news, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center mb-3 text-gray-600">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-sm font-medium">{news.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{news.title}</h3>
              <p className="text-gray-700 mb-4">{news.description}</p>
            </div>
          ))}
          <Pagination currentPage={pageNumber} totalPages={totalPages} basePath="/news/recent" />
        </div>
      }
    />
  )
}