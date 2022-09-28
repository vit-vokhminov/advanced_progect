type Mods = Record<string, boolean | string | undefined>;

/*
'app', {}, [theme]
@ cls   строка
@ mods  условия
@ additional    массив переменных со значением
*/
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: any[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
