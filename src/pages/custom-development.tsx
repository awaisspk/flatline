import Image from 'next/image';
import React from 'react';

import { Faqs } from '@/components/screens/customDevelopment/Faqs';
import { OurCases } from '@/components/screens/customDevelopment/OurCases';
import { Check } from '@/components/ui/icons/Check';
import { Main, Meta, PageLayout } from '@/layouts';
import { brands } from '@/utils/data/brands';

const services = [
  'We build websites and web apps.',
  'We build native, hybrid, and progressive apps.',
  'We build software applications.',
  'We build E-commerce stores and applications.',
  'We simply blow your mind, and ehmm, we design.',
];

const CustomDevelopment = () => {
  return (
    <Main meta={<Meta title="Custom Development" description="Flatline" />}>
      <main>
        <section className="mx-auto flex max-w-flat justify-between px-8 sm:px-12">
          <div className="max-w-xl pt-10 pb-32">
            <h1 className="text-5xl">Custom development</h1>
            <p className="mt-14 mb-8 text-neutral-500">
              Our partners and clients consist of Fortune 500 companies, SMEs,
              the Dutch government, and non-profit organizations, leveraging us
              as an end-to-end production partner.
            </p>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Check />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10">
              Have a chat
            </button>
          </div>
          <div className="relative mt-10 h-[500px] w-[400px] ">
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2021/12/pexels-photo-5875844-1.jpg"
              layout="fill"
              alt=""
            />
          </div>
        </section>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <div className="flex flex-wrap">
            {brands.slice(0, 5).map((brand, i) => (
              <div
                key={i}
                className="group relative flex h-[150px] w-1/2 flex-col items-center justify-center overflow-hidden sm:w-1/3 md:w-1/5"
              >
                <p className="absolute translate-y-[-100%] text-center text-xs leading-4 opacity-0 transition-all delay-75 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[0%] group-hover:opacity-100">
                  {brand.description}
                </p>
                <div className="absolute h-[50px] w-full max-w-[150px] text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[100%] group-hover:opacity-0 ">
                  <Image
                    src={brand.url}
                    objectFit="contain"
                    layout="fill"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-flat space-y-10 py-32 px-8 sm:px-12">
          <h2 className="text-4xl">Why build it custom</h2>
          <div className="flex gap-20 pb-32">
            <p>
              Building custom means building it exactly the way you want. Making
              it lean, fast, UX or UI focussed, and therefore creating the
              perfect fit for your target group(s). Simply put, you just imagine
              and we build the perfect fit. Our ‘unique selling point’ is that
              we begin where every other agency stops.
            </p>
            <p>
              We deliver high-quality work, fast – while leveraging the newest
              and best techniques available. All our products are breathtaking,
              responsive, and focused on the mobile-first generation – The
              perfect starting point for SMEs and the necessary creative push
              for the brands and larger corporations.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-4 relative ">
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2021/12/image-4.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </section>
        <OurCases />
        <section className="mx-auto flex max-w-flat gap-20 space-y-10 py-32 px-8 sm:px-12">
          <div className="basis-1/2 space-y-10">
            <h2 className="text-4xl ">Services</h2>
            <p className="text-neutral-500">
              As a production partner, we do not only help you with just
              building an application. We go beyond this minimal perspective and
              help you to set your future goals and create success as a service.
            </p>
          </div>
          <div className="self-end">
            <ul className="grid grid-cols-2 gap-5">
              <li className="text-3xl">
                <span className="mr-5 text-[16px]">01</span>Web
              </li>
              <li className="text-3xl">
                <span className="mr-5 text-[16px]">02</span>App
              </li>
              <li className="text-3xl">
                <span className="mr-5 text-[16px]">02</span>Software
              </li>
              <li className="text-3xl">
                <span className="mr-5 text-[16px]">02</span>E-commerce
              </li>
            </ul>
          </div>
        </section>
        <Faqs />
      </main>
    </Main>
  );
};

CustomDevelopment.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default CustomDevelopment;
