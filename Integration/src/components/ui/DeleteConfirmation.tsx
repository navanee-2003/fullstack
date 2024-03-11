"use client";

import { useTransition } from "react";
import image from "@/assets/icons/delete.svg";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";

// import { deleteEvent } from '@/lib/actions/event.actions'

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const url = `http://localhost:8181/api/v1/admin/service/delete/${eventId}`;

  async function deleteService(eventId: string): Promise<void> {
    try {
      // Assuming 'token' contains the access token from the session
      const token = window.sessionStorage.getItem("token"); // Replace with your actual method to retrieve the token

      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
          // Add other headers if needed
        },
      });

      // setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // const pathname = usePathname()
  // let [isPending, startTransition] = useTransition()

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <img src={image} alt="edit" width={20} height={20} />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            This will permanently delete this service
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction onClick={() => deleteService(eventId)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
