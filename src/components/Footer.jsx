import * as React from 'react';
import { Container } from '.';

export default function Footer() {
  const year = new Date().getFullYear();
  const contact = {
    email: 'cv.srikembangdayaniaga@gmail.com',
    phone: '+62 813-6907-1270',
  };
  return (
    <footer className="pb-8 pt-10 sm:pt-12 bg-gray-50">
      <Container>
        <div className="flex flex-col w-full gap-y-8 sm:gap-y-12">
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-16">
            <div className="flex flex-col w-full gap-y-4">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dztdpfos7/image/upload/v1644734528/logo_qwjlwx.png"
                  alt="logo"
                  width={260}
                  height={70}
                />
              </div>
              <div className="flex">
                <p className="text-gray-600 text-sm sm:text-base font-light leading-6">
                  Jalan Yos Sudarso, No. 054 D, Kelurahan Sukaraya, Kecamatan
                  Baturaja Timur, Kota Baturaja, Sumatra Selatan
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                Hubungi Kami
              </h3>
              <div className="flex flex-col text-sm sm:text-base font-light leading-6 text-gray-600">
                <h5>{contact.phone}</h5>
                <h5>{contact.email}</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <h5 className="text-gray-600 font-normal text-sm sm:text-base">
              &copy; {year} Srikembang Daya Niaga. All Right Reserved.
            </h5>
          </div>
        </div>
      </Container>
    </footer>
  );
}
