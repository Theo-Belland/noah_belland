"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="Loader">
        <div className="Spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  return null;
}
