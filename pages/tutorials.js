import TutorialCard from "../components/TutorialCard";
import Footer from "../components/Footer";
import tutorialConfigs from "../configs/tutorialConfigs";

export default function Tutorials() {
    return (
        <div>
            <div className="bg-gray-100 pb-[20px]">
                <div className="text-center pt-10">
                    <h2 className="text-lg font-semibold text-[#212D94]">Tutorials</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">The best way to invest time</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Grow yourself by learning something new.</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-[-20px] w-full" viewBox="0 0 1367.743 181.155">
                <path
                    className="fill-current text-gray-100 dark:text-gray-800"
                    id="wave"
                    data-name="wave"
                    d="M1.74298 131.099C1.74298 131.099 168.653 187.31 407.62 180.599C646.587 173.888 717.581 116.619 957.612 104.245C1197.64 91.8706 1367.74 131.099 1367.74 131.099V16.0986H1.74298V131.099Z" fill="black"
                />
            </svg>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-10 mx-4 pb-8">
                {Object.keys(tutorialConfigs).map(val => {
                    return <TutorialCard
                        type={val}
                    />
                })}
            </div>
            <Footer />
        </div>
    )
}
