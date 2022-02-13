import * as React from 'react';

export default function Program(props) {
  const { program, inView = true } = props;
  return (
    <div className="grid grid-cols w-full h-[24rem] sm:h-[23rem] content-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium text-gray-700">{program.name}</h1>
        <h5 className="text-lg sm:text-base font-light text-gray-700">
          {program.description}
        </h5>
      </div>
      <div className="flex p-12 sm:p-10">
        {inView && <img src={program.image} alt={program.name} />}
      </div>
    </div>
  );
}
