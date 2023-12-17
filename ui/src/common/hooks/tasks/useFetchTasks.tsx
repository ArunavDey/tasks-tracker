import { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  id: number;
  subject: string;
  board_id: number;
}

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/task");
        if (resp?.status === 200 && resp?.data) {
          setTasks(resp.data.tasks);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { tasks, loading };
};

export default useFetchTasks;
