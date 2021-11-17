import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
interface ICard {
  currentWorker: any
}

const Index: React.FC<ICard> = ({ currentWorker }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={currentWorker?.picture.large} alt="worker" />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{`${currentWorker?.name?.first} ${currentWorker?.name?.last}`}</h2>
          <p className="mt-2 text-gray-600">Gender: {currentWorker?.gender}</p>
          <p className="mt-2 text-gray-600">Location: {`${currentWorker?.location.street} ${currentWorker?.location.city} ${currentWorker?.location.state} ${currentWorker?.location.postcode}`}</p>
          <p className="mt-2 text-gray-600">Country: {currentWorker?.location.timezone?.description}</p>
          <p className="mt-2 text-gray-600">Birthday: {currentWorker?.dob.date}</p>
          <p className="mt-2 text-gray-600">Age: {currentWorker?.dob.age}</p>
          <p className="mt-2 text-gray-600">Cell: {currentWorker?.cell}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <AiOutlineArrowLeft className="text-2xl hover:text-indigo-500 cursor-pointer" onClick={goBack} />
          <p className="text-xl font-medium text-indigo-500">{currentWorker?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;