import React from 'react'
import MaxWidthWrapper from '../wrappers/MaxWidthWrapper'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

// card config
const plans = [
  {title: 'Basic', currency: '', price: 'Free', features: ['Feature 1', 'Feature 2', 'Feature 3']},
  {title: 'Credits', currency: '$', price: '1.99', features: ['Feature 1', 'Feature 2', 'Feature 3']},
  {title: 'Premium', currency: '$', price: '9.99', features: ['Feature 1', 'Feature 2', 'Feature 3']},
]

const Pricing = () => {
  return (
    <MaxWidthWrapper className='flex flex-col justify-center mb-5'>
      {/* head */}
      <div className='mb-3 md:mb-4'>
        <div className='font-bold text-purple-700 text-4xl md:text-5xl'>Pricing</div>
        <div className='font-semibold text-lg md:text-lg'>Flexible and transparent pricing</div>
        <div className='text-base'>get the features you want and a price you'll love</div>
      </div>
      {/* card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <Card>
          <CardHeader>
            <div className=''>{plans[0].title}</div>
            <div><span>{plans[0].currency}</span>{plans[0].price}</div>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className='flex w-full'>
            <Button className='mx-auto'>
              get started
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MaxWidthWrapper>
  )
}

export default Pricing