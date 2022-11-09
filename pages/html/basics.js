import { flattenDeep } from "lodash";

import htmlConfigs from "../../configs/tutorials/htmlConfigs";

import {
    CodeViewer, ContentHeader, Heading, NextButton, PrevButton, SubHeading, HorizontalLine
} from '../../components/BasicComponents';
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Dropdown from "../../components/Dropdown";
import { html_5, html_6, html_7 } from "../../code-examples";

export default function HTMLBasics() {
    const router = useRouter();
    let currentPage = "basics";

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
        let nextConfigs = configs[currentPageIdx + 1];
        router.push(nextConfigs.url);
    }

    const onPrev = () => {
        let nextConfigs = configs[currentPageIdx - 1];
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
                                <div id="content-wrapper" className="relative z-20 prose prose-slate mt-12 dark:prose-dark text-md font-light">
                                    <Heading name="HTML Structure" href="#html-structure" id="html-structure" />
                                    <SubHeading title="HTML Page Structure" href="#html-page-structure" id="html-page-structure" />
                                    <p><b>HTML Page Structure given below:</b></p>
                                    <br />
                                    <CodeViewer
                                        code={html_5}
                                        language="jsx"
                                        lines={true} title="HTML Page Structure"
                                        id="id1"
                                        outerDivId="odId1"
                                    />
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="Web Browsers" href="#web-browsers" id="web-browsers" />
                                    <p>Web browsers (Chrome, Edge, Firefox, Safari) are designed to accurately interpret and display HTML content. A browser does not show HTML tags, but rather utilises them to decide how to display a document.</p>
                                    <p className='mt-3 font-semibold'>Example of chrome web browser shown below.</p>
                                    <img className="mt-4 shadow-md rounded-lg" src="https://storage.cloud.google.com/picallens/picallens_browser.png?authuser=2" alt="Browser" />
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="HTML Elements" href="#html-element" id="html-element" />
                                    <p>An HTML element consists of a start tag, content, and an end tag.</p>
                                    <img className="mt-8 mx-auto" src="https://storage.cloud.google.com/picallens/tag_html_element.png?authuser=2" alt="Element" />
                                    <p className='mt-4'>{`Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!`}</p>
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <Heading name="HTML Basics" href="#html-basics" id="html-basics" />
                                    <p className='mt-4'>When we start to code in HTML, we need to think about and include a number of tags. These tags help us put things in our scripts or web pages in order and give them a basic look. These step-by-step instructions will help you learn how to write HTML.</p>
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="HTML Document" href="#html-document" id="html-document" />
                                    <CodeViewer
                                        code={html_5}
                                        language="jsx"
                                        lines={true}
                                        title="HTML Page Structure"
                                        id="id2"
                                        outerDivId="odId2"
                                    />
                                    <div className='ml-8 mb-3'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li><code className='text-red-600'>{`<!DOCTYPE html>:`}</code> A HTML document tag is the first thing in every HTML document. Even though it's not required, it's a good idea to start the document with the tag shown below. We will learn more about doc types later in the tutorial.</li>
                                        </ul>
                                    </div>
                                    <CodeViewer
                                        code={`<!DOCTYPE html>`}
                                        language="jsx"
                                        lines={false}
                                        id="id3"
                                        title="Syntax"
                                        outerDivId="odId3"
                                        tryIt={false}
                                    />
                                    <div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li className='mt-3'><code className='text-red-600'>{`<html>: `}</code>{`Every HTML code must be surrounded by standard HTML tags. The tag begins with <html> and concludes with </html>.`}</li>
                                            <li className='mt-3'><code className='text-red-600'>{`<head>: `}</code>{`Head tag contains all of the page's or document's header information, such as the page's title and other miscellaneous information. This data is contained within the head tag, which begins with <head> and ends with </head>. We will discuss about content of head tags later in the tutorial.`}</li>
                                            <li className='mt-3'><code className='text-red-600'>{`<title>: `}</code>{`Title tag contains title of the web page, which is shown in the browser title bar. This data is contained within the title tag, which begins with <title> and ends with </title>.`}</li>
                                            <li className='mt-3'><code className='text-red-600'>{`<body>: `}</code>{`The body tag is the most important tag in an HTML document. It contains all the visible content on a web page, like images, videos, headings, etc. This tag starts with <body> and ends with </body>. In a later tutorial, we'll learn more about the tags that are inside the body tag.`}</li>
                                        </ul>
                                    </div>
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="HTML Headings" href="#html-headings" id="html-headings" />
                                    <p>{`These tags enable us to give a webpage's content headings. These tags are written primarily within the body tag. HTML provides six heading tags, ranging from <h1> to <h6>. Each tag presents the heading in a distinct font style and size.`}</p>
                                    <p className='mt-4'><b>HTML Headings Tags Example Given Below:</b></p>
                                    <br />
                                    <CodeViewer
                                        code={html_6}
                                        language="jsx"
                                        lines={true} title="HTML Headings"
                                        id="id4"
                                        outerDivId="odId4"
                                    />
                                    <p>Output:</p>
                                    <img className="mt-4 rounded-lg border-red-700 border-solid" src="https://storage.cloud.google.com/picallens/htmlHeadingsOutput.png?authuser=2" alt="HTML Heading Output" />
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="HTML Paragraphs" href="#html-paragraphs" id="html-paragraphs" />
                                    <p>{`Paragrah tag is used to display paragraphs statements on web pages. It starts with <p> and ends with </p>.`}</p>
                                    <p className='mt-4'><b>HTML Paragrah Tags Example Given Below:</b></p>
                                    <br />
                                    <CodeViewer
                                        code={html_7}
                                        language="jsx"
                                        lines={true} title="HTML Paragraphs"
                                        id="id5"
                                        outerDivId="odId5"
                                    />
                                    <p>Output:</p>
                                    <img className="mt-4 rounded-lg border-red-700 border-solid" src="https://storage.cloud.google.com/picallens/htmlParagraphOutput.png?authuser=2" alt="HTML Paragraph Output" />
                                    <HorizontalLine />
                                    <p className="text-md font-medium text-[#212D94]">There are also various other tags in HTML to insert links, audios, images, videos, etc and various other formatting tags that we will be learning in the later sections. Thanks You for Support!</p>

                                </div>
                                {totalPages > 1 ? <div className='mt-10'>
                                    {currentPageIdx !== 0 ? <PrevButton onClickPrev={onPrev} /> : ''}
                                    {currentPageIdx !== (totalPages - 1) ? <NextButton onClickNext={onNext} /> : ''}
                                </div> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="relative z-20 w-[19.5rem] py-10 hidden xl:block">
                        <div className='sticky overflow-x-hidden overflow-y-scroll top-[105px]'>
                            <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
                            <ul className="text-slate-700 text-sm leading-6">
                                <li><a href="#html-structur" className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">HTML Structure</a></li>
                                <li className="ml-4">
                                    <a href="#html-page-structure" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Page Structure
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#web-browsers" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        Web Browsers
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#html-element" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Elements
                                    </a>
                                </li>
                                <li><a href="#html-basics" className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">HTML Basics</a></li>
                                <li className="ml-4">
                                    <a href="#html-document" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Document
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#html-headings" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Headings
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="#html-paragraphs" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                        <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                        </svg>
                                        HTML Paragraphs
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
