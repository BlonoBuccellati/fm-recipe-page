import UlListItem from '@/_components/ul-list-item';

const PreparationTime = () => {
  return (
    <div className='bg-Rose-50 rounded-xl flex flex-col gap-4 p-6'>
      <h3 className='text-Rose-800 text-xl font-semibold leading-none'>
        Preparation time
      </h3>
      <ul className='flex flex-col gap-2'>
        <UlListItem>
          <b>Total</b>: Approximately 10 minutes
        </UlListItem>
        <UlListItem>
          <b>Preparation</b>: 5 minutes
        </UlListItem>
        <UlListItem>
          <b>Cooling</b>: 5 minutes
        </UlListItem>
      </ul>
    </div>
  );
};

export default PreparationTime;
