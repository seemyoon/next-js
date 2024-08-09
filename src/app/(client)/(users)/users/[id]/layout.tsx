import React from "react";
import {Metadata} from "next";
import {userService} from "@/services/api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const userById = await userService.getUserById(params.id)
    if (!userById) return {title: "User not found"};
    return {title: userById.name}
}
const UserLayoutById = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default UserLayoutById