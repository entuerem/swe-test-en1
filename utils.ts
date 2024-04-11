export function dateToSnowflake(date: Date): string {
    // @ts-ignore
    return (date.getTime() - 1420070400000) * '4194304';
}
