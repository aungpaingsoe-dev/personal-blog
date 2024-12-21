"use client"

import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Edit2Icon, UserRoundPlus } from "lucide-react";
import { Card, CardBody } from "@nextui-org/card";

export default function ProfileHeader() {
  return (
    <Card className=" basis-8/12">
      <CardBody className="p-0">
        <div className=" relative py-20 rounded-t-xl " id="profile-header">
          <div className=" w-[95%] mx-auto">
            <Avatar
              isBordered
              color="default"
              className="w-36 h-36 text-large absolute top-[35%] shadow-2xl "
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
        </div>
        <Divider className="mb-3" />
        <div className=" flex w-[95%] mx-auto ">
          <div className=" mt-12 mb-6 w-[95%] mx-auto">
            <div className=" text-2xl font-semibold ">Aung Paing Soe</div>
            <div className=" text-foreground-600 text-sm mt-1 ">
              Full Stack Developer
            </div>
          </div>
          <div className=" flex gap-2 ">
            <Button color="default" variant="shadow">
              <Edit2Icon size={16} />
              Edit Profile
            </Button>
            <Button color="primary" variant="shadow">
              <UserRoundPlus size={20} />
              Follow
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
