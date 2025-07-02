import React, { forwardRef, useState, useRef, useEffect, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'

function SelectComponent({ options,
    labels,
    icon,
    className = '',
    selectClassName = '',
    placeholder = 'Select an option',
    optionClassName = '',
    dropdownClassName = '',
    ...props
}, ref) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')
    const [selectedLabel, setSelectedLabel] = useState('')
    const wrapperRef = useRef(null)
    const id = useId()

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [wrapperRef])

    const handleSelect = (value, label) => {
        setSelectedValue(value)
        setSelectedLabel(label)
        setIsOpen(false)

        if (props.onChange) {
            props.onChange({ target: { value } })
        }
    }

    return (
        <div
            ref={wrapperRef}
            className={twMerge("relative bg-[#232323] rounded-md flex items-center gap-3 p-3 w-full max-w-md", className)}
        >
            {icon && (
                <label htmlFor={id}>
                    {icon}
                </label>
            )}

            <input
                type="hidden"
                id={id}
                ref={ref}
                value={selectedValue}
                name={props.name}
            />

            <div
                className={twMerge(
                    "outline-none text-gray-200 w-full flex items-center justify-between cursor-pointer",
                    selectClassName
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedLabel || placeholder}</span>
                <ChevronDown
                    size={20}
                    className={twMerge(
                        "text-gray-400 transition-transform duration-200",
                        isOpen ? "rotate-180" : ""
                    )}
                />
            </div>

            {isOpen && (
                <div className={twMerge(
                    "absolute left-0 right-0 top-full mt-1 z-10 bg-[#333] border border-[#444] rounded-md shadow-lg max-h-60 overflow-y-auto",
                    dropdownClassName
                )}>
                    {options.map((option, index) => (
                        <div
                            key={option}
                            className={twMerge(
                                "px-4 py-2 hover:bg-[#444] cursor-pointer text-gray-200",
                                option === selectedValue ? "bg-[#555]" : "",
                                optionClassName
                            )}
                            onClick={() => handleSelect(option, labels ? labels[index] : option)}
                        >
                            {labels ? labels[index] : option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default forwardRef(SelectComponent)