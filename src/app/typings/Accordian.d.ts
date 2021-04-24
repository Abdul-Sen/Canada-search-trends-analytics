
interface IAccordian {
    minimized: boolean,
    visibleDateCue: boolean | string,
    from: string,
    to: string,
    province: List<string>,
    playSpeed: number,
    play: boolean
};


type AccordianContextType = {
    accordianState: IAccordian,
    updateMinimize: (minimize: bool) => void,
    updateAccordian: (newState: IAccordian)=> void
}