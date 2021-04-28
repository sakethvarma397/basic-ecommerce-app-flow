import React from "react";
import axios from "axios";

const API = "https://fakestoreapi.com";
export default function UseMultiAxios(pathArray, method) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let promiseArray = pathArray.map((path) => axios.get(`${API}${path}`));
    axios
      .all(promiseArray)
      .then((response) => {
        let data = response.map(({ data }) => data);
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => console.warn("Something gone wrong", error));
  }, []);

  return { response, loading };
}
