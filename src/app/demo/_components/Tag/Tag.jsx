import { cn } from "@/lib/utils";

export const Tag = ({ children, checked, onChange, ...props }) => {
  return (
    <label
      className={cn(
        "has-[input:checked]:bg-primary w-full text-center has-[input:checked]:border-gray-100 border bg-transparent rounded-[10px] border-[#3F005B] flex items-center justify-center cursor-pointer px-6 py-3 transition",
        props.className
      )}
    >
      <input type="radio" name="tag" hidden checked={checked} onChange={onChange} />
      <span className="text-base text-gray-100">{children}</span>
    </label>
  );
};
