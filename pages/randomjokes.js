import React, { useEffect, useState } from "react";
import Image from "next/image"
const url = process.env.REACT_APP_API_KEY;
console.log(url);

export const getServerSideProps = async () => {
  const joke = await fetch("https://v2.jokeapi.dev/joke/Any");
  let allJoke = await joke.json();
  console.log(allJoke);
  return {
    props: {
      allJoke,
    },
  };
};

export const randomJokes = ({ data, allJoke, allAlbums }) => {
  // const [jokes, setValues] = useState({ joke: "", setup: "", delivery: "" });
  // const getNewJoke = () => {
  //   fetch("https://v2.jokeapi.dev/joke/Any")
  //     .then((response) => response.json())
  //     .then(
  //       (data) => console.log(data),
  //       setValues({
  //         joke: data?.joke,
  //         setup: data?.setup,
  //         delivery: data?.delivery,
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   return data;
  // };
  // useEffect(() => {
  //   const joke = getNewJoke;
  //   console.log(joke);
  // }, [getNewJoke]);
  // console.log("jokes", jokes);
  // console.log("data?.setup",data?.setup);
  // console.log(data);
  // console.log(data.type);

  return (
    <div>
      {/* {allJoke?.type == "single" ? (
        <div>{allJoke?.joke}</div>
      ) : (
        <div>
          {allJoke.setup}
          {allJoke?.delivery}
        </div>
      )} */}

      <div className="grid pt-4 place-items-center">
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
          // onClick={ getStaticProp}
        >
          Click to get a new joke!
        </button>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xs"
                // checked
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XS
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="s"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                S
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="m"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                M
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="l"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                L
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xl"
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XL
              </div>
            </label>
          </div>
        </div>
      </div>

      {allJoke?.type == "single" ? (
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
              <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col sm:flex-row mt-10">
                  <div class="sm:w-1/2 text-center sm:pr-8 sm:py-8">
                    <div class="w-20 h-20 r=5 rounded-full inline-flex items-center justify-center bg-black text-gray-400">
                      <img
                        alt="content"
                        class="object-fill object-center rounded-lg h-full w-full"
                        src="\cat (1).png"
                      ></img>
                    </div>
                  </div>
                  <div class="sm:w-2/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p class="leading-relaxed text-lg mb-4">
                    {allJoke?.joke}
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
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-300 text-purple-500 flex-shrink-0">
                    <img
                        alt="content"
                        class="object-fill object-center rounded-lg h-full w-full"
                        src="\pumpkin.png"
                      ></img>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        {" "}
                        {allJoke.setup}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-purple-500 flex-shrink-0">
                    <img
                        alt="content"
                        class="object-fill object-center rounded-lg h-full w-full"
                        src="\cat (3).png"
                      ></img>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        {allJoke?.delivery}
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
