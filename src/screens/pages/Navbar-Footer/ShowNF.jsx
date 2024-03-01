import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowNF = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location.pathname]);

  return show ? children : null;
};

export default ShowNF;
