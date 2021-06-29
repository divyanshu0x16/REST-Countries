import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Filter = ({ onFilter }) => {
  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="box-border rounded-md w-52 h-14 shadow-lg bg-white dark:bg-blue-elements dark:text-white outline-none">
              <span className="text-base pr-12">Filter by Region</span>
              <i className="fas fa-chevron-down fa-xs"></i>
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right outline-none absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white dark:bg-blue-elements"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => onFilter('africa')}
                      className={classNames(
                        active
                          ? 'bg-gray-background dark:bg-blue-background'
                          : '',
                        'block px-4 py-2 text-base dark:text-white'
                      )}
                    >
                      Africa
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => onFilter('americas')}
                      className={classNames(
                        active
                          ? 'bg-gray-background  dark:bg-blue-background'
                          : '',
                        'block px-4 py-2 text-base dark:text-white'
                      )}
                    >
                      America
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => onFilter('asia')}
                      className={classNames(
                        active
                          ? 'bg-gray-background  dark:bg-blue-background'
                          : '',
                        'block px-4 py-2 text-base dark:text-white'
                      )}
                    >
                      Asia
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => onFilter('europe')}
                      className={classNames(
                        active
                          ? 'bg-gray-background  dark:bg-blue-background'
                          : '',
                        'block px-4 py-2 text-base dark:text-white'
                      )}
                    >
                      Europe
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => onFilter('oceania')}
                      className={classNames(
                        active
                          ? 'bg-gray-background  dark:bg-blue-background'
                          : '',
                        'block px-4 py-2 text-base dark:text-white'
                      )}
                    >
                      Oceania
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Filter;
