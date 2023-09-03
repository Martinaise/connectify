export const signUpErrors = (error) => {
    let errors = { lastname: '', firstname: '', gender: '', password: '', email: '' }
    if (error.errors?.lastname?.message.includes('lastname')) errors.lastname = "Votre nom est incorrect"
    if (error.errors?.firstname?.message.includes('firstname')) errors.firstname = "votre prenom est incorrect"
    if (error.errors?.gender?.message.includes('gender')) errors.gender = "votre genre est incorrect"
    if (error.errors?.password?.message.includes('password')) errors.password = "votre mot de passe est incorrect il doit contenir au moins 8 caractères minimum"
    if (error.errors?.email?.message.includes('email')) errors.password = "votre email est incorrect"
    if (error.code == 11000 && Object.keys(error.keyValue)[0].includes('email')) errors.email = `${error.keyValue.email} existe déjà`
    return errors
}

export const signInErrors = (err) => {
    return `mot de passe ou email incorrect`
}