import labtop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className=' bg-white  w-full px-4 py-16'>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={labtop} alt='' width={500} className='mx-auto' />
        <div className='flex flex-col justify-center align-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className=' md:text-3xl sm:text-2xl text-xl font-bold py-2 '>
            Manage Data Analytics Centrally
          </h1>
          <p className='font-bold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            quae facilis quis eum provident, laudantium, illum repudiandae
            necessitatibus non beatae itaque voluptate vero aperiam? Delectus
            tenetur quia perspiciatis doloribus eveniet.
          </p>
          <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black hover:bg-orange-500 hover:text-black'>
            get statred
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
