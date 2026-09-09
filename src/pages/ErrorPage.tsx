import { Link } from 'react-router-dom'

const ErrorPage = () => {
 return (
   <section className='flex w-full h-[100vh] items-center justify-center'>
    <div className="flex flex-col gap-3 items-center">
      <h2 className='text-2xl font-semibold'>Oops... There is no page here yet.</h2>
      <Link to='/' className='theme_background text-white py-3 px-5 mt-5 rounded-sm'>Back to Home Page</Link>
    </div>
   </section>
  )
}

export default ErrorPage
