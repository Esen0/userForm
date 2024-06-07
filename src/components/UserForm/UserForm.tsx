import React, { useState, ChangeEvent, FormEvent } from "react";
import { User, UserRole } from "../../type";


interface Props {
    onAddUser: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onAddUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [role, setRole] = useState<UserRole>('user');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    
        const newUser: User = {
          id: Date.now().toString(),
          name,
          email,
          isActive,
          role,
        };
    
        onAddUser(newUser);
        setName('');
        setEmail('');
        setIsActive(false);
        setRole('user');
      };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add new User</h4>
            <div className="form-group">
                <label htmlFor="name">name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    required
                    className="form-control"
                    onChange={(event) => setName(event.target.value)}
                />  
            </div>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    required
                    className="form-control"
                    onChange={(event) => setEmail(event.target.value)}
                />  
            </div>
            <div className="form-group">
                <label htmlFor="name">Active</label>
                <input 
                    type="checkbox"
                    id="isActive"
                    checked={isActive}
                    className="form-check-input"
                    onChange={(event) => setIsActive(event.target.checked)}
                />  
            </div>
            <div className="form-group">
                <label htmlFor="role">role</label>
                <select 
                    name="role"
                    id="role"
                    value={role}
                    required
                    className="form-control"
                    onChange={(event => setRole(event.target.value as UserRole))}>
                        
                    <option value="user">User</option>
                    <option value="Editor">Editor</option>    
                    <option value="Admin">Admin</option>  
                </select>
               
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add user</button>
        </form>
    );
};

export default UserForm