import {useCallback} from "react";


type useViewsHooksType = () => (viewCount: number) => string

const useViewsFormater:useViewsHooksType = () => useCallback((viewCount: number) => {
    if (viewCount > 10000000) {
        return `${Math.round(viewCount/1000000)} млн`
    }
    if (viewCount > 1000000) {
        return `${(viewCount/1000000).toFixed(2)} млн`
    }
    if (viewCount < 1000000 && viewCount > 1000) {
        return `${Math.round(viewCount/1000)} тыс.`
    }
    return `${viewCount}`

},[])

export default useViewsFormater