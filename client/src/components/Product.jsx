import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Four04 from '../pages/Four04/Four04';
import { axiosInstance } from '../pages/utils/axiosInstance';

const Product = () => {
    const { id } = useParams();
    // console.log(id)
   const [singleProduct, setSingleProduct] = useState(null);
   useEffect(() => {
            
    //    setSingleProduct(response.data);
     
     const  getSingleProduct= async() => {
        // const response = await fetch(`http://localhost:8000/iphones/${id}`);
        // const data = await response.json();
        // // console.log(data?.products);
        // setSingleProduct(data?.products)
      const response = await axiosInstance(`iphones/${id}`);
      setSingleProduct(response.data);
     }
     getSingleProduct();
   }, []);

   if (singleProduct) {
     return (
       <div>
         <section className="internal-page-wrapper">
           <div className="container">
             <div className="row justify-content-center text-center">
               <div className="col-12 mt-5 pt-5">
                 <div className="title-wraper font-weight-bold">
                   {singleProduct?.product_name}
                 </div>
                 <div className="brief-description">
                   {singleProduct?.Product_brief_description}
                 </div>
               </div>
             </div>

             <div className="row justify-content-center text-center product-holder h-100 m-5">
               <div className={`col-sm-12 col-md-6 my-auto`}>
                 <div className="starting-price">
                   {`Starting at ${singleProduct?.Starting_price}`}
                 </div>
                 <div className="monthly-price">
                   {singleProduct?.Price_range}
                 </div>
                 <div className="product-details">
                   {singleProduct?.Product_description}
                 </div>
               </div>

               <div className={`col-sm-12 col-md-6`}>
                 <div className="prodict-image">
                   <img src={singleProduct?.Product_img} alt="product" />
                 </div>
               </div>
             </div>
           </div>
         </section>
       </div>
     );
   } else {
     return <Four04 />;
   }
}



export default Product;