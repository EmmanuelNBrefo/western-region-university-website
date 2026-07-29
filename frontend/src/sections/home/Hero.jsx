import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="
        relative
        h-[600px]
        bg-cover
        bg-center
        flex
        items-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562774053-701939374585')",
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>


      {/* Content */}

      <div
        className="
          relative
          z-10
          max-w-[1280px]
          mx-auto
          px-5
          text-white
        "
      >

        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
            uppercase
            max-w-3xl
          "
        >
          Western Region University
        </h1>


        <p
          className="
            mt-5
            text-xl
            md:text-2xl
          "
        >
          Transforming Education Through Innovation
        </p>


        <p
          className="
            mt-3
            max-w-2xl
            text-gray-200
          "
        >
          Empowering students through quality teaching,
          research, technology, and community development.
        </p>


        {/* Action Buttons */}

        <div
          className="
            mt-8
            flex
            gap-4
            flex-wrap
          "
        >

          {/* Apply Now */}

          <Link
            to="/admissions"
            className="
              inline-block
              bg-green-700
              px-8
              py-3
              rounded-md
              font-semibold
              hover:bg-green-800
              transition
            "
          >
            Apply Now
          </Link>


          {/* Explore Programs */}

          <Link
            to="/academics"
            className="
              inline-block
              border
              border-white
              px-8
              py-3
              rounded-md
              font-semibold
              hover:bg-white
              hover:text-green-700
              transition
            "
          >
            Explore Programs
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;