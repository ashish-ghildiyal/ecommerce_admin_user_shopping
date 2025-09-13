import React from 'react'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, 
SelectTrigger, SelectValue , SelectItem} from '../ui/select'
import { Button } from '../ui/button'

const types = {
    Input: "input",
    Textarea: "textarea",
    Select: "select"
}

const CommonForm = ({formControls, formData, setFormData, ButtonText, onSubmit}) => {
    const renderInputType=(getControlItem)=>{
        let element =null;
        let value = formData[getControlItem.name];
        const changeHandler =(e)=>{
            setFormData({...formData, [getControlItem.name]:e.target.value})
        }
        switch(getControlItem.componentType){
            case types.Input:
                element = <Input 
                id= {getControlItem.name}
                name={getControlItem.name}
                type={getControlItem.type}
                placeholder={getControlItem.placeholder} 
                value={value}
                onChange={changeHandler}
                />
                break;
            case types.Textarea:
                element = <Textarea 
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder} 
                value={value}
                onChange={changeHandler}
                />
                break;
             case types.Select:
                element = <Select value={value} 
                 onValueChange={(selectedValue) =>
                 setFormData({ ...formData, [getControlItem.name]: selectedValue })
                 }>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder={getControlItem.label} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.options &&
                            getControlItem.options.length > 0 ?
                            getControlItem.options.map((option)=>(
                            <SelectItem key={option.value} 
                            value={option.value}>{option.label}</SelectItem>))
                            : null
                        }
                    </SelectContent>
                </Select>
                break;    
            default:
                element = (<Input 
                id= {getControlItem.name}
                name={getControlItem.name}
                type={getControlItem.type}
                placeholder={getControlItem.placeholder} 
                 value={value}
                onChange={changeHandler}
                />)
                break
        }
        return element

    }
  return (
    <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
            {
                formControls.map((controlItem)=><div className='grid w-full gap-1.5' key={controlItem.name}> 
                
                <Label className='mb-1'>{controlItem.label}</Label>
                {
                    renderInputType(controlItem)
                }
                
                </div>
                )
            }

        </div>
        <Button  className='mt-4' type='submit'>{ ButtonText || "Submit"}</Button>
    </form>
  )
}

export default CommonForm