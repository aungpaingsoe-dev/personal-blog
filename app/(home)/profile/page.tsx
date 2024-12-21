"use client";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Edit2Icon } from "lucide-react";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { UserRoundPlus } from "lucide-react";
import {
  GithubIcon,
  LinkdinIcon,
  LocationPin,
  MailIcon,
  UsersIcon,
  WorkIcon,
} from "@/components/icons";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Tabs, Tab } from "@nextui-org/tabs";
import BlogItem from "../_components/blog-item";
import { Image } from "@nextui-org/image";
import { User } from "@nextui-org/user";

export default function ProfilePage() {
  return (
    <>
      <div className=" flex gap-3 ">
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

        <Card className=" basis-4/12 ">
          <CardBody className=" flex flex-col justify-center px-5 ">
            <div className="text-xl font-semibold mb-4">Intro</div>
            <div>
              <ul className=" text-foreground-600 text-sm flex flex-col gap-3 ">
                <li className=" flex gap-2 items-center ">
                  <WorkIcon />
                  Full Stack Developer at UMG
                </li>
                <li className=" flex gap-2 items-center ">
                  <MailIcon />
                  <div>
                    Email <Link size="sm">aungpaingsoe@gmail.com</Link>
                  </div>
                </li>
                <li className=" flex gap-2 items-center ">
                  <LocationPin />
                  Lives in . Yangon, Insein
                </li>
                <li className=" flex gap-2 items-center ">
                  <UsersIcon />
                  Followed by 12.5k people
                </li>
                <li className=" flex gap-2 items-center ">
                  <LinkdinIcon />
                  Linkdin aungpaingsoe@_r
                </li>
                <li className=" flex gap-2 items-center ">
                  <GithubIcon width={22} height={22} />
                  Github aungpaingsoe@r
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-3 flex gap-3">
        <Card className=" basis-4/12 p-3">
          <CardHeader>
            <div className="text-xl font-semibold">Skills</div>
          </CardHeader>
          <CardBody className="pt-0 text-foreground-600">
            <div className=" flex flex-wrap gap-2 ">
              <Chip variant="shadow" color="primary">
                JavaScript
              </Chip>
              <Chip variant="shadow" color="primary">
                TypeScript
              </Chip>
              <Chip variant="shadow" color="primary">
                PHP
              </Chip>
              <Chip variant="shadow" color="primary">
                Go
              </Chip>
              <Chip variant="shadow" color="primary">
                NodeJs
              </Chip>
              <Chip variant="shadow" color="primary">
                Laravel
              </Chip>
              <Chip variant="shadow" color="primary">
                Personal Development
              </Chip>
            </div>
          </CardBody>
        </Card>
        <Card className=" basis-8/12 p-3">
          <CardHeader>
            <div className="text-xl font-semibold">Bio</div>
          </CardHeader>
          <CardBody className="pt-0 text-foreground-600">
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis reprehenderit incidunt explicabo atque aperiam dolore
              ad beatae harum maiores architecto, voluptas ut magnam laudantium,
              illo veniam quo deserunt impedit a...
              <span className=" text-blue-600 ">See more</span>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-3 flex w-full flex-col">
        <Tabs aria-label="tags">
          <Tab key="videos" title="Web Development">
            <Card>
              <CardBody>
                <div className="flex p-4">
                  <div className="basis-6/12 flex flex-col gap-4">
                    <div className="flex gap-3">
                      <div className=" basis-4/12 ">
                        <Image
                          isZoomed
                          alt="NextUI hero Image"
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="basis-8/12 flex flex-col justify-between flex-grow">
                        <div className=" flex flex-col justify-between gap-2 ">
                          <div className="text-xl font-bold">
                            Blog Post Title
                          </div>
                          <div className="text-muted-foreground text-foreground-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequatur consectetur voluptas officia
                          </div>
                          <div className="flex gap-2">
                            <Chip size="sm" variant="shadow" color="primary">
                              Web Development
                            </Chip>
                            <Chip size="sm" variant="shadow" color="primary">
                              Programming
                            </Chip>
                            <Chip size="sm" variant="shadow" color="default">
                              +3
                            </Chip>
                          </div>
                        </div>
                        <div>
                          <User
                            avatarProps={{
                              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                            description="Product Designer"
                            name="Jane Doe"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className=" basis-4/12 ">
                        <Image
                          isZoomed
                          alt="NextUI hero Image"
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="basis-8/12 flex flex-col justify-between flex-grow">
                        <div className=" flex flex-col justify-between gap-2 ">
                          <div className="text-xl font-bold">
                            Blog Post Title
                          </div>
                          <div className="text-muted-foreground text-foreground-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequatur consectetur voluptas officia
                          </div>
                          <div className="flex gap-2">
                            <Chip size="sm" variant="shadow" color="primary">
                              Web Development
                            </Chip>
                            <Chip size="sm" variant="shadow" color="primary">
                              Programming
                            </Chip>
                            <Chip size="sm" variant="shadow" color="default">
                              +3
                            </Chip>
                          </div>
                        </div>
                        <div>
                          <User
                            avatarProps={{
                              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                            description="Product Designer"
                            name="Jane Doe"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-6/12 flex flex-col gap-4">
                    <div className="flex gap-3">
                      <div className=" basis-4/12 ">
                        <Image
                          isZoomed
                          alt="NextUI hero Image"
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="basis-8/12 flex flex-col justify-between flex-grow">
                        <div className=" flex flex-col justify-between gap-2 ">
                          <div className="text-xl font-bold">
                            Blog Post Title
                          </div>
                          <div className="text-muted-foreground text-foreground-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequatur consectetur voluptas officia
                          </div>
                          <div className="flex gap-2">
                            <Chip size="sm" variant="shadow" color="primary">
                              Web Development
                            </Chip>
                            <Chip size="sm" variant="shadow" color="primary">
                              Programming
                            </Chip>
                            <Chip size="sm" variant="shadow" color="default">
                              +3
                            </Chip>
                          </div>
                        </div>
                        <div>
                          <User
                            avatarProps={{
                              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                            description="Product Designer"
                            name="Jane Doe"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className=" basis-4/12 ">
                        <Image
                          isZoomed
                          alt="NextUI hero Image"
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="basis-8/12 flex flex-col justify-between flex-grow">
                        <div className=" flex flex-col justify-between gap-2 ">
                          <div className="text-xl font-bold">
                            Blog Post Title
                          </div>
                          <div className="text-muted-foreground text-foreground-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequatur consectetur voluptas officia
                          </div>
                          <div className="flex gap-2">
                            <Chip size="sm" variant="shadow" color="primary">
                              Web Development
                            </Chip>
                            <Chip size="sm" variant="shadow" color="primary">
                              Programming
                            </Chip>
                            <Chip size="sm" variant="shadow" color="default">
                              +3
                            </Chip>
                          </div>
                        </div>
                        <div>
                          <User
                            avatarProps={{
                              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                            description="Product Designer"
                            name="Jane Doe"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="photos" title="Personal Development">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Dev Ops">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
