import type { ResponsiveImageType } from 'react-datocms';

import { FlatLink } from '@/components/ui/FlatLink';
import { VideoCard } from '@/components/ui/VideoCard';

type Video = {
  video: {
    url: string;
  };
  title: string;
  previewImage: {
    responsiveImage: ResponsiveImageType;
  };
};

type IServicesCard = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  media: Video[];
};

export const ServicesCard = ({
  id,
  title,
  excerpt,
  slug,
  media,
}: IServicesCard) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 space-y-7 p-8 sm:pl-0 lg:order-1 lg:space-y-5 lg:px-8">
          <h2 className="text-3xl">
            <span className="mr-3 text-lg">{id}</span>
            {title}
          </h2>
          <p className="text-sm leading-5 text-neutral-500/80 md:leading-6 md:text-neutral-800">
            {excerpt}
          </p>
          <FlatLink
            href={`services/${slug}`}
            size="md"
            style={{ width: 'max-content' }}
          >
            Learn more
          </FlatLink>
        </div>
        <div className="order-1 mx-auto flex w-screen  sm:w-[770px] lg:order-2">
          {media?.map((item, i) => (
            <div
              key={i}
              className="sm:w-[calc((100%-30px)/ 2)] mr-4 h-[230px] w-[calc(100vw-60px)] sm:h-[310px] md:h-[350px]"
            >
              <VideoCard
                previewImage={item.previewImage.responsiveImage}
                videourl={item.video.url}
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-auto my-5 w-[98%] border-black" />
    </div>
  );
};
