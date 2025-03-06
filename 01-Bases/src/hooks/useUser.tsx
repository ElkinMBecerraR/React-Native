import { useState, useEffect, useRef } from "react"
import { User } from "../interfaces/reqres.response";
import { loadUsersActions } from "../actions/load-users.action";

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPage = useRef(1);

    useEffect(() => {
        loadUsersActions(1).then(setUsers);
    }
        , []);

    const nextPage = async () => {
        currentPage.current++;
        const users = await loadUsersActions(currentPage.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPage.current--;
        }
    }

    const prevPage = async () => {
        if (currentPage.current < 1) return;

        currentPage.current--;

        const users = await loadUsersActions(currentPage.current);
        setUsers(users);
    }

    return {
        users,

        nextPage,
        prevPage,
    };
};
