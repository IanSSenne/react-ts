type Props = {
  id: string,
  name: string;
  className: string,
  register?: any,
  defaultValue?: any,
  data: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export  const SelectElement = ({register, id, name, className, defaultValue, data}: Props) => {
  return (
    <select
      ref={register}
      id={id}
      name={name}
      className={`border-gray-400 block py-1 px-3 ${className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
      onChange={(e) => e.target.value}
      value={defaultValue}
    >
      {data?.length && data.map((item:any, index:any) =>
        <option key={index.toString()} value={item.value}>{item.label}</option>
      )}
    </select>
  );
}
