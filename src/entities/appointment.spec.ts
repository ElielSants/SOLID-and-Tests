import { expect, test } from 'vitest'
import { Appointment } from './appointment';

test('create an appointment', () => {

    const startAt = new Date();
    const endAt = new Date();

    endAt.setDate(endAt.getDate() + 1)

    const appointment = new Appointment({
        costumer: 'John Doe',
        startAt,
        endAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.costumer).toEqual('John Doe')
});

test('can not create an appointment with and date before start date', () => {
    const startAt = new Date();
    const endAt = new Date();

    endAt.setDate(endAt.getDate() - 1)

    expect(() => {
        return new Appointment({
            costumer: 'John Doe',
            startAt,
            endAt
        })
    }).toThrow()
})