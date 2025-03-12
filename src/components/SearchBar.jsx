import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="">
      <input
        type="text"
        value=""
        onChange=""
        placeholder="Search"
        className="lg:w-full lg:pl-7 lg:pr-4 lg:py-2 lg:border lg:border-gray-400 lg:rounded-full lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-black lg:bg-white"
      />
    </div>
  );
}
