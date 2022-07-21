import axios from "axios";
import { useState, useEffect } from "react";

export const api = axios.create({
  baseURL: "https://api.imgflip.com",
});

export const useFetchData = (): IUseFetchData => {
  const [data, setData] = useState<
    {
      id: string;
      name: string;
      url: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [shouldDataReload, setShouldDataReload] = useState(false);

  const reloadData = () => {
    setShouldDataReload(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/get_memes");
        setData(data.data.memes);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [shouldDataReload]);

  return {
    data,
    loading,
    reloadData,
  };
};

interface IUseFetchData {
  data: {
    id: string;
    name: string;
    url: string;
  }[];
  loading: boolean;
  reloadData: () => void;
}
