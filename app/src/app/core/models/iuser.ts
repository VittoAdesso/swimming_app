// signup
export interface Iuser {
    _id: String;
    name: String;
    email: String;
    password: String;
}

// signin
export interface IuserSignin{
    email: String;
    password: String;
}