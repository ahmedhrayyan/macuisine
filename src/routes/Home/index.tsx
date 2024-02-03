import Page from "@/components/Page";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/recipes");
    }, timer * 1000);

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page className="text-center text-lg">
      <h1 className="mb-2 font-medium text-4xl ">Welcome to the home page</h1>
      <p className="mb-8">Coming soon...</p>
      <p>
        <strong>Redirecting to recipes in {timer} seconds</strong>
      </p>
    </Page>
  );
}
