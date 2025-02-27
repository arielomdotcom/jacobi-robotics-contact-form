import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useRef, useState } from "react";
import WorldFlag from "react-world-flags";

const PhoneNumberInput: React.FC = () => {
  const countryOptions = [
    { code: "+880", flag: "CA", name: "Canada" },
    { code: "+1", flag: "US", name: "United States" },
    { code: "+34", flag: "ES", name: "Spain" },
    { code: "+91", flag: "IN", name: "India" },
  ];

  const [countryCode, setCountryCode] = useState<string>(
    countryOptions[0].code
  );

  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (value: string) => {
    setCountryCode(value);
    setTimeout(() => {
      if (phoneInputRef.current) {
        phoneInputRef.current.focus();
      }
    }, 100);
  };

  return (
    <div className="flex w-full col-span-1 md:col-span-2 items-center border border-gray-300 rounded-md">
      <div className="flex-shrink-0 flex items-center">
        <Select value={countryCode} onValueChange={handleChange}>
          <SelectTrigger
            className="py-6 border-0 bg-transparent flex items-center rounded-none rounded-l"
            aria-label="Phone Prefix Input"
            title="Click to select your Phone Prefix."
          >
            <WorldFlag
              code={
                countryOptions.find((option) => option.code === countryCode)
                  ?.flag || countryOptions[0].flag
              }
              style={{ width: 20, height: 15 }}
              className="mr-2"
              alt={
                countryOptions.find((option) => option.code === countryCode)
                  ?.name + " flag"
              }
            />
            <SelectValue>{countryCode}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {countryOptions.map((option) => (
              <SelectItem key={option.code} value={option.code}>
                <div className="flex items-center">
                  <WorldFlag
                    code={option.flag}
                    style={{ width: 20, height: 15 }}
                    className="mr-2"
                  />
                  <span>{option.code}</span>
                  <span className="ml-2">({option.name})</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Hidden field to store the selected country code */}
      <input type="hidden" value={countryCode} id="country-code" />

      <Input
        id="phone-number"
        placeholder="Phone Number"
        className="rounded-none rounded-r"
        ref={phoneInputRef}
      />
    </div>
  );
};

export default PhoneNumberInput;
