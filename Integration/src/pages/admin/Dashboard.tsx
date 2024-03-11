import AdminCard, { CardContent, CardProps } from "@/components/AdminCard";
import BarChart from "@/components/Barchart";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import image from "@/assets/images/logo.svg"

const Dashboard = () => {

    const cardData: CardProps[] = [
        {
          label: "Total Revenue",
          amount: "$45,231.89",
          discription: "+20.1% from last month",
          icon: DollarSign
        },
        {
          label: "Subscriptions",
          amount: "+2350",
          discription: "+180.1% from last month",
          icon: Users
        },
        {
          label: "Sales",
          amount: "+12,234",
          discription: "+19% from last month",
          icon: CreditCard
        },
        {
          label: "Active Now",
          amount: "+573",
          discription: "+201 since last hour",
          icon: Activity
        }
      ];
    
      const uesrSalesData: SalesProps[] = [
        {
          name: "Olivia Martin",
          email: "olivia.martin@email.com",
          saleAmount: "+$1,999.00"
        },
        {
          name: "Jackson Lee",
          email: "isabella.nguyen@email.com",
          saleAmount: "+$1,999.00"
        },
        {
          name: "Isabella Nguyen",
          email: "isabella.nguyen@email.com",
          saleAmount: "+$39.00"
        },
        {
          name: "William Kim",
          email: "will@email.com",
          saleAmount: "+$299.00"
        },
        {
          name: "Sofia Davis",
          email: "sofia.davis@email.com",
          saleAmount: "+$39.00"
        }
      ];
  return (
    <div className="flex flex-col gap-5  w-full">
      <div className="flex-col flex justify-between sm:flex-row">
        <img src={image} alt="logo" height={120} width={120} />
        <PageTitle title="Dashboard" className="mt-4 md:mt-0"/>
      </div>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <AdminCard
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  )
}

export default Dashboard
