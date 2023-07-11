export default interface IComment {
    _id: string;
    content: string,
    post: string,
    user:string,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}