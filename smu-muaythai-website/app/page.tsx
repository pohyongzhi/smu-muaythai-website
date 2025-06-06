// original 
// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div className="text-red-500 flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold">Hello World</h1>
//       <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/coaches")}>Click me</button>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div className="text-red-500 flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold">Hello World</h1>
//       <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/coaches")}>Click me</button>
//     </div>
//   );
// }


// rachel trial 1
// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div className="text-red-500 flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold">Hello World</h1>
//       <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/coaches")}>Click me</button>
//     </div>
//   );
// }


// rachel trial
"use client";

import Image from "next/image"; // for image loading
import { useRouter } from "next/navigation"; // for navigating btn pages w/o using <Link>

// CircularMenu component - game console
const CircularMenu: React.FC = () => {
  const handleClick = (label: string) => { // handleclick determines what happens when user clicks button
    alert(`You clicked ${label}`); // just tells user that they clicked sth, need to direct them to new page
  };

  const buttonClass =
    "absolute w-24 h-24 bg-gray-700 text-white font-bold rounded-full shadow-lg active:scale-95 transition-duration-200 ease-in-out flex items-center justify-center hover:bg-gray-600";

  return (
    // button is positioned to appear in circular pattern, centres text inside
    // covers both hovering & active states
    <div className="fixed bottom-10 right-10 w-[200px] h-[250px] mx-auto mt-10">
      <button
        onClick={() => handleClick("ABOUT US")}
        className={`${buttonClass} top-0 left-1/2 -translate-x-1/2`}
      >
        ABOUT US
      </button>
      <button
        onClick={() => handleClick("TRAINING")}
        className={`${buttonClass} left-0 top-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        TRAINING
      </button>
      <button
        onClick={() => handleClick("EVENTS")}
        className={`${buttonClass} bottom-0 left-1/2 -translate-x-1/2`}
      >
        EVENTS
      </button>
      <button
        onClick={() => handleClick("CONTACTS")}
        className={`${buttonClass} right-0 top-1/2 -translate-y-1/2 translate-x-1/2`}
      >
        CONTACTS
      </button>
    </div>
  );
};

// Main Page component
export default function Home() {
  const router = useRouter(); // for navigation

  return (
    // full page bg, -z-10 = behind all other content, fills parent container
    // "object-cover..." ensure top of image shows and zoom in abit
    <main className="relative w-screen overflow-x-hidden">

      {/* Smart Background Container */}
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-x-hidden">
        <Image
          src="/homepage-mt-ring.png"
          alt="Background"
          fill
          className="object-cover object-top scale-[1.1]"
          priority
        />
      </div>

      {/* Header with Menu */}
      <header className="w-full h-16 bg-[#BFBFBF] flex items-center px-6 shadow-md">
        {/* Logo - Top Left */}
        <div className="flex items-center h-full">
          <Image
            src="/mt-logo.png"
            alt="SMU Muay Thai Logo"
            width={200}
            height={120}
            className="object-contain h-full py-2"
          />
        </div>

        {/* Menu Buttons */}
        <div className="flex w-full justify-evenly">
          <button
            onClick={() => router.push("/about")}
            className="text-[#444]"
          >
            About Us
          </button>
          <button
            onClick={() => router.push("/training")}
            className="text-[#444]"
          >
            Training
          </button>
          <button
            onClick={() => router.push("/events")}
            className="text-[#444]"
          >
            Events
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="text-[#444]"
          >
            Contacts
          </button>
        </div>
      </header>

      {/* Main Page Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-white text-center px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to SMU Muay Thai</h1>
        <p className="text-lg max-w-2xl">
          Join us for an exciting journey into the world of Muay Thai!
        </p>
      </div>

      {/* Circular Control Buttons */}
      <CircularMenu />
    </main>
  );
}

