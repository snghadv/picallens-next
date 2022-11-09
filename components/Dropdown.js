import { Fragment, useState } from 'react'
import { flattenDeep } from "lodash";
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

export default function Dropdown(props) {
    const router = useRouter()
    const { configs = {}, currentPage } = props;

    let newConfigs = flattenDeep(Object.values(configs));
    newConfigs = newConfigs.map(item => {
        return { title: item.title, itemUrl: item.url }
    });

    let currentIdx = newConfigs.find(v => v.itemUrl.split("/").at(-1) === currentPage);
    const [selected, setSelected] = useState(currentIdx ? currentIdx.title : newConfigs[0].title)
    const [query, setQuery] = useState('');

    const filteredConfigs =
        query === ''
            ? newConfigs
            : newConfigs.filter((config) =>
                config.title
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    const onSelectDropdown = (event) => {
        setSelected(event);
        let configValue = newConfigs.find(v => v.title === event);
        router.push(configValue.itemUrl);
    }

    return (
        <div className="w-full z-50 px-4 mt-5 lg:invisible md:invisible visible lg:hidden">
            <Combobox value={selected} onChange={(event) => onSelectDropdown(event)}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-white focus:ring-0 bg-[#404fd9]"
                            displayValue={(config) => config}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredConfigs.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredConfigs.map((config, idx) => (
                                    <Combobox.Option
                                        key={config.pageId}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#404fd9] text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={config.title}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {config.title}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-[#404fd9]'
                                                            }`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
