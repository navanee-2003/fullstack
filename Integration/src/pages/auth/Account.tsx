import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "../../assets/images/logo.svg";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  return (
    <div className="flex-center flex-col md:flex-row justify-around min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center ">
      <div className="md:flex md:h-screen md:flex-col md:items-center md:justify-center md:w-1/2 mb-6 md:mb-0 md:bg-gray-200">
        <img src={Image} alt="" className="w-full md:max-w-1/2 max-w-xs" />
      </div>
      <div className="flex flex-col items-center justify-center md:max-w-1/2 md:w-1/2">
        <Tabs defaultValue="account" className="flex flex-col items-center justify-center w-full md:w-1/2 p-2 shadow rounded">
          <TabsList className="w-full shadow">
            <TabsTrigger value="account" className="w-1/2 active:bg-gray-300 focus:bg-gray-300">Account</TabsTrigger>
            <TabsTrigger value="password" className="w-1/2 focus:bg-gray-300">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Login />
          </TabsContent>
          <TabsContent value="password">
            <Register />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
