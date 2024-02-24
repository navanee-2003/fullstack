import { Link } from "react-router-dom";
import Arrow from "@/assets/icons/arrow.svg";
import Edit from "@/assets/icons/edit.svg";
import DeleteConfirmation from "../DeleteConfirmation";

type CardProps = {
  event: {
    _id: number;
    title: string;
    description: string;
    location: string;
    endDateTime: string;
    price: number;
    isFree: boolean;
    url: string;
    category: { name: string };
    organizer: { firstName: string; lastName: string };
    createdAt: string;
    imageUrl: string;
    __v: number;
  };
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  // const {sessionClaims} = useAuth();
  // const userId = sessionClaims?.userId as string;

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        to={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      ></Link>
      {!hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link to={`/events/${event._id}/update`}>
            <img src={Edit} alt="edit" width={20} height={20} />
          </Link>
          {/* <DeleteConfirmation eventId={event._id}/> */}
        </div>
      )}
      <Link
        to={`/events/${event._id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-win rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
              {event.category.name}
            </p>
          </div>
        )}
        <p className="p-medium-16 p-medium-18 text-grey-500">
          {event.endDateTime}
        </p>
        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.title}
        </p>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>
          {/* {hasOrderLink && ( */}
          <Link to={`/orders?eventId=${event._id}`} className="flex gap-2">
            <p className="text-primary-500">Order Details</p>
            <img src={Arrow} alt="search" width={10} height={10} />
          </Link>
          {/* )} */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
