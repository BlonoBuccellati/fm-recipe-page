import Ingredients from '@/_components/ingredients';
import Instructions from '@/_components/instructions';
import Nutrition from '@/_components/nutrition';
import PreparationTime from '@/_components/preparation-time';
import Title from '@/_components/title';
import Image from 'next/image';
export default function Home() {
  return (
    // Card
    <main className='md:bg-Stone-100 flex justify-center'>
      <article className='flex flex-col items-center justify-center bg-white md:rounded-2xl md:max-w-[38.5rem] md:p-10 md:gap-10 md:my-32 xl:max-w-184'>
        {/* Image */}
        <div className='relative min-h-[10.6875rem] md:min-h-[18.75rem] w-full'>
          <Image
            src='/assets/images/image-omelette.jpeg'
            alt='Omelette'
            fill
            className='md:rounded-2xl'
          />
        </div>
        {/* Content */}
        <div className='px-8 py-10 flex flex-col gap-8 md:p-0 '>
          {/* ここで一個は盲点だった。 */}
          <Title />
          <PreparationTime />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </article>
    </main>
  );
}
