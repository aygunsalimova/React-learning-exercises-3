import BlogList from '../components/BlogList'
import useFetch from '../hooks/useFetch'

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