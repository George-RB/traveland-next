function Cards() {
  return (
    <section className="max-w-6xl my-0 mx-auto pt-36">
      <h2 className="text-center text-4xl font-bold pb-5">Special Offers</h2>
      <p className="text-center max-w-[650px] mx-auto opacity-50 pb-12">
        With the New Year comes a refreshing sense of wanderlust, a longing in
        our souls to escape to warmer climates,
      </p>
      <section className="slider-wrapper overflow-hidden">
        <section
          className="flex justify-center gap-6 [&>article]:hover:text-red-400 [&>article]:hover:cursor-pointer"
          id="slider-container"
        >
          <article className="bg-white rounded-lg shadow-lg flex flex-col w-[262px]">
            <div className="h-[173px] overflow-hidden rounded-2xl">
              <img
                src="./img/travel/usa-best-places-new-york 1.png"
                alt="Statue of Liberty"
                className="w-full h-full object-cover"
              />
            </div>
            <section>
              <h3 className="text-xl font-medium mb-2 mt-5 text-left">
                Statue of Liberty
              </h3>
              <section className="flex justify-between items-center max-h-8">
                <div className="location flex">
                  <img src="./img/ico/location.png" alt="location" />
                  <p className="ml-2.5">New York</p>
                </div>
                <div className="stars flex mr-2.5">
                  <img src="./img/ico/star.png" alt="star" />
                  <p className="ml-2.5">4.8</p>
                </div>
              </section>
              <p className="my-2 opacity-50">4 Day 5 Nights</p>
              <p>$450/person</p>
            </section>
          </article>

          <article className="bg-white rounded-lg shadow-lg flex flex-col w-[262px]">
            <div className="h-[173px] overflow-hidden rounded-2xl">
              <img
                src="./img/travel/china-great-wall-and-mountain 1.png"
                alt="The Great Wall "
                className="w-full h-full object-cover"
              />
            </div>
            <section>
              <h3 className="text-xl font-medium mb-2 mt-5 text-left">
                The Great Wall
              </h3>
              <section className="flex justify-between items-center max-h-8">
                <div className="location flex">
                  <img src="./img/ico/location.png" alt="location" />
                  <p className="ml-2.5">China</p>
                </div>
                <div className="stars flex mr-2.5">
                  <img src="./img/ico/star.png" alt="star" />
                  <p className="ml-2.5">4.9</p>
                </div>
              </section>
              <p className="my-2 opacity-50">7 Day 8 Nights</p>
              <p>$850/person</p>
            </section>
          </article>

          <article className="bg-white rounded-lg shadow-lg flex flex-col w-[262px]">
            <div className="h-[173px] overflow-hidden rounded-2xl">
              <img
                src="./img/travel/Discover-sajek-valley 1.png"
                alt="Sajek Valley
"
                className="w-full h-full object-cover"
              />
            </div>
            <section>
              <h3 className="text-xl font-medium mb-2 mt-5 text-left">
                Sajek Valley
              </h3>
              <section className="flex justify-between items-center max-h-8">
                <div className="location flex">
                  <img src="./img/ico/location.png" alt="location" />
                  <p className="ml-2.5">Bangladesh</p>
                </div>
                <div className="stars flex mr-2.5">
                  <img src="./img/ico/star.png" alt="star" />
                  <p className="ml-2.5">4.7</p>
                </div>
              </section>
              <p className="my-2 opacity-50">3 Day 4 Nights</p>
              <p>$400/person</p>
            </section>
          </article>
        </section>
        <div className="slider-controls flex justify-center gap-4 mt-4">
          <button id="slide-left" className="px-4 py-2 bg-gray-300 rounded">
            ←
          </button>
          <button id="slide-right" className="px-4 py-2 bg-gray-300 rounded">
            →
          </button>
        </div>
      </section>
    </section>
  );
}

export default Cards;
