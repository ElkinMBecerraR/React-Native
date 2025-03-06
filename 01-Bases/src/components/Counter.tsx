import { useCounter } from "../hooks/useCounter";


export const Counter = () => {
    const { count, incrementarValor } = useCounter();

    return (
        <>
            <h3 className="text-2xl"> Contador: <small className="font-bold">{count}</small></h3>

            <div>
                <button
                    onClick={() => incrementarValor(1)}
                    className='p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl w-10 mx-2'
                >
                    +1
                </button>
                <button
                    onClick={() => incrementarValor(-1)}
                    className='p-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl w-10 mx-2'
                >
                    -1
                </button>
            </div>

        </>
    );
};

