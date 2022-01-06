import React from "react"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"

type FeatureItem = {
	title: string
	image: string
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		image: "/img/relieved-face.svg",
		description: (
			<>
				Infant 👶 Lang is a programming language that is designed to be
				easy to learn and easy to use. Inspired by Brain Fuck 🧠, it is
				less esoteric and more fun to learn.
			</>
		),
	},
	{
		title: "Lightning Fast Interpreter",
		image: "/img/lightning.svg",
		description: (
			<>
				The Interpreter for Infant Lang is written in Go, the C for the
				21st century 🥇. The Interpreter is super fast ⚡ and with the
				power of VSCode extensions, it is extremely 🦸‍♀️ easy to get
				started with.
			</>
		),
	},
	{
		title: "Aimed at Infants",
		image: "/img/baby.svg",
		description: (
			<>
				Not a joke, the syntax is super easy that a 3 year old 👶 can
				easily learn 🏫. It has basic things such as a moveable pointer 👆, a
				memory box 📦 and some print statements 🖨
			</>
		),
	},
]

function Feature({ title, image, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<img className={styles.featureSvg} alt={title} src={image} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
