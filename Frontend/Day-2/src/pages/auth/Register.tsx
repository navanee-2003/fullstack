import { SignUp } from '@clerk/clerk-react';
import Image from "../../assets/images/logo.svg";

const Register: React.FC = () => {
  return (
    <div className="flex-center flex-col md:flex-row justify-around min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center ">
      <div className="md:flex md:h-screen md:flex-col md:items-center md:justify-center md:w-1/2 mb-6 md:mb-0 md:bg-gray-200">
        <img src={Image} alt="" className="w-full md:w-auto max-w-md "/>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
