"use client";

import PageLayout from "@/app/components/PageLayout";
import Pagination from "@/app/components/Pagination";
import { CalendarIcon, BriefcaseIcon, CheckCircleIcon } from "lucide-react";
import { useParams } from "next/navigation";

const appointments = [
  {
    period: "2023-Present",
    title: "Sub-Dean, Faculty of Engineering",
    institution: "Lagos State University, Nigeria",
    responsibilities: [
      "Assist in administrative and academic activities within the Faculty of Engineering",
      "Coordinate faculty meetings and academic planning sessions",
      "Oversee student affairs and welfare within the faculty",
    ],
  },
  {
    period: "2024-Present",
    title: "Chairman, Nigerian Institute of Electrical and Electronic Engineers (NIEEE), Epe/Ibeju-Lekki Chapter",
    institution: "Nigerian Institute of Electrical and Electronic Engineers",
    responsibilities: [
      "Provide leadership and strategic direction for the chapter",
      "Organize professional development programs and events",
      "Represent the chapter in national and regional engineering activities",
    ],
  },
  {
    period: "2023-Present",
    title: "Chairman, Faculty Examination Misconduct Committee",
    institution: "Lagos State University, Nigeria",
    responsibilities: [
      "Oversee investigations and disciplinary actions on examination misconduct cases",
      "Ensure compliance with academic integrity policies",
      "Recommend reforms to strengthen examination integrity",
    ],
  },
  {
    period: "2023-Present",
    title: "Chairman, Power Generation Committee",
    institution: "Faculty of Engineering, Lagos State University, Nigeria",
    responsibilities: [
      "Lead initiatives on sustainable power solutions within the faculty",
      "Oversee maintenance and expansion of power infrastructure",
      "Advocate for funding and policy support for power projects",
    ],
  },
  {
    period: "2018-Present",
    title: "Level Coordinator, Department of Electronic & Computer Engineering",
    institution: "Lagos State University, Nigeria",
    responsibilities: [
      "Manage academic activities and student affairs for assigned levels",
      "Ensure smooth delivery of curriculum and assessments",
      "Liaise with faculty members to address student concerns",
    ],
  },
  {
    period: "2019-2023",
    title: "Diploma Programme Coordinator",
    institution: "Department of Electronic & Computer Engineering, Lagos State University, Nigeria",
    responsibilities: [
      "Supervise the administration of the diploma program",
      "Develop curriculum and ensure accreditation compliance",
      "Facilitate student recruitment and academic counseling",
    ],
  },
  {
    period: "2018-2023",
    title: "Examination Officer",
    institution: "Department of Electronic & Computer Engineering, Lagos State University, Nigeria",
    responsibilities: [
      "Manage examination processes and ensure adherence to regulations",
      "Coordinate the scheduling and grading of examinations",
      "Oversee the integrity and security of examination materials",
    ],
  },
  {
    period: "2019-Present",
    title: "Member, Faculty Examination Malpractice Committee",
    institution: "Lagos State University, Nigeria",
    responsibilities: [
      "Investigate and resolve cases of examination malpractice",
      "Develop and implement strategies to curb academic dishonesty",
      "Collaborate with faculty members to enforce examination rules",
    ],
  },
  {
    period: "2022-Present",
    title: "Member, Electrical Engineering Curriculum Development Committee",
    institution: "Lagos State University, Nigeria",
    responsibilities: [
      "Participate in the review and development of the electrical engineering curriculum",
      "Ensure compliance with industry standards and accreditation requirements",
      "Integrate emerging technologies into the curriculum",
    ],
  },
  {
    period: "2022-Present",
    title: "Chairman, Committee on Faculty Seminar and Lecture Series",
    institution: "Faculty of Engineering, Lagos State University, Nigeria",
    responsibilities: [
      "Organize and coordinate faculty seminars and guest lectures",
      "Facilitate collaboration with industry experts and researchers",
      "Enhance knowledge sharing and professional development within the faculty",
    ],
  },
  {
    period: "2023-Present",
    title: "Faculty Mentor",
    institution: "Centre for Response and Prevention of Sexual and Gender-Based Violence, Lagos State University, Nigeria",
    responsibilities: [
      "Provide mentorship and guidance on gender-based violence prevention initiatives",
      "Advocate for policies that support gender equity and student safety",
      "Organize sensitization programs and training for students and staff",
    ],
  },
];

const ITEMS_PER_PAGE = 3;

export default function AcademicAppointments() {
  const params = useParams<{ page?: string }>(); // Define the type of params
  const page = Math.max(
    1,
    Math.min(Number(params?.page) || 1, Math.ceil(appointments.length / ITEMS_PER_PAGE))
  );

  const totalPages = Math.ceil(appointments.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentAppointments = appointments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <PageLayout
      title="Academic Appointments"
      content={
        <div className="space-y-8">
          {currentAppointments.map((appointment, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out hover:shadow-xl border border-gray-200"
            >
              <div className="flex items-center mb-3 text-gray-600">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-sm font-medium">{appointment.period}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{appointment.title}</h3>
              <div className="flex items-center mb-4 text-blue-600">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-lg font-semibold">{appointment.institution}</span>
              </div>
              <h4 className="font-semibold mb-3 text-lg text-gray-700">Key Responsibilities:</h4>
              <ul className="list-none space-y-3">
                {appointment.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Pagination currentPage={page} totalPages={totalPages} basePath="/positions/academic" />
        </div>
      }
    />
  );
}
