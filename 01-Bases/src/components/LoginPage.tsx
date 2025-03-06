import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {
    const { isChecking, isAuthenticate, loginInput, user, logout } = useAuthContext();

    if (isChecking) {
        return (
            <>
                <span>Verificando...</span>
            </>
        );
    }
    return (
        <>
            {
                isAuthenticate ? (
                    <>
                        <h3>Bienvenido</h3>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                        <button onClick={() => logout} className='bg-blue-500 p-2 text-white rounded-2xl mt-5'>Salir</button>
                    </>
                ) :
                    <>
                        <h3>Ingresar al sisteam</h3>
                        <button onClick={() => loginInput('ElkinBecerra', '1234')} className='bg-blue-500 p-2 text-white rounded-2xl mt-5'>Ingresar</button>
                    </>
            }
        </>
    );
};


