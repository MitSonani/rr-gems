import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class names into a single string, resolving conflicts in Tailwind CSS classes.
 * @param inputs - Array of class names or conditional class objects.
 * @returns A merged string of Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
