import Link from 'next/link';
import React, { Fragment } from 'react';

import { Main, Meta, PageLayout } from '@/layouts';

const ServicesCard = () => {
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
          <Link href={`services/1`}>
            <a className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black px-10  py-3 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black">
              Learn more
            </a>
          </Link>
        </div>
        <div className="order-1 mx-auto flex w-screen  sm:w-[770px] lg:order-2">
          <div className="sm:w-[calc((100%-30px)/ 2)] mr-4 h-[230px] w-[calc(100vw-60px)] bg-gray-800 sm:h-[310px] md:h-[350px]"></div>
          <div className="sm:w-[calc((100%-30px) / 2)] mr-4 h-[230px] w-[calc(100vw-60px)] bg-gray-800 sm:h-[310px] md:h-[350px]"></div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Main
      meta={
        <Meta
          title="Services - Flatline Agency"
          description="flatline agency services"
        />
      }
    >
      <main>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <div className="flex flex-col space-y-5 md:items-end">
            <h1 className="text-2xl sm:text-5xl md:text-end">Our services</h1>
            <p className="max-w-[600px] text-sm leading-4 text-neutral-500/80 md:text-end md:text-lg md:leading-6 md:text-neutral-800">
              We code and improve everything from E-commerce, Custom platforms,
              progressive web apps, apps, websites, SAAS, and AI / Deep learning
              applications
            </p>
          </div>
          <hr className="mt-20 mb-7 border-black sm:mt-32" />
        </section>
        <section className="max-w-flat overflow-hidden sm:ml-auto sm:w-[calc(100%-60px)] md:mx-auto lg:px-8">
          {[...Array(5)].map((_, i) => (
            <Fragment key={i}>
              <ServicesCard key={i} />
              <hr className="mx-auto my-5 w-[98%] border-black" />
            </Fragment>
          ))}
        </section>
        <section className="mx-auto max-w-flat px-10 pt-28 pb-52 md:pl-40">
          <h2 className="text-5xl leading-[50px] md:text-[100px] md:leading-[100px]">
            <span>So,</span>
            <br />
            <a href="" className="cursor-pointer underline hover:no-underline">
              Challenge us.
            </a>
          </h2>
        </section>
      </main>
    </Main>
  );
};

Services.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Services;