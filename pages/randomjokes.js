import React, { useEffect, useState } from "react";
import Image from "next/image";
const url = process.env.REACT_APP_API_KEY;
console.log(url);

// export const getServerSideProps = async () => {
//   const joke = await fetch("https://v2.jokeapi.dev/joke/Any");
//   let Joke = await joke.json();
//   // console.log(Joke);
//   return {
//     props: {
//       Joke,
//     },
//   };
// };

export const randomJokes = ({ Joke }) => {
  const [currentJoke, setCurrentJoke] = useState("");
  // const getNewJoke = async () => {
  //   const response = await fetch("/api/randomJoke", {
  //     method: "GET",
  //   });
  //   let allJoke = await response.json();
  //   setCurrentJoke(allJoke);
  // };
  // // console.log(currentJoke);

  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    e?.preventDefault;
    setQuery(e?.target.value);
  };
  const getNewJoke = async () => {
    const response = await fetch("/api/randomJoke", {
      method: "GET",
      headers: {
        query: query,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setCurrentJoke(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getNewJoke();
    handleQuery();
  }, []);

  return (
    <div>
      {/* {currentJoke?.type == "single" ? (
        <div>{currentJoke?.joke}</div>
      ) : (
        <div>
          {currentJoke?.setup}
          {currentJoke?.delivery}
        </div>
      )} */}

      <div className="grid pt-4 place-items-center">
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
          onClick={getNewJoke}
        >
          Click to get a new joke!
        </button>
        <div className="flex items-baseline mt-4 mb-6 pb-2 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="?type=single"
                // checked
                // checked={this.value}
                onChange={handleQuery}
              />
              <div className="w-24 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                Single
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="?type=twopart"
                onChange={handleQuery}
              />
              <div className="w-24 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                Double
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value=""
                onChange={handleQuery}
              />
              <div className="w-24 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                Reset
              </div>
            </label>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            class=" form-check-input focus:outline-none  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2  w-4 h-4  text-blue-100 bg-white rounded-sm border border-gray-300  cursor-pointer transition duration-200"
          />
          <label
            for="link-checkbox"
            class=" mr-2 text-sm font-medium text-gray-200 dark:text-gray-500"
          >
            Programming
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            class=" form-check-input focus:outline-none  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2  w-4 h-4  text-blue-100 bg-white rounded-sm border border-gray-300  cursor-pointer transition duration-200"
          />
          <label
            for="link-checkbox"
            class="mr-2 text-sm font-medium text-gray-200 dark:text-gray-500"
          >
            Religious
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            class=" form-check-input focus:outline-none  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2  w-4 h-4  text-blue-100 bg-white rounded-sm border border-gray-300  cursor-pointer transition duration-200"
          />
          <label
            for="link-checkbox"
            class="mr-2 text-sm font-medium text-gray-200 dark:text-gray-500"
          >
            Dark
          </label>
        </div>
      </div>

      {currentJoke?.type == "single" ? (
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5  mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/2 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 r=5 rounded-full inline-flex items-center justify-center bg-black text-gray-400">
                      <img
                        alt="content"
                        className="object-fill object-center rounded-lg h-full w-full"
                        src="\cat (1).png"
                      ></img>
                    </div>
                  </div>
                  <div className="sm:w-2/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4">
                      {/* {allJoke?.joke} */}
                      {currentJoke?.joke}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-300 text-purple-500 flex-shrink-0">
                      <img
                        alt="content"
                        className="object-fill object-center rounded-lg h-full w-full"
                        src="\cat (2).png"
                      ></img>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        {/* {allJoke?.setup} */}
                        {currentJoke?.setup}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-300 text-purple-500 flex-shrink-0">
                      <img
                        alt="content"
                        className="object-fill object-center rounded-lg h-full w-full"
                        src="\cat (3).png"
                      ></img>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        {/* {allJoke?.delivery} */}
                        {currentJoke?.delivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default randomJokes;
