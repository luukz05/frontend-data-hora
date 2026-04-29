import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { RefreshCcw } from "lucide-react";
import "./styles.css";

const API_URL =
  import.meta.env.VITE_API_URL || "https://api-data-hora-195d.onrender.com";

function App() {
  const [dateTime, setDateTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDateTime() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/data-hora`);

      if (!response.ok) {
        throw new Error("A API retornou uma resposta inesperada.");
      }

      const data = await response.json();
      setDateTime(data);
    } catch (err) {
      setError("Nao foi possivel consultar a API de data e hora.");
      setDateTime(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDateTime();
  }, []);

  return (
    <main className="app-shell">
      <section className="hero" aria-live="polite">
        <div className="result">
          {loading && <p className="muted">Consultando API...</p>}

          {!loading && error && <p className="error">{error}</p>}

          {!loading && dateTime && (
            <>
              <p className="time">{dateTime.hora}</p>
              <p className="date">{dateTime.data}</p>
              <dl>
                <div>
                  <dt>Fuso horario</dt>
                  <dd>{dateTime.timezone}</dd>
                </div>
                <div>
                  <dt>ISO</dt>
                  <dd>{dateTime.iso}</dd>
                </div>
              </dl>
            </>
          )}
        </div>

        <button className="refresh-button" type="button" onClick={loadDateTime} disabled={loading}>
          <RefreshCcw size={18} />
          Atualizar
        </button>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
