import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import Group11 from "../images/Group 11 1.png";

export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-t-8 bg-gray1 text-customWhite lg:p-10 "
    >
      <div className="w-full max-w-7xl mx-auto space-y-4">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 ">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <img src={Group11} alt="logo" className="w-30 h-20" />
            </Link>
          </div>
          <div className="grid  grid-cols-3 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 space-y-4 space-x-2">
            <div className="space-y-4">
              <Footer.Title title="Information" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" rel="noopener_noreferrer">
                  Main
                </Footer.Link>
                <Footer.Link href="/gallery" rel="noopener_noreferrer">
                  Gallery
                </Footer.Link>
                <Footer.Link href="/projects" rel="noopener_noreferrer">
                  Projects
                </Footer.Link>
                <Footer.Link href="/certificates" rel="noopener_noreferrer">
                  Certifications
                </Footer.Link>
                <Footer.Link href="/contacts" rel="noopener_noreferrer">
                  Contacts
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="space-y-4">
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" rel="noopener_noreferrer">
                  <div className="flex">
                    <svg
                      class="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    1234 Sample Street Austin Texas 78704
                  </div>
                </Footer.Link>
                <Footer.Link href="/" rel="noopener_noreferrer">
                  <div className="flex">
                    <svg
                      class="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                    </svg>
                    512.333.2222
                  </div>
                </Footer.Link>
                <Footer.Link href="/" rel="noopener_noreferrer">
                  <div className="flex">
                    <svg
                      class="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    sampleemail@gmail.com
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="pl-20 space-y-4 ">
              <Footer.Title title="Social Media" />
              <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon
                  href="/"
                  icon={BsInstagram}
                />
                <Footer.Icon
                  href="/"
                  icon={BsTwitter}
                />
                <Footer.Icon
                  href="/"
                  icon={BsGithub}
                />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex justify-center text-center sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by=" All rights reserved  "
            year={new Date().getFullYear()}
          />
          {/* <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/piyushkumar.nayak/?hl=en' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/Piyushnayak_007' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/piyush932' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div> */}
        </div>
      </div>
    </Footer>
  );
}
