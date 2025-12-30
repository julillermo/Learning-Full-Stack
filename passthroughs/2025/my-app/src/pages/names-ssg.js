import { fetchNames } from "@/utils/fetch-names";
function NamesSSG(props) {
    const output = props.names.map((item, idx) => (<li key={`name=${idx}`}>
      {item.id} : {item.name}
    </li>));
    return <ul>{output}</ul>;
}
export async function getStaticProps(_context) {
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
            // Including the below means you're using Incremental Static Regeneration
            // revalidate: 30
        },
    };
}
export default NamesSSG;
