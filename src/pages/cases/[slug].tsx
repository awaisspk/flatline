import Image from 'next/image';
import React from 'react';

import { Main, Meta, PageLayout } from '@/layouts';

const CaseDetails = () => {
  return (
    <Main
      meta={<Meta title="Case - Just Eat takeaway" description="Flat Line " />}
    >
      <main>
        <div>
          <div className="z-1 absolute inset-x-0 top-0 h-[650px] md:h-[350px]">
            <h1 className="absolute left-[7%] bottom-14 z-20 pr-14 text-3xl text-white sm:text-[40px]">
              Con­nect­ing Con­sumers To Local Restaurants
            </h1>
            <p
              className="absolute right-[4%] bottom-24 z-20 text-xl text-white placeholder:text-red-50  sm:text-3xl"
              style={{ writingMode: 'vertical-rl' }}
            >
              Just Eat Takeaway
            </p>
            <Image
              src="https://www.flatlineagency.com/wp-content/uploads/2022/05/justeattakeaway.jpg"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <span className="block pb-[600px] sm:pb-[200px]" />
        </div>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <h2 className="text-center">Work in Progress</h2>
          {/* <p> */}
          {/*   {' '} */}
          {/*   To further extend Just Eat Takeaway's reach we created */}
          {/*   hyper-personalised custom development content to connect the brand */}
          {/*   with their large European audience, in a meaningful way. */}
          {/* </p> */}
        </section>
      </main>
    </Main>
  );
};

CaseDetails.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default CaseDetails;
