export default interface IContact {
    _id: string;
    name: string,
    email: string,
    phone: number,
    address: string,
    support:string,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}