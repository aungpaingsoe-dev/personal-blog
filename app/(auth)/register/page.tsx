"use client";

import React, { useState } from "react";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useForm } from "react-hook-form";
import { RegisterInput, useRegisterSchema } from "@/lib/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { register as userRegister } from "@/app/actions/auth";

export default function RegisterPage() {
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const togglePassVisibility = () => setIsPassVisible(!isPassVisible);
  const [isPassConfirmVisible, setIsPassConfirmVisible] = React.useState(false);
  const togglePassConfirmVisibility = () =>
    setIsPassConfirmVisible(!isPassConfirmVisible);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(useRegisterSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    const response = await userRegister(data);
    setIsLoading(false);
  };

  return (
    <Card className="flex flex-col gap-7 p-3 rounded-3xl">
      <CardHeader>
        <div className=" text-center w-full ">
          <div className="text-xl font-bold">Share Mal</div>
          <div className="mt-1 text-foreground-500 ">Join our community</div>
        </div>
      </CardHeader>
      <CardBody>
        <Form
          validationBehavior="native"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <div className="w-full">
            <Input
              label="Name"
              labelPlacement="outside"
              {...register("name")}
              variant="bordered"
              placeholder="John"
              isInvalid={errors.name ? true : false}
              errorMessage={errors.name ? errors.name.message : ""}
            />
          </div>
          <div className="w-full">
            <Input
              label="Email"
              labelPlacement="outside"
              {...register("email")}
              type="email"
              variant="bordered"
              placeholder="john@example.com"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email ? errors.email.message : ""}
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
              {...register("password")}
              label="Password"
              placeholder="****"
              type={isPassVisible ? "text" : "password"}
              variant="bordered"
              labelPlacement="outside"
              isInvalid={errors.password ? true : false}
              errorMessage={errors.password ? errors.password.message : ""}
            />
          </div>
          <div className="w-full">
            <Input
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePassConfirmVisibility}
                >
                  {isPassConfirmVisible ? (
                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              placeholder="****"
              {...register("passwordConfirm")}
              type={isPassConfirmVisible ? "text" : "password"}
              variant="bordered"
              labelPlacement="outside"
              isInvalid={errors.passwordConfirm ? true : false}
              errorMessage={
                errors.passwordConfirm ? errors.passwordConfirm.message : ""
              }
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
      </CardBody>
    </Card>
  );
}
