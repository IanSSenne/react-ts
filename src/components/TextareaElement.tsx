type Props = {
  className?: string,
  name: string,
  register?: any
}
export  const TextareaElement = ({className,name,register}: Props) => {
  return (
    <textarea
      ref={register}
      name={name}
      className={`border-gray-400 block py-1 px-3 w-full ${className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
    />
  );
}

