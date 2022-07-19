import { Client } from '@notionhq/client';
import { useEffect } from 'react';

export default function About({ data }) {
  useEffect(() => {
    console.log(data.results);
  });

  const getPageDisplay = () => {
    let jsx = [];

    data.results.forEach((block) => {

      if (block.type === 'paragraph') {
        jsx.push(<p>{block.paragraph.text[0]?.plain_text}</p>);
      }

      if (block.type === 'bulleted_list_item') {
        jsx.push(
          <ul>
            <li>{block.bulleted_list_item.text[0]?.plain_text}</li>
          </ul>
        );
      }

      if (block.type === 'heading_1') {
        jsx.push(<h1>{block.heading_1.text[0]?.text.content}</h1>);
      }

      if (block.type === 'heading_2') {
        jsx.push(<h2>{block.heading_2.text[0]?.text.content}</h2>);
      }

      if (block.type === 'heading_3') {
        jsx.push(<h3>{block.heading_3.text[0]?.text.content}</h3>);
      }



    });
    return jsx;
  };

  return <div>{getPageDisplay()}</div>;
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const blockId = '47c2c837e61b48d9962bbc2132aa23bd';
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  console.log(response);

  return {
    props: {
      data: response,
    },
  };
}
