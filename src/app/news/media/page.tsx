import PageLayout from "@/app/components/PageLayout";

export default function MediaCoverage() {
  return (
    <PageLayout
      title="Media Coverage"
      content={
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
            Inauguration of Engr. Dr. Mary Adedoyin as the 2nd Chairman of NIEEE, Epe/Ibeju-Lekki Chapter
            </h3>
            <div className="mb-4" style={{ height: '500px' }}>
              <iframe
                src="https://www.youtube.com/embed/mHPIMFMyU7I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-gray-700">
              Watch Dr. Mary Adedoyin recent appointment as the 2nd chairman of the NIEEE Epe Ibeju Lekki Chapter.
            </p>
          </div>
        </div>
      }
    />
  );
}
