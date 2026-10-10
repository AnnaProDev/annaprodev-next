import {ComponentPropsWithoutRef} from "react";
import {buttonStyles, ButtonVariants} from "@/components/Button/button.styles";


type Props = ButtonVariants & ComponentPropsWithoutRef<'button'>

export const Button = ({variant, size, className,...rest}:Props) => {
    return (
        <button className={buttonStyles({ variant, size, className })} {...rest}></button>
    )
}