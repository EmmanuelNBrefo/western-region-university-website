const organizations = [

  {
    title: "Academic & Professional Clubs",
    description:
      "Students can participate in academic and professional clubs that support knowledge sharing, career development, collaboration, and intellectual growth."
  },

  {
    title: "Student Leadership",
    description:
      "Student organizations provide opportunities for students to develop leadership skills, take responsibility, organize activities, and represent their fellow students."
  },

  {
    title: "Cultural Organizations",
    description:
      "Cultural organizations provide opportunities for students to celebrate culture, creativity, diversity, heritage, and shared experiences."
  },

  {
    title: "Community Service",
    description:
      "Student organizations can participate in community service and activities that contribute positively to society."
  },

  {
    title: "Student Collaboration",
    description:
      "Clubs and organizations help students build friendships, collaborate on projects, share ideas, and develop strong relationships within the university community."
  },

];


function ClubsOrganizations() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Clubs & Organizations

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Student clubs and organizations provide opportunities for
            students to connect, lead, collaborate, develop their interests,
            and contribute to the university community.

          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {organizations.map((organization) => (

            <div

              key={organization.title}

              className="
                bg-gray-50
                p-6
                rounded-xl
                border
                border-gray-100
                hover:shadow-lg
                transition
              "

            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                {organization.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {organization.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ClubsOrganizations;