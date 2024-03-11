import { SignIn } from "@clerk/clerk-react";
import Image from "../../assets/images/logo.svg";

import { defaultLoginValues } from "../../../constants/index";

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

import { loginFormSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import axios from "axios";

const Login: React.FC = () => {
  const nav = useNavigate();
  const loginValues = defaultLoginValues;
  const url = "http://localhost:8181/api/v1/auth/login"

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginValues,
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      // Make a POST request using Axios
      const response = await axios.post(url, values);

      if (response.data.access_token && response.data.user_id) {
        // Store the token in session storage
        sessionStorage.setItem('token', response.data.access_token);
        sessionStorage.setItem('userId', response.data.user_id);
        nav('/user/home');
      }

      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error making POST request:', error);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6">
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          Not a member?{" "}
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
