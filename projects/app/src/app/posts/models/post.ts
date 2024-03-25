export type Post = {
    id: number;
    title: string;
    content: string;
    author: number;
    photo: string;
}

export type Author = {
    id: number;
    name: string;
    photo: string;
    pseudo: string[];
    address: {
        number: string;
        street: string;
        postalCode: string;
        city: string;
        country: string;
    };
}