export default interface IAbout {
    _id: string;
    name: string,
    email: string,
    phone: number,
    address: string,
    image: string,
    description: string,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}