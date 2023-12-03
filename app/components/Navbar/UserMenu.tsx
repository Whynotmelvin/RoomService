"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useAmp } from "next/amp";
import { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            font-semibold
            md-block
            text-sm
            py-3
            px-4
            hover:bg-neutral-100
            transition
            cursor-pointer
            rounded-full
         "
        >
          Airbnb your home
        </div>
        <div
          onClick={() => {}}
          className="
         p-4
         md:py-1
         md:px-2
         border-[1px]
         border-neutral-200
         transition
         cursor-pointer
         flex
         flex-row
         items-center
         gap-3
         rounded-full
         hover:shadow-md

         "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
