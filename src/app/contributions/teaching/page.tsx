import PageLayout from "@/app/components/PageLayout";

const courses = {
  "Diploma": [
    { code: "ECE 021", name: "Electrical Engineering Material" },
    { code: "ECE 026", name: "Computer Maintenance and Repair" },
    { code: "DME 116", name: "Introduction to Computer Systems" },
    { code: "ECE 011", name: "Engineering Mathematics I" },
    { code: "ECE 080", name: "Engineering Mathematics II" }
  ],
  "Undergraduate": {
    "100L": [
      { code: "ECE 101", name: "Introduction to Electronic Design and Practice" },
      { code: "ECE 102", name: "Introduction to Computer Engineering" },
      { code: "ECE 104", name: "Introduction to Electronics Engineering" },
      { code: "CSC 120", name: "Computer as a Problem-Solving Tool" },
      { code: "CSC 132", name: "Principles of Programming Language" },
      { code: "PHY 101", name: "General Physics I" },
      { code: "PHY 104", name: "General Physics II" }
    ],
    "200L": [
      { code: "ECE 201", name: "Fundamentals of Electrical Engineering I" },
      { code: "ECE 206", name: "Electrical Installation Practice" },
      { code: "ECE 210", name: "Fundamentals of Electrical Engineering II" },
      { code: "ECE 207", name: "Introduction to Information Technology" },
      { code: "ECE 202", name: "Engineering Mathematics II" },
      { code: "CSC 213", name: "Algorithm Development and Application" },
      { code: "CSC 214", name: "Database Design and Management I" },
      { code: "CSC 221", name: "Fundamentals of Data Structure" }
    ],
    "300L": [
      { code: "ECE 303", name: "Electrical Circuit Theory" },
      { code: "ECE 310", name: "Introduction to Telecommunications and Broadcasting" },
      { code: "ECE 320", name: "Electromagnetic Fields and Waves" },
      { code: "ENT 302", name: "Solar Energy Technology" }
    ],
    "400L": [
      { code: "ECE 401", name: "Engineering Mathematics V" },
      { code: "ECE 419", name: "Technical Communication" }
    ],
    "500L": [
      { code: "ECE 501", name: "Engineering Mathematics VI" },
      { code: "ECE 510", name: "Satellite Communication Technology" },
      { code: "ECE 520", name: "Electronic System Installation and Organisation" }
    ]
  },
  "Postgraduate": {
    "PGD": [
      { code: "ECE 714", name: "Data Communication" },
      { code: "ECE 701", name: "Digital Signal Processing" },
      { code: "ECE 790", name: "Microwave Engineering" },
      { code: "ECE 717", name: "Digital Electronics" },
      { code: "ECE 713", name: "Engineering Analysis/Mathematics I" },
      { code: "ECE 712", name: "Engineering Analysis/Mathematics II" }
    ],
    "M.Sc.": [
      { code: "ECE 813", name: "Microwave Theory, Technique and Networks" },
      { code: "ECE 821", name: "Digital Signal Processing" }
    ],
    "Ph.D.": [
      { code: "ECE 910", name: "Advances in Computer Technology" },
      { code: "ECE 908", name: "Telecommunications" }
    ]
  }
};

export default function TeachingExperience() {
  return (
    <PageLayout
      title="Teaching Experience"
      content={
        <>
          {Object.entries(courses).map(([category, levels]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category} Courses</h2>
              {Array.isArray(levels) ? (
                <table className="min-w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Course Code</th>
                      <th className="border border-gray-300 px-4 py-2">Course Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {levels.map((course, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-2">{course.code}</td>
                        <td className="border border-gray-300 px-4 py-2">{course.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                Object.entries(levels).map(([level, courses]) => (
                  <div key={level} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{level}</h3>
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2">Course Code</th>
                          <th className="border border-gray-300 px-4 py-2">Course Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 px-4 py-2">{course.code}</td>
                            <td className="border border-gray-300 px-4 py-2">{course.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              )}
            </div>
          ))}

          <h2 className="text-2xl font-semibold mb-4">Teaching Philosophy</h2>
          <p className="text-gray-700 mb-6">Dr. Adedoyin believes in a hands-on, project-based approach to teaching, linking theoretical knowledge to real-world applications.</p>
          
          <h2 className="text-2xl font-semibold mb-4">Student Feedback</h2>
          <blockquote className="italic border-l-4 border-gray-300 pl-4 py-2 mb-6">"Dr. Adedoyin's classes are challenging but rewarding, making learning an engaging experience."</blockquote>
          
          <h2 className="text-2xl font-semibold mb-4">Teaching Innovations</h2>
          <ul className="list-disc pl-6">
            <li>Introduced virtual reality labs for circuit design courses</li>
            <li>Developed an AI-powered tutoring system for student support</li>
          </ul>
        </>
      }
    />
  );
}
