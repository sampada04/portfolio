import { HTMLInputTypeAttribute } from "react";

export default function Input({ type, label, name, placeholder, register, error, className }:
  { type?: HTMLInputTypeAttribute, label: string, name: string, placeholder: string, register: any, error?: any, className?: string }) {

  return (
    <div className="flex flex-col mb-4">
      <label className={`text-neutral-700 text-base mb-2`}>{label}</label>
      <input
        type={type ?? "text"}
        {...register(name)}
        placeholder={placeholder}
        className={
          `p-2 border bg-white text-neutral-700 border-gray outline-primary-light rounded-md
          ${error ? "border-danger outline-0 focus-visible:rounded-md" : ''} 
          ${className || ''}`
        }
      />
      {error && <p role="alert" className="text-xs m-0 text-danger">{error}</p>}
    </div>);
}
