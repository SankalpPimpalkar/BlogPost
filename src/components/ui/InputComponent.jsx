import { forwardRef, useId } from "react"
import { twMerge } from "tailwind-merge"

function InputComponent({
    icon,
    name,
    type = "text",
    InputClassName = "",
    GlobalClassName = "",
    placeholder = "",
    ...props
}, ref) {

    const id = useId()

    return (
        <div className={twMerge("bg-[#101010] border border-[#232323] rounded-md flex items-center gap-3 px-3 py-2.5 w-full max-w-md", GlobalClassName)}>
            <label htmlFor={id}>
                {/* size={24} className="stroke-[1.5] text-gray-300" */}
                {icon}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                ref={ref}
                placeholder={placeholder}
                className={twMerge("outline-none text-sm text-gray-200 w-full", InputClassName)}
                {...props}
            />
        </div>
    )
}

export default forwardRef(InputComponent)