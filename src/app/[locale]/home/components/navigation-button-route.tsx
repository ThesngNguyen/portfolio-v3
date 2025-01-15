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
    <Flex ref={ref} className='w-full' justify='center' align='center'>
      {!isHide && (
        <div className='grid grid-cols-2 md:flex md:flex-row gap-8 justify-center text-center'>
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
