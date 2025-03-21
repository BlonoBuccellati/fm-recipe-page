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
      <div className='flex flex-col items-center justify-center md:w-[616px] bg-white md:rounded-2xl md:p-10 md:gap-10 md:my-32'>
        {/* Image */}
        <div className='relative h-[171px] md:h-[300px] w-full'>
          <Image
            src='/assets/images/image-omelette.jpeg'
            alt='Omelette'
            fill
            className='md:rounded-2xl '
          />
        </div>
        {/* Content */}
        <div className='px-8 py-10 flex flex-col gap-8 md:p-0'>
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
