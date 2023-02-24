let load = document.getElementById('loader')

export const getBooks = async (param) => {
    try {
        load.classList.remove('hide-loader')
        const req = await axios.get(`https://openlibrary.org/subjects/${param}.json`)
        const res = req.data
        load.classList.add('hide-loader')
        return res
    } catch (err) {
        console.log(err.message)
    }
}

export const getDescriptions = async (param) => {
    try {
        const req = await axios.get(`https://openlibrary.org${param}.json`)
        const res = [req.data.title, req.data.description]
        return res
    } catch (err) {
        console.log(err.message)
    }
}