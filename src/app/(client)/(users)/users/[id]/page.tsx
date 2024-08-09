import React from 'react';
import {userService} from "@/services/api.service";

const UserPageById = async ({params}: { params: { id: string } }) => {
    const user = await userService.getUserById(params.id)
    if (!user) return null
    return (
        <div>

            Id: {user.id} <br/>
            Email: {user.email}

        </div>
    );
};

export default UserPageById;