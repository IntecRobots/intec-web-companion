import { useState, useEffect, useCallback } from "react";


const useVisits = (url: string) => {
  const [visits, setVisits] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const session = ""


  const fetchVisits = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError(`Network response was not ok: ${response.statusText}`);
      }else{
        const data = await response.json();
        setVisits(data);
      }
    } catch (err) {
      console.error("Error fetching visits:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVisits() 
  }, [url,session]);

  return { visits, isLoading, error };
};

export default useVisits;
