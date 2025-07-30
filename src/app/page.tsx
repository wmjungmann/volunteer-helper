import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-100 p-10">
        <h1 className="text-2xl font-bold">Upcoming Jobs</h1>
          <ul className="grid grid-cols-2 gap-4 list-none p-4">
            <li className="bg-white border p-10">Item 1</li>
            <li className="bg-white border p-10">Item 2</li>
            <li className="bg-white border p-10">Item 3</li>
            <li className="bg-white border p-10">Item 4</li>
          </ul>
        <h1 className="text-2xl font-bold">Up for Grabs</h1>
          <ul className="grid grid-cols-2 gap-4 list-none p-4">
            <li className="bg-white border p-10 rounded">Item 1</li>
            <li className="bg-white border p-10 rounded">Item 2</li>
            <li className="bg-white border p-10 rounded">Item 3</li>
            <li className="bg-white border p-10 rounded">Item 4</li>
          </ul>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p> </p>
      </footer>
    </div>
  );
}
