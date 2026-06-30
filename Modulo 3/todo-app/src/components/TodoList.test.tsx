// src/components/TodoList.test.tsx
import { describe, it, expect } from 'vitest';
import { logRoles, render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import type { Todo } from '../types';
import { LoginForm } from './LoginForm';

const tareas: Todo[] = [
  { id: '1', text: 'Comprar pan', completed: false, titulo: "Panaderia" },
  { id: '2', text: 'Lavar el coche', completed: true, titulo: "car" },
  { id: '3', text: 'Estudiar Vitest', completed: false, titulo:"uni" },
  { id: '4', text: 'Estudiar Nestjs', completed: false, titulo:"uni" },
];

describe('TodoList · queries', () => {
  it('debería renderizar un listitem por cada tarea (getAllByRole)', () => {
    // Arrange
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    // Act + Assert: tres tareas → tres elementos de lista
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
  });

  it('debería encontrar la lista por su aria-label', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole('list', { name: 'Lista de tareas' }),
    ).toBeInTheDocument();
  });
  it('debería mostrar el estado vacío cuando no hay tareas', () => {
    // Arrange: lista vacía
    render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
    // Assert: aparece el mensaje y NO hay listitems
    expect(screen.getByText('No hay tareas pendientes')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
  it('inspecciona el DOM y los roles', () => {
  const { container } = render(<LoginForm onLogin={() => {}} />);

  // Imprime TODO el HTML renderizado en consola
  screen.debug();

  // Imprime solo un nodo (más enfocado)
  screen.debug(screen.getByRole('button', { name: 'Entrar' }));
  screen.debug(screen.getByLabelText('Contraseña'));

  // Lista todos los roles y sus nombres accesibles
  logRoles(container);
  });
});
