import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";

import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
} from "next";
import { ResponseItemType } from "../utils/fetch-names";

function NamesSSR(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const output = props.names.map((item: ResponseItemType, idx: number) => (
    <li key={`name=${idx}`}>
      {item.id} : {item.name}
    </li>
  ));

  return <ul>{output}</ul>;
}

export const getServerSideProps: GetServerSideProps = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  let names: ResponseItemType[] | [] = [];
  try {
    names = await fetchNames();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      names,
    },
  };
};

export default NamesSSR;
