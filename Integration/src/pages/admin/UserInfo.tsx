"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
import PageTitle from "@/components/PageTitle";
import image from "@/assets/images/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};
type Payment = {
  id: string;
  name: string;
  email: string;
  role: string;
  enabled: boolean;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "enabled",
    header: "Enabled",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

const data: Payment[] = [
  {
    id: "id",
    name: "John Doe",
    email: "john@example.com",
    role: "2023-01-01",
    enabled: true,
  },
];

export default function UserInfo({}: Props) {
  const [userData, setUserData] = useState([]);
  const url = `http://localhost:8181/api/v1/admin/getAllUsers`;

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
        setUserData(response.data);
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
        <PageTitle title="Users" className="mt-4 md:mt-0" />
      </div>
      <DataTable columns={columns} data={userData} />
    </div>
  );
}
