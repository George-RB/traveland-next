'use client';

import { navItems } from '@/types/navigation';
import { buttonBook, buttonExplore } from '@/types/buttons';
import { locationItems } from '@/types/locations';

export default function Home() {
  return (
    <>
      <header className="max-w-[1600px] my-0 mx-auto text-white">
        <nav className="flex max-w-6xl my-0 mx-auto justify-between items-center pt-9">
          <p id="Home">Traveland</p>
          <ul className="flex justify-between cursor-pointer space-x-8 text-lg text-white [&>li>a]:hover:transition-all [&>li>a]:hover:text-red-400">
            {/* <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Location">Location</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li> */}
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-red-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            id={buttonBook.id}
            className={buttonBook.className}
            onClick={buttonBook.onClick}
          >
            {buttonBook.text}
          </button>

          {/* <button
          id="btnBook"
          className="py-3.5 px-9 bg-red-400 rounded-sm flex-0.5 cursor-pointer hover:scale-105 transition-all"
        >
          Booking now
        </button> */}
        </nav>
        <section className="max-w-6xl mx-auto my-50 pt-9">
          <h1 className="text-6xl max-w-[804px] font-bold">
            Railtrips To Here, <br />
            There And Everywhere!
          </h1>
          <p className="text-xl mt-8 mb-10 max-w-[458px]">
            We all wish to start our year the best way possible and also
            according to a common belief if you have a great start to your.
          </p>
          {/* <button
          className="py-3.5 px-9 bg-red-400 rounded-sm flex-0.5 cursor-pointer hover:scale-105 transition-all"
          id="btnExplore"
        >
          Explore more
        </button> */}
          <button
            id={buttonExplore.id}
            className={buttonExplore.className}
            onClick={buttonExplore.onClick}
          >
            {buttonExplore.text}
          </button>
        </section>
      </header>

      <section className="max-w-6xl my-0 mx-auto pt-36">
        <h2 id="Location" className="text-center text-4xl font-bold pb-5">
          Popular Location
        </h2>
        <p className="text-center max-w-[650px] mx-auto opacity-50 pb-12">
          For every one of us, travel came first. We`ve spent years living as
          nomads, pioneers, and voyagers— from island hopping in the
        </p>

        <section className="flex justify-center gap-6">
          {locationItems.map((location) => (
            <article
              key={location.id}
              className="bg-white rounded-lg shadow-lg flex flex-col w-[360px] hover:scale-95 hover:transition-transform hover:cursor-pointer"
            >
              <div className="h-[331px] overflow-hidden">
                <img
                  src={location.image}
                  alt={location.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <section className="mx-7 my-8">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {location.title}
                </h3>
                <p className="text-center">{location.description}</p>
              </section>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
