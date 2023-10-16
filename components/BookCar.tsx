"use client";

import { BookCarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { List } from ".";
import { dropoff, pickup } from "@/constant";

const BookCar = ({ isOpen, setIsOpen, imgGen }: BookCarProps) => {
  function closeModal() {
    setIsOpen(false);
  }
  const [places, setPlaces] = useState({
    pickUp: pickup[0],
    dropOff: dropoff[0],
  });

  return (
    <div className="overflow-y-auto">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" relative w-full max-w-5xl transform overflow-hidden rounded-xl text-left align-middle overflow-y-auto shadow-xl transition-all px-6 py-4 bg-white ">
                  <div className="">
                    <h3 className=" relative flex text-xl font-medium text-white bg-primary-blue py-4 md:text-3xl rounded-md px-2">
                      COMPLETE YOUR BOOKING{" "}
                    </h3>
                    <button
                      className="absolute top-0 bg-slate-100 rounded-full p-2 justify-between items-center right-4"
                      onClick={closeModal}
                    >
                      <Image
                        src="/close.svg"
                        alt="close"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </button>
                    {/* sub heading------------------------- */}
                    <div className=" border-b-2 bg-light-white pt-6 px-2 pb-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        Upon completing this reservation enquiry, you will
                        receive:
                      </h3>
                      <p className=" text-gray-800">
                        Your rental voucher to produce on arrival at the rental
                        desk and a toll-free customer support number.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex max-md:gap-16 flex-col md:flex-row justify-between px-5">
                    <div className=" flex flex-col gap-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Locatio & Date
                      </h3>
                      {/* DATE & TIME --------------------- */}
                      <div className="flex gap-6 flex-col">
                        <div>
                          <p className="flex flex-col">
                            <div className="flex gap-3 items-center">
                              <MdOutlineEditLocationAlt className="w-6 h-6" />
                              <p className="text-xl font-semibold text-gray-900">
                                Pick-up date & time
                              </p>
                            </div>
                            <div className="relative">
                              <input
                                type="datetime-local"
                                className="input-date input"
                              />
                            </div>
                          </p>
                        </div>
                        <div>
                          <p className="flex flex-col">
                            <div className="flex gap-3 items-center">
                              <MdOutlineEditLocationAlt className="w-6 h-6" />
                              <p className="text-xl font-semibold text-gray-900">
                                Drop-off date & time
                              </p>
                            </div>
                            <div className="relative">
                              <input
                                type="datetime-local"
                                className="input-date input"
                              />
                            </div>
                          </p>
                        </div>

                        {/* ----------LIST BOX ============ */}
                        <div className="flex flex-col">
                          <div className="flex gap-3 items-center">
                            <MdOutlineEditLocationAlt className="w-6 h-6" />
                            <p className="text-xl font-semibold text-gray-900">
                              Pick-up-location
                            </p>
                          </div>
                          <List
                            places={places.pickUp}
                            setPlaces={setPlaces}
                            options={pickup}
                          />
                        </div>
                        {/* ----------LIST BOX ============ */}
                        <div className="flex flex-col">
                          <div className="flex gap-3 items-center">
                            <MdOutlineEditLocationAlt className="w-6 h-6" />
                            <p className="text-xl font-semibold text-gray-900">
                              Dropoff-location
                            </p>
                          </div>
                          <List
                            places={places.dropOff}
                            setPlaces={setPlaces}
                            options={dropoff}
                          />
                        </div>
                      </div>
                    </div>
                    {/* ----------------CAR-IMAGE-SECTION---------- */}
                    <div>
                      {/* -----------------------------CAR IMAGE -------------- */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Car- Mercedce-AWX23
                      </h3>

                      <Image
                        src={imgGen}
                        width={420}
                        height={420}
                        alt="order-car-image"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default BookCar;
