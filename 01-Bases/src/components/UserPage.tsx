import { UserRow } from "./UserRow"
import { useUser } from "../hooks/useUser"

export const UserPage = () => {
    const { users, nextPage, prevPage } = useUser();

    console.log(users);
    return (
        <>
            <h1>Usuarios:</h1>
            <table className="w-[500px] bg-black text-white rounded-2xl">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between w-[500px] mt-2">
                <button onClick={prevPage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Anterior</button>
                <button onClick={nextPage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Siguiente</button>
            </div>
        </>
    )
}
