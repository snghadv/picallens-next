import { flattenDeep } from "lodash";

import htmlConfigs from "../../configs/tutorials/htmlConfigs";

import {
    CodeViewer, ContentHeader, Heading, NextButton, PrevButton, HorizontalLine, OnThisPage
} from '../../components/BasicComponents';
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Dropdown from "../../components/Dropdown";
import { html_4 } from "../../code-examples";

export default function HTMLCommensts() {
    const router = useRouter();
    let currentPage = "comments";

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
                                    <Heading name="Comment Tag" href="#html-comment" id="html-comment" />
                                    <p>The comment tag (<code>{`<!-- comment -->`}</code>) is used to insert HTML code comments. It is a good coding practise so that both the coder and the reader can understand the code. The comment tag is useful during code debugging.</p>
                                    <div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li className='mt-3'>It is a simple piece of code that web browsers ignore, meaning it is not displayed.</li>
                                        </ul>
                                    </div>
                                    <p className='mt-8 mb-4'><b className='font-bold'></b></p>
                                    <CodeViewer
                                        code={`<!-- comment -->`}
                                        language="jsx"
                                        lines={false}
                                        id="id1"
                                        title="Comments Syntax"
                                        outerDivId="odId1"
                                        tryIt={false}
                                    />
                                    <br />
                                    <p className='mt-2'>In HTML single and multilines comments uses same syntax {`(<!–- -–>)`} difference is half part of the comment {`(”-–>“)`}, is appended where the intended comment line ends.</p>
                                    <p className='mt-4'><b>HTML Comments Example Given Below:</b></p>
                                    <br />
                                    <CodeViewer
                                        code={html_4}
                                        language="jsx"
                                        lines={true}
                                        title="HTML Comments"
                                        id="id2"
                                        outerDivId="odId2"
                                    />
                                    <p>Output:</p>
                                    <img className=" rounded-lg border-red-700 border-solid" src="https://storage.cloud.google.com/picallens/HTMLComments.png?authuser=2" alt="HTML Comment" />
                                    <HorizontalLine />
                                    <p className="text-md font-medium text-[#212D94] mt-8">Comments are the best way to make your code understandable. Make the habit of adding those in your code. In next lesson we will learn about HTML Elements in detail. Thanks for your Support!</p>
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
                            name: 'Comment Tag',
                            type: 'main',
                            href: '#html-comment'
                        }]}
                    />
                </div>
                <Footer />
            </div>
        </div>
    )
}
