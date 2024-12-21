import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";

export default function ProfileBlogItem() {
  return (
    <div className="basis-6/12 flex gap-4">
      <div className="flex gap-3">
        <div className=" basis-4/12 ">
          <Image
            isZoomed
            isBlurred
            alt="NextUI hero Image"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={200}
            height={200}
          />
        </div>
        <div className="basis-8/12 flex flex-col justify-between flex-grow">
          <div className=" flex flex-col justify-between gap-2 ">
            <div className="text-xl font-bold">Blog Post Title</div>
            <div className="text-muted-foreground text-foreground-600 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur consectetur voluptas officia
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
  );
}
