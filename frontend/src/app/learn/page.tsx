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
                            <li><strong>Misinformation</strong>: false or inaccurate information, especially that which is deliberately intended to deceive.</li>
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
                    </section>
                    <a href={`/learn#3`}>
                        <Image src="/downarrow.svg" alt="Down arrow" sizes="100%" width={0} height={0}></Image>
                    </a>
                </section>
                <section id="3" className={style.test}>
                    <h2>Feeling Confident?</h2>
                    <Link href="/test">Pick a test</Link>
                </section>
            </main>
        </>
    );
}

export default Learn;