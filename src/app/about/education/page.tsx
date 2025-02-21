import PageLayout from "@/app/components/PageLayout";
import { GraduationCap, BadgeCheck } from "lucide-react"; // Updated icons

const educationData = [
  {
    year: "2015-2018",
    degree: "PhD in Electrical Engineering",
    institution: "University of Cape Town, South Africa",
    details: "Graduated with Grade A",
  },
  {
    year: "2009-2012",
    degree: "MSc in Electronic & Computer Engineering",
    institution: "Lagos State University, Nigeria",
    details: "CGPA of 4.30/5.0",
  },
  {
    year: "2000-2007",
    degree: "BSc (Hons.) in Electronic & Computer Engineering",
    institution: "Lagos State University, Nigeria",
    details: "Second Class (Hons.) Upper Division, CGPA of 4.17/5.0",
  },
  {
    year: "2001",
    degree: "West African Senior School Certificate",
    institution: "Secondary Education",
    details:
      "Subjects: English (C4), Mathematics (B3), Physics (B2), Chemistry (B3), Biology (C4), Economics (B3), Yoruba (B2)",
  },
];

const certificationsData = [
  {
    year: "2023",
    certification: "Fellowship Award",
    institution: "Nigerian Institute of Electrical and Electronic Engineers (NIEEE)",
  },
  {
    year: "2020",
    certification: "ICDL Certification",
    institution: "International Computer Driving Licence (ICDL)",
  },
  {
    year: "2018",
    certification: "COREN Registration",
    institution: "Council for the Regulation of Engineering in Nigeria (COREN)",
  },
  {
    year: "2006",
    certification: "GSM Engineer",
    institution: "Arcnet Power Communication Technologies",
  },
  {
    year: "2005",
    certification: "Computer/Networking Engineer",
    institution: "Arcnet Power Communication",
  },
];

const TableSection = ({ title, data, isCertifications = false }: { title: string; data: any[]; isCertifications?: boolean }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
        {isCertifications ? (
          <BadgeCheck className="text-green-500 w-6 h-6" />
        ) : (
          <GraduationCap className="text-blue-500 w-6 h-6" />
        )}
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Year</th>
              <th className="border border-gray-300 px-4 py-2">{isCertifications ? "Certification" : "Degree"}</th>
              <th className="border border-gray-300 px-4 py-2">Institution</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border border-gray-300 hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{item.degree || item.certification}</td>
                <td className="border border-gray-300 px-4 py-2">{item.institution}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.details || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default function Education() {
  return (
    <PageLayout 
      title="Education"
      content={
        <div className="space-y-12">
          <TableSection title="Academic Education" data={educationData} />
          <TableSection title="Professional Certifications" data={certificationsData} isCertifications />
        </div>
      }
    />
  );
}
