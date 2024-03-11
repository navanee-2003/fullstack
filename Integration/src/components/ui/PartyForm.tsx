"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import location from "@/assets/icons/location-grey.svg";
import calendar from "@/assets/icons/calendar.svg";
import price from "@/assets/icons/dollar.svg";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { EventFormSchema } from "@/lib/validator";
import { defaultValues } from "../../../constants/index";
import { defaultFormValues } from "../../../constants/index";
// import { dropdowntValues } from "../../../constants/index";
import { eventCategories } from "../../../constants/index";
import Dropdown from "./Dropdown";
// import { FileUploader } from "./FileUploader";
// import { useState } from "react";
import { locations } from "../../../constants/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type PartyFormProps = {
  type: "Create" | "Update";
  userId: string | null;
  event?: {
    title: string;
    category: string;
    instructions: string;
    location: string;
    dateTime: Date;
    proposedBudget: string;
  };
};

const PartyForm = ({ userId, type, event }: PartyFormProps) => {
  // const [files, setFiles] = useState<File[]>([]);
  // console.log(event);
  const { toast } = useToast();
  const nav = useNavigate();

  const initialValues = type === "Update" ? event : defaultValues;

  console.log(initialValues);

  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: initialValues,
  });

  const toastFunction = () => {
    {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  async function onSubmit(values: z.infer<typeof EventFormSchema>) {
    const url = `http://localhost:8181/api/v1/user/requestService?user_id=${userId}`;

    try {
      const token = window.sessionStorage.getItem("token");
      console.log(token);
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      });
      console.log(response.data);
      toastFunction();
      nav("/user/profile");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Party Title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    title="Categories"
                    onChangeHandler={field.onChange}
                    value={field.value}
                    dropdownValues={eventCategories.data}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Instructions"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <img src={location} alt="location" width={24} height={24} />
                    <Dropdown
                      title="Locations"
                      onChangeHandler={field.onChange}
                      value={field.value}
                      dropdownValues={locations.data}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="dateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <img
                      src={calendar}
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-500">
                      Start Date:{" "}
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="proposedBudget"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <img
                      src={price}
                      alt="price"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <Input
                      type="number"
                      placeholder="Propose Your Budget"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Event`}
        </Button>
      </form>
    </Form>
  );
};

export default PartyForm;
