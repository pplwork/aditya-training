const form = document.querySelector('#user-form');
document.querySelector('#toggle-password').onclick = (e) => {
	let pass = document.querySelector('#form-password');
	if (pass.type === 'password') {
		pass.type = 'text';
		e.target.textContent = 'Hide';
	} else {
		pass.type = 'password';
		e.target.textContent = 'Show';
	}
};

document.querySelectorAll('[data-modalbutton]').forEach((button) => {
	button.onclick = () => {
		document.querySelector('.confirm-modal').classList.add('hidden');
		if (button.dataset.modalbutton === 'confirm')
			document.querySelector('body').innerHTML =
				'<h1>Dhanyawad Apka Din Subh Ho !!!<h1>';
	};
});

form.onsubmit = (e) => {
	e.preventDefault();
	document.querySelectorAll('.field-error').forEach((element) => {
		element.textContent = '';
	});
	let submitting = true;
	const email = document.querySelector('#form-email'),
		password = document.querySelector('#form-password'),
		gender = document.querySelector('#form-gender'),
		roleAdmin = document.querySelector('#form-role-admin'),
		roleUser = document.querySelector('#form-role-user'),
		permissionRead = document.querySelector('#form-permission-read'),
		permissionWrite = document.querySelector('#form-permission-write'),
		permissionDelete = document.querySelector('#form-permission-delete'),
		permissionShare = document.querySelector('#form-permission-share');

	if (
		!/^(([a-z0-9.]{1,20})([@][a-z0-9.]{1,20}[.])([a-z]{1,10}))$/g.test(
			email.value.toLowerCase()
		)
	) {
		document.querySelector('#error-email').textContent =
			'Please input valid email.';
		submitting = false;
	}
	if (
		!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/.test(
			password.value
		)
	) {
		document.querySelector('#error-password').textContent =
			'Password should contain atleast 1 A-Z, 1 a-z, 1 0-9, 1 special character and length of 6 to 20.';
		submitting = false;
	}
	if (gender.value == null) {
		document.querySelector('#error-gender').textContent =
			'Please select gender.';
		submitting = false;
	}
	if (!roleAdmin.checked && !roleUser.checked) {
		document.querySelector('#error-role').textContent = 'Please select role.';
		submitting = false;
	}
	if (
		!(
			(permissionRead.checked && permissionWrite.checked) ||
			(permissionDelete.checked && permissionShare.checked) ||
			(permissionRead.checked && permissionShare.checked) ||
			(permissionWrite.checked && permissionDelete.checked) ||
			(permissionRead.checked && permissionDelete.checked) ||
			(permissionWrite.checked && permissionShare.checked)
		)
	) {
		document.querySelector('#error-permission').textContent =
			'Please select atleast two permissions.';
		submitting = false;
	}

	if (!submitting) return false;
	console.log('submitting');
	confirmSubmit({
		email: email.value,
		password: password.value,
		gender: gender.value,
		role: roleAdmin.checked ? roleAdmin.value : roleUser.value,
		permissions: (() => {
			let permissions = [];
			if (permissionRead.checked) permissions.push(permissionRead.value);
			if (permissionWrite.checked) permissions.push(permissionWrite.value);
			if (permissionDelete.checked) permissions.push(permissionDelete.value);
			if (permissionShare.checked) permissions.push(permissionShare.value);

			return permissions;
		})(),
	});

	return false;
};

function confirmSubmit(data) {
	let table = document.querySelector('#confirm-table');
	table.innerHTML = '';
	let fr = new DocumentFragment();
	Object.entries(data).forEach((element) => {
		let tr = document.createElement('tr'),
			tdkey = document.createElement('td'),
			tdvalue = document.createElement('td');
		tdkey.textContent = element[0];
		tdvalue.textContent = element[1];
		tr.appendChild(tdkey);
		tr.appendChild(tdvalue);
		fr.appendChild(tr);
	});
	table.appendChild(fr);
	document.querySelector('.confirm-modal').classList.remove('hidden');
}
