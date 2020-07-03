export const populateForm = (data) => {
  if (data) {
    document.getElementsByName('name')[0].value = data.name;
    document.getElementsByName('phone')[0].value = data.phone;
    document.getElementsByName('birth')[0].value = data.birth;
    document.getElementsByName('cnh')[0].value = data.cnh;
    document.getElementsByName('cpf')[0].value = data.cpf;
  }
}