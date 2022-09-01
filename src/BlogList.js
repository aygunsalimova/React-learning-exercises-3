const BlogList = (blogs) => {
    return ( 
        <div className="blog">
            {blogs.map(blog =>(
                <div className="blog-list" key={blog.id}>
                    <h5>Title: {blog.title}</h5>
                    <p>Body: {blog.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;