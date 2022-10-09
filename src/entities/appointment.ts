export interface AppointmentProps {
    costumer: string
    startAt: Date
    endAt: Date
}

export class Appointment {
    private pros: AppointmentProps

    get costumer() {
        return this.pros.costumer
    }

    get startAt() {
        return this.pros.startAt
    }

    get endAt() {
        return this.pros.endAt
    }

    constructor(props: AppointmentProps) {
        const { startAt, endAt } = props

        if (endAt <= startAt){
            throw new Error('Invalid End Date')
        }

        this.pros = props
    }
}