import React from "react";
import { AgilityImage, renderHTML } from "@agility/nextjs";
import Image from "next/image";

const PostDetails = ({ dynamicPageItem, isDevelopmentMode, isPreview, languageCode, page  }) => {

	const showEdit = isDevelopmentMode || isPreview
	const editLink = `https://manager.agilitycms.com/instance/e0d77bbf-u/${languageCode}/content/list-6/listitem-${dynamicPageItem.contentID}`

	// post fields
  const post = dynamicPageItem.fields;

  // category
  const category = post.category?.fields.title || "Uncategorized";

  // format date
  const dateStr = new Date(post.date).toLocaleDateString();

  return (
	<div className={showEdit ? "group relative px-8 hover:bg-gray-100" : "relative px-8"}>
		<a href={editLink} target="agility" className="absolute z-10 transition-opacity opacity-0 group-hover:opacity-100 top-0 left-5 shadow-md bg-gray-400 rounded rounded-t-none px-2 py-1 text-gray-800 flex items-center hover:text-primary-500">
				<img src="/assets/edit-pencil.svg" className="h-4 w-4 mr-2"/>
			 	Edit in Agility CMS
			</a>
      <div className="max-w-screen-xl mx-auto">
        <div className="h-64 md:h-96 relative">
          <AgilityImage
            src={post.image.url}
            className="object-cover object-center rounded-lg"
            layout="fill"
          />
        </div>
        <div className="max-w-2xl mx-auto mt-4">
          <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
            {category}
          </div>
          <div className="border-b-2 border-primary-500 w-8"></div>
          <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
            {dateStr}
          </div>
          <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
            {post.title}
          </h1>
          <div
            className="prose max-w-full mb-20"
            dangerouslySetInnerHTML={renderHTML(post.content)}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
