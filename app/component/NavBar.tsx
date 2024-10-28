// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Avatar from "react-avatar";
// import { PiSignOutBold } from "react-icons/pi";

// type NavBarProps = {
//   setAsideOpen: (isOpen: boolean) => void;
// };

// const NavBar = ({ setAsideOpen }: NavBarProps) => {
//   const [isAsideOpen, setAsideOpenState] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleAside = () => {
//     const newState = !isAsideOpen;
//     setAsideOpenState(newState);
//     setAsideOpen(newState); // Update parent state
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen((prevState) => !prevState); // Properly toggle dropdown state
//   };

//   return (
//     <nav className="bg-[rgb(32,32,33)] text-white overflow-hidden shadow-md sticky top-0 z-50 flex justify-between items-center h-12 p-4">
//       <div className="flex items-center space-x-4">
//         <GiHamburgerMenu
//           size={28}
//           className="hover:bg-gray-500 cursor-pointer"
//           onClick={toggleAside}
//         />
//       </div>
//       <div className="relative">
//         <Avatar
//           size="35"
//           className="rounded-full cursor-pointer"
//           src="https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg"
//           onClick={toggleDropdown}
//         />
//         {/* Dropdown Menu */}
//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-[rgb(32,32,33)] rounded-md shadow-lg z-20">
//             <div className="flex justify-center items-center mt-3 py-2">
//               <Avatar
//                 size="60"
//                 className="rounded-full cursor-pointer"
//                 src="https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg"
//               />
//             </div>
//             <div className="py-2 text-white">
//               <p className="flex justify-center text-2xl p-2 text-white">Hello'🙌</p>
//               <a
//                 href="http://localhost:3000/signup"
//                 className="mt-2 px-4 py-2 text-gray-300 flex justify-center items-center hover:bg-gray-100 hover:text-black"
//               >
//                 <PiSignOutBold size={20} className="mr-2 " /> Sign Out
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Avatar from "react-avatar";
// import { PiSignOutBold } from "react-icons/pi";

// type NavBarProps = {
//   setAsideOpen: (isOpen: boolean) => void;
// };

// const NavBar = ({ setAsideOpen }: NavBarProps) => {
//   const [isAsideOpen, setAsideOpenState] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleAside = () => {
//     const newState = !isAsideOpen;
//     setAsideOpenState(newState);
//     setAsideOpen(newState); // Update parent state
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-[rgb(32,32,33)] text-white overflow-hidden shadow-md sticky top-0 z-50 flex justify-between items-center h-12 p-4">
//       <div className="flex items-center space-x-4">
//         <GiHamburgerMenu
//           size={28}
//           className="hover:bg-gray-500 cursor-pointer"
//           onClick={toggleAside}
//         />
//       </div>
//       <div className="relative">
//         <Avatar
//           size="35"
//           className="rounded-full cursor-pointer"
//           src="https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg"
//           onClick={toggleDropdown}
//         />
//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-[rgb(32,32,33)] rounded-md shadow-lg z-10">
//             <div className="flex justify-center items-center mt-3 py-2">
//               <Avatar
//                 size="60"
//                 className="rounded-full cursor-pointer"
//                 src="https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg"
//               />
//             </div>
//             <div className="py-2 text-white">
//               <p className="flex justify-center text-2xl p-2 text-white">Hello'🙌</p>
//               <a
//                 href="http://localhost:3000/signup"
//                 className="mt-2 px-4 py-2 text-gray-700 flex justify-center items-center hover:bg-gray-100"
//               >
//                 <PiSignOutBold size={20} className="mr-2 " /> Sign Out
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "react-avatar";
import { PiSignOutBold } from "react-icons/pi";

type NavBarProps = {
  setAsideOpen: (isOpen: boolean) => void;
};

const NavBar = ({ setAsideOpen }: NavBarProps) => {
  const [isAsideOpen, setAsideOpenState] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleAside = () => {
    const newState = !isAsideOpen;
    setAsideOpenState(newState);
    setAsideOpen(newState); // Update parent state
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="  text-white  shadow-md sticky top-0 z-50 flex justify-between items-center h-12 p-4">
      <div className="flex items-center space-x-4">
        <GiHamburgerMenu
          size={28}
          className="hover:bg-gray-500 cursor-pointer"
          onClick={toggleAside}
        />
      </div>
      <div className="relative">
        <Avatar
          size="35"
          className="rounded-full cursor-pointer"
          src="https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10">
            <div className="flex justify-center items-center mt-3 py-2"><Avatar
             size="60"
             className="rounded-full cursor-pointer "
             src="https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg"
          
            /></div>
            <div className="py-2 ">
            
              <p className="flex justify-center text-2xl p-2">Hello'🙌</p>
              {/* <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </a> */}
              <a href="http://localhost:3000/signup" className="mt-2 px-4 py-2 flex justify-center items-center hover:bg-gray-100">
              <PiSignOutBold size={20} className="mr-2 text-white "/> Sign Out
              </a>
              {/* <a href="http://localhost:3000/login" className="mt-2 px-4 py-2 text-gray-700 flex justify-center items-center hover:bg-gray-100">
              <PiSignOutBold size={20} className="mr-2 "/> Login
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
