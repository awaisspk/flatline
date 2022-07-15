import 'react-intl-tel-input/dist/main.css';

import Image from 'next/image';
import React from 'react';
import IntlTelInput from 'react-intl-tel-input';

import { BrandsList } from '@/components/ui/BrandsList';
import { Main, Meta, PageLayout } from '@/layouts';

const ServicesDetail = () => {
  return (
    <Main
      meta={
        <Meta
          title="Ecommerce - Flatline Agency"
          description="flatline agency"
        />
      }
    >
      <main>
        <section className="mx-auto max-w-flat space-y-8 px-8 sm:space-y-12 sm:px-12">
          <h1 className="text-[28px] text-white sm:text-5xl">E-commerce</h1>
          <p className="max-w-[80ch] text-neutral-500">
            Proud partner of Shopify, WooCommerce, and end-to-end production
            partner of large players within the e-commerce industry. We
            don&apos;t simply build your webshop, we set up your entire digital
            architecture.
          </p>
          <button className="flex w-max cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black py-5 px-9 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black">
            Plan a Call
          </button>
          <div className="relative h-[300px] bg-gray-900 sm:h-[470px]">
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2021/11/header-kota-win-header-e1641305413505-914x477.jpeg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <BrandsList color="dark" />
        </section>
        <section className="mx-auto flex max-w-flat justify-between space-y-8 px-8 py-20 sm:space-y-12 sm:px-12">
          <div className="max-w-[440px] basis-1/2  space-y-20">
            <h2 className="text-3xl leading-[60px] text-white sm:text-6xl">
              It’s a certain kind of person, who doesn’t wait for greatness
            </h2>
            <p className="text-neutral-100">
              Proud partner of Shopify, WooCommerce, and end-to-end production
              partner of large players within the e-commerce industry. We
              don&apos;t simply build your webshop, we set up your entire
              digital architecture.
            </p>
          </div>

          <div className="basis-1/2">
            <div className="relative h-full w-full">
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/11/shopify1.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="h-screen bg-body px-8 pt-20 sm:px-12">
          <div className="relative  mx-auto flex min-h-[480px] max-w-flat items-center justify-center space-y-8 bg-black px-8 py-10  sm:space-y-12 sm:px-12">
            <div className="flex flex-col gap-20 pr-10 text-white md:flex-row md:pl-20">
              <p className="basis-1/4">
                We map every e-commerce and retail-related process in your
                company, set up the necessary automation, and build custom
                modules and connectors.
              </p>
              <ul className="grid gap-5 sm:grid-cols-2">
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">01</span>
                  Custom connectors
                </li>
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">02</span>
                  Webshop
                </li>
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">03</span>
                  Automations
                </li>
                <li className="text-2xl md:text-3xl">
                  <span className="mr-3 text-[16px]">04</span>
                  Data strategy
                </li>
              </ul>
            </div>
            <p
              className="absolute top-0 right-4 text-white sm:right-8 md:right-12 md:text-3xl"
              style={{ writingMode: 'vertical-rl' }}
            >
              Techniques
            </p>
          </div>
        </section>
        <section className="bg-body">
          <div className="mx-auto flex max-w-flat justify-between space-y-8 px-8 py-20 sm:space-y-12 sm:px-12">
            <div className="space-y-24">
              <div className="flex flex-col space-y-5">
                <h2 className="text-4xl">Free brainstorm session?</h2>
                <p className="max-w-[550px]">
                  Are you ready to help think bigger and truly defy everyone
                  standing in your way? We will guide you through the essential
                  next steps.
                </p>
              </div>
              <form>
                <div className="flex flex-col space-y-8">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-16 w-[550px] max-w-full rounded-full border border-gray-300 pl-10 pr-5"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-16 w-[550px] max-w-full rounded-full border border-gray-300 pl-10 pr-5"
                  />
                  <IntlTelInput
                    defaultCountry="nl"
                    placeholder="Phone"
                    containerClassName="intl-tel-input"
                    inputClassName="form-control  h-16 rounded-full border border-gray-300  pr-5 w-[550px] max-w-full"
                  />
                  <button className="flex h-16 w-full cursor-pointer items-center justify-center rounded-[100px] bg-black text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="relative -top-12 h-[580px] w-[400px] ">
              <Image
                src="https://www.flatlineagency.com/wp-content/uploads/2021/11/alex-knight-2EJCSULRwC8-unsplash.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="bg-body">
          <h2>FAQ</h2>
        </section>
      </main>
    </Main>
  );
};

ServicesDetail.getLayout = (page: any) => (
  <div className="bg-black">
    <PageLayout>{page}</PageLayout>
  </div>
);
export default ServicesDetail;
