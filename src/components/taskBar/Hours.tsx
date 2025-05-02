import { useEffect, useState } from "react";

function Hours() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-xs w-20 rounded-lg text-right hover:bg-gray-500 pr-2">
      <p>{dateTime.toLocaleTimeString()}</p>
      <p>{dateTime.toLocaleDateString()}</p>
    </div>
  );
}

export default Hours;
