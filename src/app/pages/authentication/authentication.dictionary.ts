enum UserRole {
    guest = 1,
    user = 2,
    moderator = 3,
    admin = 4
};

class User {
    login: string;
    password: string;
    role: UserRole
}

export {UserRole, User};
