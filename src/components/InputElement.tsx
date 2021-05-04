type Props = {
  className: any,
  name: any,
  register?: any,
}

export  const InputElement = ({register, name, className}: Props) => {

  return (
    <input
      ref={register}
      type="text"
      name={name}
      className={`border-gray-400 block py-1 ${className} px-3 rounded focus:border-indigo-500 focus:ring-indigo-500 `}
    />
  );
}
