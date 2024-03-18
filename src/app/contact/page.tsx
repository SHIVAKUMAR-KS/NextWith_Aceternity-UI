import React from "react";
import { Meteors } from "@/components/ui/meteors";

function Page() {
  return (
    <div className="relative h-screen bg-gray-900 flex flex-col justify-center  mx-6 my-6 items-center">
      <Meteors number={20} />
      <form className="justify-center mt-8 w-full max-w-sm">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
              id="grid-name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="john.doe@example.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              id="grid-message"
              placeholder="Your message here..."
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <button
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
