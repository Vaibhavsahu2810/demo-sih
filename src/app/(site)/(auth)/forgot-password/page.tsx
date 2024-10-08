import React from "react";
import ForgotPassword from "@/app/components/Auth/ForgotPassword";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageName="Forget Password" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
