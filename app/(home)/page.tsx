import { ScrollShadow } from "@nextui-org/scroll-shadow";
import BlogList from "./_components/blog-list";
import BlogFilter from "./_components/blog-filter";

export default function HomePage() {
  return (
    <div className="flex gap-3">
      <div className="basis-9/12">
        <ScrollShadow
          offset={100}
          hideScrollBar
          className="w-full h-[88vh] py-4"
        >
          <BlogList />
        </ScrollShadow>
      </div>
      <div className="basis-3/12">
        <BlogFilter />
      </div>
    </div>
  );
}
