"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"

const navItems = [
  {
    title: "PRESENT POSITIONS",
    items: [
      { title: "Current Role", href: "/positions/current" },
      { title: "Previous Positions", href: "/positions/previous" },
      { title: "Academic Appointments", href: "/positions/academic" },
    ],
  },
  {
    title: "IN THE NEWS",
    items: [
      { title: "Recent News", href: "/news/recent" },
      { title: "Media Coverage", href: "/news/media" },
      // { title: "Press Releases", href: "/news/press" },
    ],
  },
  {
    title: "MY CONTRIBUTIONS",
    items: [
      { title: "Research Interests", href: "/contributions/research" },
      { title: "Publications", href: "/contributions/publications" },
      { title: "Citations", href: "/contributions/citations" },
      { title: "Research Grants", href: "/contributions/grants" },
      { title: "Teaching Experience", href: "/contributions/teaching" },
      { title: "Supervision", href: "/contributions/supervision" },
    ],
  },
  {
    title: "ABOUT ME",
    items: [
      { title: "Biography", href: "/about/biography" },
      { title: "Education", href: "/about/education" },
      { title: "Awards", href: "/about/awards" },
      { title: "Contact", href: "/about/contact" },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="text-gray-800 hover:text-gray-600 px-3 py-2">{item.title}</button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                          pathname === subItem.href ? "bg-gray-100" : ""
                        }`}
                        role="menuitem"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <div key={item.title} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <h2 className="text-gray-800 font-bold px-3 py-2">{item.title}</h2>
              {item.items.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === subItem.href ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}

