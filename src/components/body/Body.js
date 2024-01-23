import React from 'react';
import { useContext} from 'react';
import UserContext from '../../Usercontext';
import ListView from '../table/views/list-view';
import SearchInput from '../table/search-input';
import './Body.css';
import '../table/table.css';
import ProvideFood from '../table/views/provide-food';

function Body() {
  const {data, fetchData, setData} = useContext(UserContext);

  const onChange = (value) => {
    if (!value.length) {
      fetchData();
    } else {
      setData(data.filter((datum) => datum.area.toLowerCase().includes(value.toLowerCase())));
    }
  };

  return (
    <div className="body_container">
      <div className="body_srch">
        <SearchInput onChange={onChange} />
        <ProvideFood/>
      </div>
      <div className="table-container">
         <ListView data={data} /> 
      </div>
    </div>
  );
}

export default Body;
