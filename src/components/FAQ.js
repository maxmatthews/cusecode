"use client";

import Question from "@/components/Question";

const FAQ = () => {
	return (
		<div style={{ border: "1px solid white", padding: 10, marginTop: 50 }}>
			<Question
				question={<>Why should I pick you? What makes you different?</>}
				answer={
					<>
						<p>
							We're not your traditional dev shop. Nearly our entire team are
							junior software developers and graduates of the{" "}
							<a href={"https://careersincode.org"}>Careers in Code</a> bootcamp
							based in the Syracuse, NY area.
						</p>
						<p>
							While a senior developer will lead your project, our team of
							junior developers will be doing most of the heavy lifting to
							complete your project.
						</p>
					</>
				}
			/>
			<Question
				question={<>Why would I want junior developers to build my project?</>}
				answer={
					<>
						<p>
							This can be answered in one word: <strong>cost!</strong>
						</p>
						<p>
							Computer engineers are famously one of the highest paid salaries
							in the US. However, the industry is struggling with having an
							imbalanced ratio between junior and senior developers.
						</p>
						<p>
							Our dev shop aims to help junior developers get the experience
							they need to launch their careers while producing real projects
							that can help our society while you benefit from saving money.
						</p>
					</>
				}
			/>
			<Question
				question={<>Where are your developers based out of?</>}
				answer={
					<>
						<p>
							All of our developers are based out of Central New York/Syracuse,
							NY <strong>USA</strong>.
						</p>
						<p>
							We are strong believers of "you get what you pay for" and do not
							believe in off-shoring projects.
						</p>
					</>
				}
			/>
			<Question
				question={<>What can you build me?</>}
				answer={
					<>
						<p>
							The sky is the limit! Well maybe not <em>anything...</em> We
							specialize in two areas:
						</p>
						<h4>Wordpress Websites</h4>
						<p>
							We love working with local businesses developing their presence on
							the web. We develop our sites on Wordpress (and a "super theme"
							called{" "}
							<a href={"https://www.elegantthemes.com/gallery/divi/"}>Divi</a>{" "}
							to not only speed the development of your site, but also to ensure
							you can easily edit it on your own. We can also provide training
							sessions.
						</p>
						<h4>Full Stack Javascript Web Apps</h4>
						<p>
							While more involved, some applications need more than solutions
							that are available off the shelf. We'll guide you through every
							step of the SDLC to build you an app from scratch including a
							front end powered by React, a backend powered with Node.js, and a
							SQL powered database.
						</p>
					</>
				}
			/>
			<Question
				question={<>What's the SDLC?</>}
				answer={
					<>
						<p>
							The <strong>S</strong>oftware <strong>D</strong>
							evelopment <strong>L</strong>ife <strong>C</strong>ycle is a{" "}
							<strong>seven</strong> step process all software applications go
							through. Skipping any of these steps can lead to significantly
							higher project costs. Doing the early phases right out of the gate
							saves you money.
						</p>
						<p>Let's dive into each one a little deeper:</p>
						<h4>1) Project Planning</h4>
						<p>
							<strong>All</strong> good projects start with thorough planning.
							Before we think about a line of code we examine questions like:
						</p>
						<ul>
							<li>
								What <strong>real world</strong> pain points are we trying to
								solve?
							</li>
							<li>
								Have we scoped our problem down to the <strong>MVP</strong>{" "}
								(minium viable project)?
							</li>
							<li>
								Did we complete a thorough brain dump so thoughts meet paper?
							</li>
							<li>
								Is there user discovery that should happen{" "}
								<strong>before</strong> we start building?
							</li>
							<li>
								Is there a rough idea of cost and matching funds to fuel the
								project?
							</li>
						</ul>
						<h4>2) Requirements Definition</h4>
						<p>
							Now that we've identified the project's viability, it's time to
							get a little{" "}
							<a
								href={
									"https://en.wikipedia.org/wiki/Agile_software_development"
								}
								target={"blank"}
							>
								agile
							</a>
							. We start dividing your project by identifying epics (think:
							major features), then breaking it down further into tasks. This is
							one of the most important parts of a project as getting it setup
							right from the gecko allows developers to track progress while
							giving the client insight into how the project is progressing.
						</p>
						<h4>3) Design and Prototying</h4>
						<p>
							It's not <em>quite</em> time to start writing code yet. Sharing a
							clear vision of the expected final product is not only important
							for staying on the same page. It makes it easier for developers to
							know exactly what they're building and makes sure we didn't miss
							any required components from step #1 & #2 above.
						</p>
						<h4>4) Development</h4>
						<p>
							Alright! We made it! This is the part we've been waiting for! This
							phase will actually see the{" "}
							<span style={{ textDecoration: "line-through" }}>
								pen meets the paper
							</span>{" "}
							code hits the text editor. Our developers specialize in full stack
							Javascript (React, Node, Express and SQL) & Wordpress.
						</p>
						<h4>5) Testing</h4>
						<p>
							Wait, I thought we were done once we coded it! Not quite yet...
							Nothing is perfect on the first try, and code is no exception.
							This is where we can open the doors to beta testers and make sure
							we've squashed as many bugs as possible.
						</p>
						<h4>6) Deployment</h4>
						<p>
							The cloud can be a mysterious place. We'll help you get your app
							online and viewable on the internet.
						</p>
						<h4>7) Maintenance and Cycle Restart</h4>
						<p>
							Code, like a well oiled machine, needs maintenance. As users
							discover bugs or start generating feature requests, we'll be here
							to keep everything humming, as well as getting ready to start the
							process over again to help your app or website grow.
						</p>
					</>
				}
			/>
			<Question
				question={<>How much do you charge?</>}
				answer={
					<>
						<p>
							Well the answer to that is everyone's favorite in business: it
							depends.
						</p>
						<p>
							Basic Wordpress sites start at <strong>$750</strong> and only get
							more expensive if custom features or plugins need to be developed.
						</p>
						<p>
							Full Stack Applications start around <strong>$1,000</strong>. We
							prefer to do project based pricing instead of hourly.
						</p>
						<p>
							Proper project planning using the SDLC prevents unexpected costs.
						</p>
					</>
				}
			/>
		</div>
	);
};

export default FAQ;
