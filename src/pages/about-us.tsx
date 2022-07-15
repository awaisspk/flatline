import React from 'react';

import { Carousel } from '@/components/Carousal/Carousal';
import { JoinUs } from '@/components/screens/aboutus/JoinUs';
import { OurCulture } from '@/components/screens/aboutus/OurCulture';
import { OurOffices } from '@/components/screens/aboutus/OurOffices';
import { Main, Meta, PageLayout } from '@/layouts';

const Aboutus = () => {
  return (
    <Main
      meta={
        <Meta title="It's about team Flatline" description="Flatline Agency" />
      }
    >
      <main>
        <section>
          <div className="mx-auto max-w-flat space-y-5 px-8 pb-24 sm:px-12 md:space-y-7">
            <h1 className="text-4xl leading-10 md:text-5xl">
              We make you <span className="text-[#808080]">Pulse</span>.
            </h1>
            <p className="max-w-[620px] text-sm leading-5 text-[#808080] md:text-xl md:leading-7 md:text-black/80">
              Flatline Agency is a global disruptor in custom development &
              design experiences based in Amsterdam. We deliver high-quality
              work - while leveraging the newest and best techniques available.
            </p>
          </div>
          <section>
            <Carousel />
          </section>
          <div className="mx-auto grid max-w-flat grid-cols-2 space-y-5 px-8 pb-24 pt-20 sm:px-12 md:space-y-7">
            <h3 className="max-w-md text-4xl leading-10">
              Global disruptor in custom development & end-to-end production
              partner.
            </h3>
            <p className="max-w-md">
              We begin where every other agency stops. Delivering high-quality
              work, fast – while leveraging the newest and best techniques
              available. Of course, all our products are built to scale out of
              the box – future proof as to the standard.
            </p>
          </div>
        </section>
        <OurOffices />
        <OurCulture />
        <section className="mx-auto flex  h-screen max-w-flat flex-col px-8 pt-40  pb-24 sm:px-12">
          <h2 className="text-center text-3xl leading-10 sm:text-5xl">
            Want to talk real-time? Get in touch.
          </h2>
        </section>
        <JoinUs />
      </main>
    </Main>
  );
};

Aboutus.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Aboutus;
