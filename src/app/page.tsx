import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
    <Navbar />
    <div>
        <h1 className="bold text-2xl">welcome stanger,</h1>
        <p>Glad you made it here.</p>
    </div>
</main>
  );
}
