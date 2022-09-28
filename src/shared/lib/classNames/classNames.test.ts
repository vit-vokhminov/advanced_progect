import { classNames } from './classNames';

describe('classNames', () => {
    test('С одним параметром', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('С дополнительными параметрами', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected
        );
    });

    test('Моды', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });

    test('Мод с условием false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });

    test('Мод с условием undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });
});
