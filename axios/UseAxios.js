import React from "react";
import axios from "axios";

const API = "https://fakestoreapi.com";

export default function useAxios(path, method) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios(`${API}${path}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setResponse(response.data);
      setLoading(false);
    });
    //.catch(console.log("Fetching error"));
  }, []);
  return { response, loading };
}
