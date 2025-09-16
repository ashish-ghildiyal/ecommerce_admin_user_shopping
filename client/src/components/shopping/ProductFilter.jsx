import React from 'react'
import {filterOptions } from '@/config'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { Separator } from '../ui/separator'

const ProductFilter = () => {
  return (
    <div className="bg-background rounded-lg shadow-sm">
         <div className="p-4 border-b">
            <h2 className="text-lg font-extrabold">Filters</h2>
        </div>  
        <div className="p-4 space-y-4">
            {
              Object.keys(filterOptions).map((keyItem) => {
              return <>
                      <div key={keyItem}>
                        <h3 className="text-base font-bold">{keyItem}</h3>
                        <div className="grid gap-2 mt-2">
                          {
                            filterOptions[keyItem].map((option) => {
                              const { id, label, value } = option
                                return (
                                  <Label key={id} className="flex font-medium items-center gap-2 ">
                                  <Checkbox />
                                  {label}
                                  </Label>
                                  )
                            })
                            }

                            </div>
                        </div>
                        <Separator/>
                    </>
                })

            }
        </div> 
    </div>  
  )
}

export default ProductFilter