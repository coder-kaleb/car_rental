import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constant";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 20,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className=" overflow-hidden">
      <Hero />

      <div className=" mt-12 padding-x padding-y max-width" id="discover">
        <div className=" home__text-container">
          <h1 className="text-5xl font-extrabold">Car Catalogue</h1>
          <p className=" text-xl">Explore out cars you might like</p>
        </div>

        <div className=" home__filters">
          <SearchBar />

          <div className=" home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className=" home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            {/* show more button */}
            <ShowMore
              pageNumber={(searchParams.limit || 20) / 10}
              isNext={(searchParams.limit || 20) > allCars.length}
            />
          </section>
        ) : (
          <div className=" home-__error-container">
            <h2 className="text-black text-3xl font-bold mt-14">
              Oops, no results
            </h2>
            <p>{allCars?.messsage}</p>
          </div>
        )}
      </div>
    </main>
  );
}
