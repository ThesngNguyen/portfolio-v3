'use client'

import ButtonEnterAnimation from '@/components/ui/button/button-enter-animation'
import { Flex } from 'antd/lib'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const NavigationButtonRoute = () => {
  const ref = useRef(null)
  const [isHide, setIsHide] = useState(true)

  setTimeout(() => setIsHide(false), 2000)

  return (
    <Flex ref={ref} className='w-full' justify='center' align='center'>
      {!isHide && (
        <div className='grid grid-cols-2 md:flex md:flex-row gap-4 justify-center text-center'>
          <ButtonEnterAnimation 
            buttonName='About'
            className='text-white'
          />
          <ButtonEnterAnimation 
            buttonName='Project'
            className='text-white'
          />
          <ButtonEnterAnimation 
            buttonName='Social'
            className='text-white'
          />
          <ButtonEnterAnimation 
            buttonName='Blog'
            className='text-white'
          /> 
        </div>
      )}
    </Flex>
  )
}

export default NavigationButtonRoute
