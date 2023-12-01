import React from 'react'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

export default function Img() {
    return (
      <>
        <h1 className='text-3xl font-normal mb-1.5'>{user.name}</h1>
        <img 
          className="avatar rounded-full "
          src={user.imageUrl }
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
