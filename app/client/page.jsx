"use client";
import React, { useState } from "react";
import ResultClientComponent from "./result";
import { Container, Form, Button } from "react-bootstrap";

export default function ClientPage() {
    const [query, setQuery] = useState("");

    const onSearch = (e) => {
        // agar halaman ketika di klik tidak refresh
        e.preventDefault();
        const inputQuery = e.target[0].value;
        setQuery(inputQuery);
    };

    return (
        <div>
            <Container style={{ width: "60%" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get data with Client Components</h2>

                <Form onSubmit={onSearch}>
                    <Form.Group className="d-flex align-items-center">
                        <Form.Control className="rounded-start" placeholder="Masukkan limit data" style={{ width: "30%", outline: "none", border: "2px solid #2E8B57" }} />
                        <Button variant="success" className="rounded-end" style={{ marginLeft: "0.1rem", width: "8%" }} type="submit">
                            Cari
                        </Button>
                    </Form.Group>
                </Form>

                <br />

                {query && <ResultClientComponent query={query} />}
            </Container>
        </div>
    );
}
