import { useState, useEffect } from "react";
import axios from "axios";

interface Board {
  id: number;
  name: string;
}

const useFetchBoards = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/board");
        if (resp?.status === 200 && resp?.data) {
          setBoards(resp.data.board);
        }
      } catch (error) {
        console.log("Error while fetching boards: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { boards, loading, error };
};

export default useFetchBoards;
