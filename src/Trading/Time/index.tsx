import { format } from "date-fns";
import * as React from "react";
import style from "./index.module.css";

export function Time() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const setCurrentDate = () => {
      setDate(new Date());
    };

    const id = setInterval(setCurrentDate, 1000);

    const cleanup = () => {
      clearInterval(id);
    };

    return cleanup;
  }, []);

  return <div className={style.time}>{format(date, "HH:mm:ss")}</div>;
}
