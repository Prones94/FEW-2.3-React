import data from './data.json'
export default data

const categories = data.map((item) => {
    return item.category
})

const categorySet = new Set(categories)
export const uniqueCategories = Array.from(categorySet)

export const categoriesWithCounts = data.reduce((obj, item) => {
    if (item.category in obj){
        obj[item.category] += 1
    } else {
        obj[item.category] = 1
    }
    return obj
}, {})

export 
