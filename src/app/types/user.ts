export default interface IUser {
    _id: string;
    name: string,
    email: string,
    password: string,
    role: "admin" | "member",
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}