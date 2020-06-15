import data from './data.json'

export const categories = data.map((item) => {
    return item.category
})

const categoryObjects = categories.reduce((object, category)=>{
    object[category] = null
    return object
},{})

export const uniqueCategories = Object.keys(categoryObjects)

export const categoriesWithCounts = data.reduce((item, {category})=> {
    if(item.category !== null){
        item[category] += 1
    } else {
        item[category] = 1
    }
    return item 
}, {})

export const objectInventory  = Object.entries(categoriesWithCounts).reduce((array, entry) => {
    const [key, value] = entry
    array.push({name: key, count: value})
    return array
}, [])

export default data