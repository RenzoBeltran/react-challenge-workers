import Card from '../components/Card'
import jsonData from '../data.json';
import {
  useParams
} from "react-router-dom";

const WorkerDetail = () => {
  const data = jsonData.results;
  const { id } = useParams();
  const currentWorker = data?.filter((worker: any) => id === `${worker.name.first} ${worker.name.last}`)[0]

  return (
    <Card currentWorker={currentWorker} />
  );
};

export default WorkerDetail;