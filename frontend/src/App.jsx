import './App.css'
import PlayVideo from './PlayVideo';
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'
import Product from './VideoThumnail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoList from './VideoList';


function App() {
 

  const router = createBrowserRouter([
    {
      path: "/play-video",
      element: <PlayVideo></PlayVideo>
    },
    {
      path: "/",
      element: <VideoList></VideoList>
    }

  ])
 

  return (
    // <>

    //   <div className="products-container">
    //   {videos?.map((product) => <Product key={product._id} product={product} />)}
    // </div>
    // </>

    <>
    <div className="App">
      
     <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
