import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

async function getDataWithServerComponents() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100", { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Gagal fetching data");
    }

    return res.json();
}

export default async function ServerPage() {
    const data = await getDataWithServerComponents();

    return (
        <div className="container">
            <h2 className="text-center" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                Ini halaman get with server
            </h2>
            <table className="table hover m-auto" style={{ width: "60%" }}>
                <thead>
                    <tr className="h6" style={{ borderBottom: "2px solid #2E8B57" }}>
                        <th className="text-center p-3">No</th>
                        <th className="text-center p-3">Nama</th>
                        <th className="text-center p-3">URL</th>
                    </tr>
                </thead>
                {data?.results.map((d, i) => (
                    <tbody>
                        <tr key={d.id}>
                            <td className="text-center">{i + 1}</td>
                            <td>{d.name}</td>
                            <td className="text-center">({d.url}) </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}
