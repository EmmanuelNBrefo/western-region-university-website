function Announcements() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1000px] mx-auto px-5">

        <span className="text-sm font-semibold text-green-700 uppercase">
          University Announcements
        </span>


        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-800">
          Important University Announcements
        </h1>


        <p className="mt-4 text-sm text-gray-500">
          Official Information from Western Region University of Liberia
        </p>


        <div className="mt-8 bg-gray-200 rounded-2xl h-[300px] flex items-center justify-center">

          <span className="text-gray-500">
            Announcements Image
          </span>

        </div>


        <div className="mt-8 space-y-6 text-gray-700 leading-8">

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Admissions Information
            </h2>

            <p className="mt-2">
              Prospective students are encouraged to stay informed about
              admission requirements, application procedures, deadlines,
              and important updates.
            </p>

          </div>


          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Registration Updates
            </h2>

            <p className="mt-2">
              Students should follow official university announcements for
              information about registration periods, academic schedules,
              and important academic procedures.
            </p>

          </div>


          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Academic Notices
            </h2>

            <p className="mt-2">
              Important notices concerning classes, examinations, academic
              activities, and university programs will be communicated
              through official channels.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Announcements;