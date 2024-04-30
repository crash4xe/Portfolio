import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    const random = Math.random();
    console.log("starting");
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong!");
      }
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, will get back to your shortly.`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
