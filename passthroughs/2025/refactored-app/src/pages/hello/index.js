import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const Hello = () => {
    return (<div>
      <Head>
        <title>Hello World page Title</title>
        <meta property="og:title" content="Hello World" key="title"/>
      </Head>
      <div>Hello World! 2</div>
      <div>
        Use the HTML anchor for an
        <a href="https://nostarch.com" style={{ color: "blue" }}>
          {" "}
          external link{" "}
        </a>
        and the Next.js Link component for an
        <Link href="/components/weather" style={{ color: "blue" }}>
          {" "}
          internal page{" "}
        </Link>
        <Image src="/file.svg" alt="Vercel Logo" width={72} height={16}/>
      </div>
    </div>);
};
export default Hello;
