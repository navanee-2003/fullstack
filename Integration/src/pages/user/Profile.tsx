import Collection from "@/components/ui/Collection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { defaultServiceRequest } from "../../../constants/index";
import ServiceRequestCollection from "@/components/ui/ServiceRequestCollection";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [events, setEvents] = useState([]);
  const id = window.sessionStorage.getItem("userId");
  console.log(id);

  const url = `http://localhost:8181/api/v1/user/getBookings/?user_id=${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = window.sessionStorage.getItem("token");
        console.log(token);
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(events);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Pending Requests</h3>
          <Button asChild className="button hidden sm:flex">
            <Link to="/user/home">Explore More</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <ServiceRequestCollection
          data={events}
          emptyTitle="No Pending Requestes"
          emptyStateSubtext="organize your own events"
        />
      </section>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Parties Organized
          </h3>
          <Button asChild className="button hidden sm:flex">
            <Link to="/user/home">Organize More</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <ServiceRequestCollection
          data={events}
          emptyTitle="No parties organized yet"
          emptyStateSubtext="organize parties easier"
        />
      </section>
    </>
  );
};

export default Profile;
