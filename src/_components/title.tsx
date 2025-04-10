const Title = () => {
  return (
    <header className='flex flex-col gap-6'>
      <h1 className='font-young text-4xl md:text-[2.5rem] md:leading-none'>
        Simple Omelette Recipe
      </h1>
      {/* paragraph */}
      <p className='text-Stone-600'>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </header>
  );
};

export default Title;
