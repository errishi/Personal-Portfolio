import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
        {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };