import React from "react";
import useSWR from "swr";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ResultClientComponent({ query }) {
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon?limit=${query}`, fetcher);
    const loading = !data && !error;

    return (
        <div>
            <Container>
                <p className="mt-3 mb-2">Hasil pencarian: {query}</p>
                {loading && <p className="text-center">Tunggu sebentar...</p>}
                <Table hover className="m-auto">
                    <thead>
                        <tr className="h6" style={{ borderBottom: "2px solid #2E8B57" }}>
                            <th className="text-center p-3">No</th>
                            <th className="text-center p-3">Nama</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.results.map((user, i) => (
                            <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
