import { SignIn } from "@clerk/clerk-react";
import Image from "../../assets/images/logo.svg";

import { defaultRegisterValues } from "../../../constants/index";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { RegisterFormSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import axios from "axios";

const Register: React.FC = () => {
  const registerValues = defaultRegisterValues;
  const url = "http://localhost:8181/api/v1/auth/register"
  const form = useForm<z.infer<typeof RegisterFormSchema >>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: registerValues,
  });

  async function onSubmit(values: z.infer<typeof RegisterFormSchema >) {
    try {
      // Make a POST request using Axios
      const response = await axios.post(url, values);
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error making POST request:', error);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6">
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </FormLabel>
                  <FormControl className="mt-2">
                    <Input
                      placeholder="Name"
                      {...field}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </FormLabel>
                  <FormControl className="mt-2">
                    <Input
                      placeholder="Email"
                      {...field}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </FormLabel>
                  <FormControl className="mt-2">
                    <Input
                      placeholder="Password"
                      {...field}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </Button>
          </form>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
