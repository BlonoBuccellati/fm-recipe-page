import UlListItem from '@/_components/ul-list-item';
import SubTitle from './sub-title';

const Ingredients = () => {
  return (
    <section className='flex flex-col gap-6 border-b pb-8 border-Stone-150'>
      <SubTitle>Ingredients</SubTitle>
      <ul className='flex flex-col gap-2 marker:text-Brown-800 list-inside'>
        <UlListItem>2-3 large eggs</UlListItem>
        <UlListItem>Salt, to taste</UlListItem>
        <UlListItem>Pepper, to taste</UlListItem>
        <UlListItem>1 tablespoon of butter or oil</UlListItem>
        <UlListItem>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </UlListItem>
      </ul>
    </section>
  );
};

export default Ingredients;
