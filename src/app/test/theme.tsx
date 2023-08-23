'use client'
import { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

export default function MyApp1() {
    const [theme, setTheme] = useState<Theme>('dark');

    return (
        <ThemeContext.Provider value={theme}>
            <MyComponent />
        </ThemeContext.Provider>
    )
}

function MyComponent() {
    const theme = useGetTheme();

    return (
        <div>
            <p>Current theme: {theme}</p>
        </div>
    )
}