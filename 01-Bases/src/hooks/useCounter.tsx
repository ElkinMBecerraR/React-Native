import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState<number>(10);

    const incrementarValor = (value: number) => {
        setCount(Math.max(count + value, 0));
    }

    return {
        count,
        incrementarValor,
    }
}
