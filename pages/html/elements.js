import { flattenDeep } from "lodash";

import htmlConfigs from "../../configs/tutorials/htmlConfigs";

import {
    CodeViewer, ContentHeader, Heading, NextButton, PrevButton, SubHeading, HorizontalLine, TailwindTable, InfoPanel, OnThisPage
} from '../../components/BasicComponents';
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Dropdown from "../../components/Dropdown";
import { html_2, html_3 } from "../../code-examples";

export default function HTMLElements() {
    const router = useRouter();
    let currentPage = "elements";

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
                                    <p id="element-overview">HTML Elements is a HTML Document component or one of HTML node. An Element is started with start tag and end with end tags with some content in between. Although there are some tags which are self closing or do not have closing tag.</p>
                                    <img className="mt-8 mx-auto" src="https://storage.cloud.google.com/picallens/tag_html_element.png?authuser=2" alt="Element" />
                                    <p className='my-4'><b>Some Examples of HTML Elements:</b></p>
                                    <TailwindTable
                                        headers={[{
                                            name: 'Element Start Tag',
                                            dataField: 'startTag'
                                        }, {
                                            name: 'Element End Tag',
                                            dataField: 'endTag'
                                        }, {
                                            name: 'Element Description',
                                            dataField: 'description'
                                        }]}
                                        tableData={[{
                                            startTag: '<div>',
                                            endTag: '</div>',
                                            description: 'The <div> tag defines a division or a section in an HTML'
                                        }, {
                                            startTag: '<form>',
                                            endTag: '</form>',
                                            description: 'Form tags is HTML used to design forms'
                                        }, {
                                            startTag: '<input>',
                                            endTag: '</input>',
                                            description: 'Used to take input fromuser in various forms'
                                        }]}
                                    />
                                    <HorizontalLine />
                                    <SubHeading title="Nested HTML Elements" href="#nested-html-elements" id="nested-html-elements" />
                                    <p>HTML Element Can contain other HTML Element.</p><p>HTML Documents contains nested HTML Element.</p><p>Best Example for that is <code>{`<body>`}</code> tag and its content which consists of various tags.</p>
                                    <p className='mt-4'><b>HTML Nested Elements Example Given Below:</b></p>
                                    <br />
                                    <CodeViewer
                                        code={html_2}
                                        language="jsx"
                                        lines={true} title="HTML Nested Elements"
                                        id="id1"
                                        outerDivId="odId1"
                                    />
                                    <HorizontalLine />
                                    <Heading name="Closing Tags" href="#closing-tag" id="closing-tag" />
                                    <SubHeading title="Non-void Elements" href="#non-void-element" id="non-void-element" />
                                    <p>Non Void Element is HTML Element which have end tag to indicate the end of the element.</p>
                                    <HorizontalLine />
                                    <SubHeading title="Is Closing Tag Necessary?" href="#never-miss-closing-tag" id="never-miss-closing-tag" />
                                    <p>It is important to add closing or end tag of the element. It may or may not lead to incorrect result displayed on browser. Now days browsers are becoming much advanced that they can add end tags automatically at the end of most non-void elements.</p>
                                    <p>According to w3 document on HTML. A non-void element must have an end tag, unless the subsection for that element in this document <a rel="noreferrer" href="https://www.w3.org/TR/2011/WD-html-markup-20110113/elements.html" target="_blank" className='font-bold text-[#212D94] underline'>HTML elements</a> indicates that its end tag can be omitted.</p>
                                    <p className='mt-4'><b>Example for HTML Element with closing tag:</b></p>
                                    <br />
                                    <CodeViewer
                                        code={html_3}
                                        language="jsx"
                                        lines={true} title="HTML Non Void Elements"
                                        id="id2"
                                        outerDivId="odId2"
                                    />
                                    <p className='mt-4'><b>Below is the example of chrome browser developer tools adding closing tag automatically at the end:</b></p>
                                    <img className="mt-4" src="https://storage.cloud.google.com/picallens/Non-Void.png?authuser=2" alt="Non Void" />
                                    <HorizontalLine />
                                    <SubHeading title="Empty Tags / Void Tags / Self Closing tags" href="#empty-tags" id="empty-tags" />
                                    <p className='mb-4'>Elemnts which does not contains any content and does not have closing tag like line break. Sometime these tags are closed like <code>{`<br />`}</code> i.e, they are called void or self closing tags.</p>
                                    <CodeViewer
                                        code={`<p>Hi Welocome to <br> Picallens.</p>`}
                                        language="jsx"
                                        lines={false}
                                        id="id3"
                                        outerDivId="odId3"
                                        tryIt={false}
                                    />
                                    <br />
                                    <HorizontalLine />
                                    <InfoPanel title="Important Note">
                                        <div className='ml-6'>
                                            <ul className='list-outside list-disc'>
                                                <li className='font-medium'><b>HTML tags are not case sensitive i.e, HTML tags can be written as <code>{`<P>`}</code> and <code>{`<p>`}</code> both are same.</b></li>
                                            </ul>
                                        </div>
                                    </InfoPanel>
                                    <HorizontalLine />
                                    <p className="text-md font-medium text-[#212D94] mt-8">HTML Element are basic building blocks of elemnt to provide web page a structure, we are going to see multiple elements along this tutorial. In next tutorial we are going to learn about HTML Attributes. Thanks for your Support!</p>
                                    {totalPages > 1 ? <div className='mt-10'>
                                        {currentPageIdx !== 0 ? <PrevButton onClickPrev={onPrev} /> : ''}
                                        {currentPageIdx !== (totalPages - 1) ? <NextButton onClickNext={onNext} /> : ''}
                                    </div> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <OnThisPage
                        pageData={[{
                            name: 'Overview',
                            type: 'main',
                            href: '#element-overview'
                        }, {
                            name: 'Nested HTML Elements',
                            type: 'sub',
                            href: '#nested-html-elements'
                        }, {
                            name: 'Closing Tags',
                            type: 'main',
                            href: '#closing-tag'
                        }, {
                            name: 'Non-void Elements',
                            type: 'sub',
                            href: '#non-void-element'
                        }, {
                            name: 'Is Closing Tag Necessary?',
                            type: 'sub',
                            href: '#never-miss-closing-tag'
                        }, {
                            name: 'Empty Tags',
                            type: 'sub',
                            href: '#empty-tags'
                        }]}
                    />
                </div>
                <Footer />
            </div>
        </div>
    )
}
