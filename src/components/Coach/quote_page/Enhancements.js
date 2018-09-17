import React from 'react';


const Enhancements = props => {
  const {
    enhance1,
    enhance2,
    enhance3,
    enhance4,
    enhance5,
    enhance6,
    enhance7,
    enhance8,
    enhance9,
    enhance10,
    enhance11,
    enhance12,
    enhance13,
    enhance14,
    enhance15
  } = props.props;

  return (
    <div style={{ width: '100%', marginRight: 0 }}>
       <h3>Enhancements</h3>

      <div style ={{marginLeft:'1em'}}>

        <p>
          {enhance1 != '' ? enhance1 : ''}
        </p>
        <p>
          {enhance2 != '' ? enhance2 : ''}
        </p>
        <p>
          {enhance3 != '' ? enhance3 : ''}
        </p>
        <p>
          {enhance4 != '' ? enhance4 : ''}
        </p>
        <p>
          {enhance5 != '' ? enhance5 : ''}
        </p>
        <p>
          {enhance6 != '' ? enhance6 : ''}
        </p>
        <p>
          {enhance7 != '' ? enhance7 : ''}
        </p>
        <p>
          {enhance8 != '' ? enhance8 : ''}
        </p>
        <p>
          {enhance9 != '' ? enhance9 : ''}
        </p>
        <p>
          {enhance10 != '' ? enhance10 : ''}
        </p>
        <p>
          {enhance11 != '' ? enhance11 : ''}
        </p>
        <p>
          {enhance12 != '' ? enhance12 : ''}
        </p>
        <p>
          {enhance13 != '' ? enhance13 : ''}
        </p>
        <p>
          {enhance14 != '' ? enhance14 : ''}
        </p>
        <p>
          {enhance15 != '' ? enhance15 : ''}
        </p>
        </div>

    </div>
  );
};

export default Enhancements;
