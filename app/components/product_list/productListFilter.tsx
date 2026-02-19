"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Define types
import { Artisan, Category } from "@/app/lib/definitions";
export default function ProductListFilter({
  categories,
  artisans,
}: {
  categories: Category[];
  artisans: Artisan[];
}) {
  console.log(categories, artisans);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleSelection(selectionType: string, value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(selectionType, value);
    } else {
      params.delete(selectionType);
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="flex flex-row justify-evenly w-full py-2">
      <select
        defaultValue={searchParams.get("artisan") || ""}
        onChange={(e) => handleSelection("artisan", e.target.value)}
        name="artisan"
        id="artisan"
        className="border border-black hover:bg-gray-100"
      >
        <option value="">Artisan</option>
        {artisans.map((artisan) => (
          <option key={artisan.id} value={artisan.name.toLowerCase()}>
            {artisan.name}
          </option>
        ))}
      </select>
      <select
        defaultValue={searchParams.get("category") || ""}
        onChange={(e) => handleSelection("category", e.target.value)}
        name="category"
        id="category"
        className="border border-black hover:bg-gray-100"
      >
        <option value="">Category</option>
        {categories.map((category: Category) => (
          <option key={category.id} value={category.name.toLowerCase()}>
            {category.name}
          </option>
        ))}
      </select>
      {/* <select
        defaultValue={searchParams.get("pricerange") || ""}
        onChange={(e) => handleSelection("pricerange", e.target.value)}
        name="pricerange"
        id="pricerange"
        className="border border-black hover:bg-gray-100"
      >
        <option value="">Price Range</option>
        <option value="0-5">$0.00-$5.00</option>
        <option value="5-10">$5.00-$10.00</option>
        <option value="10-15">$10.00-$15.00</option>
        <option value="15-20">$15.00-$20.00</option>
        <option value="20-25">$20.00-$25.00</option>
      </select> */}
      <input></input>
    </div>
  );
}
