export declare const currentUser: {
    id: number;
    name: string;
    designation: string;
    email: string;
};
export declare const userRoles: {
    name: string;
    description: string;
    permissions: {
        action: string;
        subject: string;
    }[];
}[];
