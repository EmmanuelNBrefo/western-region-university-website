import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";


const contactDetails = [

  {
    icon: <FaMapMarkerAlt />,

    title: "Address",

    details: "Tubmanburg, Bomi County, Liberia",
  },

  {
    icon: <FaPhoneAlt />,

    title: "Phone",

    details: "+231 77 000 0000",
  },

  {
    icon: <FaEnvelope />,

    title: "Email",

    details: "info@wrul.edu.lr",
  },

  {
    icon: <FaClock />,

    title: "Office Hours",

    details: "Monday – Friday, 8:00 AM – 5:00 PM",
  },

];


function ContactInformation() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Contact Information

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Get in touch with Western Region University through
            our official contact channels.

          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {contactDetails.map((contact) => (

            <div

              key={contact.title}

              className="
                bg-gray-50
                p-6
                rounded-xl
                border
                border-gray-100
                text-center
                hover:shadow-lg
                transition
              "

            >

              <div className="text-green-700 text-2xl flex justify-center mb-4">

                {contact.icon}

              </div>


              <h3 className="text-lg font-bold text-gray-800">

                {contact.title}

              </h3>


              <p className="mt-3 text-gray-600 leading-7">

                {contact.details}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ContactInformation;