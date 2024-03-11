"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import image from "@/assets/images/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

type Props = {};
type Payment = {
  id: string;
  title: string;
  category: string;
  instructions: string;
  location: string;
  dateTime: string;
  proposedBudget: number;
  imageUrl: string;
  status: string;
  accepted: boolean;
};

const data: Payment[] = [
  {
    id: "64f91d49-50dc-4bee-babe-bc716ca32e89",
    title: "string",
    category: "string",
    instructions: "string",
    location: "string",
    dateTime: "2024-03-11T01:28:58.994+00:00",
    proposedBudget: 0,
    imageUrl: "../../src/assets/images/default.jpg",
    status: "Pending",
    accepted: true,
  },
];

export default function OrdersPage({}: Props) {
  const acceptRequest = async (id: string) => {
    const AcceptBooking = `http://localhost:8181/api/v1/admin/acceptOrRejectRequest?id=${id}`;

    try {
      const token = window.sessionStorage.getItem("token");
      console.log(token);
      const response = await axios.put(AcceptBooking, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "Booking ID",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div
            className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
              "bg-red-200": row.getValue("status") === "Pending",
              "bg-orange-200": row.getValue("status") === "Processing",
              "bg-green-200": row.getValue("status") === "Completed",
            })}
          >
            {row.getValue("status")}
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "instructions",
      header: "Instructions",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "dateTime",
      header: "Requested On",
    },
    {
      accessorKey: "proposedBudget",
      header: "Proposed Budget",
    },
    {
      accessorKey: "accepted",
      header: "Accepted",
      cell: ({ row }) => {
        return (
          <div
            className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
              "bg-red-200": row.getValue("accepted") === false,
              // "bg-orange-200": row.getValue("status") === "Processing",
              "bg-green-200": row.getValue("accepted") === true,
            })}
          >
            {row.getValue("accepted") ? <>True</> : <>False</>}
          </div>
        );
      },
    },
    {
      header: "Accept Request",
      cell: ({ row }) => {
        return (
          <>
            <Button
              onClick={() => {
                acceptRequest(row.getValue("id"))
              }}
            >
              Accepted Request
            </Button>
          </>
        );
      },
    },
  ];

  const [bookingData, setBookingData] = useState([]);

  const url = `http://localhost:8181/api/v1/admin/getBookings`;
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
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-5  w-full">
      <div className="flex-col flex justify-between sm:flex-row">
        <img src={image} alt="logo" height={120} width={120} />
        <PageTitle title="Bookings" className="mt-4 md:mt-0" />
      </div>
      <DataTable columns={columns} data={bookingData} />
    </div>
  );
}
