import Ingredients from '@/_components/ingredients';
import Instructions from '@/_components/instructions';
import Nutrition from '@/_components/nutrition';
import PreparationTime from '@/_components/preparation-time';
import Title from '@/_components/title';
import Image from 'next/image';
export default function Home() {
  return (
    <div className='md:bg-Stone-100 flex justify-center'>
      {/* ここでカードになってる */}
      <div className='flex flex-col items-center justify-center bg-white md:rounded-2xl md:p-10 md:gap-10 md:mt-10'>
        {/* Image */}
        <div className='relative min-h-[10.6875rem] md:h-[18.75rem] w-full md:w-[33.5rem] xl:w-164'>
          <Image
            src='/assets/images/image-omelette.jpeg'
            alt='Omelette'
            fill
            className='md:rounded-2xl'
          />
        </div>
        {/* Content */}
        <div className='px-8 py-10 flex flex-col gap-8 md:p-0 md:w-[33.5rem] xl:w-164'>
          {/* ここで一個は盲点だった。 */}
          <Title />
          <PreparationTime />
          <Ingredients />
          <hr className='border-t border-Stone-150' />
          <Instructions />
          <hr className='border-t border-Stone-150' />
          <Nutrition />
        </div>
      </div>
    </div>
  );
}
