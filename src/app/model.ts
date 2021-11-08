export interface Orders{
    OrderID?: number;
    Customer: string;
    Amount: number;
}

export interface Items{
    id: number;
    item_name: string;
    price: number;
}

export interface Admin{
    id?: number;
    email: string;
    password: string;
}