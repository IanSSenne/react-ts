type Props = {
  className?: React.LegacyRef<HTMLInputElement>| undefined,
  name: string;
}
export  const TextareaElement = ({className,name}: Props) => {
  return (
    <textarea
      name="comments"
      className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
    />
  );
}

