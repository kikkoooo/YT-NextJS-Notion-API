import { Client } from '@notionhq/client';
import { useEffect } from 'react';

// Initializing a client
// export default function Employees({ results }) {
//   useEffect(() => {
//     console.log(results);
//   });
//   return <div>tae</div>;
// }



export default function Employees({ results }) {
  useEffect(() => {
    console.log(results);
  });
  const getDatabaseDisplay = () => {
    let jsx = [];
    results.forEach((employee) => {
      jsx.push(
        <div className="card" key={employee.id}>
          <p>{employee.properties.Name.title[0].plain_text}</p>
          <span>{employee.properties.Tags.select.name}</span>
        </div>
      );
    });
    return jsx;
  };
  return <div>{getDatabaseDisplay()}</div>;
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = "7f8b3c1471c4478d820cc09b48773371";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  // console.log(response);
  return {
    props: {
      results: response.results,
    },
  };
}