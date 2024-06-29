import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative pt-6 pb-4 overflow-hidden bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap -m-6">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between h-1/2">
              <div className="inline-flex items-center mt-3 mb-4">
                <Logo width="125px" />
              </div>
              <div className="text-justify">
                <p className="pb-6 text-sm text-gray-600 dark:text-gray-400">
                  &copy; Copyright 2024. All Rights Reserved by amank736836.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400 tracking-px">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400 tracking-px">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400 tracking-px">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-green-600"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;