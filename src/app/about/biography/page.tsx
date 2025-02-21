import Image from "next/image"
import PageLayout from "@/app/components/PageLayout"

export default function Biography() {
  return (
    <PageLayout
      title="Biography"
      content={
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/drmary4.jpg"
              alt="Dr. Mary Abosede Adedoyin"
              width={300}
              height={400}
              className="rounded-lg shadow-md"
            />
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Engr. Dr. Mary Abosede Adedoyin is a Fellow of the Nigerian Institute of Electrical and Electronic Engineers (NIEEE), a registered engineer with the Council for the Regulation of Engineering in Nigeria (COREN), and an award-winning lecturer and researcher at the Department of Electronic and Computer Engineering, Faculty of Engineering, Lagos State University (LASU), Epe Campus, Lagos, Nigeria. She has over fifteen years of experience in academia and research.
              </p>
              <p className="text-lg leading-relaxed">
                She holds a Ph.D. in Electrical Engineering from the University of Cape Town (UCT), South Africa (2018), as well as an M.Sc. (2012) and B.Sc. (2007) in Electronic and Computer Engineering from LASU. Currently serving as the Sub-Dean, Faculty of Engineering at LASU, she is also a Senior Lecturer and Co-founder of Doyen Emerging Technologies and Engineering Ltd. Dr. Adedoyin is a member of several professional organizations, including APWEN, IEEE WIE, IEEE South Africa Section, and NSE.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Career Highlights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sub-Dean, Faculty of Engineering, Lagos State University</li>
              <li>Fellow of the Nigerian Institute of Electrical and Electronic Engineers (NIEEE)</li>
              <li>Recipient of the Nigerian AI Research Grant for Wearable Sensor-Based AI System for Lung Cancer Detection (2023)</li>
              <li>Winner of Overall Best Innovator at the 6th LASU Research and Innovation Award (2024)</li>
              <li>Best Poster Presenter Award at LASU Research and Innovation Award (2024)</li>
              <li>Recipient of multiple international conference grants</li>
              <li>Published over 30 peer-reviewed research papers</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            Engr. Dr. Adedoyin has made significant contributions to research and academia, mentoring students and supervising numerous undergraduate and postgraduate projects. Her research interests include Electronics, Telecommunications, Artificial Intelligence, Automation, and STEM Education. She has worked on innovative projects such as Smart IoT-Based Home Automation Systems, IoT-Based Biometric Attendance Management Systems, and Optimization of Smart Grid Energy Efficiency.
          </p>

          <div className="bg-blue-100 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Research Focus</h2>
            <p className="text-lg leading-relaxed">
              Dr. Adedoyin’s research has received several national and international grants. Her current research areas include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Wearable Sensor-Based AI System for Early Lung Cancer Detection</li>
              <li>Internet of Things (IoT) for Smart Automation and Energy Optimization</li>
              <li>Telecommunications and Wireless Networks</li>
              <li>Artificial Intelligence for Healthcare Applications</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            Dr. Adedoyin has been a keynote speaker and facilitator at conferences across Nigeria, South Africa, and China. She has received multiple best paper and best abstract awards, including at IEEE PIMRC 2017 in Montreal, Canada, and SATNAC 2017 in Barcelona. She continues to inspire young engineers and researchers through mentorship and leadership in engineering and technology.
          </p>

          <p className="text-lg leading-relaxed">
            She is also an Associate Coordinator with the Deeper Life Campus Fellowship, Lagos State, Nigeria. Dr. Adedoyin is happily married to Pastor Segun Adedoyin, and they are blessed with two children, Deborah and David Adedoyin.
          </p>
        </div>
      }
    />
  )
}