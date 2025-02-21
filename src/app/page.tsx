import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImageCarousel from "@/components/ImageCarousel";
import { Award, Book, Microscope, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ImageCarousel />
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Engr. Dr. Mary Abosede Adedoyin</h1>
          <p className="text-xl font-medium text-gray-700 mb-2">Ph.D, M.Sc., B.Sc., FNIEEE, COREN</p>
          <p className="text-lg text-gray-600 mb-6"> 
            Senior Lecturer & Sub-Dean, Faculty of Engineering<br /> 
            Department of Electronics and Computer Engineering<br /> 
            Lagos State University | Co-founder, Doyen Emerging Technologies
          </p>
          <div className="prose prose-lg text-gray-800">
            <p className="mb-4">
              Award-winning researcher and registered professional engineer with 15+ years of experience in 
              telecommunications, AI systems, and sustainable energy solutions. Fellow of the Nigerian Institute 
              of Electrical and Electronic Engineers (NIEEE) and recognized innovator in IoT applications.
            </p>
            <div className="mt-4">
              <Link href="/about/biography">
                <Button className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105">
                  Full Professional Biography
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BrainCircuit className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">AI & Healthcare Systems</h3>
                </div>
                <p className="text-gray-700">
                  Developing wearable AI sensors for early lung cancer detection (Nigerian AI Research Grant 2023)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Microscope className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Smart Energy Solutions</h3>
                </div>
                <p className="text-gray-700">
                  Optimizing smart grid efficiency and photovoltaic system implementations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Academic Leadership</h3>
                </div>
                <p className="text-gray-700">
                  Authored 30+ peer-reviewed papers with international citations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Industry Innovation</h3>
                </div>
                <p className="text-gray-700">
                  Developed IoT-based biometric systems and smart home automation solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Grid Optimization</h3>
                <p className="text-gray-700">
                  Enhanced power distribution efficiency through machine learning models, 
                  implemented in collaboration with Nigerian energy providers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IoT Biometric Systems</h3>
                <p className="text-gray-700">
                  Developed secure attendance management systems deployed in academic institutions 
                  and corporate organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}