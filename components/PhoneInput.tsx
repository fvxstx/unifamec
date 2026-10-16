"use client";

import { useState, type InputHTMLAttributes } from "react";

// Formats as (11) 1234-5678 for landlines or (11) 91234-5678 for mobiles
function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type PhoneInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
>;

export default function PhoneInput(props: PhoneInputProps) {
  const [value, setValue] = useState("");

  return (
    <input
      {...props}
      type="tel"
      inputMode="numeric"
      autoComplete="tel-national"
      maxLength={15}
      pattern="\(\d{2}\) \d{4,5}-\d{4}"
      title="Informe um telefone válido, ex.: (11) 91234-5678"
      value={value}
      onChange={(e) => setValue(formatBrazilianPhone(e.target.value))}
    />
  );
}
