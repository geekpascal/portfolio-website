"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Publication {
  id: number
  title: string
  authors: string
  journal: string
  year: number
  doi: string
}

const publications: Publication[] = [
    {
      id: 1,
      title: "Development of Virtual Classes and Laboratories with Remote Access",
      authors: "ADEDOYIN A. Mary, ADENOWO A. Adetokunbo, & Egberongbe-Kukoyi Fatia",
      journal: "FUOYE Journal of Engineering and Technology",
      year: 2024,
      doi: "https://dx.doi.org/10.4314/fuoyejet.v9i1.8",
    },
    {
      id: 2,
      title: "Development of a Fingerprint-Based Attendance Notification System using Simple Mail Transfer Protocol",
      authors: "Adejumobi, O. K., M. A. Adedoyin, A. A. Adenowo, O. O. Shoewu, & A. I. O. Yussuff",
      journal: "Engineering and Technology Research Journal",
      year: 2022,
      doi: "",
    },
    {
      id: 3,
      title: "Securing PDF Documents Using Cryptography and Digital Watermarking Techniques",
      authors: "Adetokunbo A. Adenowo, Mary A. Adedoyin, & Saheed Adedamola Adeyemi",
      journal: "International Journal of Science and Engineering Investigations",
      year: 2021,
      doi: "ISSN: 2251-8843",
    },
    {
      id: 4,
      title: "Combination of Ultra-Dense Networks and other 5G Enabling Technologies: A Survey",
      authors: "Adedoyin Mary, Olabis Falowo",
      journal: "IEEE Access",
      year: 2020,
      doi: "10.1109/ACCESS 2020.2969980",
    },
    {
      id: 5,
      title: "Design and Development of Health Centre Management System With Fingerprint Identification",
      authors: "Shoewu O. Oluwagbemiga, Ayangbekun J. Oluwafemi, Adedoyin A. Mary, Aigbovbioise- Job Egwakhide, Akinyemi A. Lateef, Folorunso O. Comfort",
      journal: "The Pacific Journal of Science and Technology",
      year: 2020,
      doi: "1551-7624",
    },
    {
      id: 6,
      title: "Development, Design, Analysis and Construction of a Digital Electronic Jack",
      authors: "Shoewu O. Oluwagbemiga, Adedoyin A. Mary, Ayangbekun J. Oluwafemi",
      journal: "Journal of Advancement in Engineering and Technology",
      year: 2020,
      doi: "ISSN:2348-2931",
    },
    {
      id: 7,
      title: "Development of a Smart IoT-Based Home Automation System",
      authors: "Adedoyin A. Mary, Shoewu O. Oluwagbemiga, Adenowo A. Adetokunbo, Yussuff I.O. Abayomi, Senapon M. Friday",
      journal: "Engineering & Technology Research Journal",
      year: 2020,
      doi: "https://doi.org/1047545/etrj.2020.5.2.062",
    },
    {
      id: 8,
      title: "Performance Analysis of Resource Allocation Technologies for Power Control In Device-To-Device Cellular Systems",
      authors: "Olaoluwa A. Idayat, Adedoyin A. Mary, Yussuff I.O. Abayomi",
      journal: "Engineering & Technology Research Journal",
      year: 2020,
      doi: "https://doi.org/10.47545/etrj.2020.5.2.064",
    },
    {
      id: 9,
      title: "Design and Evaluation of QoS-Aware Radio Resource Allocation For 5G Ultra-Dense Networks",
      authors: "Adedoyin Abosede Mary, Shoewu Oluwagbemiga, Ogunlewe Adeyinka, & Makanjuola Najeem",
      journal: "Engineering & Technology Research Journal",
      year: 2019,
      doi: "https://doi.org/10.47545/etrj.2019.4.1.045",
    },
    {
      id: 10,
      title: "Measurement Validation Of Fuzzy-Like Propagation Models For Wireless Cellular Networks In Metropolitan Environment",
      authors: "Shoewu O. Oluwagbemiga, Adedoyin A. Mary, Akinyemi A. Lateef, Oborkhale I. Lawrence, Udo Eu",
      journal: "Engineering & Technology Research Journal",
      year: 2018,
      doi: "https://doi.org/10.47545/etrj.2018.3.1.037",
    },
    {
      id: 11,
      title: "Halstead Complexity Analysis Of Bubble and Insertion Sorting Algorithms",
      authors: "Awode T. R, Olatinwo D.D., Shoewu O., Olatinwo S.O., Omitola O.O., Adedoyin A. Mary",
      journal: "The Pacific Journal of Science and Technology",
      year: 2017,
      doi: "ISSN: 1551-7624",
    },
    {
      id: 12,
      title: "Science of Cryptography",
      authors: "Ogunlewe O. Adeyinka, Adedoyin A. Mary, Folorunso O. Comfort",
      journal: "International Transaction Of Electrical and Computer Engineers System",
      year: 2014,
      doi: "10.12691/Iteces-2-2-3",
    },
    {
      id: 13,
      title: "Design and Development of an Amplitude Modulation Using Square Law Approach",
      authors: "Folorunso O. Comfort, Akinyemi A. Lateef, Adedoyin A. Mary",
      journal: "International Transaction of Electrical and Computer Engineers System",
      year: 2014,
      doi: "10.12691/Iteces-2-1-7",
    },
    {
      id: 14,
      title: "Design and Implementation of Microcontroller Based Calculator",
      authors: "Adedoyin A. Mary, Olopade O.L., Shoewu O. Oluwagbemiga, Ogunlewe O. Adeyinka",
      journal: "Journal of Computation in Biosciences and Engineering",
      year: 2014,
      doi: "ISSN: 2348 –7321",
    },
  // Add more publications as needed
]

export default function PublicationList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPublications, setFilteredPublications] = useState(publications)

  const handleSearch = () => {
    const filtered = publications.filter(
      (pub) =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.year.toString().includes(searchTerm),
    )
    setFilteredPublications(filtered)
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search publications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg over:bg-blue-700 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105">Search</Button>
      </div>
      <ul className="space-y-4">
        {filteredPublications.map((pub) => (
          <li key={pub.id} className="border-b pb-4">
            <h3 className="font-bold">{pub.title}</h3>
            <p>{pub.authors}</p>
            <p>
              {pub.journal}, {pub.year}
            </p>
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              DOI: {pub.doi}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

