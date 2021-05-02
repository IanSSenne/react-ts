type Props = {
  className?: React.LegacyRef<HTMLInputElement>| undefined,
  name: string
}

export  const InputElement = ({className,name}: Props) => {
  return (
    <input
      type="text"
      name={name}
      className={`border-gray-400 block py-1 ${className} px-3 rounded focus:border-indigo-500 focus:ring-indigo-500 `}
    />
  );
}
