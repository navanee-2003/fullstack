import Collection from "@/components/ui/Collection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { eventDefaultValues } from "../../../constants/index";

const events = eventDefaultValues;

const Profile = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Invitations Recieved</h3>
          <Button asChild className="button hidden sm:flex">
            <Link to="/user/home">Explore More</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
      <Collection
          data={events?.data}
          emptyTitle="No invitaions recieved yet"
          emptyStateSubtext="No worries - organize your own events"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          totalPages={2}
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
      <Collection
          data={events?.data}
          emptyTitle="No parties organized yet"
          emptyStateSubtext="organize parties easier"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
};

export default Profile;
