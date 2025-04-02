import UlListItem from '@/_components/ul-list-item';

const PreparationTime = () => {
  return (
    <section className='bg-Rose-50 rounded-xl flex flex-col gap-4 p-6'>
      <h2 className='text-Rose-800 text-xl font-semibold leading-none'>
        Preparation time
      </h2>
      <ul className='flex flex-col gap-2'>
        <UlListItem>
          <span className='font-bold'>Total</span>: Approximately 10 minutes
        </UlListItem>
        <UlListItem>
          <span className='font-bold'>Preparation</span>: 5 minutes
        </UlListItem>
        <UlListItem>
          <span className='font-bold'>Cooling</span>: 5 minutes
        </UlListItem>
      </ul>
    </section>
  );
};

export default PreparationTime;
