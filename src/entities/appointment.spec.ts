import { expect, test } from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date';
import { Appointment } from './appointment';

test('create an appointment', () => {

    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-11')

    const appointment = new Appointment({
        costumer: 'John Doe',
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.costumer).toEqual('John Doe')
});

test('can not create an appointment with and date before start date', () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-09')

    expect(() => {
        return new Appointment({
            costumer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow()
})

test('can not create an appointment with and date before now', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() - 1)

    endsAt.setDate(endsAt.getDate() + 3)

    expect(() => {
        return new Appointment({
            costumer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow()
})