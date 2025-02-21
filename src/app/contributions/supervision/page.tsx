"use client"

import PageLayout from "@/app/components/PageLayout"

export default function Supervision() {
  return (
    <PageLayout
      title="Supervision & Mentorship"
      content={
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Postgraduate Supervision</h2>
            <p className="text-gray-700">
              Dr. Adedoyin has mentored and supervised numerous PhD and MSc students throughout her academic career, 
              providing guidance on cutting-edge research in electrical engineering and computer systems. Her supervisory 
              approach emphasizes both technical excellence and personal development, helping students grow into 
              well-rounded professionals.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Undergraduate Mentorship</h2>
            <p className="text-gray-700 mb-4">
              With a passion for nurturing young talent, Dr. Adedoyin has guided countless undergraduate students through 
              their final year projects, many focusing on practical solutions to Nigeria's technological challenges. 
              Her mentorship extends beyond academic requirements, encouraging students to consider real-world applications 
              of their work.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Professional Mentorship</h2>
            <p className="text-gray-700 mb-4">
              Beyond formal academic supervision, Dr. Adedoyin is deeply committed to professional development:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pioneered a "Women in Engineering" mentorship program at Lagos State University</li>
              <li>Regular career guidance sessions for early-career engineers</li>
              <li>Industry-academia bridge programs connecting students with tech companies</li>
              <li>Professional skills workshops covering research ethics and technical communication</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Community Outreach</h2>
            <p className="text-gray-700 mb-4">
              Dr. Adedoyin extends her mentorship to the broader community through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Annual STEM summer camps for secondary school students</li>
              <li>Free technical workshops for small businesses and entrepreneurs</li>
              <li>Collaboration with local NGOs on technology education initiatives</li>
              <li>Career counseling sessions for engineering graduates</li>
            </ul>
          </div>
        </div>
      }
    />
  )
}