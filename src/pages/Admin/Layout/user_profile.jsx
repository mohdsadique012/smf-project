import React,{useState,useEffect} from "react";

import Footer from "../../../layout/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Divider from "../../../component/Divider/Divider";
import Slider from "react-slick";
import BestSelling from "../../../component/Card/BestSelling";
import Col from "react-bootstrap/Col";
import "./user_profile.css";

export default function UserProfile() {
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  const bestSelling = [
    { icon: "official/Best_Selling_Gifts/1.png", title: "Birthday Gift" },
    { icon: "official/Best_Selling_Gifts/2.png", title: "Annivesary Gift" },
    { icon: "official/Best_Selling_Gifts/3.png", title: "Flowers Gift" },
    { icon: "official/Best_Selling_Gifts/4.png", title: "Cakes Gift" },
    { icon: "official/Best_Selling_Gifts/1.png", title: "Birthday Gift" },
    { icon: "official/Best_Selling_Gifts/2.png", title: "Annivesary Gift" },
    { icon: "official/Best_Selling_Gifts/3.png", title: "Flowers Gift" },
    { icon: "official/Best_Selling_Gifts/4.png", title: "Cakes Gift" },
  ];
  const settingsBestSelling = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };
  
  const settingVertical = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    vertical: true,
  };

const profileid = {name:"Jhon deo", 
email:"jhondeo@gmail.com"} 

const [input,setInput]=useState({
email:"",
password:"",
country:"",
mobile:"",
alternate:"",
dateofbirth:'',
unsuscribe:"",

});

const handlechangeemail=(e)=>{
setInput({...input,name: e.target.value})
}

const handlechangepassword=(e)=>{
setInput({...input,password: e.target.value})
}
const handlechangecountry = (e)=>{
setInput({...input,country: e.target.value})
}
const handlechangemobile =(e)=>{
setInput({...input,mobile: e.target.value})
}
const handlechangealternatenumber =(e)=>{
setInput({...input,alternate: e.target.value})
}
const handlechangebirth=(e)=>{
setInput({...input,datefbirth: e.target.value})

}

const [changevalue, setChangevalue]= useState()
const handleclick = ()=>{
setChangevalue(input)
}
  return (
    <>
    
      <div className='positonrelative' >
        <img className='profile-img' src='https://t4.ftcdn.net/jpg/03/90/00/43/360_F_390004324_7eTC29X2BExl0242yFOiY7RdWJqVWyaT.jpg' alt=''/>
        <div className='profile-flex position '>
            <div className='profile-firstletter'>
                 <p className='profileletter' >J</p>
            </div>
            <div className='profile-info profile-flex'>
                 <div className=''>
                     <span className='profile-color'>{profileid.name}</span><br/>
                     <span className='profile-color'>{profileid.email}</span>
                  </div>
                 <div>
                    <i className="fa fa-pencil profile-color profile-icon-size" aria-hidden="true"></i>  
                 </div>
            </div>
        </div>
      </div>



     <div className='profile-flex profilemargintop'>
             <div className='profile-check profile-flex-coloumn' >
                 <span className=' boder-color'>Go Quickly to:</span>
                 <span className='color'> My Profile</span>
                 <span className='color'> MY Orders</span> 
                 <span className='color'> My Address Book</span> 
                 <span className='color'> Track Oder</span> 
             </div>
             <div className='profile-flex-coloumn width'>
                 <span className='bodercl'>Contact Information</span>
                 <div className='profile-flex' >
                      
                      <div className='profile-flex-coloumn widthe'>
                         <span className='border-line'  >Email Address :<input className='profile-input email' type="email" placeholder="Enter email Address" onChange={handlechangeemail}  /></span>
                      
                     
                          <span className='border-line'>Enter Old Password:<input className='profile-input password' type="text" placeholder="Enter old password" onChange={handlechangepassword}/></span>
                     
                     
                          <span className='border-line'>Country:<input className='profile-input country' type="text" placeholder="Country" onChange={handlechangecountry} /></span>
                      
                    
                          <span className='border-line'>Mobile: <input className='profile-input mobile' type="number" placeholder="Mobile number" onChange={handlechangemobile} /></span>
                   
                   
                          <span className='border-line'>Alternate Mobile:<input className='profile-input alternate' type="number" placeholder="Mobile number" onChange={handlechangealternatenumber} /></span>
                  
                      
                          <span className='border-line'>Date OF Birth:<input className=' date'  type="date"  onChange={handlechangebirth}/></span>
                    
                   
                          <span className='boderuns'>Unsuscribe:<input  className='profile-input unsuscribe' type="checkbox" /></span>
                          <button className='profile-button' onClick={handleclick}>Save Change</button>
                        </div>
                     </div>

             </div>
      </div>
     
      <Divider content="Customer Stories and Reviews" />
      <div className="row customer-cards">
        <Slider {...settingsBestSelling} >
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="customer-card-section">
              <div className="left-card">
                <div className="card-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="left-card-img">
                  <img src="official/Combos/1.png" alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="">
                  <p className="red-mark-statement">
                    Please Update your tracking system, otherwise happy with the
                    service.
                  </p>
                  <p className="personName">Priya a</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <h6 className={"customer_cards_rating_heading"}>
          (Rated 4.6/5 based on 22497 ratings)
        </h6>
      </div>



      <Divider content="Recently Viewed Products" />

      {/* <Container>
                <Slider {...settings2}>
                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Special Festive Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                </Slider>

            </Container> */}
      <div style={{ marginBottom: "3%" }}>
        <Slider  {...settingsBestSelling}>
          {bestSelling.map((el, key) => (
            <Col
              key={key}
              className="home-card-layout"
              xs={12}
              sm={6}
              lg={4}
              xl={3}
            >
              <BestSelling
                source={el.icon}
                cardContent={"Product details here........"}
                cardClass="auto-height-cust"
                showContent={true}
                value="200"
              />
            </Col>
          ))}
        </Slider>
      </div>
    
   <Footer />
    </>
  );
}
