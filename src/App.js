import * as React from 'react';
import { InView } from 'react-intersection-observer';
import {
  Layout,
  Container,
  CardProduct,
  CardProgram,
  CardLocation,
} from './components';
import clsx from 'clsx';
import useLoaded from './hooks/useLoaded';
import { products } from './constants/product';
import { programs } from './constants/program';

function Hero() {
  const isLoaded = useLoaded();
  return (
    <div className="flex flex-col h-[32rem] sm:h-[42rem] bg-cover bg-center bg-slate-800 bg-[url('https://res.cloudinary.com/dztdpfos7/image/upload/v1644732443/main-hero_bkr4cs.jpg')]  mb-6">
      <div className="flex w-full h-full items-center bg-black bg-opacity-10">
        <Container>
          <div
            className={clsx(
              'flex flex-col gap-4 max-w-xl',
              isLoaded && 'fade-in-start'
            )}
          >
            <h1
              className="text-white text-4xl sm:text-5xl font-semibold tracking-wide"
              data-fade="1"
            >
              Adaptif dan Berdampak Bagi Masyarakat
            </h1>
            <h5
              className="text-gray-200 text-base sm:text-xl max-w-lg"
              data-fade="2"
            >
              Enabler ekosistem supplycain berbasis pemberdayaan kelompok usaha
              pertanian
            </h5>
          </div>
        </Container>
      </div>
    </div>
  );
}
function Program() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32" id="program">
      <Container>
        <div className="flex flex-col w-full gap-y-20">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800">
            Berdaya Bersama Srikembang Daya Niaga
          </h2>
          <InView triggerOnce rootMargin="-30% 0px">
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={clsx(
                  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 sm:gap-6',
                  inView && 'fade-in-start'
                )}
              >
                {programs.map((program, idx) => (
                  <div data-fade={idx + 1} key={idx}>
                    <CardProgram program={program} inView={inView} />
                  </div>
                ))}
              </div>
            )}
          </InView>
        </div>
      </Container>
    </section>
  );
}

function Product() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50" id="product">
      <Container>
        <div className="flex flex-col w-full gap-y-16">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800">
            Produk
          </h2>
          <InView triggerOnce rootMargin="-30% 0px">
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={clsx(
                  'grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 ',
                  inView && 'fade-in-start'
                )}
              >
                {products.map((product, idx) => (
                  <div data-fade={idx + 1} key={idx}>
                    <CardProduct product={product} inView={inView} />
                  </div>
                ))}
              </div>
            )}
          </InView>
        </div>
      </Container>
    </section>
  );
}

function Location() {
  const locations = [
    {
      area: 'OKU Timur',
      totalUnit: 1,
      totalMitra: 200,
      commodity: 'Padi',
      capacity: 150,
      capacityUnit: 'Ton/Hari',
    },
    {
      area: 'OKU Selatan',
      totalUnit: 1,
      totalMitra: 200,
      commodity: 'Jagung',
      capacity: 75,
      capacityUnit: 'Ton/Hari',
    },
  ];
  return (
    <section className="py-20 sm:pt-24 sm:pb-36" id="location">
      <Container>
        <div className="flex flex-col w-full gap-y-10 md:px-24">
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800">
              Lokasi Produksi
            </h2>
            <div className="flex justify-center">
              <h4 className="max-w-md text-center text-sm sm:text-base font-normal text-gray-500">
                Berada di Provinsi Sumatera Selatan, Kabupaten Ogan Komering Ulu
                Timur Dan Komering Ulu Selatan
              </h4>
            </div>
          </div>
          <InView triggerOnce rootMargin="-30% 0px">
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={clsx(
                  'flex flex-col gap-4 sm:gap-6',
                  inView && 'fade-in-start'
                )}
              >
                {locations.map((location, idx) => (
                  <div key={idx} data-fade={idx * 2 + 1}>
                    <CardLocation location={location} />
                  </div>
                ))}
              </div>
            )}
          </InView>
        </div>
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Hero />
      <Program />
      <Product />
      <Location />
    </Layout>
  );
}
