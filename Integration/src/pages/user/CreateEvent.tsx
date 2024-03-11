import PartyForm from "@/components/ui/PartyForm";
import { useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const CreateEvent = () => {
  
  const userId = window.sessionStorage.getItem("userId");
  // const { isSignedIn, user, isLoaded } = useUser();

  console.log(userId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Party
        </h3>
      </section>

      <div className="wrapper my-8">
        <PartyForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
