import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 ">
      <div className="border-2 border-indigo-200 lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2> TROPICAL PARADISE CONDOS</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            sed error laborum nesciunt enim dicta ex dolores exercitationem sint
            dolor iste, cum fuga pariatur facere totam magnam voluptatem
            explicabo animi.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
          </div>
          <div>
            <h3>amazing service</h3>
            <p>GYM SAUNA POL CAR CONSIERGE</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
          </div>
          <div>
            <h3>amazing service</h3>
            <p>GYM SAUNA POL CAR CONSIERGE</p>
          </div>
        </div>
      </div>

      <div className=" border-2 border-indigo-200"></div>
    </div>
  );
};

export default Search;
