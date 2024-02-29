export interface IDice {
        id: any,
        nickName: string,
        email: string,
        contact: string,
        check: string, //boolean
        password: string,
        cep: string,
        address: string,
        no: string, //number
        complement: string,
        district: string,
        city: string,
}

export interface IPayment {
        idUser: string,
        cardNumber: string,
        validity: string,
        cvv: string,
        cardholderName: string,
        cpf: string,
        price: string
}