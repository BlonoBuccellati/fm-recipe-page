import Image from 'next/image';
export default function Home() {
  return (
    // ここでカードになってる
    <div className='flex flex-col items-center justify-center'>
      {/* Image */}
      <div className='relative h-[170px] w-full'>
        <Image src='/assets/images/image-omelette.jpeg' alt='Omelette' fill />
      </div>
      {/* Content */}
      <div className='p-8 flex flex-col gap-5'>
        {/* ここで一個は盲点だった。 */}
        {/* Title */}
        <div className='flex flex-col gap-6'>
          <h1 className='font-young text-4xl'>Simple Omelette Recipe</h1>
          {/* paragraph */}
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        {/* preparation time */}
        <div className='bg-Rose-50 rounded-lg'>
          <h3 className='text-Rose-800 text-xl font-semibold'>
            Preparation time
          </h3>
          {/* リスト */}
          <ul className='list-disc pl-5'>
            <li>
              <b>Total</b>:Approximately 10
            </li>
            <li>
              <b>Preparation</b>:5 minutes
            </li>
            <li>
              <b>Cooling</b>:5 minutes
            </li>
          </ul>
        </div>
        {/* Ingredients */}
        <div>
          <h2 className='text-Brown-800 font-young text-2xl'>Ingredients</h2>
          <ul className='list-disc pl-5'>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        {/* Instructions */}
        <div>
          <h2 className='text-Brown-800 font-young text-2xl'>Instructions</h2>
          <ol>
            <li>
              <b>Beat the eggs:</b>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li>
              <b>Heat the pan:</b>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <b>Cook the omelette:</b>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <b>Add fillings (optional):</b>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <b>Fold and serve:</b> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <b>Enjoy:</b> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </div>
        <div>
          <h2 className='text-Brown-800 font-young text-2xl'>Nutrition</h2>
          {/* paragraph */}
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          {/* table */}
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td className='text-Brown-800'>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td className='text-Brown-800'>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td className='text-Brown-800'>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td className='text-Brown-800'>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
