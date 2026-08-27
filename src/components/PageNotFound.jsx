const PageNotFound = () => {
  return (
    <div className='w-full h-[calc(100vh-12rem)] flex flex-col gap-10 items-center justify-center'>
      <h1 className='text-4xl text-dark dark:text-light font-bold'>404 | Page Not Found</h1>
      <button onClick={() => window.location.href = '/'} className='mt-4 px-4 py-2 bg-[#fe5a10] text-white rounded'>
        Back to Home
      </button>
    </div>
  )
}

export default PageNotFound