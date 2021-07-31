import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="text-center text-white">
      <Image src="/404.svg" width={450} height={450} alt="" />
      <h1>Oopss Halaman Tidak Ada...</h1>
    </div>
  )
}

export default NotFound
