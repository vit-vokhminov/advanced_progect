import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('Получаем значение счётчика из стейта', () => {
        // DeepPartial позволяет не объявлять весь стейт со всеми его обязательными полями
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});

// toEqual строгое сравнение объекта