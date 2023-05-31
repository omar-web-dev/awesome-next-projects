import Link from "next/link";
import React from "react";
import { menu_items } from "./Header.config";

const Desktop = () => {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}
      <ul className="flex items-center justify-end ">
        {menu_items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="flex items-center px-5 uppercase text-[15px] font-Inter font-bold"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/************************ desktop menu end here *************************/}
    </div>
  );
};

export default Desktop;
