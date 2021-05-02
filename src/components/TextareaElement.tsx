import { useFormContext } from "react-hook-form";
const { register } = useFormContext(); // retrieve all hook methods
type Props = {
  className?: string,
  name: string,
  register: React.MutableRefObject<HTMLInputElement | null>,
}

export  const TextareaElement : React.FC<Props> = ({className,name}, register) => {
  

  return (
    <textarea
      ref={register}
      name={name}
      className={`border-gray-400 block py-1 px-3 w-full ${className} rounded focus:border-indigo-500 focus:ring-indigo-500`}

    />
  );
}

