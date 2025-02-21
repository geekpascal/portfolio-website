"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResearchInterest {
  id: number;
  title: string;
  description: string;
}

const researchInterests: ResearchInterest[] = [
  {
    id: 1,
    title: "Telecommunications",
    description:
      "Research on wireless and mobile networks, signal theory, and communications to enhance effectiveness in the industry.",
  },
  {
    id: 2,
    title: "Electronics",
    description:
      "Design and development of electronic equipment, embedded systems, and communication systems for improved technical performance.",
  },
  {
    id: 3,
    title: "Automation",
    description:
      "Development of IoT, robotics, AI, and cybersecurity applications for process automation and quality-of-life improvements.",
  },
];

export default function ResearchInterestsList() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchInterests.map((interest) => (
          <Card key={interest.id} className="flex flex-col shadow-lg rounded-lg border border-gray-200">
            <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
              <CardTitle className="text-lg font-bold">{interest.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-gray-700">
              <p>{interest.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
