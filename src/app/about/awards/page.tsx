import PageLayout from "@/app/components/PageLayout";
import { Award } from "lucide-react";

const awards = [
  { year: 2024, title: "Award of Special Recognition", description: "The Engineering Entrepreneurship Conference" },
  { year: 2023, title: "Nigerian AI Research Grant", description: "Wearable Sensor-based AI system for early detection and personalized management of lung cancer" },
  { year: 2023, title: "LASUTECH Research Grant", description: "Development of a Cost-effective Renewable Energy System to Enhance Nigerian University Security System: LASUSTECH a case study" },
  { year: 2023, title: "Best Lecturer of the Year", description: "Computer Science Students, Lagos State University, Nigeria" },
  { year: 2023, title: "Appreciation Award", description: "Computer Science Students, Lagos State University" },
  { year: 2022, title: "Tetfund Grant", description: "Development of Stress-Levels Monitoring Device for University Academic Staff Using Wearable Sensors and Machine Learning" },
  { year: 2022, title: "Best Abstract Award", description: "4th LASU Research and Innovation Award" },
  { year: 2022, title: "Best Presenter Award", description: "4th LASU Research and Innovation Award" },
  { year: 2021, title: "Appreciation Honour Award", description: "Lagos State University, ECE 03/04" },
  { year: 2021, title: "Best Lecturer of the Year", description: "Engineering Students' Society, Lagos State University, Nigeria" },
  { year: 2018, title: "Overall Academic Excellence in South Africa", description: "Nigeria Community Awards" },
  { year: 2017, title: "Best Student Paper Award", description: "28th IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (IEEE PIMRC), Montreal, Canada" },
  { year: 2017, title: "Best Paper Award", description: "Southern Africa Telecommunication Networks and Application Conference (SATNAC), Freedom of the Seas, Royal Caribbean International, Barcelona, Spain" },
  { year: 2016, title: "N^2 Women Young Researcher Fellowship", description: "IEEE, PIMRC Valencia, Spain" },
  { year: 2017, title: "UCT Postgraduate Conference Travel Grant", description: "University of Cape Town" },
  { year: 2017, title: "IEEE Women in Engineering Student Travel Grant", description: "IEEE" },
  { year: 2015, title: "Incoming International Student Award", description: "University of Cape Town, South Africa" },
  { year: 2016, title: "National Research Foundation (NRF) Innovation Doctoral Scholarship", description: "University of Cape Town, South Africa" },
  { year: 2012, title: "Best Female Graduating Student", description: "M.Sc. Electronic & Computer Engineering, Lagos State University, Lagos, Nigeria" },
  { year: 2005, title: "Best Student of Electronic & Computer Engineering (400L)", description: "Lagos State University" },
  { year: 2005, title: "University Scholar Award of Academic Excellence", description: "Lagos State University, Nigeria" },
  { year: 1997, title: "Final Year Best Student Award", description: "Asakanran Grammar School, Ogun State, Nigeria" },
  { year: 1996, title: "Best Student of Ogun State Secondary Schools", description: "Ogun State, Nigeria" },
  { year: 1995, title: "Best Science Student of Yewa Colleges", description: "Yewa Colleges, Nigeria" },
];

export default function Awards() {
  return (
    <PageLayout
      title="Scholarship, Prizes, Grants, Honours, and Distinctions"
      content={
        <div className="space-y-8">
          <p className="text-lg text-gray-700 mb-6">
            Throughout her career, she has received numerous awards and honors recognizing her outstanding
            contributions to research, teaching, and innovation. Below is a selection of her most notable accolades:
          </p>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Year</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">{award.year}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-blue-600">{award.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{award.description}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-blue-50 rounded-xl p-6 mt-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Impact of Awards</h2>
            <p className="text-gray-700 mb-4">
              These awards have significantly influenced her career, fostering groundbreaking research and inspiring new
              generations of students. The recognition has:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encouraged international collaborations and partnerships in research and development.</li>
              <li>Boosted the visibility of African women in STEM fields, inspiring future researchers.</li>
              <li>Enhanced university and national policies on technology-driven research.</li>
              <li>Facilitated funding opportunities to drive innovation and sustainability.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Commitment to Excellence</h2>
            <p className="text-gray-700">
              Her commitment to excellence in research, teaching, and leadership continues to shape the future of engineering and technology. Through these accolades, she remains dedicated to pushing the boundaries of knowledge, mentoring aspiring scientists, and contributing to global advancements in science and innovation.
            </p>
          </div>
        </div>
      }
    />
  );
}
