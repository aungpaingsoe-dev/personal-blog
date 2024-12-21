"use client"

import { Card, CardHeader, CardBody } from "@nextui-org/card";

export default function ProfileBio() {
  return (
    <Card className=" basis-8/12 p-3">
      <CardHeader>
        <div className="text-xl font-semibold">Bio</div>
      </CardHeader>
      <CardBody className="pt-0 text-foreground-600">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          reprehenderit incidunt explicabo atque aperiam dolore ad beatae harum
          maiores architecto, voluptas ut magnam laudantium, illo veniam quo
          deserunt impedit a...
          <span className=" text-blue-600 ">See more</span>
        </div>
      </CardBody>
    </Card>
  );
}
