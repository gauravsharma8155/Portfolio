import { useState, useEffect } from "react";
export const useName = (name) => {
    const [first, setfirst] = useState('')
    useEffect(() => {
        setfirst(name);
        console.log(first)
    }, [])
    return first
}