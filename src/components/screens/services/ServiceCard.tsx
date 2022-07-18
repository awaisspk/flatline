import { FlatLink } from '@/components/ui/FlatLink';

export const ServicesCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 space-y-7 p-8 sm:pl-0 lg:order-1 lg:space-y-5 lg:px-8">
          <h2 className="text-3xl">
            <span className="mr-3 text-lg">01</span>
            Ecommerce
          </h2>
          <p className="text-sm leading-5 text-neutral-500/80 md:leading-6 md:text-neutral-800">
            Proud partner of Shopify, WooCommerce, and end-to-end production
            partner of large players within the e-commerce industry. We
            don&apos;t simply build your webshop, we set up your entire digital
            architecture.
          </p>
          <FlatLink
            href={`services/1`}
            size="md"
            style={{ width: 'max-content' }}
          >
            Learn more
          </FlatLink>
        </div>
        <div className="order-1 mx-auto flex w-screen  sm:w-[770px] lg:order-2">
          <div className="sm:w-[calc((100%-30px)/ 2)] mr-4 h-[230px] w-[calc(100vw-60px)] bg-gray-800 sm:h-[310px] md:h-[350px]"></div>
          <div className="sm:w-[calc((100%-30px) / 2)] mr-4 h-[230px] w-[calc(100vw-60px)] bg-gray-800 sm:h-[310px] md:h-[350px]"></div>
        </div>
      </div>
    </div>
  );
};
