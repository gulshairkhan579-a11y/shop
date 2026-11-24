"use client";

import React, { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(String(result));
        } catch (error) {
            setInput("Error");
        }
    };

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    return (
        <div style={styles.container}>
            <h3>Hisab Calculator</h3>

            <input
                type="text"
                value={input}
                readOnly
                placeholder="0"
                style={styles.display}
            />

            <div style={styles.topRow}>
                <button onClick={handleClear} style={styles.clearBtn}>C</button>
                <button onClick={handleDelete} style={styles.delBtn}>DEL</button>
            </div>

            <div style={styles.grid}>
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
                        style={btn === "=" ? styles.equalBtn : styles.button}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "260px",
        margin: "20px auto",
        padding: "15px",
        border: "2px solid #333",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
    },
    display: {
        width: "100%",
        height: "45px",
        fontSize: "20px",
        textAlign: "right",
        marginBottom: "10px",
        padding: "5px 10px",
        boxSizing: "border-box",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    topRow: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        marginBottom: "8px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px",
    },
    button: {
        padding: "12px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
    },
    clearBtn: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    delBtn: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#ffa64d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    equalBtn: {
        padding: "12px",
        fontSize: "16px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};