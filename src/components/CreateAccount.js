import React from 'react';

const CreateAccount = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button type="submit">Create Account</button>

            </form>
            
        </div>
    );
};

export default CreateAccount;