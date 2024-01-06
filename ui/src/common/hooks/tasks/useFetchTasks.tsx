import { useState, useEffect } from "react";
import axios from "axios";

interface ITask {
  id: number;
  subject: string;
  board_id: number;
}

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/task");
        if (resp?.status === 200 && resp?.data) {
          setTasks(resp.data.tasks);
        }
      } catch (error) {
        console.log("Error while fetching tasks: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { tasks, loading, error };
};

export default useFetchTasks;
export type { ITask };
