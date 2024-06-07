import React from "react";
import { User } from "../../type";

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">{user.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text">Role: {user.role}</p>
                <p className="card-text">Active: {user.isActive ? 'yes' : 'no'}</p>
            </div>
        </div>
    )

}

export default UserItem
