import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/images/contain.png";
import Collection from "@/components/ui/Collection";
import { eventDefaultValues } from "../../../constants/index";

const events = eventDefaultValues;

// console.log(data);

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Where Every Detail Matters, and Every Moment Sparkles{" "}
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Embark on a Journey of Celebration with Evently: Where Imagination
              Meets Expertise, and Every Event Becomes a Timeless Memory.
            </p>
            <Button size={"lg"} asChild className="button w-full sm:w-fit">
              <Link to="/user/explore">Explore Now</Link>
            </Button>
          </div>
          <img
            src={Hero}
            alt="hero"
            width={1000}
            height={1000}
            className="w-full max-h-[70vh] object-contain object-center 2xl:max-h-[70vh] blend-overlay"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          {" "}
          Trusted by <br /> Thousands of Customers
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CatogeryFilter
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Services Available"
          emptyStateSubtext="Sorry For the Inconvience!"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
};

export default Home;
