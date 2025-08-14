document.addEventListener('DOMContentLoaded', () => {
	const originalHeader = document.querySelector(
		'.landing-screen .header-wrapper'
	)
	const fixedHeader = document.querySelector('.fixed-header')

	window.addEventListener('scroll', () => {
		const headerRect = originalHeader.getBoundingClientRect()
		if (headerRect.bottom <= 0) {
			fixedHeader.classList.add('visible')
		} else {
			fixedHeader.classList.remove('visible')
		}
	})
})
document.querySelector('.menu-toggle').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.mobile-nav-panel').classList.toggle('active')
})
document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.accordion-item')

	items.forEach(item => {
		const header = item.querySelector('.accordion-header')
		const content = item.querySelector('.accordion-content')

		// Устанавливаем высоту для активного по умолчанию
		if (item.classList.contains('active')) {
			content.style.height = content.scrollHeight + 'px'
		}

		header.addEventListener('click', () => {
			// Закрыть все
			items.forEach(i => {
				if (i !== item) {
					i.classList.remove('active')
					i.querySelector('.accordion-content').style.height = 0
				}
			})

			// Переключить текущий
			item.classList.toggle('active')
			if (item.classList.contains('active')) {
				content.style.height = content.scrollHeight + 'px'
			} else {
				content.style.height = 0
			}
		})
	})
})
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
