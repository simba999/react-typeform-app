import React from 'react';


const Exclusions = props => {
  const {
    exclusion1,
    exclusion2,
    exclusion3,
    exclusion4,
    exclusion5,
    exclusion6,
    exclusion7,
    exclusion8,
    exclusion9,
    exclusion10,
    exclusion11,
    exclusion12,
    exclusion13,
    exclusion14,
    exclusion15
  } = props.props;

  return (
    <div style={{ width: '100%', marginRight: 0 }}>
      <h3>
        Exlcusions
      </h3>
      <div style ={{marginLeft:'1em'}}>
        <p>{exclusion1 != '' ? exclusion1 : ''} </p>
        <p>{exclusion2 != '' ? exclusion2 : ''} </p>
        <p>{exclusion3 != '' ? exclusion3 : ''} </p>
        <p>{exclusion4 != '' ? exclusion4 : ''} </p>
        <p>{exclusion5 != '' ? exclusion5 : ''} </p>
        <p>{exclusion6 != '' ? exclusion6 : ''} </p>
        <p>{exclusion7 != '' ? exclusion7 : ''} </p>
        <p>{exclusion8 != '' ? exclusion8 : ''} </p>
        <p>{exclusion9 != '' ? exclusion9 : ''} </p>
        <p>{exclusion10 != '' ? exclusion10 : ''} </p>
        <p>{exclusion11 != '' ? exclusion11 : ''} </p>
        <p>{exclusion12 != '' ? exclusion12 : ''} </p>
        <p>{exclusion13 != '' ? exclusion13 : ''} </p>
        <p>{exclusion14 != '' ? exclusion14 : ''} </p>
        <p>{exclusion15 != '' ? exclusion15 : ''} </p>
      </div>
    </div>
  );
};

export default Exclusions;
