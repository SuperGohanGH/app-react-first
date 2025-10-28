import type { FilterType } from "../types";

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function TodoFilter({ filter, onFilterChange }: TodoFilterProps) {
  return (
    <div>
      <button 
        onClick={() => onFilterChange('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        Tutti
      </button>
      <button 
        onClick={() => onFilterChange('active')}
        className={filter === 'active' ? 'active' : ''}
      >
        Attivi
      </button>
      <button 
        onClick={() => onFilterChange('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completati
      </button>
    </div>
  );
}

export default TodoFilter;