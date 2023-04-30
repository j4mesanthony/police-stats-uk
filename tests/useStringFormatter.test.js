import { describe, it, expect } from 'vitest';
import { useStringFormatter } from '../src/composables/useStringFormatter';

describe('toTitleCase', () => {
    const { toTitleCase } = useStringFormatter();

    it('should return take in lowercase single word "HOME" and return "Home"', () => {
        const result = toTitleCase('home');
        expect(result).toBe('Home');
    });

    // TODO: Fix test
    it('should return take lowercase string "home area" and return "Home Area"', () => {
        const result = toTitleCase('home');
        expect(result).toBe('Home Area');
    });

});