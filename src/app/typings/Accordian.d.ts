
interface IAccordian {
    minimized: boolean,
    visibleDateCue: boolean | string,
    from: Date,
    to: Date,
    province: List<string>,
    playSpeed: number,
    play: boolean,
    currentDate: Date,
    counterTicks: number,
    counterTwo: number
};


type AccordianContextType = {
    accordianState: IAccordian,
    updateMinimize: (minimize: bool) => void,
    handlePlay: (newState: IAccordian)=> void,
    updateAccordian: (newState: IAccordian) => void,
    getAccordianState: () => IAccordian
}