const tabletListHeader = [
  'Area',
  'City',
  'Description',
  'Availability(Person)',
  'Available Date',
  'Contact person',
  'Mobile Number',

];

function ListView({ data, loading }) {
  if (data.length === 0) {
    return <p>no data</p>
  }
  return (
    <div className="body_list">
      <table className="table table-striped">
        <thead>
          <tr>
          {tabletListHeader.map((thContent) => {
            return (
              <th key={thContent} scope="col">
                {thContent}
              </th>
            );
          })}
        </tr> 
        
        </thead>
        <tbody>
          {data.map((datum) => (
            <tr key={datum.area}>
              <td>{datum.area}</td>
              <td>{datum.city}</td>
              <td>{datum.description}</td>
              <td>{datum.quantity}</td>
              <td>{datum.date}</td>
              <td>{datum.name}</td>
              <td>{datum.number}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListView;