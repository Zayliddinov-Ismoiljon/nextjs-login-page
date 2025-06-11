import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 flex items-center">
      <h1 className="text-3xl font-bold">Bosh sahifa</h1>
      <Link href={'/login'} className="py-2 px-4 bg-green-500 text-white rounded ml-5">Login</Link>
    </div>
  );
}