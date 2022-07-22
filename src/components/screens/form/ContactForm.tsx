import 'react-intl-tel-input/dist/main.css';

import React from 'react';
import IntlTelInput from 'react-intl-tel-input';

import { Button } from '@/components/ui/Button';

type IContactForm = {
  btnVariant?: 'bordered';
};

export const ContactForm = ({ btnVariant }: IContactForm) => {
  return (
    <div>
      <form>
        <div className="flex max-w-full flex-col space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="h-16 rounded-full border border-gray-300 pl-10 pr-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-16 rounded-full border border-gray-300 pl-10 pr-5"
          />
          <IntlTelInput
            defaultCountry="nl"
            placeholder="Phone"
            containerClassName="intl-tel-input"
            inputClassName="form-control w-full h-16 rounded-full border border-gray-300  pr-5"
          />
          <Button variant={btnVariant}>Send</Button>
        </div>
      </form>
    </div>
  );
};
