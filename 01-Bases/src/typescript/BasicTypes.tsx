

export const BasicTypes = () => {
    const name: string = 'Elkin';
    const age: number = 28;
    const isActive: boolean = true;

    return (
        <>
            <h3>Tipos basicos</h3>
            {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
        </>
    )
};
