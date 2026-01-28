import Search from "./components/searchbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1>Dashboard</h1>
      <Search placeholder="Search Products..." />
    </div>
  );
}
