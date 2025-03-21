const Nutrition = () => {
  return (
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
  );
};

export default Nutrition;
