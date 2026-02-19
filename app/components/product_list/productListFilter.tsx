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
      <select
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
        <option value="25-30">$25.00-$30.00</option>
        <option value="30-35">$30.00-$35.00</option>
        <option value="35-40">$35.00-$40.00</option>
        <option value="40-45">$40.00-$45.00</option>
        <option value="45-50">$45.00-$50.00</option>
        <option value="50-55">$50.00-$55.00</option>
        <option value="55-60">$55.00-$60.00</option>
        <option value="65-70">$65.00-$70.00</option>
        <option value="75-80">$75.00-$80.00</option>
        <option value="80-85">$80.00-$85.00</option>
        <option value="85-90">$85.00-$90.00</option>
        <option value="90-95">$90.00-$95.00</option>
        <option value="95-100">$95.00-$100.00</option>
        <option value="100-105">$100.00-$105.00</option>
        <option value="105-110">$105.00-$110.00</option>
        <option value="110-115">$110.00-$115.00</option>
        <option value="115-120">$115.00-$120.00</option>
        <option value="120-125">$120.00-$125.00</option>
        <option value="130-135">$130.00-$135.00</option>
        <option value="135-140">$135.00-$140.00</option>
        <option value="140-145">$140.00-$145.00</option>
        <option value="150-155">$150.00-$155.00</option>
        <option value="155-160">$155.00-$160.00</option>
      </select>
    </div>
  );
}
