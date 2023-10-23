import { describe, it, expect } from 'vitest';
import { useNumberFormatter } from '@/src/global/composables/useNumberFormatter';

describe('formatNumber', () => {
    const { formatNumber } = useNumberFormatter();

    it('should return a string of "10.3"', () => {
        const result = formatNumber(10.27, 1);
        expect(result).toBe('10.3');
    });

    it('should return a string of "100.25"', () => {
        const result = formatNumber(100.25, 2);
        expect(result).toBe('100.25');
    });

    it('should return a string of "100"', () => {
        const result = formatNumber(100.38845);
        expect(result).toBe('100');
    });

    it('should return a string of "4,283.269"', () => {
        const result = formatNumber(4283.26859993, 3);
        expect(result).toBe('4,283.269');
    });

    it('should return a string of "100"', () => {
        const result = formatNumber(100);
        expect(result).toBe('100');
    });

    it('should return a string of "1,000"', () => {
        const result = formatNumber(1000);
        expect(result).toBe('1,000');
    });

    it('should return a string of "20,000"', () => {
        const result = formatNumber(20000);
        expect(result).toBe('20,000');
    });

    it('should return a string of "100,000"', () => {
        const result = formatNumber(100000);
        expect(result).toBe('100,000');
    });

    it('should return a string of "1,000,000"', () => {
        const result = formatNumber(1000000);
        expect(result).toBe('1,000,000');
    });
});