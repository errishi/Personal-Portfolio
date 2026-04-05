import { createContext, useEffect, useState } from "react";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate loading for 2 seconds

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <PortfolioContext.Provider value={{ loading, setLoading }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export { PortfolioContext, PortfolioProvider };