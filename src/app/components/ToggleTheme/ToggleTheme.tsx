import * as React from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { IoSunnyOutline } from 'react-icons/io5';
import { ThemeContext } from '../../context/ThemeContext';


const ToggleTheme = ()=> {
    const { theme, updateTheme } = React.useContext(ThemeContext) as ThemeContextType;

    const switchTheme = ()=>{
        if(theme.AppTheme == "Dark")
        {
            updateTheme({ AppTheme: "Light" } as ITheme)
        }
        else {
            updateTheme({ AppTheme: "Dark" } as ITheme)
        }
    }

    const isLight = ()=>{
        if(theme.AppTheme == "Light")
        {
            return <RiMoonClearLine id="ToggleIcon" />
        }
        else {
            return <IoSunnyOutline id="ToggleIcon" />
        }
    }

    return (
        <>
            <div id="ToggleTheme">
                <div className="box" onClick={switchTheme}>
                    {isLight()}
                </div>
            </div>
        </>
    );
}

export default ToggleTheme;