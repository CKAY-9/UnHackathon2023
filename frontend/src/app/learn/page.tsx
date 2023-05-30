import Header from "@/components/header/header";
import style from "./learn.module.scss";
import Image from "next/image";
import Link from "next/link";
import Source from "@/components/source/source";

const Learn = () => {
    return (
        <>
            <title>Learn about misinformation</title>
            <Header></Header>
            <main className={style.container}>
                <section id="0" className={style.section}>
                    <section style={{"backgroundImage": "url('/learn/one.jpg')"}} id={style.splash}>
                        <div id={style.content}>
                            <h1>Learn about Misinformation</h1>
                            <Source id="0" url="https://penntoday.upenn.edu/news/Penn-research-why-covid-misinformation-continues-spread"></Source>
                        </div>
                    </section>
                    <section id={style.info}>
                        <p>
                            The internet contains so much information, which is an amazing thing; however, we must realize
                            that not all of this information is true and based on reality. It is our job as internet users
                            to recognize false information and learn about reliable sources. With Knowledge Cleanse, you will
                            be able to learn how to recognize misinformation, disinformation, and real information.
                        </p>
                    </section>
                    <a href={`/learn#1`}>
                        <Image src="/downarrow.svg" alt="Down arrow" sizes="100%" width={0} height={0}></Image>
                    </a>
                </section>
                <section id="1" className={style.section}>
                    <section style={{"backgroundImage": "url('/learn/two.jpg')"}} id={style.splash}>
                        <div id={style.content}>
                            <h1>WOW! That was a lot of information</h1>
                            <Source id="1" url="https://www.rawpixel.com/image/4063130/photo-image-aesthetic-background-wallpaper"></Source>
                        </div>
                    </section>
                    <section id={style.info}>
                        <p>
                            Before we continue, we should get our definitions down.
                        </p>
                        <ul>
                            <li><strong>Misinformation</strong>: false or inaccurate information, but not created with the intention of doing any wrong.</li>
                            <li><strong>Disinformation</strong>: false information which is intended to mislead, especially propaganda issued by a government organization to a rival power or the media.</li>
                            <li><strong>Reliable Information</strong>: information which is based on reality and can be proven true</li>
                        </ul>
                    </section>
                    <a href={`/learn#2`}>
                        <Image src="/downarrow.svg" alt="Down arrow" sizes="100%" width={0} height={0}></Image>
                    </a>
                </section>
                <section id="2" className={style.section}>
                    <section style={{"backgroundImage": "url('/learn/three.jpg')"}}  id={style.splash}>
                        <div id={style.content}>
                            <h1>Looking for the signs</h1>
                            <Source id="2" url="https://www.vecteezy.com/free-vector/caution-background"></Source>
                        </div>
                    </section>
                    <section id={style.info}>
                        <p>
                            There are some common characteristics that may show up when viewing false information.
                        </p>
                        <ul style={{"listStyle": "numeric"}}>
                            <li>Unbelievable or outrageous headlines</li>
                            <li>Sketchy accounts/posters</li>
                            <li>No avaliable sources or articles for more information</li>
                            <li>Unreliable or non-verifiable websites/organizations</li>
                            <li>Images that look like CGI, or generally fake images</li>
                            <li>Outdated information</li>
                            <li>Inconsistent and or conflicting information</li>
                        </ul>
                        <h1>Resources</h1>
                        <div style={{"display": "flex", "flexDirection": "column", "marginBottom": "3rem"}}>
                            <Link href="https://www.canada.ca/en/campaign/online-disinformation.html" target="_blank">Government of Canada Online Fact Checking website</Link>
                            <Link href="https://www.youtube.com/watch?v=xDLohXNgF4o" target="_blank">Disinformation</Link>
                            <Link href="https://www.youtube.com/watch?v=HD5MmuLDeFE" target="_blank">Mis-information, Dis-information, Mal-information</Link>
                            <Link href="https://www.youtube.com/watch?v=E-049KTrYBg">Four ways to tell if something is true online</Link>
                            <Link href="https://mediasmarts.ca/break-fake" target="_blank">Break the Fake</Link>
                            <Link href="https://mediasmarts.ca/sites/mediasmarts/files/tutorials/e-learning-module/story.html" target="_blank">Workshop</Link>
                        </div>
                    </section>
                    <a href={`/learn#3`}>
                        <Image src="/downarrow.svg" alt="Down arrow" sizes="100%" width={0} height={0}></Image>
                    </a>
                </section>
                <section id="3" className={style.section}>
                    <section style={{"backgroundImage": "url('/learn/four.jpg')"}} id={style.splash}>
                        <div id={style.content}>
                            <h1>Why should you care?</h1>
                            <Source id="3" url="https://www.pxfuel.com/en/query?q=forest+aesthetic"></Source>
                        </div>
                    </section>
                    <section id={style.info}>
                        <p>
                            Stopping the spread of false information on the internet leads to a safer, and more factual internet. 
                            False information can lead to major damage if it targets science, political, or social topics. We must
                            stop the spread of harmful information.
                        </p>
                    </section>
                    <a href={`/learn#4`}>
                        <Image src="/downarrow.svg" alt="Down arrow" sizes="100%" width={0} height={0}></Image>
                    </a>
                </section>
                <section id="4" className={style.test}>
                    <h2>Feeling Confident?</h2>
                    <Link href="/test">Pick a test</Link>
                </section>
            </main>
        </>
    );
}

export default Learn;