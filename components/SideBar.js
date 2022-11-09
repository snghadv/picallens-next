import Link from 'next/link';

export default function SideBar(props) {
    const { configs = {}, currentPage, name } = props;
    
    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div className="fixed flex flex-col top-15 left-0 w-64 bg-white h-full border-r">
                <div className="flex items-center justify-center h-14 border-b">
                    <div className="text-[#212D94] font-semibold" >{name + ' Tutorial'}</div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        {Object.keys(configs).map((sideBars,idx) => {
                            let returnItem = [<li className="px-5">
                                <div className="flex flex-row items-center h-8">
                                    <div className="text-sm tracking-wide text-gray-800 font-semibold">{sideBars}</div>
                                </div>
                            </li>];

                            configs[sideBars].map((item,idx2) => {
                                if (currentPage === item.url.split("/").at(-1) || (!currentPage && idx === 0 && idx2 === 0)) {
                                    returnItem.push(<li>
                                        <Link href={item.url} className="relative flex flex-row items-center h-11 focus:outline-none bg-gray-50 text-gray-800 border-l-4 border-indigo-500 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">{item.title}</span>
                                        </Link>
                                    </li>);
                                    return true;
                                } else {
                                    returnItem.push(<li>
                                        <Link href={item.url} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">{item.title}</span>
                                        </Link>
                                    </li>);
                                    return true;
                                }
                            })
                            return returnItem;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
