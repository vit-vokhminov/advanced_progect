import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('Получаем участок стейта, который отвечает за счётчик', () => {
        // DeepPartial позволяет не объявлять весь стейт со всеми его обязательными полями
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});

// toEqual строгое сравнение объекта