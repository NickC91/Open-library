let load = document.getElementById('loader')

export const getBooks = async (params) => {
    try {
        load.classList.remove('hide-loader')
        const req = await axios.get(`https://openlibrary.org/subjects/${params}.json`)
        const res = req.data
        load.classList.add('hide-loader')
        return res
    } catch (err) {
        console.log(err.message)
    }
}

export const getDescriptions = async (params) => {
    try {
        const req = await axios.get(`https://openlibrary.org${params}.json`)
        const res = [req.data.title, req.data.description]
        return res
    } catch (err) {
        console.log(err.message)
    }
}