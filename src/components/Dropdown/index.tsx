import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';

import { clsx } from 'clsx';

export default function Dropdown() {
  return (
    <div className={clsx('text-right w-[7rem]')}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-bold text-gray-800  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <UserCircleIcon
              className="md:mr-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
            <span className="hidden md:block">Patty</span>
            <ChevronDownIcon
              className="ml-1 md:ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-0 w-[11.25rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className=" py-3 ">
              {/* Can Loop  */}
              <Menu.Item>
                {({ active }) => (
                  <button className="text-gray-800 group flex w-full items-center justify-center rounded-md py-2 text-sm text-center">
                    {active ? (
                      <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    ออกจากระบบ
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
