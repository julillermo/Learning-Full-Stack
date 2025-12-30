import { fetchNames } from "@/utils/fetch-names";
function NamesSSR(props) {
    const output = props.names.map((item, idx) => (<li key={`name=${idx}`}>
      {item.id} : {item.name}
    </li>));
    return <ul>{output}</ul>;
}
export const getServerSideProps = async (
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_context) => {
    let names = [];
    try {
        names = await fetchNames();
    }
    catch (err) {
        console.log(err);
    }
    return {
        props: {
            names,
        },
    };
};
export default NamesSSR;
