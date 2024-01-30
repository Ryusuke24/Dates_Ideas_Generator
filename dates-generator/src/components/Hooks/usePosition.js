import { useState, useEffect } from "react";

function usePosition() {
  const [position, setPosition] = useState("");
  const [error, setError] = useState(null);

  const success = pos => {
    setPosition(pos.coords);
  };
  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation access denied. Please try again... ");
      return;
    }
    let watcher = geo.getCurrentPosition(success, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  console.log(position.coords);
  return { position, error };
}

export default usePosition;
