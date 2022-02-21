import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <div className='info'>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`averageWeight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
        <div className='image'>
          <img src={image} alt="Imagem do Pokemon"/>
        </div>
      </div>
    )
  }
}

export default Pokemon;
