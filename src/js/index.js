import '../css/style.css';
import { getBooks, getDescriptions } from './APIfeatures';

import brand_logo from "../img/branding-logo.png"
import small_logo from "../img/small-logo.png"

const logo = document.getElementById('img-logo')
const brand = document.getElementById('brand_logo')

logo.src = small_logo
brand.src = brand_logo

document.getElementById('modal-close').addEventListener('click', e => {
    e.preventDefault();
    console.log('click')
    window.setTimeout(() => {
        document.getElementById('modalCenterLongTitle').innerText = ''
        document.getElementById('modal_description').innerText = ''
    }, 500)
})

document.getElementById('searchBtn').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('span-error').classList.add('d-none')
    document.getElementById('book_list').innerHTML = ''
    const search = document.getElementById('inputSearch').value.toLowerCase()
    getBooks(search).then(res => {
        if (res.works.length == 0) {
            document.getElementById('book_list').innerHTML = ``;
            document.getElementById('span-error').classList.remove('d-none')
            document.getElementById('span-error').textContent = 'No books found'
        } else {
            document.getElementById('inputSearch').value = ''
            generateCard(res)
            const work = res.works
            generateModal(work)
        }
    })
})

const generateCard = (params) => {
    let book_card = ``
    let authors = []
    Object.keys(params.works).forEach(el => {
        let title = params.works[el].title
        for (let i = 0; i < params.works[el].authors.length; i++) {
            authors.push(params.works[el].authors[i].name)
        }
        book_card +=
            `<div class="mb-4 col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h4>${title}</h4>
                        <p class="text-truncate"><i>Authors:</i> ${authors}</p>
                        <button value="${el}" type="button" class="btn btn-light btn-modal" data-bs-toggle="modal" data-bs-target="#modalCenter">
                            Read description
                        </button>
                    </div>
                </div>
            </div>
        `
        document.getElementById('book_list').innerHTML = book_card;
    })
}

const generateModal = (params) => {
    const button_modal = document.querySelectorAll('.btn-modal')
    for (let i = 0; i < params.length; i++) {
        button_modal[i].addEventListener('click', e => {
            e.preventDefault()
            getDescriptions(params[i].key).then(res => {
                if (res[1] == undefined || res[1].length == undefined) {
                    res[1] = 'not available'
                }
                document.getElementById('modalCenterLongTitle').innerText = `${res[0]}`
                document.getElementById('modal_description').innerText = `Description: ${res[1]}`
            })
        })
    }
}
