import Image from "next/image";
import Link from "next/link";
import React from "react";

import all from "@/public/all.jpeg";
import men from "@/public/men.jpeg";
import women from "@/public/women.jpeg";

const CategorySelection = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Shop By category
        </h2>
        <Link
          className="text-sm font-semibold text-primary hover:text-primary/80"
          href={"/products/all"}
        >
          Brows All Products &rarr;
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        {/* Big left image */}
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2 transition-transform hover:scale-105">
          <Image
            src={all}
            alt="all products image"
            className="object-cover object-center"
          />
          <div className="bg-gradient-to-b from-transparent  to-black opacity-50" />
          <div className="p-6 flex items-end">
            <Link href={"/products/all"}>
              <h3 className="text-white font-semibold">All Products</h3>
              <p className="mt-1 text-sm text-white">Shop now</p>
            </Link>
          </div>
        </div>
        {/* 1st right images */}
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full transition-transform hover:scale-105 ">
          <Image
            src={men}
            alt="men products image"
            className="object-top object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent  to-black opacity-50 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href={"/products/men"}>
              <h3 className="text-white font-semibold">Men Products</h3>
              <p className="mt-1 text-sm text-white">Shop now</p>
            </Link>
          </div>
        </div>
        {/* 2nd right images */}
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full  transition-transform hover:scale-105">
          <Image
            src={women}
            alt="women products image"
            className="object-top object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent  to-black opacity-50 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href={"/products/women"}>
              <h3 className="text-white font-semibold">Women Products</h3>
              <p className="mt-1 text-sm text-white">Shop now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
