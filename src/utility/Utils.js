 import moment from 'moment'
import {isValid} from './helpers/common'
let id = 0
export const getUniqId = (prefix) => {
    id++
    return `${prefix}-${id}`
}


export const formatDate = (value, format = "YYYY-MM-DD") => {
    const d = moment(value).format(format)
    if (d !== "Invalid date") {
        return d
    } else {
        return null
    }
}

export const formatTime = (value, format) => {
    const d = moment(value).format(format)
    if (d !== "Invalid time") {
        return d
    } else {
        return ""
    }
}

export const formatDateTimeByFormat = (value, format) => {
    const d = moment(value).format(format)
    if (d !== "Invalid date time") {
        return d
    } else {
        return ""
    }
}

export const getSelectValues = (val = [], matchWith = null) => {
    if (matchWith) {
        return val?.map(a => a.value[matchWith])
    } else return val?.map(a => a.value)
}
export const matchValue = (value, selected, matchWith) => {
    if (typeof value === "object") {
        return String(value[matchWith]) === String(selected)
    } else {
        return String(value) === String(selected)
    }
}
export const makeSelectValues = (option = [], value = [], multi = false, matchWith = null, grouped = false, setOption = null) => {
    try {
        let re = []
        if (!multi) {
            re = option?.find(c => matchValue(c?.value, value, matchWith))
            // log('matchWith', matchWith)
            // log(option, value)
        } else {
            if (value?.length > 0) {
                value?.forEach((v, i) => {
                    let x = []
                    if (grouped) {
                        option?.forEach((q) => {
                            if (isValid(q?.options?.find(a => matchValue(a?.value, v, matchWith)))) {
                                x = q?.options?.find(a => matchValue(a?.value, v, matchWith))
                            }
                        })
                    } else {
                        x = option?.find(a => matchValue(a?.value, v, matchWith))
                    }
                    // log("x", x)
                    // log("option", option)
                    if (x) re.push(x)
                })
            }

        }

        return re
    } catch (error) {
        // console.log();("makeSelectValues", error)
        // log(option, value)
        // log(matchWith, multi)
    }

}