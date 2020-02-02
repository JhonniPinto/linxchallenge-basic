export default function({name, email}) {
    const nameValidation = new RegExp(/[a-z]/gi)
    const emailValidation = new RegExp(/^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const fieldErr = []
    
    if (
        name === '' || 
        name.match(nameValidation).length < 2
    ) fieldErr.push('name')

    if (!emailValidation.test(email)) fieldErr.push('email')

    return fieldErr    
}