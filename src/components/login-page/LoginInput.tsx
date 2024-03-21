interface LoginInputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ type, id, name, placeholder }) => (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    // value={value}
    // onChange={onChange}
    className="w-full bg-gray-100 rounded mb-3 p-3 text-lg"
  />
);

export default LoginInput;
