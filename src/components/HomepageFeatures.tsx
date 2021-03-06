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
				Infant ๐ถ Lang is a programming language that is designed to be
				easy to learn and easy to use. Inspired by BrainF**k ๐ง , it is
				less esoteric and more fun to learn.
			</>
		),
	},
	{
		title: "Lightning Fast Interpreter",
		image: "/img/lightning.svg",
		description: (
			<>
				The Interpreter for Infant Lang is written in Go making it super
				fast โก and it is extremely simple ๐ฆธโโ๏ธ to get started with,
				thanks to the power of VSCode extensions.
			</>
		),
	},
	{
		title: "Made with ๐ for Infants ๐ถ",
		image: "/img/baby.svg",
		description: (
			<>
				It's not a joke; the syntax is so simple that even a
				three-year-old ๐ถ can learn it ๐ซ. It relies on basic things
				like as a moving pointer๐, a memory box ๐ฆ, and some print ๐จ
				statements.
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
