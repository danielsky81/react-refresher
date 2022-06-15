import React, { useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p>Loaded</p>}
    </>
  )
}

export default Loader;