import React from 'react';
import {userService} from "@/services/api.service";
import Link from "next/link";

const UsersPage = async () => {
    const allUsers = await userService.getAllUsers()
    return (
        <div>
            {allUsers.map(user => (<div key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link></div>))}

        </div>
    );
};

export default UsersPage;