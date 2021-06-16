
interface IAccordian {
    minimized: boolean,
    visibleDateCue: boolean | string,
    from: Date,
    to: Date,
    province: List<string>,
    playSpeed: number,
    play: boolean,
    currentDate: Date
};


type AccordianContextType = {
    accordianState: IAccordian,
    updateMinimize: (minimize: bool) => void,
    updateAccordian: (newState: IAccordian)=> void,
}