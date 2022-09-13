import axios from "axios";

export default function Login() {
  axios.get("/api/user/info/kim").then((res) => {
    console.log(res.data);
  });
  return <>Login PAGE</>;
}
