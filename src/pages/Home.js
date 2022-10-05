import BlogList from '../components/BlogList'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const [blogs, isPending, error] = useFetch('http://localhost:8000/blogs')

    return (  
        <div className="home">
            {
                error
                    ? <p>{error.message}</p>
                    : isPending
                    ? <p>Data is in loading stage</p>
                    : blogs && <BlogList blogs={blogs} />

            }
        </div>
    );
}
 
export default Home;