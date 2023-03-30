import matches from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/extend-expect';
import { expect } from 'vitest';

expect.extend(matches);
