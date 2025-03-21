const UlListItem = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <li className='flex items-center pl-2 before:content-["•"] before:text-Brown-800 before:inline-block before:mr-4 before:font-bold before:w-4'>
        <div>{children}</div>
      </li>
    </>
  );
};

export default UlListItem;
