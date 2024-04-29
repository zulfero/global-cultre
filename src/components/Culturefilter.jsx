import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function Culture() {
  const [filter, setFilter] = useState("");
  
  // Sample data for demonstration
  const cultures = [
    // { id: 1, name: "Culture 1" },
    // { id: 2, name: "Culture 2" },
    // { id: 3, name: "Culture 3" },
    // { id: 4, name: "Culture 4" }
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter cultures based on search query
  const filteredCultures = cultures.filter((culture) =>
    culture.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="flex items-center border border-stone-500 rounded-full px-5 gap-3 mt-6 w-[80%] mx-auto justify-between py-2 ">
        <div className="flex items-center gap-4 w-[100%] ">
          <input
            className="text-[1.2rem] py-3 px-3 w-[100%] outline-none"
            type="text"
            placeholder="Search A Culture"
            value={filter}
            onChange={handleFilterChange}
          />
          <IoSearch size={30} />
        </div>
      </div>
      {/* Display filtered cultures */}
      <div className="mt-6">
        <ul>
          {filteredCultures.map((culture) => (
            <li key={culture.id}>{culture.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Culture;
