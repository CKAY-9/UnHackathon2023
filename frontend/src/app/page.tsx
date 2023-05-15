import Link from "next/link";
import style from "./home.module.scss";

const Home = () => {
	return (
		<>
			<title>Knowledge Cleanse | #UnHackathon 2023</title>
			<div className={style.landing}>
				<section className={style.field}>
					<section id={style.splash}>
						<h1 style={{"fontSize": "6rem", "textTransform": "uppercase", "wordWrap": "break-word"}}>Knowledge Cleanse</h1>
					</section>
					<section id={style.info} style={{"textAlign": "center"}}>
						<h2 style={{"fontSize": "3rem"}}>#UnHackathon 2023 Submission</h2>
						<p>Developed by Cameron A. Designed by Ali K.</p>
					</section>
				</section>
				<section className={style.field}>
					<section id={style.info}>
						<p>
							The purpose of Knowledge Cleanse is to teach the youth ways to keep their minds clean and rid
							of false information. False information is all around the internet and the mind of the people
							must be cleansed.
						</p>
					</section>
					<section id={style.splash}>
						<h1 style={{"fontSize": "6rem", "textTransform": "uppercase", "wordWrap": "break-word"}}>Purpose</h1>
					</section>
				</section>
				<section className={style.getStarted} style={{"backgroundColor": "rgb(0, 0, 0)"}}>
					<Link href="/learn">Get Started</Link>
				</section>
			</div>
		</>
	);
}

export default Home;