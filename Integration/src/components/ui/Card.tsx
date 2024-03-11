import { Link, useParams } from "react-router-dom";
import Arrow from "@/assets/icons/arrow.svg";
import Edit from "@/assets/icons/edit.svg";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { useEffect } from "react";

type CardProps = {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    // DateTime: Date;
    minPrice: number;
    // isFree: boolean;
    // url: string;
    maxPrice: number;
    organizer: string;
    // createdAt: string;
    imageUrl: string;
    // __v: number;
  };
};

const Card = ({ event }: CardProps) => {

  const isAdmin = false;

  // useEffect(() => {
  //   try {
  //     // console.log(id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const {sessionClaims} = useAuth();
  // const userId = sessionClaims?.userId as string;

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        to={`/user/partyDetails/${event.id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      ></Link>
      {/* {isAdmin && ( */}
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          {/* <Link to={`/user/updateService/`}>
            <img src={Edit} alt="edit" width={20} height={20} />
          </Link> */}
          <DeleteConfirmation eventId={event.id} />
        </div>
      {/* )} */}
      <div className="flex flex-col gap-3 p-5 md:gap-4 ">
        {
          <div className="flex gap-2 items-center">
            <p className="p-semibold-14">Price range : </p>
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              ${event.minPrice}
            </span>
            <p className="p-semibold-14">{"--->"}</p>
            <p className="p-semibold-14 w-win rounded-full bg-red-100 px-4 py-1 text-black-60">
              ${event.maxPrice}
            </p>
          </div>
        }
        <p className="p-medium-16 p-medium-18 text-grey-500">
          Locations : {event.location}
        </p>
        <Link to={`/user/partyDetails/${event.id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer}
          </p>
          {/* {hasOrderLink && ( */}
          <Link to={`/user/partyDetails/${event.id}`} className="flex gap-2">
            <p className="text-primary-500">Details</p>
            <img src={Arrow} alt="search" width={10} height={10} />
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
