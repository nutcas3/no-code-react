import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import LogInLoginandsign from "components/LogInLoginandsign";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <LogInLoginandsign className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start md:pr-10 pr-20 sm:pr-5 w-full" />
      </div>
    </>
  );
};

export default LoginPage;
