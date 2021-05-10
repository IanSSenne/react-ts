import { useFormContext } from "react-hook-form";

interface Props {
  className?: string,
  name: string,
}

export  const TextareaElement = (props: Props) => {
  const {register} = useFormContext();
  return (
    <textarea
      {...register(props.name)}
      name={props.name}
      className={`border-gray-400 block py-1 px-3 w-full ${props.className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
    />
  );
}

