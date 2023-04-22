import React, { useEffect } from "react";

export default function FunctionComponents() {
  const [isLoading, setLoading] = React.useState(false);
  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnmount");
    };
  }, [isLoading]); // [deps] componentDidUpdate

  // [] componentDidMount sẽ không gọi lại useEffect cho dù state có thay đổi
  
  console.log("componentDidUpdate");
  // được gọi 2 lần:
  //  1 lần khi render components,
  //  1 lần khi setLoading thành "true".

  return <button onClick={() => setLoading(true)}>Click here</button>;
}
