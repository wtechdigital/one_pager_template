import Image from 'next/image'
import Aviator from '@/images/aviator.webp'
import Slot2 from '@/images/1.webp'

  export default function Slots() {

    const Slots = [
        {
          slotTitle: 'Aviator (Авиатор) Игровой Автомат',
          imageUrl: Aviator, // Make sure Aviator is a valid image path or imported image
          imageAlt: 'Описание игрового автомата Aviator' // Add an alt description for the image
        },
        {
            slotTitle: 'Bonanza',
            imageUrl: Slot2, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Описание игрового автомата Aviator' // Add an alt description for the image
          },
        {
            slotTitle: 'Aviator (Авиатор) Игровой Автомат',
            imageUrl: Aviator, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Описание игрового автомата Aviator' // Add an alt description for the image
        },
        {
            slotTitle: 'Aviator (Авиатор) Игровой Автомат',
            imageUrl: Aviator, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Описание игрового автомата Aviator' // Add an alt description for the image
        },
      ];

    return (
    <div className="bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Лучшие игровые автоматы Олимп Казино</h2>
            <p className="mt-6">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                egestas fringilla sapien.
            </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-10">
                    {Slots.map((slot, index) => (
                        <div key={index} className="relative group cursor-pointer overflow-hidden">
                        <Image
                            className="rounded-xl w-full h-full transition duration-300 ease-in-out"
                            src={slot.imageUrl}
                            alt={slot.imageAlt}
                        />
                        <div className="rounded-xl absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <div className="text-center">
                            <p className="text-white font-semibold text-lg mb-4 transition-opacity duration-300">{slot.slotTitle}</p>
                            <button
                                type="button"
                                className="rounded-full bg-rose-600 hover:bg-rose-500 px-8 py-2 text-center me-1 mb-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                            >
                                Играть
                            </button>
                            <button
                                type="button"
                                className="rounded-full text-white hover:text-rose-200 border border-white hover:border-rose-200 font-small text-sm px-4 py-2 text-center me-1 "
                            >
                                Подробнее
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                 </div>
        
        </div>
  </div>
    )
  }