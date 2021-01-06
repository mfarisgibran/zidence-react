import propertyListings from './data/property-listings.json'

function App() {
  return (
    <div>
      <h1>Zidence React</h1>
      {propertyListings.map((property, index) => {
        if (property.type === 'House') {
          return <div>House Component</div>
        } else if (property.type === 'Apartment') {
          return <div>Apartment Component</div>
        } else if (property.type === 'Lot') {
          return <div>Lot Component</div>
        } else {
          return <div>Unknown Component</div>
        }
      })}
    </div>
  )
}

export default App
