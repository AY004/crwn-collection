import './category.scss'
const CategoryItem = ({category}) => {

    const {imageUrl,title} = category;
    return (
        <div className="category-container">

         <div className="background-img" style={{
             backgroundimg: `Url(${imageUrl})`
         }
           
         }/>
         <div className="category-body-container">
 
           <h2>{title}</h2>
           <p>shop now</p>
 
         </div>
 
       </div>

    )

}

export default CategoryItem;