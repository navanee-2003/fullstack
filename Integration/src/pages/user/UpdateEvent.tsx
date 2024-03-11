import PartyForm from "@/components/ui/PartyForm";
// import { useAuth } from "@clerk/clerk-react";
// import { useUser } from "@clerk/clerk-react";
import { defaultFormValues } from "../../../constants/index";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateEvent = () => {
  const { id } = useParams();
  const url = `http://localhost:8181/api/v1/user/getBookingData/${id}`;

  console.log(id);


  const [event, setEvent] = useState([]);

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
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Party
        </h3>
      </section>

      <div className="wrapper my-8">
        <PartyForm userId={window.sessionStorage.getItem("userId")} type="Update" event={event} />
      </div>
    </>
  );
};

export default UpdateEvent;
