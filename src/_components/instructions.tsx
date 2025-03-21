import SubTitle from './sub-title';

interface InstructionItemInterface {
  title: string;
  content: string;
}
const instructionItems: InstructionItemInterface[] = [
  {
    title: 'Beat the eggs',
    content:
      'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
  },
  {
    title: 'Heat the pan',
    content:
      'Place a non-stick frying pan over medium heat and add butter or oil.',
  },
  {
    title: 'Cook the omelette',
    content:
      'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
  },
  {
    title: 'Add fillings (optional)',
    content:
      'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    title: 'Fold and serve',
    content:
      'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
  },
  {
    title: 'Enjoy',
    content: 'Serve hot, with additional salt and pepper if needed.',
  },
];
const Instructions = () => {
  return (
    <div className='flex flex-col gap-6'>
      <SubTitle>Instructions</SubTitle>
      <ol className='list-inside flex flex-col gap-2 marker:text-Brown-800 text-Stone-600'>
        {instructionItems.map((item, index) => (
          <li key={item.title} className='flex gap-4 pl-2'>
            <span className='text-Brown-800'>{index + 1}.</span>
            <p>
              <b>{item.title}</b>: {item.content}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
