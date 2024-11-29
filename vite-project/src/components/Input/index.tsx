import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer, InputField, Label } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: 'text' | 'email' | 'password' | 'tel' | 'number' | 'textarea';
    register: UseFormRegisterReturn;
}

export function Input({ label, type, register, ...rest }: InputProps) {
    return (
        <InputContainer>
            <Label htmlFor={register.name}>{label}</Label>
            {type === "textarea" ? (
                <InputField 
                    as="textarea" 
                    id={register.name} 
                    {...rest} 
                    {...register} 
                />
            ) : (
                <InputField 
                    type={type} 
                    id={register.name} 
                    {...rest} 
                    {...register}
                />
            )}
        </InputContainer>
    );
}
