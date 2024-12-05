import { useState } from "react";

const DropdownItem = ({ label, options }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-4">
      {/* Label for dropdown */}
      <p className="font-semibold text-sm pl-4">{label}</p>

      <div className="w-full" onClick={toggleDropdown}>
        <div
          className={`p-4 w-full shadow-xl bg-gray-200 rounded-full border border-black cursor-pointer flex justify-between items-center`}
        >
          <span className="text-lg font-semibold">{label}</span>
          <span className="text-white bg-yellow-500 rounded-full">
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                open ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {/* Dropdown content */}
        {open && (
          <div className="p-4 rounded-3xl w-full bg-gray-200">
            {options.map((option) => (
              <p key={option.id} className="py-2 flex gap-2 items-center">
                <span>
                  <img src={option.src} alt={option.title} />
                </span>
                {option.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownItem;
