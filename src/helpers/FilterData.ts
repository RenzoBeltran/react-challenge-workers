const filterData = (data: any, query: any) => {

  let filteredData = data;
  if (query.get('name')) {
    filteredData = filteredData?.filter((element: any) => `${element.name.first} ${element.name.last}` === query.get('name'));
  }
  if (query.get('gender')) {
    filteredData = filteredData?.filter((element: any) => element.gender === query.get('gender'));
  }
  if (query.get('age')) {
    filteredData = filteredData?.filter((element: any) => element.dob.age.toString() === query.get('age'));
  }
  return filteredData;
}

export default filterData;