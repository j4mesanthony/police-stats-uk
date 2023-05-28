import { describe, it, expect } from 'vitest';
import { useNumberFormatter } from '../src/composables/useNumberFormatter';

describe('formatNumber', () => {
    const { formatNumber } = useNumberFormatter();

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