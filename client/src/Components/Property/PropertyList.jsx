import React from 'react';
import './PropertyList.css';
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');
  const images = [
    'HotelRoom/room1.jpg',
    'HotelRoom/room2.jpg',
    'HotelRoom/room3.jpg',
    'HotelRoom/room4.jpg',
    'HotelRoom/room5.jpg'
  ];

  return (
    <div className="pList">
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <>
          {data &&
            data.map((item, i) => (
              <div className="pListItem" key={i}>
                <img src={images[i]} alt="room" className="pListImg" />
                <div className="pListTitles">
                  <h1>{item.type}</h1>
                  <h2>
                    {item.count} {item.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;


