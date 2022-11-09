import { flattenDeep } from "lodash";

import htmlConfigs from "../../configs/tutorials/htmlConfigs";

import { ContentHeader, NextButton, PrevButton, SubHeading, HorizontalLine, OnThisPage } from '../../components/BasicComponents';
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Dropdown from "../../components/Dropdown";

export default function HTMLEditors() {
    const router = useRouter();
    let currentPage = "editors";

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
                                    <p>Web pages are made and altered using text editors that support the HTML language. Notepad is just one of many text editors that may be used to create HTML code. Any text editor can be used to write HTML, and the file can then be saved with the ".html" or ".htm" extension.</p>
                                    <p className='mt-3'><b>We provide links or names to several widely used HTML text editors:</b></p>
                                    <div className='ml-8 mt-3'>
                                        <ul className='list-outside list-disc text-sm font-normal'>
                                            <li className='mt-1'>Notepad</li>
                                            <li className='mt-1 underline text-[#212D94]'><a target="_blank" rel="noreferrer" href="https://notepad-plus-plus.org/downloads/">Notepad++</a></li>
                                            <li className='mt-1 underline text-[#212D94]'><a target="_blank" rel="noreferrer" href="https://atom.io/">Atom</a></li>
                                            <li className='mt-1 underline text-[#212D94]'><a target="_blank" rel="noreferrer" href="https://codepen.io/">Codepen</a></li>
                                            <li className='mt-1 underline text-[#212D94]'><a target="_blank" rel="noreferrer" href="https://www.sublimetext.com/">Sublime</a></li>
                                            <li className='mt-1 underline text-[#212D94]'><a target="_blank" rel="noreferrer" href="https://code.visualstudio.com/">VS Code</a></li>
                                            <li className='mt-1 underline text-[#212D94]'><a target="_blank" rel="noreferrer" href="/editor">Our Editor</a></li>
                                        </ul>
                                    </div>
                                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="Our Text Editor" href="#picallens-editor" id="picallens-editor" />
                                    <p>This is text editor created by us to test the code online without leaving the website.</p>
                                    <img className="mt-4 shadow-md rounded-lg" src="https://storage.cloud.google.com/picallens/OurTextEditor.png?authuser=2" alt="Our Text Editor" />
                                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="VS Code" href="#vs-code-editor" id="vs-code-editor" />
                                    <p>Visual Studio Code is a code editor made by Microsoft redefined and optimized for building and debugging modern web and cloud applications.</p>
                                    <img className="mt-4 shadow-md rounded-lg" src="https://storage.cloud.google.com/picallens/VSCodeEditor.png?authuser=2" alt="VS Code" />
                                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                    <SubHeading title="Codepen" href="#codepen-editor" id="codepen-editor" />
                                    <p>CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets.</p>
                                    <img className="mt-4 shadow-md rounded-lg" src="https://storage.cloud.google.com/picallens/CodepenEditor.png?authuser=2" alt="Codepen" />
                                    <HorizontalLine />
                                    <p className="text-md font-medium text-[#212D94] mt-8">These are some famous text editors, There are many other editors you can use according to your feasiblity. In next lesson we will learn about comments in HTML. Thanks You for your Support!</p>
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
                            name: 'HTML Editors',
                            type: 'main',
                            href: '#picallens-editor'
                        }, {
                            name: 'Our Text Editor',
                            type: 'sub',
                            href: '#picallens-editor'
                        }, {
                            name: 'VS Code',
                            type: 'sub',
                            href: '#vs-code-editor'
                        }, {
                            name: 'Codepen',
                            type: 'sub',
                            href: '#codepen-editor'
                        }]}
                    />
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
