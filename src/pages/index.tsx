import Image from 'next/image';
import Link from 'next/link';

import { Blog } from '@/components/screens/home/Blog';
import { MessageBot } from '@/components/screens/home/MessageBot';
import { OurClients } from '@/components/screens/home/OurClients';
import { OurWork } from '@/components/screens/home/OurWork';
import { Services } from '@/components/screens/home/Services';
import { Main, Meta, PageLayout } from '@/layouts';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Custom development, Challenge the status quo"
          description=""
        />
      }
    >
      <main>
        <section className="mx-auto max-w-flat px-8 sm:px-12">
          <h1 className="mb-12 text-2xl font-normal leading-10 sm:text-4xl md:text-5xl md:leading-[60px]">
            Global disruptor in custom development
            <br />
            <span className="text-neutral-500/80">We make you pulse</span>
          </h1>
          <div className="mt-8 flex space-x-6 pb-28">
            <Link href="cases">
              <a className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px]   border-[#dedede] bg-transparent py-4 text-sm leading-4 text-black duration-300 hover:bg-black hover:text-white sm:w-max sm:py-5 sm:px-10">
                Learn more
              </a>
            </Link>
            <button className="flex w-full cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:w-max sm:py-5 sm:px-10">
              Plan a call
            </button>
          </div>
        </section>

        <section className="relative h-[230px] w-full sm:h-[330px] md:h-[628px]">
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2022/05/mystic-boarding-banner-e1644150425277-1-e1649283384532-1536x502.jpg"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </section>
        <OurWork />
        <Services />
        <OurClients />
        <Blog />
        <MessageBot />
      </main>
    </Main>
  );
};

Index.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Index;
