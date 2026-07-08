// src/components/AddTodoForm.tsx
import { useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export function AddTodoFormInteraction({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');
  const disabled = text.trim() === '';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = text.trim();
    if (disabled) return;
    onAdd(value);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Nueva tarea</label>
      <input
        id="new-todo"
        value={text}
        placeholder="¿Qué hay que hacer?"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" disabled={disabled}>
        Añadir
      </button>
    </form>
  );
}
