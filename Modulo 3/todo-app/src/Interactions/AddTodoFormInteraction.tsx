// src/components/AddTodoForm.tsx
import { useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export function AddTodoFormInteraction({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = text.trim()
    if (!value) return;
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
      <button type="submit">Añadir</button>
    </form>
  );
}