import React from "react";
import Image from "next/image";
import Link from "next/link";

const TextBlockWithImage = ({ module, isDevelopmentMode, isPreview, languageCode, page }) => {

	const showEdit = isDevelopmentMode || isPreview

	// get module fields
	const { fields } = module;

	// set up href for internal links
	const href = "/pages/[...slug]";

	// function to check whether or not the url is absolute
	const isUrlAbsolute = (url) =>
		url.indexOf("://") > 0 || url.indexOf("//") === 0;

	// function to generate proper link
	const generateLink = (url, target, text) => {
		// if relative link, use next/link
		if (isUrlAbsolute(url) === false) {
			return (
				<Link href={href} as={url} title={text} target={target}>
					<a className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
						{text}
					</a>
				</Link>
			);
		} else {
			// else use anchor tag
			return (
				<a
					href={url}
					title={text}
					target={target}
					className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
				>
					{text}
				</a>
			);
		}
	};
	const editLink = `https://manager.agilitycms.com/instance/e0d77bbf-u/${languageCode}/pages/page-${page.pageID}/listitem-${module.contentID}`

	return (
		<div className={showEdit ? "group relative px-8 hover:bg-gray-100" : "relative px-8"}>
			<a href={editLink} target="agility" className="absolute transition-opacity opacity-0 group-hover:opacity-100 top-0 left-5 shadow-md bg-gray-400 rounded rounded-t-none px-2 py-1 text-gray-800 flex items-center hover:text-primary-500">
				<img src="/assets/edit-pencil.svg" className="h-4 w-4 mr-2"/>
			 	Edit in Agility CMS
			</a>

			<div className={`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center `}>

					<div className="md:w-6/12 flex-shrink-0 relative">
						{fields.primaryButton ? (
							<a href={fields.primaryButton.href}>
								<Image
									src={fields.image.url}
									alt={fields.image.label}
									width="768"
									height="512"
									className="rounded-lg object-cover object-center cursor-pointer"
								/>
							</a>
						) : (
							<Image
								src={fields.image.url}
								alt={fields.image.label}
								width="768"
								height="512"
								className="rounded-lg object-cover object-center"
							/>
						)}
					</div>
					<div
						className={`md:w-6/12 mt-16 md:mt-0 ${fields.imagePosition != "right"
							? `md:ml-12 lg:ml-16 md:order-last`
							: `md:mr-12 lg:mr-16 md:order-first`
							}`}
					>
						<div className="g:py-8 text-center md:text-left">
							{fields.tagline && (
								<span className="font-bold text-primary-500 text-sm text-center md:text-left uppercase">
									{fields.tagline}
								</span>
							)}
							<h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
								{fields.title}
							</h2>
							<p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
								{fields.content}
							</p>
							{fields.primaryButton &&
								generateLink(
									fields.primaryButton.href,
									fields.primaryButton.target,
									fields.primaryButton.text
								)}
						</div>
					</div>

			</div>
		</div>
	);
};

export default TextBlockWithImage;
