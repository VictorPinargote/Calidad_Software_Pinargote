// src/components/Hello.test.tsx
import { describe, it, expect } from 'vitest';
import { godbye } from './Godbye';

describe('goodbye', () => {
  // El test mínimo: el componente existe y es importable.
  it('debería estar definido', () => {
    expect(godbye).toBeDefined();
  });
});