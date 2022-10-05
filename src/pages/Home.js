import BlogList from '../BlogList'
// import PhotoList from '../PhotoList'
import useFetch from '../useFetch'


const Home = () => {
    const [blogs, isPending, error] = useFetch('http://localhost:8000/blogs')

    return (  
        <div className="home">
            {/* {photos && <PhotoList photos={photos}/>} */}
            {blogs && <BlogList blogs={blogs} />}
        </div>

    );
}
 
export default Home;