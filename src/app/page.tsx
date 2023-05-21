import { socialIcons } from "@/components/home/IconBox";
import IconBox from "@/components/home/IconBox";
import HomeImage from "@/components/home/HomeImage";
import { CodeIcon, MathIcon, ReactIcon, TSIcon } from "@/icons/homepageSVGs";
import SectionTitle from "@/components/common/SectionTitle";
import RecentProjects from "@/components/home/RecentProjects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2">
          <h4 className="font-semibold text-2xl 2xl:text-4xl mb-4">
            Welcome....
          </h4>
          <p className="text-xl 2xl:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            ex, unde maxime accusantium culpa voluptatem repellat libero et
            molestiae debitis enim ea at voluptas excepturi.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold text-lg 2xl:text-2xl">Follow On:</h3>
            <div className="mt-2 flex items-center">
              {socialIcons.map((icon) => {
                const { url, Icon } = icon;
                return (
                  <IconBox key={url} url={url} className={icon.className}>
                    {Icon}
                  </IconBox>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-2 md:flex items-center justify-center mt-6 md:mt-0">
          <div className="grid grid-cols-4 gap-6 w-full">
            <HomeImage classname="col-span-2">
              <TSIcon />
            </HomeImage>
            <HomeImage classname="col-span-2">
              <CodeIcon />
            </HomeImage>
            <HomeImage classname="col-span-2">
              <ReactIcon />
            </HomeImage>
            <HomeImage classname="col-span-2">
              <MathIcon />
            </HomeImage>
          </div>
        </div>
      </div>
      {/* projects section */}
      <section className="min-h-screen">
        <SectionTitle title="Recent Projects" />
        <RecentProjects />
      </section>
    </main>
  );
}
