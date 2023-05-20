import React, { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: {
    title: string;
    className?: string;
  };
  wrapper?: HTMLAttributes<HTMLDivElement>;
}

const Input = ({ className, wrapper, label, id, ...props }: InputI) => {
  return (
    <div {...wrapper}>
      <label className={"text-sm " + label.className} htmlFor={id}>
        {label.title}
      </label>
      <input
        {...props}
        className={
          "p-2 pl-3 rounded-md border-[3px] border-gray-300 w-full " + className
        }
        id={id}
      />
    </div>
  );
};

export default Input;
