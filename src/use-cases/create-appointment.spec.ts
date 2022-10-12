import { describe, expect, it } from "vitest"
import { Appointment } from "../entities/appointment"
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository"
import { getFutureDate } from "../tests/utils/get-future-date"
import { CreateAppointment } from "./create-appointment"

describe('Create Appointment', () => {
    it('should be able to create an appointment', async () => {
        const startsAt = getFutureDate('2022-08-10')
        const endsAt = getFutureDate('2022-08-15')

        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)


        await createAppointment.execute({
            costumer: 'John Doe',
            startsAt,
            endsAt
        })

        expect(createAppointment.execute({
            costumer: 'John Doe',
            startsAt: getFutureDate('2022-08-14'),
            endsAt: getFutureDate('2022-08-18'),
        })).rejects.toBeInstanceOf(Error)

        expect(createAppointment.execute({
            costumer: 'John Doe',
            startsAt: getFutureDate('2022-08-08'),
            endsAt: getFutureDate('2022-08-12'),
        })).rejects.toBeInstanceOf(Error)
        
        expect(createAppointment.execute({
            costumer: 'John Doe',
            startsAt: getFutureDate('2022-08-08'),
            endsAt: getFutureDate('2022-08-17'),
        })).rejects.toBeInstanceOf(Error)

        expect(createAppointment.execute({
            costumer: 'John Doe',
            startsAt: getFutureDate('2022-08-11'),
            endsAt: getFutureDate('2022-08-12'),
        })).rejects.toBeInstanceOf(Error)
    })
})
