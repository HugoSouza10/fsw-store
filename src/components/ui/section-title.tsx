import { ComponentProps } from "react";

//Esse componente pega todas as prop do paragrafo
const SectionTitle = ({children, ...props}:ComponentProps<"p">) => {
    return (
        <p className="mb-2 pl-5 font-semibold uppercase"{...props}>
            {children}
        </p>
    )
}

export default SectionTitle;