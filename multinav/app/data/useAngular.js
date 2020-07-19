import {useState, useEffect} from 'react';

const angularD = [
  {id: 1, data: 'rxJs'},
  {id: 2, data: 'Ng modules'},
  {id: 3, data: 'ngOninit'},
  {id: 4, data: 'ngOnCheck'},
];

export default useAngular = () => {
  const [angularData, setAngularData] = useState(angularD);

  useEffect(() => {
    console.log('angularData', angularData);
  }, []);

  return {angularData, setAngularData};
};
