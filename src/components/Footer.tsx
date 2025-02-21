import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaLinkedin, FaFacebook, FaGlobe, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:mary.adedoyin@lasu.edu.ng">mary.adedoyin@lasu.edu.ng</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+234 802 058 6312, +234 903 743 3746</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Department of Electronics and Computer Engineering, Lagos State University</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contributions/publications">Publications</Link>
              </li>
              <li>
                <Link href="/contributions/research">Research</Link>
              </li>
              <li>
                <Link href="/contributions/teaching">Teaching</Link>
              </li>
              <li>
                <Link href="/about/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="mb-4">Follow Dr. Mary Adedoyin on social media:</p>
            <div className="flex space-x-4">
              <a href="https://scholar.google.com/citations?user=OMue7WcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaGoogle size={24} />
              </a>
              <a href="https://www.linkedin.com/in/drmaryadedoyin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/otegbeye.mary1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://doyenetech.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Mary Adedoyin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
