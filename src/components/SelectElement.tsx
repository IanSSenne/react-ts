import { useFormContext } from "react-hook-form";

export interface SelectItem {
  value: number | string;
  label: string | number;
}

export interface ValueItem {
  value: number | string;
  label: string;
}

interface Props {
  id: string;
  name: string;
  className: string;
  defaultValue: string | number | readonly string[] | undefined;
  data: SelectItem[];
  onChange?: (e: string | number) => void;
}

export const SelectElement = (props: Props) => {
  const { register } = useFormContext();
  return (
    <select
      {...register(props.name)}
      id={props.id}
      name={props.name}
      className={`border-gray-400 block py-1 px-3 ${props.className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
      onChange={(e) => {
        props?.onChange && props.onChange(e.target.value);
      }}
      value={props.defaultValue}
    >
      {props.data?.length &&
        props.data.map((item: SelectItem) => (
          <option key={item.value.toString()} value={item.value}>
            {item.label}
          </option>
        ))}
    </select>
  );
};
