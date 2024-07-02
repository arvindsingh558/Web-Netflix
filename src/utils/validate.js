export const validateSignIn=(email,password)=>{

    const validEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

    if(!validEmail) return "Email is not valid"
    if(!validPassword) return "Password is not valid"

    return null
}

export const validateSignUp=(name,email,password)=>{

    const validName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const validEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

    if(!validEmail) return "Email is not valid"
    if(!validPassword) return "Password is not valid"
    if(!validName) return "Name is not valid"

    return null
}