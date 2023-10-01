export default function TextInput({
  label,
  disabled = false,
  placeholder,
  type = 'text',
  value,
}: {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  value?: string;
}) {
  return (
    <div className={`flex flex-col place-items-start w-full`}>
      <label className="font-medium mb-2 text-white">{label}</label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        readOnly={disabled}
        value={value}
        className={`text-base w-full box-border p-3 rounded-lg border-[1px] placeholder:text-void-300 placeholder:font-light text-void-200 ${
          disabled
            ? 'bg-void-900/75 border-void-700'
            : 'bg-void-900 border-void-500'
        }`}
      />
    </div>
  );
}
