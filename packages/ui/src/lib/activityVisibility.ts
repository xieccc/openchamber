export const DEFAULT_ACTIVITY_VISIBLE_ROWS = 7;
export const MIN_ACTIVITY_VISIBLE_ROWS = 1;
export const MAX_ACTIVITY_VISIBLE_ROWS = 50;

export const isActivityVisibleRows = (value: unknown): value is number => (
    typeof value === 'number'
    && Number.isInteger(value)
    && value >= MIN_ACTIVITY_VISIBLE_ROWS
    && value <= MAX_ACTIVITY_VISIBLE_ROWS
);
