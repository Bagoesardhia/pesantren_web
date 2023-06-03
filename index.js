function validate(){
    let x = document.forms['form-register']['first_name'].value
    if (x === ''){
        alert('nama harus diisi')
        return false
    }
    alert('berhasil')
    return true
}