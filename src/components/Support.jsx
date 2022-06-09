import React from "react";
import {
  PhoneIcon,
  ArrowSmRightIcon
} from '@heroicons/react/outline'

import {
  ChipIcon, SupportIcon
} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {

  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/50 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/"></img>
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 class>Support</h2>
          <h3>Finding the right team</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis excepturi inventore repellat itaque veritatis nam enim fugit qui saepe.</p>
        </div>
        <div>
          <div>
            <div>
              <PhoneIcon />
              <h3>Sales</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus asperiores et iste animi reiciendis expedita earum, voluptatum error quidem.</p>
            </div>
            <div>
              <p>Contact us <ArrowSmRightIcon /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support