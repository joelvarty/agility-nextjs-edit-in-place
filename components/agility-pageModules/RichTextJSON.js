import React from "react";
import { renderHTML } from "@agility/nextjs";

const RichTextArea = ({ module }) => {
	// get module fields
	const { fields } = module;

	const js = JSON.parse(fields.textblob)

	const blocks = js.blocks

	return (
		<div className="relative px-8">
			<div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">

				{ blocks.map(item => {
					return (
						<div>
							<div>{item.type}</div>
							{
								<div>{JSON.stringify(item.data)}</div>
							 }
						</div>

					)
				}) }

			</div>
		</div>
	);
};

export default RichTextArea;
