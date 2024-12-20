"use client";

import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { Search } from "lucide-react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";

export default function BlogFilter() {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div>
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        labelPlacement="outside"
        placeholder="Search..."
        startContent={<Search className="opacity-50" />}
        type="search"
      />
      <div className="mt-4 flex flex-col gap-5">
        <div>
          <div className="font-bold">Tags</div>
          <div className="flex flex-wrap gap-2 mt-3">
            <Chip size="sm" variant="shadow" color="primary">
              All
            </Chip>
            <Chip size="sm" variant="flat">
              Web Development
            </Chip>
            <Chip size="sm" variant="flat">
              Web Development
            </Chip>
            <Chip size="sm" variant="flat">
              Programming
            </Chip>
            <Chip size="sm" variant="flat">
              Life Living
            </Chip>
            <Chip size="sm" variant="flat">
              Life Living
            </Chip>
          </div>
        </div>

        <div>
          <div className="font-bold">Teams</div>
          <div className="mt-3 flex flex-col gap-1">
            <AvatarGroup isBordered isGrid>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                onClick={handleClick}
                color="primary"
              />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
          </div>
        </div>

        <div>
          <div className="font-bold">Recent Posts</div>
          <div className="mt-3">
            <div className=" flex gap-2 ">
              <div className=" basis-4/12 ">
                <Image
                  isZoomed
                  isBlurred
                  fallbackSrc="https://via.placeholder.com"
                  alt="NextUI hero Image"
                  src="/pexels-pixabay-220769.jpg"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" basis-8/12 ">
                <div className="text-md font-bold">Blog Post Title</div>
                <div className="text-muted-foreground text-sm text-foreground-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
