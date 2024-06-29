import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isPending,error} = useFetch("http://localhost:8500/blogs") 

  // const [name,setName]=useState("mario")


  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
      
    </div>
  );
}
 
export default Home;