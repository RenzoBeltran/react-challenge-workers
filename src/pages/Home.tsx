import { useState, useEffect } from 'react';
import jsonData from '../data.json';
import Filter from '../components/Filter'
import ReactPaginate from 'react-paginate';
import {
  AiOutlineFileExcel,
  AiFillDelete,
  AiOutlineUser,
  AiOutlineFilter,
  AiTwotoneEdit,
  AiTwotoneHome,
  AiOutlineDoubleRight,
  AiOutlineRight,
  AiOutlineLeft
} from 'react-icons/ai';

interface IHome {
  itemsPerPage: number;
}
const Home: React.FC<IHome> = ({ itemsPerPage }) => {
  const data: any = jsonData.results;
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handleCloseFilter = (): void => {
    setIsFilterOpened(false);
  }

  const handleOpenFilter = (): void => {
    setIsFilterOpened(true);
  }

  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % data?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
    // eslint-disable-next-line
  }, [itemOffset, itemsPerPage, data]);

  return (
    <div>
      <div className="ml-16">
        <h2 className="my-5 text-5xl">Workers</h2>
        <div className="flex justify-end mr-16">
          <button className="bg-transparent mr-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleOpenFilter}>Filter <AiOutlineFilter size='1.5rem' className="inline" /></button>
          <button className="bg-blue-500 mr-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Workers <AiOutlineUser size='1.5rem' className='inline' /></button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete All <AiFillDelete size='1.5rem' className='inline' /></button>
        </div>
      </div>
      <div className="ml-16 my-5">
        <AiTwotoneHome className='inline' /> <AiOutlineDoubleRight className='inline' />
        Workers
      </div>
      <table className="m-auto w-11/12 table-auto border-collapse bg-white">
        <thead>
          <tr>
            <th className="text-2xl font-light text-left">Full name</th>
            <th className="text-2xl font-light text-left">Gender</th>
            <th className="text-2xl font-light text-left">Email</th>
            <th className="text-2xl font-light text-left">Age</th>
            <th className="text-2xl font-light text-left">Cell</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item: any, index: number) => {
            return <tr key={index}>
              <td className={`py-1 pr-3 text-left text-1xl font-light text-blue-500 hover:underline ${index % 2 === 0 ? 'bg-table' : null}`}>{`${item.name.first} ${item.name.last}`}</td>
              <td className={`py-1 pr-3 text-1xl font-light  ${index % 2 === 0 ? 'bg-table' : null}`}>{item.gender}</td>
              <td className={`py-1 pr-3 text-1xl font-light  ${index % 2 === 0 ? 'bg-table' : null}`}>{item.email}</td>
              <td className={`py-1 pr-3 text-1xl font-light  ${index % 2 === 0 ? 'bg-table' : null}`}>{item.dob.age}</td>
              <td className={`py-1 pr-3 text-1xl font-light  ${index % 2 === 0 ? 'bg-table' : null}`}>{item.cell}</td>
              <td className={`py-1 pr-3 text-red-500 cursor-pointer ${index % 2 === 0 ? 'bg-table' : null}`}>Edit <AiTwotoneEdit className="inline" /></td>
              <td className={`py-1 pr-3 text-blue-500 cursor-pointer ${index % 2 === 0 ? 'bg-table' : null}`}>Delete <AiFillDelete className="inline" /></td>
            </tr>
          })}

        </tbody>
      </table>
      <div className="flex justify-around mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-2 rounded">Export to Excel <AiOutlineFileExcel size='1.2rem' className='inline' /></button>
        <div className="flex items-center">
          <ReactPaginate
            nextLabel={<AiOutlineRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel={<AiOutlineLeft />}
            pageClassName="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            previousClassName="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            nextClassName="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            breakLabel="..."
            containerClassName="flex items-center space-x-1"
            activeClassName="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            marginPagesDisplayed={2}
          />
        </div>
      </div>
      {isFilterOpened && <Filter title="Filter" handleCloseFilter={handleCloseFilter} />}
    </div>
  );
};

export default Home;