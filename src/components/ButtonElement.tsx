interface Props {
  type: 'submit' | 'reset',
  className?: string,
  label: string
}

export  const ButtonElement = ({type,className,label}: Props) => {
  return (
    <button
      type={type}
      className={`bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4 ${className}`}
    >
      {label}
    </button>
  );
}
