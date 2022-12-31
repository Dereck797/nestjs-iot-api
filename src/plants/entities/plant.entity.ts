import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Plant {
    @PrimaryColumn('uuid')
    uuid: string;

    @Column('numeric')
    temperature:number;

    @Column('numeric')
    humidity:number;

    @Column('timestamp')
    startTime:Date;

    @Column('timestamp')
    finalTime:Date;
}
