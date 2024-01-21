import axios from "axios";
import { useEffect, useState } from "react";

const fetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url).then((res) => res.data.results);
      setData(response);
    };
    getData();
  }, [url]);

  return data;
};

export default fetchData;
