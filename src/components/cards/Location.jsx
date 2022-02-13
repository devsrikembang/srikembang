import * as React from 'react';
import {
  OfficeBuildingIcon,
  UserIcon,
  TruckIcon,
  GlobeIcon,
} from '@heroicons/react/outline';

export default function Location({ location }) {
  return (
    <div className="border rounded-lg bg-white py-6 sm:py-8 px-6 sm:px-10 w-full">
      <div className="flex flex-col gap-6">
        <h2 className="text-gray-700 text-xl font-semibold">{location.area}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4 icon-location">
              <OfficeBuildingIcon className="h-10 w-10 text-primary" />
              <h5 className="text-gray-700 text-lg">
                <span className="font-semibold">{location.totalUnit} Unit</span>{' '}
                Koperasi Usaha Pertanian
              </h5>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4 icon-location">
              <GlobeIcon className="h-10 w-10 text-primary" />
              <h5 className="text-gray-700 text-lg">
                Komoditas Produksi{' '}
                <span className="font-semibold">{location.commodity}</span>
              </h5>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4 icon-location">
              <UserIcon className="h-10 w-10 text-primary" />
              <h5 className="text-gray-700 text-lg">
                <span className="font-semibold">
                  {'> '}
                  {location.totalMitra} Mitra Tani
                </span>{' '}
                Tergabung Koperasi
              </h5>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4 icon-location">
              <TruckIcon className="h-10 w-10 text-primary" />
              <h5 className="text-gray-700 text-lg">
                Kapasitas Produksi{' '}
                <span className="font-semibold">
                  {location.capacity} {location.capacityUnit}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
