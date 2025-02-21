"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = ["/drmary1.jpeg", "/drmary2.jpeg", "/drmary5.jpg"]

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Dr. Mary Adedoyin - Image ${index + 1}`}
          layout="fill"
          objectFit="contain"
          priority={index === 0}
          className={`transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />

    </div>
  )
}
