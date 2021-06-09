export class DateBucket {
    data: Array<DateQuery>;
    date: Date;
    day: number;

    constructor(data: Array<DateQuery>, date: Date, day: number)
    {
        this.data = data;
        this.date = date,
        this.day = day;
    }


};

export class DateQuery {
    query: string;
    province: Province;
    lightColor: string;
    darkColor: string;
}

export enum Province {
    AB = 'AB',
    BC = 'BC',
    MA = 'MA',
    NB = 'NB',
    NL = 'NL',
    ON = 'ON',
    QC = 'QC',
    SK = 'SK'
}