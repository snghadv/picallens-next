import React, { useEffect } from 'react';
import github from 'prism-react-renderer/themes/github';
import { Prism } from "@mantine/prism";
import { Table } from "flowbite-react";

const ContentHeader = (props) => {
    const { title, description } = props;
    return (
        <header id="header" className="relative z-20">
            <div>
                <div className="flex items-center">
                    <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-[#212D94] tracking-tight dark:text-slate-200">{title}</h1>
                </div>
            </div>
            <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">{description}</p>
        </header>
    )
}

const Heading = (props) => {
    const { name, href, id } = props;
    return (
        <h2 className="group flex whitespace-pre-wrap -ml-4 pl-4 mb-2 text-sm leading-6 text-[#5767f6] font-medium tracking-normal dark:text-sky-400" id={id}>
            <a href={href} className="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Anchor">
                <div className="w-6 h-6 text-slate-400 ring-1 ring-slate-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-slate-900/10 hover:shadow hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
                    <svg width="12" height="12" fill="none" aria-hidden="true">
                        <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                </div>
            </a>
            <span>{name}</span>
        </h2>
    )
}

const SubHeading = (props) => {
    const { title, href, id } = props;
    return (
        <h3 className="group flex whitespace-pre-wrap -ml-4 pl-4 text-xl font-semibold mb-4" id={id}>
            <a href={href} className="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Anchor">
                <div className="w-6 h-6 text-slate-400 ring-1 ring-slate-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-slate-900/10 hover:shadow hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
                    <svg width="12" height="12" fill="none" aria-hidden="true">
                        <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                </div>
            </a>
            <span>{title}</span>
        </h3>
    )
}

const CodeViewer = (props) => {
    const { code, language, lines = false, lineHighlight = {}, title, id, outerDivId, tryIt = true, codeId } = props;
    // let navigate = useNavigate();

    const onTryIt = () => {
        // navigate('/editor', { state: { code: code } });
    }

    useEffect(() => {
        let divElement = document?.getElementById(id);
        let elemHeight = divElement?.offsetHeight;
        let outerDiv = document?.getElementById(outerDivId);
        outerDiv.style.marginBottom = `${elemHeight + 20}px`;
    })

    return (
        <div id={outerDivId}>
            <div className='bg-[#f6f8fa] w-[100%] flex pb-3'>
                <div className='w-2/3'>
                    <h1 className='text-2xl px-3 pt-3 bg-[#f6f8fa]'>{title}</h1>
                </div>
                <div className='w-1/3 pt-3 pr-3'>
                    {tryIt ? <button type="button" className="bg-[#212D94] float-right text-white rounded-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3" onClick={() => onTryIt()}>
                        <div className="flex flex-row align-middle">
                            <span className="mr-2">Try It</span>
                            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </button> : ""}
                </div>
            </div>
            <hr />
            <Prism
                id={id}
                style={{ overflow: 'scroll', position: 'absolute', width: '100%' }}
                language={language}
                getPrismTheme={(_theme, colorScheme) => github}
                highlightLines={lineHighlight}
                scrollAreaComponent='div'
                noCopy
            >
                <div className="px-4 py-6">{code}</div>
            </Prism>
        </div>
    )
}

const CodeViewerWithTabs = (props) => {
    const { tabs = [], defaultValue, title } = props;
    return (
        <div className='my-4'>
            <div className='bg-[#f6f8fa] w-[100%] flex'>
                <div className='w-2/3'>
                    <h1 className='text-2xl px-3 pt-3 bg-[#f6f8fa]'>{title}</h1>
                </div>
                <div className='w-1/3 pt-3 pr-3'>
                    <button type="button" className="bg-[#212D94] float-right text-white rounded-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <span className="mr-2">Try It</span>
                            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <Prism.Tabs defaultValue={defaultValue} className="bg-[#f6f8fa]">
                <Prism.TabsList>
                    {tabs.map(tab => {
                        return <Prism.Tab value={tab.name} icon={tab.icon}>
                            {tab.name}
                        </Prism.Tab>
                    })}
                </Prism.TabsList>
                {tabs.map(tab => {
                    return (
                        <Prism.Panel
                            withLineNumbers={tab?.lines || false}
                            language={tab.language}
                            value={tab.name}
                            getPrismTheme={(_theme, colorScheme) => github}
                            highlightLines={tab?.lineHighlight || []}
                        >
                            {tab.code}
                        </Prism.Panel>
                    )
                })}
            </Prism.Tabs>
        </div>
    )
}

const PrevButton = (props) => {
    const { onClickPrev } = props;
    return <button type="button" className="bg-[#212D94] text-white rounded-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3" onClick={() => onClickPrev()}>
        <div className="flex flex-row align-middle">
            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <p className="ml-2">Prev</p>
        </div>
    </button>
}

const NextButton = (props) => {
    const { onClickNext } = props;
    return <button type="button" className="bg-[#212D94] float-right text-white rounded-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3" onClick={() => onClickNext()}>
        <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </div>
    </button>
}

const InfoPanel = (props) => {
    const { title } = props;
    return <div id="alert-additional-content-3" className="p-4 mb-4 border border-green-300 rounded-lg bg-green-50 dark:bg-green-200" role="alert">
        <div className="flex items-center">
            <svg aria-hidden="true" className="w-5 h-5 mr-2 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium text-green-700 dark:text-green-800">{title}</h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
            {props.children}
        </div>
    </div>
}

const TailwindTable = (props) => {
    const { headers, tableData } = props;
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <Table hoverable={true}>
                <Table.Head>
                    {headers.map(field => {
                        return <Table.HeadCell className='bg-[#abb4ff]'>
                            {field.name}
                        </Table.HeadCell>
                    })}
                </Table.Head>
                <Table.Body className="divide-y">
                    {tableData.map(data => {
                        return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            {headers.map(field => {
                                return <Table.Cell className='px-6 py-4'>
                                    {data[field.dataField]}
                                </Table.Cell>
                            })}
                        </Table.Row>
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

const OnThisPage = (props) => {
    const { pageData } = props || {};
    return (
        <div className="relative z-20 w-[19.5rem] py-10 hidden xl:block">
            <div className='sticky overflow-x-hidden overflow-y-scroll top-[105px]'>
                <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
                <ul className="text-slate-700 text-sm leading-6">
                    {pageData.map(page => {
                        if (page.type === 'main') {
                            return <li><a href={page.href} className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">{page.name}</a></li>
                        } else {
                            return <li className="ml-4">
                                <a href={page.href} className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                    <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                    {page.name}
                                </a>
                            </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

const HorizontalLine = (props) => {
    return (
        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
    )
}

export {
    ContentHeader,
    Heading,
    SubHeading,
    CodeViewer,
    CodeViewerWithTabs,
    PrevButton,
    NextButton,
    InfoPanel,
    TailwindTable,
    OnThisPage,
    HorizontalLine
}