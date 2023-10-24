import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import SignUpLoginandsign from "components/SignUpLoginandsign";

const SignupPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <SignUpLoginandsign className="bg-white-A700 flex md:flex-col flex-row gap-14 items-center justify-start md:pr-10 sm:pr-5 pr-[78px] w-full" />
      </div>
    </>
  );
};

export default SignupPage;
