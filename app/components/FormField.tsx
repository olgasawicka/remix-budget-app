interface FormFieldProps {
  innerRef?: React.LegacyRef<HTMLInputElement> | null;
  htmlFor: string;
  label: string;
  type?: string;
  value: any;
  placeholder?: string;
  icon?: any;
  withAutocomplete?: Boolean;
  onIconToggle?: (...args: any) => any;
  onChange?: (...args: any) => any;
}

const FormField = ({
  innerRef,
  htmlFor,
  label,
  type = 'text',
  value,
  placeholder,
  icon,
  withAutocomplete,
  onIconToggle = () => {},
  onChange = () => {},
}: FormFieldProps) => {
  return (
    <div className="w-full mb-5 relative">
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold px-1 text-gray-900"
      >
        {label}
      </label>
      <input
        ref={innerRef}
        onChange={onChange}
        type={icon ? type : 'text'}
        id={htmlFor}
        name={htmlFor}
        className="w-full p-4 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500 text-gray-900"
        value={value}
        placeholder={placeholder}
        autoComplete={withAutocomplete ? 'on' : 'off'}
        required
      />
      <span
        className="inline-block absolute top-1/2 right-4 cursor-pointer"
        onClick={onIconToggle}
      >
        {icon && icon}
      </span>
    </div>
  );
};

export default FormField;
