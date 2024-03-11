import Card from "./Card";

type CollectionProps = {
  data: {
    id: string;
    title: string;
    description: string;
    location: string;
    // DateTime: Date;
    minPrice: number;
    // url: string;
    maxPrice: number;
    organizer: string;
    imageUrl: string;
  }[];
  emptyTitle: string;
  emptyStateSubtext: string;
};



const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-col-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              return (
                <li key={event.id} className="flex justify-center">
                  <Card event={event} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
