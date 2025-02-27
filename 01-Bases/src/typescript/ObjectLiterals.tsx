
interface Person {
    edad: number;
    primerNombre: string;
    segundoNombre: string;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    numero: string;
    calle?: string
}

export const ObjectLiterals = () => {
    const person: Person = {
        edad: 38,
        primerNombre: 'Elkin',
        segundoNombre: 'Maurico',
        direccion: {
            pais: 'Colombia',
            numero: '365',
        },
    };


    return (
        <>
            <div>ObjectLiterals</div>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
