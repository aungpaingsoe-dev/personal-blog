"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

export default function ProfileSkills() {
  return (
    <Card className=" basis-4/12 p-3">
      <CardHeader>
        <div className="text-xl font-semibold">Skills</div>
      </CardHeader>
      <CardBody className="pt-0 text-foreground-600">
        <div className=" flex flex-wrap gap-2 ">
          <Chip variant="shadow" color="default">
            JavaScript
          </Chip>
          <Chip variant="shadow" color="default">
            TypeScript
          </Chip>
          <Chip variant="shadow" color="default">
            PHP
          </Chip>
          <Chip variant="shadow" color="default">
            Go
          </Chip>
          <Chip variant="shadow" color="default">
            NodeJs
          </Chip>
          <Chip variant="shadow" color="default">
            Laravel
          </Chip>
          <Chip variant="shadow" color="default">
            Personal Development
          </Chip>
        </div>
      </CardBody>
    </Card>
  );
}
