interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

const Ingredients: Ingredient[] = [
  {
    id: 1,
    name: 'Farina',
    quantity: 1,
    unit: 'kg',
  },{
    id: 2,
    name: 'Pollo',
    quantity: 6,
    unit: 'kg',
  },{
    id: 3,
    name: 'Maiale',
    quantity: 3,
    unit: 'kg',
  },{
    id: 4,
    name: 'Inca Kola',
    quantity: 3,
    unit: 'L',
  },{
    id: 5,
    name: 'Chicha Morada',
    quantity: 2,
    unit: 'l',
  },
];

export default Ingredients;