import BlogCards from "../components/Blogs/BlogCards"

import FeaturedBlog from "../components/Blogs/FeaturedBlog"
import OurBlog from "../components/Blogs/OurBlog"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Blogs = () => {
  return (
    <div>
      <Navbar/>
      <OurBlog/>
      <FeaturedBlog/>
      <BlogCards/>
      
      <Footer/>
    </div>
  )
}

export default Blogs
