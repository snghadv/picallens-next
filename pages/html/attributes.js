import { flattenDeep } from "lodash";

import htmlConfigs from "../../configs/tutorials/htmlConfigs";

import {
    CodeViewer, ContentHeader, Heading, NextButton, PrevButton, SubHeading, HorizontalLine, InfoPanel, OnThisPage
} from '../../components/BasicComponents';
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Dropdown from "../../components/Dropdown";

import { html_8, html_9, html_10, html_11, html_12, html_13, html_14 } from "../../code-examples/html.example";

export default function HTMLAttributes() {
    const router = useRouter();
    let currentPage = "attributes";

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
                                    <Heading name="Overview" href="#83b33243-bf55-44c7-9048-2122abb2a370" id="83b33243-bf55-44c7-9048-2122abb2a370" />
                                    <p className="">HTML Attributes are used to control HTML elements behaviour like what is source of image in <code>{`<img>`}</code> tag. HTML attributes are defined inside opening tag.</p>
                                    <p className="mt-4"></p>
                                    <div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li>HTML attributes works like modifiers of HTML Elements</li>
                                            <li className='mt-3'>HTML Attributes also provide extra information about HTML Element.</li>
                                            <li className='mt-3'>Most HTML attributes are in key/value pairs where key is attribute name and value is the value for the attribute. Some of the HTML attributes does not key/value pair like "disabled".</li>
                                        </ul>
                                    </div>
                                    <p className="mt-4"></p>
                                    <p className="">In this tutorial we will be going through some of attributes in HTML.</p>
                                    <HorizontalLine />
                                    <Heading name="Attributes" href="#e14d96f7-9b9f-4bd7-9073-344678f439ee" id="e14d96f7-9b9f-4bd7-9073-344678f439ee" />
                                    <SubHeading title="The Class Attribute" href="#42997fdb-4b95-4988-bc24-2b85d8d964c2" id="42997fdb-4b95-4988-bc24-2b85d8d964c2" />
                                    <p className="">Class attribute used to point a class in style sheets like CSS. We can also modify HTML Element in JAVASCRIPT using class attribute through HTML DOM</p>
                                    <p className="mt-4"></p>
                                    <InfoPanel title="HTML DOM">
                                        <div className='ml-6'>
                                            <ul className='list-outside list-disc'>
                                                <li>DOM stands for Document Object Model.</li>
                                                <li>DOM is programming API for HTML and XML document.</li>
                                                <li>It is logical structure for document.</li>
                                                <li>It also defines the way document is accessed and manipulated.</li>
                                            </ul>
                                        </div>
                                    </InfoPanel>
                                    <p className="mt-2"></p>
                                    <p className="font-semibold">Example: Use of class attribute.</p>
                                    <p className="mt-4"></p>
                                    <CodeViewer
                                        id="e372f986-4702-4821-8fa1-8e9bfd77edf7"
                                        code={html_8}
                                        language="jsx"
                                        lines={true}
                                        title="Class Attribute"
                                        outerDivId="ca1de82e-92a8-45f1-a36d-360eb9d7e301"
                                        tryIt={true}
                                    />
                                    <p className="mt-4"></p>
                                    <HorizontalLine />
                                    <SubHeading title="The Src Attribute" href="#b2325a11-5334-43ac-9413-e328115a7354" id="b2325a11-5334-43ac-9413-e328115a7354" />
                                    <p className="mt-2">This attribute is used in many tags like in <code>{`<img>`}</code> tag for url of image. So most generic definition of this attribute is "It specifies the location/url/path of resource file. </p>
                                    <p className="mt-2"></p>
                                    <CodeViewer
                                        id="78a96f01-a896-485a-9f02-859d66a22aeb"
                                        code={html_9}
                                        language="jsx"
                                        title="Src Attribute"
                                        outerDivId="1ddcd67e-c0c2-4b72-aa07-5940770341e5"
                                        tryIt={false}
                                    />
                                    <CodeViewer
                                        id="c9434e32-7c73-48ff-b81a-285cfd77bfdf"
                                        code={html_10}
                                        language="jsx"
                                        lines={true}
                                        title="Src Attribute Example"
                                        outerDivId="542dbdb7-b6f1-4910-92fd-019509ce9c40"
                                        tryIt={true}
                                    />
                                    <p className="mt-4"></p>
                                    <p className="font-semibold">There are two ways to specify the URL in the src attribute:</p>
                                    <div className='ml-8'>
                                        <ul className='list-outside list-disc text-md font-normal'>
                                            <li>Absolute URL: Absolute URLs include the whole address, from the protocol (HTTPS) to the domain name (picallens.com), as well as the placement inside your website's folder structure (/picallens.</li>
                                            <li className='mt-3'>Relative URL: The relative URL does not include the whole web address; just the place after the domain is included. It assumes that the link you add is located on the same site and belongs to the same root domain.</li>
                                        </ul>
                                    </div>
                                    <p className="font-semibold mt-6 mb-3">Example: Absolute URL vs Relative URL</p>
                                    <CodeViewer
                                        id="4399238c-1564-456d-92ec-a7a22bf3cd13"
                                        code={html_11}
                                        language="jsx"
                                        title="Absolute URL & Relative URL"
                                        outerDivId="2d4474bf-d9c2-46e7-93c0-e78ebd9977ba"
                                        tryIt={false}
                                    />
                                    <HorizontalLine />
                                    <SubHeading title="The href Attribute" href="#ef3ee502-71f2-48b7-9b28-b6b0ad8ddcc3" id="ef3ee502-71f2-48b7-9b28-b6b0ad8ddcc3" />
                                    <p className="mt-2"></p>
                                    <p className="">The href attribute mostly used in <code>{`<a>`}</code> tag is used to define the link address to which the link goes to. It can be either in same website or different website.</p>
                                    <p className="mt-3"></p>
                                    <CodeViewer
                                        id="5204bb0e-640c-42e1-ba6b-0d89a8560411"
                                        code={html_12}
                                        title="Example: The href Attribute"
                                        outerDivId="056ce83a-c266-4cd2-9f69-dc7239cbf11e"
                                        tryIt={false}
                                    />
                                    <CodeViewer
                                        id="a418d446-b253-45e2-b91d-5111b8758151"
                                        code={html_13}
                                        language="jsx"
                                        lines={true}
                                        title="Try href Attribute"
                                        outerDivId="13db734d-1635-4dbc-a4ca-a18584776f10"
                                        tryIt={true}
                                    />
                                    <HorizontalLine />
                                    <Heading name="Suggestions" href="#ce7bd8f2-4848-42b5-8140-f9b49f0cd106" id="ce7bd8f2-4848-42b5-8140-f9b49f0cd106" />
                                    <SubHeading title="Quotes" href="#9b1647eb-5898-4098-9078-00dc5d21e3e9" id="9b1647eb-5898-4098-9078-00dc5d21e3e9" />
                                    <p className="mt-2"></p>
                                    <p className="">We recommend using quotes around attribute values. However HTML does not require those.</p>
                                    <p className="mt-4"></p>
                                    <CodeViewer
                                        id="210ef14e-6983-47f7-bad5-6e1202179907"
                                        code={html_14}
                                        language="jsx"
                                        lines={false}
                                        title="Example: Quotes"
                                        outerDivId="6c538a07-35b0-46d9-b38b-5c4bc7ada349"
                                        tryIt={false}
                                    />
                                    <HorizontalLine />
                                    <SubHeading title="Are attributes case sensitive?" href="#f9856cef-bff1-4f44-94f8-89f7103babef" id="f9856cef-bff1-4f44-94f8-89f7103babef" />
                                    <p className="mt-2"></p>
                                    <p className="">However attributes names are not case sensitive i.e, we can use attribute names in capital cases as well. But for good coding practice we recommend using lower case. </p>
                                    <HorizontalLine />
                                    <p className="text-md font-medium text-[#212D94]">There are more attributes that can be used to define the behaviour or multiple HTML elements like width, height, alt, etc. We will be discussing them in details when we are going to learn for those particular tags. In next lesson we are going to learn "Style Attribute or HTML styles".  Thanks for your Support!</p>
                                </div>
                                {totalPages > 1 ? <div className='mt-10'>
                                    {currentPageIdx !== 0 ? <PrevButton onClickPrev={onPrev} /> : ''}
                                    {currentPageIdx !== (totalPages - 1) ? <NextButton onClickNext={onNext} /> : ''}
                                    {currentPageIdx !== (totalPages - 1) ? <NextButton onClickNext={onNext} /> : ''}
                                </div> : ""}
                            </div>
                        </div>
                    </div >
                    <OnThisPage pageData={[{
                        href: "#83b33243-bf55-44c7-9048-2122abb2a370",
                        name: "Overview",
                        type: "main"
                    }, {
                        href: "#e14d96f7-9b9f-4bd7-9073-344678f439ee",
                        name: "Attributes",
                        type: "main"
                    }, {
                        href: "#42997fdb-4b95-4988-bc24-2b85d8d964c2",
                        name: "The Class Attribute",
                        type: "sub"
                    }, {
                        href: "#b2325a11-5334-43ac-9413-e328115a7354",
                        name: "The Src Attribute",
                        type: "sub"
                    }, {
                        href: "#ef3ee502-71f2-48b7-9b28-b6b0ad8ddcc3",
                        name: "The href Attribute",
                        type: "sub"
                    }, {
                        href: "#ce7bd8f2-4848-42b5-8140-f9b49f0cd106",
                        name: "Suggestions",
                        type: "main"
                    }, {
                        href: "#9b1647eb-5898-4098-9078-00dc5d21e3e9",
                        name: "Quotes",
                        type: "sub"
                    }, {
                        href: "#f9856cef-bff1-4f44-94f8-89f7103babef",
                        name: "Are attributes case sensitive?",
                        type: "sub"
                    }]} />
                </div >
                <Footer />
            </div>
        </div>
    )
}
