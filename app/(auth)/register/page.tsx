"use client";

import React from "react";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Eye } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function RegisterPage() {
  const handleSubmit = () => {
    console.log("Hello World!");
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
        <Form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
            <Input
              isRequired
              label="Name"
              labelPlacement="outside"
              name="name"
              variant="bordered"
              placeholder="John"
            />
          </div>
          <div className="w-full">
            <Input
              isRequired
              label="Email"
              labelPlacement="outside"
              name="email"
              type="email"
              variant="bordered"
              placeholder="john@example.com"
            />
          </div>
          <div className="w-full">
            <Input
              isRequired
              label="Password"
              labelPlacement="outside"
              name="password"
              type="password"
              placeholder="****"
              variant="bordered"
              endContent={<Eye />}
            />
          </div>
          <div className="w-full">
            <Input
              isRequired
              label="Password Confirm"
              labelPlacement="outside"
              name="passwordConfirm"
              type="password"
              placeholder="****"
              variant="bordered"
              endContent={<Eye />}
            />
          </div>
          <div className="w-full mt-3">
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              className="w-full"
            >
              Submit
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}
