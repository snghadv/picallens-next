import Link from 'next/link';
import tutorialConfigs from '../configs/tutorialConfigs';

export default function TutorialCard(props) {
    const { type } = props;
    const { name, caption, themeColor, themeColorBtn, url } = tutorialConfigs[type];

    return (
        <div>
            <div className="course">
                <div className={themeColor}>
                    <h6>Tutorial</h6>
                    <h2>{name}</h2>
                    <Link href={url}>START LEARNING <i className="fa fa-chevron-right"></i></Link>
                </div>
                <div className='course-info bg-gray-100'>
                    <h6>{name}</h6>
                    <h2>{caption}</h2>
                    <Link href={url} className={themeColorBtn}>Start</Link>
                </div>
            </div>
        </div>
    )
}
