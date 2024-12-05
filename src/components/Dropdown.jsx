import { useState } from "react";

const DropdownItem = ({ label, itm, namex, setItem, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleClick = (num) => {
    setSelected(num);
    setItem({ ...itm, [namex]: options[num] });
    setOpen(false); // Close dropdown after selection
  };

  return (
    <div className="mb-4 relative">
      {/* Label for dropdown */}
      <p className="font-semibold text-sm pl-4">{label}</p>

      <div className="w-full" onClick={toggleDropdown}>
        <div
          className={`p-3 w-full bg-gray-200 rounded-full border border-black cursor-pointer flex justify-between items-center`}
        >
          <span className="text-lg font-semibold">
            <p className="py-1 flex gap-2 items-center">
              <span>
                <img
                  className="h-6"
                  src={options[selected].src}
                  alt={options[selected].title}
                />
              </span>
              {options[selected].title}
            </p>
          </span>
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

        {/* Dropdown content with animation */}
        <div
          className={`absolute top-full left-0 w-full shadow-lg bg-gray-200 rounded-3xl overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ zIndex: 50 }}
        >
          {options.map((option, idx) => (
            <p
              key={option.id}
              className="py-2 px-3 flex gap-2 items-center cursor-pointer hover:bg-gray-300"
              onClick={() => handleClick(idx)}
            >
              <span>
                <img className="h-6" src={option.src} alt={option.title} />
              </span>
              {option.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
