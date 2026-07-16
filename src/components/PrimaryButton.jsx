import { Link } from "react-router-dom";

function PrimaryButton({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-block rounded-2xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </Link>
  );
}

export default PrimaryButton;
