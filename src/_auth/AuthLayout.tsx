import {Outlet, Navigate} from 'react-router-dom'

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated?(
      <Navigate to="/"/>
    ):(<>
    <section className='flex flex-1 justify-center items-center flex-col py-10'>
      <Outlet/>
    </section>
    <img src="/assets/images/side-img.webp" alt="banner" className='hidden xl:block h-screen w-1/2 scale-75 hover:opacity-0 transition-hover duration-500 object-cover bg-no-repeat' />
    </>)}</>
  )
}

export default AuthLayout