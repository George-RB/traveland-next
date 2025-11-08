import { locationItems } from '@/data/location';

function PostHeadSection() {
  return (
    <>
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
      ;
    </>
  );
}

export default PostHeadSection;
