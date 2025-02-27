
const agregarDosNumeros = (a: number, b: number): number => {
    return a + b;
};

export const BasicFuntions = () => {
    return (
        <>
            <h2>Funciones</h2>
            <span>El resultado de la suma es = {agregarDosNumeros(3, 8)}</span>
        </>
    );
};
