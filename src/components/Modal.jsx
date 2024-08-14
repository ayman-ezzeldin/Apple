import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModalView from "./ModalView"
import { useRef, useState } from "react"
import { yellowImg } from "../utils"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import { models, sizes } from "../constants"

const Modal = () => {
  const [size ,setSize] =useState('small')
  const [modal, setModal] = useState({
    title : 'iPhone 15 Pro in Natural Titanium',
    color : ['#8F8A81','#ffe7b9','#6f6c64'],
    img : yellowImg
  })
  // we make it for Camera control
  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()
  // we make it for Modal control
  const small = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())
  // we make it for Modal rotation
  const [smallRotaion, setSmallRotaion] = useState(0)
  const [largeRotaion, setLargeRotaion] = useState(0)
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    },[])
  })
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModalView
              index={1}
              groupRef={small}
              gsapType='view1'
              setRotaionState={setSmallRotaion}
              controlRef={cameraControlSmall}
              item={modal}
              size={size}
            />
            <ModalView
              index={2}
              groupRef={large}
              gsapType='view1'
              setRotaionState={setLargeRotaion}
              controlRef={cameraControlLarge}
              item={modal}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position : 'fixed',
                inset : 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-center text-sm font-light mb-5">{modal.title}</p>
            <div className="flex-center">
              <ul className="color-container" >
                {models.map((item,i) => (
                  <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{
                    backgroundColor : item.color[0] }}
                    onClick={()=> setModal(item) }
                    />
                ))}
              </ul>
              <button className="size-btn-container" >
                {sizes.map(({label, value}) => (
                  <span key={label} className="size-btn"
                  style={{
                    backgroundColor : size === value ? 'white' : 'transparent',
                    color : size === value ? 'black' : 'white'
                  }}
                  onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal