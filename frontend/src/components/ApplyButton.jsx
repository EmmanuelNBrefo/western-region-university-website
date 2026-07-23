import { Link } from "react-router-dom";

function ApplyButton() {
  return (
    <Link
      to="/admissions"
      className="inline-block rounded-md bg-green-700 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-green-800"
    >
      Apply Now
    </Link>
  );
}

export default ApplyButton;