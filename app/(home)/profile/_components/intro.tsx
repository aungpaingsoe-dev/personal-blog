"use client";

import {
  GithubIcon,
  LinkdinIcon,
  LocationPin,
  MailIcon,
  SchoolIcon,
  WorkIcon,
} from "@/components/icons";
import { Link } from "@nextui-org/link";
import { Card, CardBody } from "@nextui-org/card";

export default function ProfileIntro() {
  return (
    <Card className=" basis-4/12 ">
      <CardBody>
        <div className=" p-3 ">
          <div className=" font-semibold ">Intro</div>
          <ul className=" flex flex-col gap-3 text-foreground-500 text-sm mt-4 ">
            <li className=" flex items-center gap-1 ">
              <WorkIcon />
              <div>
                Full Stack Developer at . <Link size="sm">UMG</Link>
              </div>
            </li>
            <li className=" flex items-center gap-1 ">
              <SchoolIcon />
              <div>
                School . <Link size="sm">Myanmar Route</Link>
              </div>
            </li>
            <li className=" flex items-center gap-1 ">
              <LocationPin />
              <div>
                Location . <Link size="sm">Myanmar, Yangon</Link>
              </div>
            </li>
            <li className=" flex items-center gap-1 ">
              <MailIcon />
              <div>
                Gmail . <Link size="sm">aungpaingsoe@gmail.com</Link>
              </div>
            </li>
            <li className=" flex items-center gap-1 ">
              <LinkdinIcon />
              <div>
                Linkedin . <Link size="sm">aungpaingsoe@23</Link>
              </div>
            </li>
            <li className=" flex items-center gap-1 ">
              <GithubIcon width={16} height={16} />
              <div>
                Github . <Link size="sm">aungpaingsoe@23</Link>
              </div>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}
