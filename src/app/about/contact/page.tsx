// import PageLayout from "@/app/components/PageLayout"
// import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Contact() {
//   return (
//     <PageLayout
//       title="Contact"
//       content={
//         <div className="space-y-8">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-2xl font-semibold mb-4">Dr. Mary Abosede Adedoyin</h2>
//             <p className="text-lg text-gray-700 mb-4">
//               Senior Lecturer
//               <br />
//               Department of Electronics and Computer Engineering
//               <br />
//               Faculty of Engineering
//               <br />
//               Lagos State University
//               <br />
//               Ojo, Lagos State, Nigeria
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <Mail className="w-6 h-6 mr-2 text-blue-600" />
//                 <a href="mailto:mary.adedoyin@lasu.edu.ng" className="text-blue-600 hover:underline">
//                   mary.adedoyin@lasu.edu.ng
//                 </a>
//                 <span className="mx-2"> | </span>
//                 <a href="mailto:maryadedoyin4@gmail.com" className="text-blue-600 hover:underline">
//                   maryadedoyin4@gmail.com
//                 </a>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="w-6 h-6 mr-2 text-blue-600" />
//                 <span>+234 802 058 6312, +234 903 743 3746</span>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="w-6 h-6 mr-2 text-blue-600" />
//                 <span>Block 29, Flat C58, LASU Staff Quarters, Downhill, Epe, Lagos, Nigeria</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-50 rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Social Media & Online Profiles</h3>
//             <div className="space-y-4">
//               <a
//                 href="https://www.linkedin.com/in/drmaryadedoyin/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-blue-600 hover:underline"
//               >
//                 <Linkedin className="w-6 h-6 mr-2" />
//                 linkedin.com/in/drmaryadedoyin
//               </a>
//               <a
//                 href="https://scholar.google.com/citations?user=OMue7WcAAAAJ&hl=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-green-600 hover:underline"
//               >
//                 <Globe className="w-6 h-6 mr-2" />
//                 Google Scholar Profile
//               </a>
//               <a
//                 href="https://www.facebook.com/otegbeye.mary1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-blue-700 hover:underline"
//               >
//                 <Facebook className="w-6 h-6 mr-2" />
//                 facebook.com/otegbeye.mary1
//               </a>
//               <a
//                 href="https://doyenetech.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-blue-500 hover:underline"
//               >
//                 <Globe className="w-6 h-6 mr-2" />
//                 doyenetech.com (Personal Website)
//               </a>
//             </div>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
//             <p className="mb-4">
//               Monday: 10:00 AM - 12:00 PM
//               <br />
//               Wednesday: 2:00 PM - 4:00 PM
//               <br />
//               Or by appointment
//             </p>
//             <Button className="w-full sm:w-auto">Schedule an Appointment</Button>
//           </div>

//           <div className="bg-blue-50 rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Research Collaboration</h3>
//             <p className="mb-4">
//               Dr. Adedoyin is open to research collaborations and partnerships. If you're interested in working 
//               together on a project or have a research proposal, please get in touch.
//             </p>
//             <Button variant="outline" className="w-full sm:w-auto">
//               Propose Collaboration
//             </Button>
//           </div>

//           <div className="bg-gray-100 rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
//             <p className="mb-4">
//               For media inquiries, please contact the Lagos State University Public Relations Office:
//             </p>
//             <a href="mailto:pro@lasu.edu.ng" className="text-blue-600 hover:underline">
//               pro@lasu.edu.ng
//             </a>
//           </div>
//         </div>
//       }
//     />
//   )
// }
import PageLayout from "@/app/components/PageLayout";
import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <PageLayout
      title="Contact"
      content={
        <div className="space-y-8 px-4 sm:px-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
              Dr. Mary Abosede Adedoyin
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center sm:text-left">
              Senior Lecturer <br />
              Department of Electronics and Computer Engineering <br />
              Faculty of Engineering <br />
              Lagos State University <br />
              Ojo, Lagos State, Nigeria
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" />
                <div className="flex flex-col">
                  <a
                    href="mailto:mary.adedoyin@lasu.edu.ng"
                    className="text-blue-600 hover:underline"
                  >
                    mary.adedoyin@lasu.edu.ng
                  </a>
                  <a
                    href="mailto:maryadedoyin4@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    maryadedoyin4@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">+234 802 058 6312, +234 903 743 3746</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">
                  Block 29, Flat C58, LASU Staff Quarters, Downhill, Epe, Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">
              Social Media & Online Profiles
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: <Linkedin className="w-6 h-6 mr-2" />,
                  url: "https://www.linkedin.com/in/drmaryadedoyin/",
                  label: "linkedin.com/in/drmaryadedoyin",
                  color: "text-blue-600",
                },
                {
                  icon: <Globe className="w-6 h-6 mr-2" />,
                  url: "https://scholar.google.com/citations?user=OMue7WcAAAAJ&hl=en",
                  label: "Google Scholar Profile",
                  color: "text-green-600",
                },
                {
                  icon: <Facebook className="w-6 h-6 mr-2" />,
                  url: "https://www.facebook.com/otegbeye.mary1",
                  label: "facebook.com/otegbeye.mary1",
                  color: "text-blue-700",
                },
                {
                  icon: <Globe className="w-6 h-6 mr-2" />,
                  url: "https://doyenetech.com",
                  label: "doyenetech.com (Personal Website)",
                  color: "text-blue-500",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${item.color} hover:underline`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <p className="mb-4">
              Monday: 10:00 AM - 12:00 PM
              <br />
              Wednesday: 2:00 PM - 4:00 PM
              <br />
              Or by appointment
            </p>
            <Button className="w-full sm:w-auto">Schedule an Appointment</Button>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Research Collaboration</h3>
            <p className="mb-4">
              Dr. Adedoyin is open to research collaborations and partnerships. If you're
              interested in working together on a project or have a research proposal, please get
              in touch.
            </p>
            <Button variant="outline" className="w-full sm:w-auto">
              Propose Collaboration
            </Button>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
            <p className="mb-4">
              For media inquiries, please contact the Lagos State University Public Relations
              Office:
            </p>
            <a href="mailto:pro@lasu.edu.ng" className="text-blue-600 hover:underline">
              pro@lasu.edu.ng
            </a>
          </div>
        </div>
      }
    />
  );
}
