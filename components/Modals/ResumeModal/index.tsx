import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useCallback, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import { useData } from 'utils';

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>,
  isZoomed: boolean
}

export default function ResumeModal({isOpen, setIsOpen, setIsZoomed, isZoomed}:Props) {
  
  
  const {info} = useData()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  //shouldZoom boolean
  //onZoomChange function with shouldZoom as boolean
  const handleZoomChange:(shouldZoom:boolean)=>void = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom)
  }, [])

  const gotolink = () => {
    window.open(info?.resume)
  }



  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 overflow-hidden text-gray-900"
                  >
                    Resume
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="text-sm text-gray-500">
                      <span onClick={gotolink} className='text-blue-500 cursor-pointer no-underline'>Click here</span> to download my resume <b>OR</b> Click on the image to view
                    </div>
                  </div>
                  <div className="mt-4">
                  <Zoom >
                    <img src={info?.resumeImage} width='380' />
                  </Zoom>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
