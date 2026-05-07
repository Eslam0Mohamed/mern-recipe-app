import React from 'react'

function Home() {
  return (
    <section className='bg-[url(${})] bg-cover h-screen flex items-center justify-center'>
      <div className='left'>
        <h1>Welcome To Our Recipe Food App</h1>
        <p>Join us to explore a world of delicious recipes and culinary inspiration. Whether you're a seasoned chef or just starting your cooking journey, our app offers a wide variety of recipes to suit every taste and skill level. From quick and easy meals to gourmet dishes, you'll find something for every occasion. Start your culinary adventure with us today!</p>
      <button>Share Your Recipe With Us</button>
      </div>
      {/* <div className='right'>
        <img src={""} alt="share your recipe" />
      </div> */}
      <div></div>
    </section>
  )
}

export default Home
