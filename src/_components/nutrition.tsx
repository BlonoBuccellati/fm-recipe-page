import SubTitle from './sub-title';

interface NutritionTable {
  title: string;
  value: string;
}
const NutritionTableList: NutritionTable[] = [
  {
    title: 'Calories',
    value: '277kcal',
  },
  {
    title: 'Carbs',
    value: '0g',
  },
  {
    title: 'Protein',
    value: '20g',
  },
  {
    title: 'Fat',
    value: '22g',
  },
];

const Nutrition = () => {
  return (
    <section className='flex flex-col gap-6 text-Stone-600'>
      <SubTitle>Nutrition</SubTitle>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          {NutritionTableList.map((data, index) => (
            <tr
              key={data.title}
              className={`px-8 grid grid-cols-2 gap-4
                ${index === 0 && 'pb-3'}
                ${index !== 0 && 'py-3 border-t border-Stone-150'}  ${
                index === NutritionTableList.length - 1 && 'pb-0'
              }`}
            >
              <td>{data.title}</td>
              <td className='text-Brown-800 font-bold leading-none'>
                {data.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Nutrition;
