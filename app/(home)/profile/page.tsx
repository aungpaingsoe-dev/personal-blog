"use client";

import ProfileHeader from "./_components/header";
import ProfileIntro from "./_components/intro";
import ProfileSkills from "./_components/skills";
import ProfileBio from "./_components/bio";
import ProfileBlogList from "./_components/blog-list";

export default function ProfilePage() {
  return (
    <>
      <div className=" flex gap-3 ">
        <ProfileHeader />
        <ProfileIntro />
      </div>

      <div className="mt-3 flex gap-3">
        <ProfileSkills />
        <ProfileBio />
      </div>

      <div className="mt-3 flex w-full flex-col">
        <ProfileBlogList />
      </div>
    </>
  );
}
