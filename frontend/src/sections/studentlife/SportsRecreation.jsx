const activities = [

  {
    title: "Sports Activities",
    description:
      "Sports activities encourage teamwork, discipline, physical fitness, healthy competition, and friendship among students."
  },

  {
    title: "Recreation",
    description:
      "Recreational activities provide opportunities for students to relax, socialize, enjoy their interests, and maintain a balanced university experience."
  },

  {
    title: "Fitness & Wellness",
    description:
      "Students are encouraged to develop healthy lifestyles through physical activity, wellness awareness, and positive personal habits."
  },

  {
    title: "Teamwork & Leadership",
    description:
      "Participation in sports and recreational activities helps students develop teamwork, communication, discipline, and leadership skills."
  },

];


function SportsRecreation() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Sports & Recreation

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            A balanced university experience includes opportunities for
            physical activity, recreation, teamwork, friendship, and wellness.

          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {activities.map((activity) => (

            <div

              key={activity.title}

              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
              "

            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                {activity.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {activity.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default SportsRecreation;