import PageLayout from "@/app/components/PageLayout"

export default function CurrentRole() {
  return (
    <PageLayout
      title="Current Roles & Responsibilities"
      content={
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Academic Leadership</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sub-Dean, Faculty of Engineering, Lagos State University (2023 - Present)</li>
              <li>Senior Lecturer, Department of Electronics and Computer Engineering</li>
              <li>Faculty Mentor, Centre for Response and Prevention of Sexual and Gender-Based Violence (2023 - Present)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Professional Leadership</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chairman, Nigerian Institute of Electrical and Electronic Engineers (NIEEE) Epe/Ibeju-Lekki Chapter (Effective August 2024)</li>
              <li>Deputy Chairman, NIEEE Epe/Ibeju-Lekki Chapter (2022 - August 2024)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Committee Leadership</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chairman, Faculty Examination Misconduct Committee (2023 - Present)</li>
              <li>Chairman, Power Generation Committee, Faculty of Engineering (2023 - Present)</li>
              <li>Chairman, Caretaker Committee - Senior Staff Residents Association (2023 - Present)</li>
              <li>Chairman, Local Organizing Committee - NIEEE Student Chapter Inauguration (2023 - Present)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Core Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Overseeing faculty academic programs and student welfare as Sub-Dean</li>
              <li>Developing regional engineering standards through NIEEE leadership</li>
              <li>Enhancing campus infrastructure through sustainable energy initiatives</li>
              <li>Maintaining academic integrity through examination oversight</li>
              <li>Mentoring students and faculty in technical and professional development</li>
            </ul>
          </div>
        </div>
      }
    />
  )
}