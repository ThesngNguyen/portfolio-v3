'use client'

import ButtonEnterAnimation from '@/components/ui/button/button-enter-animation'
import { Flex } from 'antd/lib'
import { useRef, useState } from 'react'
import useNavigateRouteItems from '../hooks/useNavigateButton'

const NavigationButtonRoute = () => {
  const ref = useRef(null)
  const [isHide, setIsHide] = useState(true)
  const items = useNavigateRouteItems();

  setTimeout(() => setIsHide(false), 2000)

  return (
    <Flex ref={ref} className='w-full flex justify-center items-center' justify='center' align='center'>
      {!isHide && (
        <div className='grid grid-cols-2 my-4 lg:flex lg:flex-row gap-4 md:gap-8 md:justify-center text-center'>
          {items.map((item) => (
            <ButtonEnterAnimation 
              key={item?.key}
              buttonLabel={item?.label}
              handleClick={item?.onClick}
              className='text-white'
            />
          ))}
        </div>
      )}
    </Flex>
  )
}

export default NavigationButtonRoute
