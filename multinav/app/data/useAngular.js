import {useState} from 'react';

const angularD = [
  {id: 1, data: 'rxJs'},
  {id: 2, data: 'Ng modules'},
  {id: 3, data: 'ngOninit'},
  {id: 4, data: 'ngOnCheck'},
];

export default useAngular = () => {
  const [angularData, setAngularData] = useState(angularD);

  return {angularData, setAngularData};
};
