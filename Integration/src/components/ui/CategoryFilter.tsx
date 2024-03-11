"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryFilter = () => {
  return (
    <Select>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">
          All
        </SelectItem>
        <SelectItem value="Birthday" className="select-item p-regular-14">
          Birthday
        </SelectItem>
        <SelectItem value="Wedding" className="select-item p-regular-14">
          Wedding
        </SelectItem>
        <SelectItem value="Get-Together" className="select-item p-regular-14">
          Get-Together
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
