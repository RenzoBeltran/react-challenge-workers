interface IFilter {
  title: string;
  handleCloseFilter(): any;
}

const index: React.FC<IFilter> = ({ title, handleCloseFilter }) => {
  const clickToScreen = (event: any) => {
    if (event.path[0].id === "close-modal")
      handleCloseFilter();
  }
  document.body.addEventListener('click', clickToScreen, true);
  return (
    <div id="close-modal" className="absolute top-0 w-screen h-screen filter-bg flex justify-end items-center z-10">
      <div className="w-96 relative h-screen bg-white p-5 rounded-md">
        <button className="absolute top-7 right-7 text-2xl" onClick={handleCloseFilter}>X</button>
        <h3 className="text-4xl mb-10">{title}</h3>
        <form action="/" method="get">
          <div className="mb-5">
            <label htmlFor="filter-by-name">Filter by name</label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="name" id="filter-by-name" type="text" />
          </div>
          <div className="mb-5">
            <label htmlFor="filter-by-gender">Filter by gender</label>
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="gender" id="filter-by-gender" defaultValue="">
              <option value="">Select a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="filter-by-age">Filter by age</label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="age" type="number" min="0" max="200" />
          </div>
          <div className="flex justify-center">
            <button className="bg-transparent hover:bg-red-500 text-red-700 mr-5 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="reset">Clear all filters</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;