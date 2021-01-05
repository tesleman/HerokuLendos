import { NextPageContext } from "next";
import Head from "next/head";
import React from "react";


function Products({ names }) {

    let [name, setName] = React.useState(names)

    React.useEffect(() => {
        async function name() {
            const res = await fetch("http://localhost:3000/api/hello");
            const json = await res.json();
            setName(json.name)
        }

        if (!names) {
            name()
        }
    }, [])

    if (!name) {
        return (
            <div>
                ...loading
            </div>
        )
    }
    return (
        <div>
            <Head>
                <title>My page title</title>
            </Head>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
}

Products.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return { names: "" }
    }
    const res = await fetch("http://localhost:3000/api/hello");
    const json = await res.json();
    return { names: json.name };
};

export default Products
