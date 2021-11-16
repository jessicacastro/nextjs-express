import { useState } from  'react'
import { useRouter } from 'next/router';

const Post = ({data}) => {
  const router = useRouter();
  return(
    <div>
      <h2>Notícia Post</h2>
      <p>{router.query.slug}</p>
      <h3>{ data.title }</h3>
      <p>{data.body}</p>
    </div>
  )
}

/**
 * Before page render, we get the response from the server!
 * @returns data on props
 */
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
  return { props: { data }};
}



// basic fetch, after page render
// Post.getInitialProps = async (ctx) => {
//   console.log(ctx.query.slug);
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   const json = await response.json();

//   return { props: json }
// }

export default Post;