export interface AppointmentProps {
    costumer: string
    startsAt: Date
    endsAt: Date
}

export class Appointment {
    private pros: AppointmentProps

    get costumer() {
        return this.pros.costumer
    }

    get startsAt() {
        return this.pros.startsAt
    }

    get endsAt() {
        return this.pros.endsAt
    }

    constructor(props: AppointmentProps) {
        const { startsAt, endsAt } = props

        if( startsAt <= new Date()){
            throw new Error('Invalid start Date')
        }

        if (endsAt <= startsAt){
            throw new Error('Invalid End Date')
        }

        this.pros = props
    }
}