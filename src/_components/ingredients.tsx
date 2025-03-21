import UlListItem from '@/_components/ul-list-item';

const Ingredients = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-Brown-800 font-young text-[28px]'>Ingredients</h2>
      <ul className='flex flex-col gap-2 marker:text-Brown-800 list-inside'>
        <UlListItem>2-3 large eggs</UlListItem>
        <UlListItem>Salt, to taste</UlListItem>
        <UlListItem>Pepper, to taste</UlListItem>
        <UlListItem>1 tablespoon of butter or oil</UlListItem>
        <UlListItem>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </UlListItem>
      </ul>
    </div>
  );
};

export default Ingredients;
