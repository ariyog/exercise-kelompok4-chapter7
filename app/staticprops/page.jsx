import React, { use } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

async function getDataStaticProps() {
    return await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")).json();
}

export default function StaticPropsPage() {
    const allData = use(getDataStaticProps());

    return (
        <div className="container">
            <h2 className="text-center" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                Ini halaman get with static props
            </h2>
            <table className="table hover m-auto" style={{ width: "60%" }}>
                <thead>
                    <tr className="h6" style={{ borderBottom: "2px solid #2E8B57" }}>
                        <th className="text-center p-3">No</th>
                        <th className="text-center p-3">Nama</th>
                        <th className="text-center p-3">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {allData?.results.map((data, index) => (
                        <tr key={data.id}>
                            <td className="text-center">{index + 1}</td>
                            <td>{data.name}</td>
                            <td className="text-center">({data.url})</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
