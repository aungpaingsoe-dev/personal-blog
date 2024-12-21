"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import ProfileBlogItem from "./blog-item";

export default function ProfileBlogList() {
  return (
    <Tabs aria-label="tags">
      <Tab key="videos" title="Web Development">
        <Card>
          <CardBody>
            <div className="flex gap-2 p-3">
              <ProfileBlogItem />
              <ProfileBlogItem />
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="photos" title="Personal Development">
        <Card>
          <CardBody>
            <div className="flex gap-2 p-3">
              <ProfileBlogItem />
              <ProfileBlogItem />
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="music" title="Dev Ops">
        <Card>
          <CardBody>
            <div className="flex gap-2 p-3">
              <ProfileBlogItem />
              <ProfileBlogItem />
            </div>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}
