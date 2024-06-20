import Image from "next/image"

export default function CustomAuthTextField(props: CustomAuthTextFieldInterface) {
    return (
        <div className="flex flex-col w-full">
            <p className="font-extrabold text-custom-text-blue mt-1">
                {props.title}
            </p>
            <div className="flex relative items-center">
                <input
                    className="w-full pl-12 shadow border border-custom-text-blue rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`${props.id}`}
                    type="text"

                    placeholder={`${props.label}`}
                    required={props.required}
                />
                <Image
                    src={props.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    className="absolute left-4 "
                />
            </div>
        </div>
    )
}