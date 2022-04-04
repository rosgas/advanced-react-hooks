import useFetch from "../hooks/useFetch";

function CustomHookExample1() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      {data.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}

export default CustomHookExample1;
