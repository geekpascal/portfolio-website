import PageLayout from "@/app/components/PageLayout";

const grants = [
  {
    period: "2023",
    title: "Nigerian AI Research Grant",
    amount: "Undisclosed",
    funder: "Nigerian AI Research Program",
    description:
      "Research on 'Wearable Sensor-based AI system for early detection and personalized management of lung cancer'.",
  },
  {
    period: "2023",
    title: "LASUTECH Research Grant",
    amount: "Undisclosed",
    funder: "Lagos State University of Science and Technology (LASUSTECH)",
    description:
      "Development of a cost-effective renewable energy system to enhance Nigerian university security system: LASUSTECH as a case study.",
  },
  {
    period: "2022",
    title: "Tetfund Grant",
    amount: "Undisclosed",
    funder: "Tertiary Education Trust Fund (TETFUND)",
    description:
      "Development of stress-levels monitoring device for university academic staff using wearable sensors and machine learning.",
  },
  {
    period: "2017",
    title: "UCT Postgraduate Conference Travel Grant",
    amount: "Undisclosed",
    funder: "University of Cape Town (UCT)",
    description:
      "Funding support for postgraduate conference participation at the University of Cape Town.",
  },
  {
    period: "2017",
    title: "IEEE Women in Engineering Student Travel Grant",
    amount: "Undisclosed",
    funder: "IEEE Women in Engineering",
    description:
      "Grant provided to support student travel for research conferences in engineering fields.",
  },
  {
    period: "2016-2017",
    title: "National Research Foundation (NRF) Innovation Doctoral Scholarship",
    amount: "Undisclosed",
    funder: "National Research Foundation (NRF), South Africa",
    description:
      "Doctoral scholarship awarded for innovative research in electronic and computer engineering.",
  }
];

export default function ResearchGrants() {
  return (
    <PageLayout
      title="Research Grants"
      content={
        <div className="space-y-8">
          {grants.map((grant, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{grant.title}</h3>
              <p className="text-gray-600 mb-2">{grant.period}</p>
              <p className="text-green-600 font-semibold mb-2">Amount: {grant.amount}</p>
              <p className="text-blue-600 mb-4">Funder: {grant.funder}</p>
              <p className="text-gray-700">{grant.description}</p>
            </div>
          ))}
          <div className="bg-gray-100 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">Total Research Funding</h3>
            <p className="text-2xl font-bold text-green-600">Undisclosed</p>
            <p className="text-gray-600 mt-2">
              This figure represents the approximate total value of all research grants showcasing Dr.
              Adedoyin's significant contribution to funded research in her field.
            </p>
          </div>
        </div>
      }
    />
  );
}
