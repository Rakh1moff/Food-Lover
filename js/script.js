'use strict'
import classCard from './modules/class'
import forms from './modules/forms'
import loader from './modules/loader'
import modal, { openModal } from './modules/modal'
import slider from './modules/slider'
import tabs from './modules/tabs'
import timer from './modules/timer'

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() =>
		openModal('.modal__content', '.modal', modalTimerId), 12000)

	tabs('.tabheader__item','.tab_content', '.tabheader__items')
	loader('.loader-wrapper')
	timer('2025-05-08', '.timer')
	modal('[data-modal]', '.modal', '.modal__content', modalTimerId)
	classCard('.offers-items')
	forms('form', '.modal', '.modal__content', modalTimerId)
	slider()
})
