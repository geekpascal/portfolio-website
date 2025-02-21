"use client"

import PageLayout from "@/app/components/PageLayout"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Citations() {
  const citationData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Citations per Year",
        data: [30, 40, 38, 55, 85, 60, 58, 10],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Citation Growth Over Years",
      },
    },
  }

  return (
    <PageLayout
      title="Citations"
      content={
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Citation Metrics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Total Citations: 472</li>
              <li>h-index: 8 (6 since 2020)</li>
              <li>i10-index: 7 (4 since 2020)</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Citation Growth</h2>
            <Bar data={citationData} options={options} />
          </div>
          <p className="text-center text-gray-600">
            For a complete list of citations, please visit Dr. Adedoyin's{" "}
            <a
              href="https://scholar.google.com/citations?user=OMue7WcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </p>
        </div>
      }
    />
  )
}
