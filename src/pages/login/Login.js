import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [obj, setObj] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/user/info/kim");
      setObj(res.data);
    })();
  }, []);

  return (
    <>
      Hello <br></br>
      {JSON.stringify(obj)}
    </>
  );
}
