import React from 'react'

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [item, setItem] = useState( 
    {
      id: 0,
      title: "Title of this Item 1",
      price: 450,
      discountedPrice: 340,
      thumbnail: "placeholder.png"
    },
  )
  function handleTitle(event){
    setTitle(event.target.value);
  }
  function handlePrice(event){
    setPrice(event.target.value);
  }
  function handleImg(event){
    setImg(event.target.value);
  }
  function handleSubmit(e){
         e.preventDefault();
         console.log({
          title,
          price, 
          img,
        });
        setItem({
          title,
          price, 
          img,
        })
  }
  return (
    <div>
            <form>
        <h1>Form Handle</h1>
        <div className="title-input">
          <label htmlFor="title-input"></label>
          <input type="text" 
          placeholder='Enter title'
          value={title}
          onChange={handleTitle}
      />
        </div>
        <div className="price-input">
          <label htmlFor="price-input"></label>
          <input type="number" 
          placeholder='Enter price'
          value={price}
          onChange={handlePrice}
      />
        </div>
        <div className="img-input">
          <label htmlFor="img-input"></label>
          <input type="text" 
          placeholder='Enter url'
          value={img}
          onChange={handleImg}
      />
        </div>
        <button type='submit' onClick={handleSubmit}>Update</button>
      </form>
    </div>
  )
}

export default Form

