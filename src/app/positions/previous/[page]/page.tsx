"use client"

import PageLayout from "@/app/components/PageLayout"
import Pagination from "@/app/components/Pagination"
import { CalendarIcon, BriefcaseIcon, CheckCircleIcon, MapPinIcon } from "lucide-react"
import { useParams } from "next/navigation"

const positions = [
  {
    period: "2023-Present",
    title: "Sub-Dean, Faculty of Engineering",
    institution: "Lagos State University",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Oversee academic programs and faculty operations",
      "Lead curriculum development initiatives",
      "Coordinate interdisciplinary engineering projects",
      "Manage student academic affairs and welfare"
    ]
  },
  {
    period: "2022-2024",
    title: "NIEEE Chapter Deputy Chairman",
    institution: "Epe/Ibeju-Lekki Chapter",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Assisted in regional engineering policy development",
      "Organized professional development workshops",
      "Coordinated industry-academia partnerships",
      "Managed chapter transition to new leadership"
    ]
  },
  {
    period: "2019-2023",
    title: "Diploma Programme Coordinator",
    institution: "Dept. of Electronic & Computer Engineering",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Managed diploma program curriculum development",
      "Coordinated industry certification programs",
      "Supervised 100+ diploma students",
      "Implemented quality assurance protocols"
    ]
  },
  {
    period: "2018-2023",
    title: "Examination Officer & Level Coordinator",
    institution: "Lagos State University",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Managed examination processes for 500+ students",
      "Developed anti-malpractice strategies",
      "Coordinated student academic progression",
      "Implemented digital examination systems"
    ]
  },
  {
    period: "2015-2018",
    title: "Postgraduate Researcher & Lecturer",
    institution: "University of Cape Town",
    location: "Cape Town, South Africa",
    responsibilities: [
      "Taught Communication Engineering course",
      "Conducted broadband network research",
      "Mentored international graduate students",
      "Published 15+ peer-reviewed papers"
    ]
  },
  {
    period: "2013-2014",
    title: "Laboratory Coordinator & Departmental Secretary",
    institution: "Lagos State University",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Managed microcontroller and hardware labs",
      "Coordinated SIWES industrial training program",
      "Handled departmental administration",
      "Maintained equipment inventory worth ₦50M"
    ]
  },
  {
    period: "2009-2014",
    title: "Multiple Committee Leadership Roles",
    institution: "Lagos State University",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Chaired Faculty Seminar & Lecture Series Committee",
      "Led Computer Centre Development Committee",
      "Coordinated curriculum development initiatives",
      "Managed departmental quality assurance"
    ]
  },
  {
    period: "2007-2008",
    title: "NYSC Teacher",
    institution: "Olanipekun Secondary School",
    location: "Kisi, Oyo State",
    responsibilities: [
      "Pioneered computer studies program",
      "Taught Mathematics and Physics",
      "Organized STEM outreach programs",
      "Developed interactive teaching materials"
    ]
  },
  {
    period: "2001-2006",
    title: "Campus Fellowship Leader",
    institution: "Deeper Life Campus Fellowship",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Coordinated spiritual and welfare programs",
      "Organized leadership training workshops",
      "Mentored 100+ undergraduate students",
      "Managed inter-campus collaboration initiatives"
    ]
  }
];

const ITEMS_PER_PAGE = 2

export default function PreviousPositions() {
  const params = useParams()
  const pageNumber = Math.max(
    1,
    Math.min(Number(params.page) || 1, Math.ceil(positions.length / ITEMS_PER_PAGE))
  )
  
  const totalPages = Math.ceil(positions.length / ITEMS_PER_PAGE)
  const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE
  const currentPositions = positions.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <PageLayout
      title="Previous Positions"
      content={
        <div className="space-y-8">
          {currentPositions.map((position, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out hover:shadow-xl border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center text-gray-600 mb-2 md:mb-0">
                  <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-sm font-medium">{position.period}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-sm font-medium">{position.location}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{position.title}</h3>
              <div className="flex items-center mb-4 text-blue-600">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-lg font-semibold">{position.institution}</span>
              </div>
              <h4 className="font-semibold mb-3 text-lg text-gray-700">Key Responsibilities:</h4>
              <ul className="list-none space-y-3">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Pagination currentPage={pageNumber} totalPages={totalPages} basePath="/positions/previous" />
        </div>
      }
    />
  )
}


