'use client'
import Link from "next/link";
import { ThemeChanger } from "./DarkSwitch";
import { ThemeProvider } from "./theme-provider";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import BookAMeeting from "./BookAMeetingBtn";

const Navbar = () => {
  const navigation = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Features',
      route: '/#features'
    },
    {
      name: 'Pricing',
      route: '/prices'
    },
    {
      name: 'About Us',
      route: '/about'
    },
    {
      name: 'Help',
      route: '/contact'
    }
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="w-full ">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-start xl:px-0 ">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 ">
                      <span>
                        <Image
                          src="/logo.svg"
                          alt="N"
                          width="32"
                          height="32"
                          className="w-8"
                        />
                      </span>
                      <span>Wavez</span>
                    </span>
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto    lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden justify-center">
                    <><div className=""><ThemeChanger /></div>
                      {navigation.map((item, index) => (
                        <Link key={index} href={item.route} className="w-full px-4 py-2 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none  rounded-md">
                          {item.name}
                        </Link>

                      ))}

                      <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 lg:ml-5  rounded-md">
                        Get Started
                      </Link>

                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}


          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center lg:ml-14">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link href={menu.route} className="inline-block px-4 py-2 text-base font-normal no-underline hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800  rounded-md">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item mx-auto">
            <BookAMeeting title="Get Started" />


            <ThemeChanger />


          </div>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;
