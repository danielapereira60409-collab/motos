import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex  flex-col">

      <div className="flex">
        <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
          <h1>São Paulo</h1>
          <Image
            src="/88.jpg"
            alt="foto"
            width={200}
            height={200}
          />



        </div>
        <div className=" flex border-4 border-white text-center text-white bg-red-500 p-4  w-1/2 m-6 rounded">
          <h1>São Paulo</h1>

          <Image
            src="/sp1.webp"
            alt="foto"
            width={200}
            height={200}

          />
        </div>
        <div className=" flex border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
          <h1>São Paulo</h1>
          <Image
            src="/sp2.avif"
            alt="foto"
            width={200}
            height={200}
          />

        </div>
      </div>

      <div className="flex">
        <div className=" flex border-4 border-white text-center text-white bg-red-500 p-4  w-1/2 m-6 rounded">
          <h1>São Paulo</h1>
          <Image
            src="/sp3.jpg"
            alt="foto"
            width={200}
            height={200}
          />
        </div>

        <div className=" flex border-4 border-white text-center text-white bg-blue-500  w-1/2 m-6 rounded">
          <h1>São Paulo</h1>
          <Image
            src="/sp4.png"
            alt="foto"
            width={200}
            height={200}
          />
        </div>

        <div className=" flex border-4 border-white text-center text-white bg-red-500 p-4  w-1/2 m-6 rounded">
          <h1>São Paulo</h1>
          <Image
            src="/sp5.jfif"
            alt="foto"
            width={200}
            height={200}
          />
        </div>



      </div>

      {/* INICIO MOTOS */}
        <div className="flex">
          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto honda: 10 mil reais</h1>
            <Image
              src="/moto1.jpg"
              alt="foto"
              width={200}
              height={200}
            />
          </div>

          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto yamaha: 20 mil reais</h1>
            <Image
              src="/moto2.jpg"
              alt="foto"
              width={200}
              height={200}
            />
          </div>

          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto BMW: 30 mil reais</h1>
            <Image
              src="/moto3.webp"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
</div>

<div className="flex">
              <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto honda: 10 mil reais</h1>
            <Image
              src="/moto4.jpg"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto yamaha: 8 mil reais</h1>
            <Image
              src="/moto5.jpg"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto BMW: 15 mil reais</h1>
            <Image
              src="/moto6.png"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="flex">
              <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto honda: 10 mil reais</h1>
            <Image
              src="/moto7.webp"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto Yamaha: 7 mil reais</h1>
            <Image
              src="/moto8.png"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto BMW: 40 mil reais</h1>
            <Image
              src="/moto9.webp"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
          <div className="  border-4 border-white text-center text-white bg-blue-500 p-4  w-1/2 m-6 rounded ">
            <h1>Moto Honda: 10 mil reais </h1>
            <Image
              src="/moto10.webp"
              alt="foto"
              width={200}
              height={200}
            />
          </div>
        </div>
       </div>
    

  )
}

