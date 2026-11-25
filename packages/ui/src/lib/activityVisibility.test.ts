import { describe, expect, test } from 'bun:test';
import {
    DEFAULT_ACTIVITY_VISIBLE_ROWS,
    MAX_ACTIVITY_VISIBLE_ROWS,
    MIN_ACTIVITY_VISIBLE_ROWS,
    isActivityVisibleRows,
} from './activityVisibility';

describe('activity visibility settings', () => {
    test('the default sits inside the accepted range', () => {
        expect(DEFAULT_ACTIVITY_VISIBLE_ROWS).toBeGreaterThanOrEqual(MIN_ACTIVITY_VISIBLE_ROWS);
        expect(DEFAULT_ACTIVITY_VISIBLE_ROWS).toBeLessThanOrEqual(MAX_ACTIVITY_VISIBLE_ROWS);
    });

    test('accepts whole numbers inside the range', () => {
        expect(isActivityVisibleRows(MIN_ACTIVITY_VISIBLE_ROWS)).toBe(true);
        expect(isActivityVisibleRows(DEFAULT_ACTIVITY_VISIBLE_ROWS)).toBe(true);
        expect(isActivityVisibleRows(MAX_ACTIVITY_VISIBLE_ROWS)).toBe(true);
    });

    test('rejects fractions, strings and out-of-range values', () => {
        expect(isActivityVisibleRows(0)).toBe(false);
        expect(isActivityVisibleRows(MAX_ACTIVITY_VISIBLE_ROWS + 1)).toBe(false);
        expect(isActivityVisibleRows(1.5)).toBe(false);
        expect(isActivityVisibleRows('7')).toBe(false);
        expect(isActivityVisibleRows(null)).toBe(false);
        expect(isActivityVisibleRows(undefined)).toBe(false);
        expect(isActivityVisibleRows(Number.NaN)).toBe(false);
        expect(isActivityVisibleRows(Number.POSITIVE_INFINITY)).toBe(false);
    });
});
