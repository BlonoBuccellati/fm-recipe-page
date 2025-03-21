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
    <div className='flex flex-col gap-6'>
      <SubTitle>Nutrition</SubTitle>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          {NutritionTableList.map((data, index) => (
            <div key={data.title}>
              <tr key={data.title} className='px-8 grid grid-cols-2 gap-4'>
                <td>{data.title}</td>
                <td className='text-Brown-800 font-bold'>{data.value}</td>
              </tr>
              {index !== NutritionTableList.length - 1 && (
                <hr className='my-3 border-t border-Stone-150' />
              )}
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nutrition;
