import React from "react";
import { renderHTML } from "@agility/nextjs";

const remark = require('remark')
const remarkHtml = require('remark-html')

const MarkdownField = ({ module }) => {
  // get module fields
  const { fields } = module;

  const result = remark()
  .use(remarkHtml)
  .processSync(fields.textblob)

  return (
    <div className="relative px-8">
      <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
        <div
          className="prose max-w-full mx-auto"
          dangerouslySetInnerHTML={renderHTML(result.contents)}
        />
      </div>
    </div>
  );
};

export default MarkdownField;
