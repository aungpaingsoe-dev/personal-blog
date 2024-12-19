"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { LoginInput, useLoginSchema } from "@/lib/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login, registerOauth } from "@/app/actions/auth";
import { GithubIcon } from "@/components/icons";

export default function LoginPage() {
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const togglePassVisibility = () => setIsPassVisible(!isPassVisible);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(useLoginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    const response = await login(data);
    setIsLoading(false);
  };

  return (
    <Card className="flex flex-col gap-7 p-3 rounded-3xl">
      <CardHeader>
        <div className=" text-center w-full ">
          <div className="text-xl font-bold">Share Mal</div>
          <div className="mt-1 text-foreground-500 ">Continue reading</div>
        </div>
      </CardHeader>
      <CardBody>
        <Form
          className="w-full"
          validationBehavior="native"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <Input
              label="Email"
              labelPlacement="outside"
              type="email"
              variant="bordered"
              placeholder="john@example.com"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email ? errors.email.message : ""}
              {...register("email")}
            />
          </div>
          <div className="w-full">
            <Input
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePassVisibility}
                >
                  {isPassVisible ? (
                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              placeholder="****"
              type={isPassVisible ? "text" : "password"}
              variant="bordered"
              labelPlacement="outside"
              isInvalid={errors.password ? true : false}
              errorMessage={errors.password ? errors.password.message : ""}
              {...register("password")}
            />
          </div>
          <div className="w-full mt-3">
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              className="w-full"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </div>
        </Form>
        <div>
          <div className=" text-foreground-500 my-3 text-center ">OR</div>
          <Button
            type="button"
            variant="shadow"
            className="w-full"
            color="default"
            onClick={() => registerOauth("github")}
          >
            <GithubIcon />
            Login with github
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
