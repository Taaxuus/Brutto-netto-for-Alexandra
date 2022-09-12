const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const textB = document.querySelector('.brutto');
const textN = document.querySelector('.netto');
const btnConv23 = document.querySelector('.buttons_conv-23');
const btnConv8 = document.querySelector('.buttons_conv-8');
const btnReset = document.querySelector('.buttons_reset');
const btnChange = document.querySelector('.buttons_change');

let bruttoValue;
let nettoValue;

const changeBToN = () => {
	if (textB.textContent === 'BRUTTO') {
		textB.textContent = 'NETTO';
		textN.textContent = 'BRUTTO';
		result.textContent = '';
	} else {
		textB.textContent = 'BRUTTO';
		textN.textContent = 'NETTO';
		result.textContent = '';
	}
};

// 23%

const bruttoToNetto23 = () => {
	nettoValue = converter.value - converter.value * 0.23;
	result.textContent = `${converter.value} zl BRUTTO to ${nettoValue.toFixed(2)} zl NETTO - przelicznik 23% `;

	result.style.textShadow = '1px 1px 1px black';
	result.style.color = 'black';
};

const nettoToBrutto23 = () => {
	bruttoValue = parseInt(converter.value) + 0.23 * converter.value;

	result.textContent = `${converter.value} zl NETTO to ${bruttoValue.toFixed(2)} zl BRUTTO - przelicznik 23% `;
	result.style.textShadow = '1px 1px 1px black';
	result.style.color = 'black';
};

// 8%

const bruttoToNetto8 = () => {
	nettoValue = converter.value - converter.value * 0.08;
	result.textContent = `${converter.value} zl BRUTTO to ${nettoValue.toFixed(2)} zl NETTO - przelicznik 8% `;
	result.style.textShadow = '1px 1px 1px black';
	result.style.color = 'black';
};
const nettoToBrutto8 = () => {
	bruttoValue = parseInt(converter.value) + converter.value * 0.08;
	result.textContent = `${converter.value} zl NETTO to ${bruttoValue.toFixed(2)} zl BRUTTO - przelicznik 8% `;

	result.style.textShadow = '1px 1px 1px black';
	result.style.color = 'black';
};

// GLOBAL KONWERT

const globalConvert23 = () => {
	if (textB.textContent === 'BRUTTO' && converter.value !== '') {
		bruttoToNetto23();
	} else if (textB.textContent === 'NETTO' && converter.value !== '') {
		nettoToBrutto23();
	} else if (converter.value === '') {
		result.textContent = 'Musisz wpisac liczbe';
		result.style.color = 'red';
	}
};
const globalConvert8 = () => {
	if (textB.textContent === 'BRUTTO' && converter.value !== '') {
		bruttoToNetto8();
	} else if (textB.textContent === 'NETTO' && converter.value !== '') {
		nettoToBrutto8();
	} else if (converter.value === '') {
		result.textContent = 'Musisz wpisac liczbe';
		result.style.color = 'red';
	}
};

// RESET

const resetAll = () => {
	converter.value = '';
	result.textContent = '';
};

btnConv8.addEventListener('click', globalConvert8);
btnConv23.addEventListener('click', globalConvert23);
btnChange.addEventListener('click', changeBToN);
btnReset.addEventListener('click', resetAll);
