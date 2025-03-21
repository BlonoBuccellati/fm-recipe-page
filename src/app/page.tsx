import Ingredients from '@/_components/ingredients';
import Instructions from '@/_components/instructions';
import Nutrition from '@/_components/nutrition';
import PreparationTime from '@/_components/preparation-time';
import Title from '@/_components/title';
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
        <Title />
        <PreparationTime />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}
