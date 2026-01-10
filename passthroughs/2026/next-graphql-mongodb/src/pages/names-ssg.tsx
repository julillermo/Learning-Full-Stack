import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { ResponseItemType, fetchNames } from "../utils/fetch-names";

function NamesSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const output = props.names.map((item: ResponseItemType, idx: number) => (
    <li key={`name=${idx}`}>
      {item.id} : {item.name}
    </li>
  ));
  return <ul>{output}</ul>;
}

export async function getStaticProps(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) {
  let names: ResponseItemType[] | [] = [];
  try {
    names = await fetchNames();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      names,

      // Including the below means you're using Incremental Static Regeneration
      // revalidate: 30
    },
  };
}

export default NamesSSG;
