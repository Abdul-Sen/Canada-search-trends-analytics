import * as React from "react";
import { useContext } from "react";
import { AccordianContext } from '../../context/AccordianContext'
import Select, { OptionsType, ValueType } from 'react-select';
import { useEffect } from "react";
import { useState } from "react";

const options: OptionType[] = [
    { value: 'ALL', label: 'All', isDisabled: false },
    { value: 'AB', label: 'Alberta', isDisabled: false },
    { value: 'BC', label: 'British Colombia', isDisabled: false },
    { value: 'MA', label: 'Manitoba', isDisabled: false },
    { value: 'NB', label: 'New Brunswick', isDisabled: false },
    { value: 'NL', label: 'Newfoundland and Labrador', isDisabled: false },
    { value: 'NS', label: 'Nova Scotia', isDisabled: false },
    { value: 'ON', label: 'Ontario', isDisabled: false },
    { value: 'QC', label: 'Quebec', isDisabled: false },
    { value: 'SK', label: 'Saskatchewan', isDisabled: false },
];

const ProvinceSelect = () => {
    const { accordianState, updateAccordian } = useContext<AccordianContextType>(AccordianContext);
    const [allOptions, setAllOptions] = useState<OptionType[]>(options);

    function handleChange(value: OptionsType<OptionType>) {
        updateAccordian({
            ...accordianState,
            province: value as OptionType[]
        });
    }

    const ToggleOptions = (disable: boolean) => {

        setAllOptions((prev: OptionType[]) => {
            const newOptions: OptionType[] = prev.map((val) => {
                val.isDisabled = disable;
                return val;
            })
            return newOptions;
        });
    }

    useEffect(() => {

        if (accordianState.province.length > 0) {
            accordianState.province.findIndex((province, ind, arr) => {
                if (province.value == "ALL") {
                    ToggleOptions(true);

                    if (arr.length > 1) {
                        let allOption: OptionsType<OptionType> = [{ value: 'ALL', label: 'All', isDisabled: false }];
                        handleChange(allOption);
                    }
                    return true;
                }
            });
        }
        else {
            ToggleOptions(false);
        }

    }, [accordianState.province]);

    return (
        <Select name="provinceSelect" value={accordianState.province} className='react-select-province-container' classNamePrefix="react-select-province" onChange={handleChange} isMulti isSearchable closeMenuOnSelect={false} options={allOptions} isOptionDisabled={(option) => option.isDisabled} />
    )
}

export default ProvinceSelect;