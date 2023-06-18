import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY CONDOS FOR YOU</h2>
          <p className="py-4">
            Modern, sleek and situated in the heart of the action. Step into the
            luxurious lifestyle you've always dreamed of in our prestigious
            condos. From the chic design to the high-end finishes, these
            residences are truly the epitome of opulence. They don't break the
            bank either!{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">ONLY THE BEST</h3>
              <p className="py-1">RIGHT IN THE HEART OF THE ACTION</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border flex flex-col items-center text-center p-2">
          <p className="py-2">GET DISCOUNT OF 10% WITH REFERRAL</p>
          <p className="py-4">24 HOURS LEFT</p>
          <p className="bg-gray-700 text-gray-200 py-2 w-full">BOOK NOW</p>
        </div>

        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>location</label>
            <select className="border rounded-md p-2">
              <option value="">Saraburi</option>
              <option value="">Nonthaburi</option>
              <option value="">Roi Et</option>
              <option value="">Sukhumvit</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Start date</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>End date</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div>
            <button className="w-full my-4 ">PRICE AND AVAILABILITY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
