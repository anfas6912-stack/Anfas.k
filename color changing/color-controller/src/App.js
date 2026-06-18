import { useState } from "react";

function App() {
  const [color, setColor] = useState(null);

  const getBackground = () => {
    if (color === "green") return "green";
    if (color === "red") return "red";
    return "transparent";
  };

  return (
    <div style={styles.wrapper}>
      <h2>Color Controller</h2>

      {/* Container Box */}
      <div
        style={{
          ...styles.box,
          backgroundColor: getBackground(),
          border: color ? "none" : "2px dashed #aaa",
        }}
      >
        {!color && <span style={styles.hint}>No color selected</span>}
      </div>

      {/* Conditional Rendering: show active color label */}
      {color && (
        <p style={styles.activeLabel}>
          Active color: <strong>{color}</strong>
        </p>
      )}

      {/* Buttons */}
      <div style={styles.btnGroup}>
        <button onClick={() => setColor("green")} style={styles.btn}>
          Green
        </button>
        <button onClick={() => setColor("red")} style={styles.btn}>
          Red
        </button>
        <button onClick={() => setColor(null)} style={styles.btn}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    padding: "3rem",
    fontFamily: "sans-serif",
  },
  box: {
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hint: {
    color: "#aaa",
    fontSize: "14px",
  },
  activeLabel: {
    fontSize: "14px",
    color: "#555",
  },
  btnGroup: {
    display: "flex",
    gap: "12px",
  },
  btn: {
    padding: "10px 28px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
    background: "#fff",
  },
};

export default App;