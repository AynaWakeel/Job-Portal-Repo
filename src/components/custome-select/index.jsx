import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Dropdown } from "./style";
import { ReactComponent as Arrowup } from "../../assets/icons/fi_chevron-up.svg";
import { ReactComponent as Arrowdown } from "../../assets/icons/fi_chevron-down.svg";

const CustomSelect = ({ control, name, rules, placeholder, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (

        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                
                <div className="SelectFlex simple-dropdown FormInput" onClick={toggleDropdown}>
                    <input
                        className="Input"
                        placeholder={placeholder}
                        value={field.value}
                        readOnly
                    />
                    {isOpen ? (
                        <Arrowup className="SelectColor" />
                    ) : (
                        <Arrowdown className="SelectColor" />
                    )}

                    {isOpen && (
                        <Dropdown>
                            <ul className="options">
                                {options.map((opt) => (
                                    <li key={opt} onClick={() => { field.onChange(opt); setIsOpen(false) }}>
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        </Dropdown>
                    )}

                </div>
            )}
        />


    );
};

export default CustomSelect;
