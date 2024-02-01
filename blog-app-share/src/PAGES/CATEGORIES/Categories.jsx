import React from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
    const { categories } = useSelector(state=> state.blog)
  return (
    <section className='categories-main'>
        <div className="container">
<div className="title">
    <label htmlFor="title">Title</label>
    <input 
    type="text"
    name='text'
    id='title'
    required
    />
</div>
<div className="imageUrl">
    <label htmlFor="imageUrl">Image Url</label>
    <input 
    type="url"
    name='imageUrl'
    id='imageUrl'
    required
    />
</div>
<div className="category">
    <label htmlFor="category">Category</label>
    <select name="category" id="category">
        {categories.map(category=> (
            <div key={category.name}>{}</div>
        ))}
    </select>
</div>
        </div>
    </section>
  )
}

export default Categories