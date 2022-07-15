import 'react-intl-tel-input/dist/main.css';

import Image from 'next/image';
import React from 'react';
import IntlTelInput from 'react-intl-tel-input';

import { OfficeCarousal } from '@/components/Carousal/OfficeCarousal';
import { Main, Meta, PageLayout } from '@/layouts';
import { offices } from '@/utils/data';

const Contact = () => {
  return (
    <Main meta={<Meta title="Say hi" description="Flatline" />}>
      <main>
        <section className="mx-auto max-w-flat space-y-5 px-8 pt-5 pb-24 sm:px-12">
          <h1 className="text-5xl">Ready to scale?</h1>
          <p className="max-w-xl leading-7">
            Ready to build something real together with your favorite creatives
            and tech leads? Get into contact or fill out an inquiry form.
          </p>
        </section>
        <section>
          <OfficeCarousal />
        </section>
        <section className="mx-auto mt-20 flex max-w-flat justify-between px-8 sm:px-12">
          <div className="space-y-14">
            <h2 className="text-4xl">Inquiries</h2>
            <form>
              <div className="flex flex-col space-y-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-16 w-[440px] max-w-full rounded-full border border-gray-300 pl-10 pr-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-16 w-[440px] max-w-full rounded-full border border-gray-300 pl-10 pr-5"
                />
                <IntlTelInput
                  defaultCountry="nl"
                  placeholder="Phone"
                  containerClassName="intl-tel-input"
                  inputClassName="form-control  h-16 rounded-full border border-gray-300  pr-5 w-[440px] max-w-full"
                />
                <button className="flex h-16 w-full cursor-pointer items-center justify-center rounded-[100px] bg-black text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:px-10">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-[430px] max-w-full">
            {offices.map((office, i) => (
              <div key={i}>
                <h2 className="text-4xl">
                  {office.city}
                  <span>{office.time}</span>
                </h2>
                <p className="my-10 flex flex-col text-sm leading-7 text-neutral-500">
                  <span>{office.location[0]}</span>
                  <span>{office.location[1]}</span>
                  <span>{office.email}</span>
                  <span>{office.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="aspect-w-16 aspect-h-7 relative my-28 mx-auto w-[calc(100%-60px)] max-w-[1200px]">
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2022/01/Group-46-1536x769.jpg"
            layout="fill"
            alt=""
          />
        </div>
      </main>
    </Main>
  );
};

Contact.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Contact;
