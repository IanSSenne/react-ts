import { useFormContext } from "react-hook-form";

interface Props {
  className: string,
  name: string,
}

export  const InputElement = (props: Props) => {
  const {register} = useFormContext();
  return (
    <input
      {...register(props.name)}
      type="text"
      name={props.name}
      className={`border-gray-400 block py-1 ${props.className} px-3 rounded focus:border-indigo-500 focus:ring-indigo-500 `}
    />
  );
}
