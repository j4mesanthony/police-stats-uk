import { describe, it, expect } from 'vitest';
import { useStringFormatter } from '@/utils/useStringFormatter';

describe('toTitleCase', () => {
    const { toTitleCase } = useStringFormatter();

    it('should take in lowercase single word "HOME" and return "Home"', () => {
        const result = toTitleCase('HOME');
        expect(result).toBe('Home');
    });

    it('should take lowercase string "home area" and return "Home Area"', () => {
        const result = toTitleCase('home area');
        expect(result).toBe('Home Area');
    });

});