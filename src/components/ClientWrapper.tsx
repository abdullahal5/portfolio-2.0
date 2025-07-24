"use client";

import { useEffect, useState } from "react";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <p className="animate-pulse text-xl">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ClientWrapper;
