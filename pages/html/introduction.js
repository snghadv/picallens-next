import { flattenDeep } from "lodash";

import htmlConfigs from "../../configs/tutorials/htmlConfigs";

import {
    CodeViewer, ContentHeader, Heading, NextButton, PrevButton, SubHeading, HorizontalLine, InfoPanel, TailwindTable
} from '../../components/BasicComponents';

import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Dropdown from "../../components/Dropdown";
import { html_1 } from "../../code-examples";

export default function HTMLIntroduction() {
    const router = useRouter();
    let currentPage = "introduction";

    let configs = flattenDeep(Object.values(htmlConfigs));
    configs = configs.map(item => {
        return { ...item }
    });

    let totalPages = configs.length;
    let currentPageIdx = configs.findIndex(v => v.url.split("/").at(-1) === currentPage);
    currentPageIdx = currentPageIdx === -1 ? 0 : currentPageIdx;

    let selectedPage = configs.find(v => v.url.split("/").at(-1) === currentPage);
    selectedPage = selectedPage ? selectedPage : configs[0];

    const { title, description } = selectedPage;

    const onNext = () => {
        console.log(configs)
        currentPageIdx++;
        let nextConfigs = configs[currentPageIdx];
        console.log(nextConfigs)
        router.push(nextConfigs.url);
    }

    const onPrev = () => {
        currentPageIdx--;
        let nextConfigs = configs[currentPageIdx];
        router.push(nextConfigs.url);
    }

    return (
        <div className="flex">
            <div className='lg:visible md:visible invisible'>
                <SideBar configs={htmlConfigs} currentPage={currentPage} name="HTML" />
            </div>
            <div className='bg-white text-black lg:ml-72 md:ml-72'>
                <Dropdown configs={htmlConfigs} currentPage={currentPage} />
                <div className='flex w-full'>
                    <div className="w-[100%] mx-6 mt-5">
                        <div>
                            <div className="mx-auto">
                                <div className='block'>
                                    {totalPages > 1 ? <div className='h-[40px]'>
                                        {currentPageIdx !== 0 ? <PrevButton onClickPrev={onPrev} /> : ''}
                                        {currentPageIdx !== (totalPages - 1) ? <NextButton onClickNext={onNext} /> : ''}
                                    </div> : ""}
                                    <div className='mt-8'>
                                        <ContentHeader title={title} description={description} />
                                    </div>
                                </div>
                                <div id="content-wrapper" className="relative z-20 prose prose-slate mt-12 dark:prose-dark">
                                    <InfoPanel title="HTML Introduction">
                                        <div className='ml-6'>
                                            <ul className='list-outside list-disc'>
                                                <li>HTML stands for Hyper Text Markup Language.</li>
                                                <li>For creating Web pages, HTML is the industry standard.</li>
                                                <li>The link between web pages is known as hypertext.</li>
                                                <li>The text document inside the tag that specifies the structure of web pages is defined using a markup language.</li>
                                                <li>HTML uses text to define what modification on text needs to be done.</li>
                                            </ul>
                                        </div>
                                    </InfoPanel>
                                    <Heading name="HTML Overview" href="#html-overview" id="html-overview" />
                                    <SubHeading title="What is HTML?" href="#what-is-html" id="what-is-html" />
                                    <p className="text-md font-light">Do you know how a website is generated and shown to you when you go to read anything or buy something? HTML is the only markup language used to create web pages. It provides many sorts of tags like<b className='font-bold'>{` <li>, <h1>, <div>, etc.`}</b> to show data in various structures. In this tutorial, we will learn about HTML and its tags in detail.</p>
                                    <p className="text-md font-light">Here are some points about HTML:</p>
                                    <br /><div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li>HTML is the primary language used in web design. CSS is used alongside HTML to further enhance web page design. JavaScript is combined with HTML to create dynamic web pages.</li>
                                            <li className='mt-3'>HTML has a vast set of markup tags that are used to design web pages.</li>
                                            <li className='mt-3'>{`Web Browsers (like Chrome, Firefox, Safari and others) are used to interpret HTML and render web pages.`}</li>
                                            <li className='mt-3'>HTML code can be written in any text editor and saved as "filename.html" or "filename.htm."</li>
                                        </ul>
                                    </div>
                                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="History of HTML" href="#history-of-html" id="history-of-html" />
                                    <p className="text-md font-light">Tim Berners-Lee invented HTML in 1991. HTML 1.0 was the original version, while HTML 2.0, issued in 1995, was the first standard version.</p><br />
                                    <p className="text-md font-light">HTML is a rapidly growing markup language that has undergone several version updates.
                                        Long before its new standards and specifications were implemented,
                                        each version enabled its users to produce web pages in a significantly easier and nicer manner, as well as making sites extremely efficient.</p>
                                    <br /><div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li>HTML 1.0 was launched in 1993 with the goal of distributing information that could be read and accessed using web browsers. However, not all of the developers were involved in the creation of websites. As a result, the language was not expanding.</li>
                                            <li className='mt-3'>HTML 2.0, released in 1995, which incorporates all of the functionality of HTML 1.0 plus a few extras, and which remained the standard markup language for designing and producing websites until January 1997, refining numerous key HTML characteristics.</li>
                                            <li className='mt-3'>HTML 3.0, in which Dave Raggett introduces a new paper or draught on HTML. It contained enhanced new HTML features, providing webmasters with more powerful capabilities for developing web sites. However, the strong new HTML capabilities hindered the browser's ability to make future advancements.</li>
                                            <li className='mt-3'>HTML 4.01 was a popular and successful HTML version prior to HTML 5.0.</li>
                                            <li className='mt-3'>HTML 5 was launched in 2014 as a consequence of the W3C HTML Working Group's concentrated work.</li>
                                        </ul>
                                    </div>
                                    <img className="mt-8" src="https://storage.cloud.google.com/picallens/html-history.png?authuser=2" alt="History" />
                                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="HTML Timeline" href="#timeline-of-html" id="timeline-of-html" />
                                    <TailwindTable
                                        headers={[{
                                            name: 'Year',
                                            dataField: 'year'
                                        }, {
                                            name: 'HTML Updates',
                                            dataField: 'updates'
                                        }]}
                                        tableData={[{
                                            year: '1989',
                                            updates: 'Tim Berners-Lee invented www'
                                        }, {
                                            year: '1991',
                                            updates: 'Tim Berners-Lee invented HTML'
                                        }, {
                                            year: '1993',
                                            updates: 'Dave Raggett drafted HTML+ or HTML 1.0'
                                        }, {
                                            year: '1995',
                                            updates: 'HTML Working Group defined HTML 2.0'
                                        }, {
                                            year: '1997',
                                            updates: 'W3C Recommendation: HTML 3.2'
                                        }, {
                                            year: '1999',
                                            updates: 'W3C Recommendation: HTML 4.01'
                                        }, {
                                            year: '2000',
                                            updates: 'W3C Recommendation: XHTML 1.0'
                                        }, {
                                            year: '2008',
                                            updates: 'WHATWG HTML5 First Public Draft'
                                        }, {
                                            year: '2012',
                                            updates: <a href="http://whatwg.org/html/" className='underline hover:text-[#212D94]'>WHATWG HTML5 Living Standard</a>
                                        }, {
                                            year: '2014',
                                            updates: <a href="http://www.w3.org/TR/html5/" className='underline hover:text-[#212D94]'>W3C Recommendation: HTML5</a>
                                        }, {
                                            year: '2017',
                                            updates: <a href="http://www.w3.org/TR/html52/" className='underline hover:text-[#212D94]'>W3C Recommendation: HTML5.2</a>
                                        }]}
                                    />
                                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <Heading name="Example" href="#html-example" id="html-example" />
                                    <SubHeading title="HTML Example" href="#example-of-html" id="example-of-html" />
                                    <CodeViewer
                                        code={html_1}
                                        language="jsx"
                                        lines={true} title="Example"
                                        id="htmlEmapleId"
                                        outerDivId="htmlEmapleOuterDivId"
                                    />
                                    <SubHeading title="Example Explanation" href="#example-of-html-explanation" id="example-of-html-explanation" />
                                    <div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li>The <code className='text-red-600'>{`<!DOCTYPE html>`}</code> declaration defines that this document is an HTML5 document</li>
                                            <li className='mt-3'>The <code className='text-red-600'>{`<html>`}</code> element is the root element of an HTML page</li>
                                            <li className='mt-3'>The <code className='text-red-600'>{`<head>`}</code> element contains meta information about the HTML page</li>
                                            <li className='mt-3'>The <code className='text-red-600'>{`<title>`}</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                                            <li className='mt-3'>The <code className='text-red-600'>{`<body>`}</code> element defines the web pages body, and is a container for all the visible structures on web page.</li>
                                            <li className='mt-3'>The <code className='text-red-600'>{`<div>`}</code> element defines division or a section in an HTML document.</li>
                                            <li className='mt-3'>The <code className='text-red-600'>{`<h1>`}</code> element defines a large heading</li>
                                        </ul>
                                    </div>
                                    <HorizontalLine />
                                    <p className="text-md font-medium text-[#212D94]">This is little about HTML and its history. In Next chapter we will learn some basics of HTML like page structure and some terminologies like Elements, Tags, etc. In Next Section we will see some of the editors used for HTML. Thanks You for Support!</p>
                                    {totalPages > 1 ? <div className='mt-10'>
                                        {currentPageIdx !== 0 ? <PrevButton onClickPrev={onPrev} /> : ''}
                                        {currentPageIdx !== (totalPages - 1) ? <NextButton onClickNext={onNext} /> : ''}
                                    </div> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-20 w-[19.5rem] py-10 hidden xl:block">
                        <div className='sticky overflow-x-hidden overflow-y-scroll top-[105px]'>
                            <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
                            <ul className="text-slate-700 text-sm leading-6">
                                <li><a href="#html-overview" className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">HTML Overview</a></li>
                                <li className="ml-4">
                                    <a href="#what-is-html" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        What is HTML?
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#history-of-html" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        History of HTML
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#timeline-of-html" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Timeline
                                    </a>
                                </li>
                                <li><a href="#html-example" className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Example</a></li>
                                <li className="ml-4">
                                    <a href="#example-of-html" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Example
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#example-of-html-explanation" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Example Explanation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <CodeViewerWithTabs
                tabs={[{
                    name: "style.jsx",
                    language: 'jsx',
                    icon: false,
                    code: demoCode
                },{
                    name: "style.css",
                    language: 'jsx',
                    icon: false,
                    code: demoCode
                }]}
                defaultValue="style.jsx"
                title="Example"
            /> */}
                </div>
                <Footer />
            </div>
        </div>
    )
}
