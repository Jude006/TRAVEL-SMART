import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for react-router-dom
import destinations from "../jsons file/trip.json";

function TripCatalog1() {
  const [item, setItem] = useState(destinations);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [searcher, setSearcher] = useState("");

  const handleSearch = (e) => {
    setSearcher(e.target.value);
  };

  // Sort Functions
  const handleSortChange = (e) => {
    const value = e.target.value;

    let sortedItems = [...item];

    if (value === "alphabetical") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "reverseAlphabetical") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (value === "lowToHigh") {
      sortedItems.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (value === "highToLow") {
      sortedItems.sort((a, b) => b.startingPrice - a.startingPrice);
    }

    setItem(sortedItems);
  };

  const filtedItem = item.filter(
    (item) =>
      item.name.toLowerCase().includes(searcher.toLowerCase()) ||
      item.location.toLowerCase().includes(searcher.toLowerCase())
  );

  const filterItem = (catItem) => {
    setSelectedDuration(catItem);
    const updateItem = destinations.filter((curItem) => {
      return curItem.duration === catItem || catItem === "all";
    });
    setItem(updateItem);
  };
  

  return (
    <section className="min-h-screen mt-10 font-mont">
      <div className="text-center mb-3 font-poppins py-10 px-4">
        <h1 className="text-4xl font-bold mb-4 font-poppins">
          Explore the World with Our Exclusive Trips
        </h1>
        <p className="md:text-xl text-lg text-tertiary md:max-w-[80%] text-center mx-auto">
          Dive into our meticulously curated trip catalog and discover
          breathtaking destinations, exciting activities, and unparalleled
          experiences.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-3 md:h-screen">
       

        {/* Sidebar */}
        <div className="md:col-span-4 col-span-12  px-6 py-10 bg-secondary text-primary cursor-pointer flex flex-col gap-3">
          {/* Search bar */}
          <div className="flex flex-col gap-5 max-w-[80%]">
            <label htmlFor="search" className="md:text-2xl text-xl font-bold">
              Enter Search
            </label>
            <input
              type="text"
              placeholder="Enter keyword e.g Maldives"
              onChange={handleSearch}
              className="border-none focus:outline-none py-3 px-6 bg-primary text-tertiary text-lg font-poppins rounded"
            />
          </div>

          {/* Sort by dropdown */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="sortOptions" className="text-lg font-semibold">
                Sort By:
              </label>
              <select
                id="sortOptions"
                onChange={handleSortChange}
                className="border border-tertiary py-3 px-5 text-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select an option</option>
                <option value="alphabetical">Alphabetically (A-Z)</option>
                <option value="reverseAlphabetical">
                  Alphabetically (Z-A)
                </option>
                <option value="lowToHigh">Price (Low to High)</option>
                <option value="highToLow">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Filter by duration */}
          <div>
            <label
              htmlFor="filter-type"
              className="md:text-xl text-lg font-bold"
            >
              Filter By Duration:
            </label>
            <form className="md:text-[16px] text-[14px]">
              {["all", "7 days", "10 days", "8 days", "12 days"].map(
                (duration) => (
                  <div className="flex gap-4 items-center mt-3" key={duration}>
                   
                    <input
                      type="radio"
                      name="duration"
                      id={duration}
                      className=""
                      checked={selectedDuration === duration}
                      onChange={() => filterItem(duration)}
                    />
                     <label htmlFor={duration} className="font-semibold">
                      {duration === "all" ? "All" : duration}
                    </label>
                  </div>
                )
              )}
            </form>
          </div>
        </div>
        <div className="md:col-span-8 col-span-12  bg-secondary py-6 overflow-y-scroll">
          <div className="grid lg:grid-cols-2 lg:px-10 py-3 grid-cols-1 md:grid-cols-2 md:gap-14 gap-8">
            {filtedItem.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md relative w-full"
              >
                <div>
                  <img
                    src={item.gallery[1]}
                    alt=""
                    className="h-52 w-full rounded-t-md object-cover hover:brightness-75 duration-300 ease-in"
                  />
                </div>
                <div className="px-3 bg-primary flex flex-col gap-3 text-tertiary py-3">
                  <div className="flex flex-col items-start gap-2">
                    <p className="md:text-[16px] text-[14px]">
                      <strong>Name:</strong> {item.name}
                    </p>
                    <p className="md:text-[16px] text-[14px] lg:flex hidden">
                      <strong>Location:</strong> {item.location}
                    </p>
                  </div>
                  <p className="md:text-[18px] text-[16px] lg:hidden flex">
                    <strong>Location:</strong> {item.location}
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <p className="md:text-[16px] text-[14px]">
                      <strong>Duration:</strong> {item.duration}
                    </p>
                    <p className="md:text-[16px] lg:flex hidden text-[14px]">
                      <strong>Discount Price:</strong> ${item.discountPrice}
                    </p>
                  </div>
                  <p>
                    <strong>Price: $</strong>
                    {item.startingPrice}
                  </p>
                  <div className="flex items-center gap-8">
                    {/* Link to navigate to the details page */}
                    <Link
                      to={`/trip/${item.id}`}
                      className="py-3 px-6 bg-tertiary hover:bg-opacity-75 duration-200 ease-in-out text-white"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
                <div className="px-6 py-3 bg-tertiary absolute text-white top-36 cursor-pointer rounded-l-full right-0">
                  Tour {item.tour}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TripCatalog1;
