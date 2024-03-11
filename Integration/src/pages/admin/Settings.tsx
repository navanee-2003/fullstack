"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
// import React from "react";
import PageTitle from "@/components/PageTitle";
// import { cn } from "@/lib/utils";
import image from "@/assets/images/logo.svg"


type Props = {};

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  }
];
const data: Setting[] = [
  {
    category: "Account",
    value: true
  },
  {
    category: "Notifications",
    value: false
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  }
];

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <div className="flex-col flex justify-between sm:flex-row">
        <img src={image} alt="logo" height={120} width={120} />
        <PageTitle title="Settings" className="mt-4 md:mt-0"/>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}