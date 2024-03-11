import Image from "@/assets/images/babyshower.jpg";
import Calendar from "@/assets/icons/calendar.svg";
import Location from "@/assets/icons/location.svg";
// import Collection from "@/components/ui/Collection";
import { defaultServiceRequest } from "../../../constants/index";
import ServiceRequestCollection from "@/components/ui/ServiceRequestCollection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ServiceRequestDetails = () => {
  const events = defaultServiceRequest;

  const { id } = useParams();
  const url = `http://localhost:8181/api/v1/user/getBooking/${id}`;

  const [event, setEvent] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = window.sessionStorage.getItem("token");
        console.log(token);
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
            // Add other headers if needed
          },
        });
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(event);

  if (!event) {
    return (
      <div className="">
        <ServiceRequestCollection
          data={[]}
          emptyTitle="No Booking found with the requested ID!"
          emptyStateSubtext="Sorry For the Inconvience!"
        />
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Related Categories</h2>
          <ServiceRequestCollection
            data={[]}
            emptyTitle="No Related Services"
            emptyStateSubtext="Sorry For the Inconvience!"
          />
        </section>
      </div>
    );
  }

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <img
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-contain object-center blend-overlay"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3 items-center">
                  <p className="p-bold-20">Proposed Budget : </p>
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    $ {event.proposedBudget}
                  </p>
                  {/* <p className="p-semibold-14">{"--->"}</p>
                  <p className="p-bold-16 rounded-full bg-red-500/10 px-4 py-2.5 text-black-500">
                    $ {events.data[0].maxPrice}
                  </p> */}
                </div>
                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  Category :{" "}
                  <span className="text-primary-500">
                    {event.category}
                  </span>
                </p>
              </div>
            </div>
            {/* CHECKOUT BUTTON */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                {/* <img src={Calendar} alt="calendar" width={32} height={32} /> */}
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>Requested on : {event.dateTime}</p>
                </div>
              </div>
              <div className="p-regular-20 flex items-center gap-3">
                <img src={Location} alt="location" width={32} height={32} />
                <p className="p-medium-16 lg:p-regular-20">
                  {event.location}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">Instructions :</p>
              <p className="p-medium-16 lg:p-regular-18">
                {event.instructions}
              </p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-red-500 ">
                Request Status :{" "}
                {events.isAccepted ? "Accepted" : "Pending"}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* RELATED PARTY CATEGORIES */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Previous Organized Parties</h2>
        <ServiceRequestCollection
          data={[]}
          emptyTitle="No Services Available"
          emptyStateSubtext="Sorry For the Inconvience!"
        />
      </section>
    </>
  );
};

export default ServiceRequestDetails;
