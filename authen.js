import supabase from "./config.js"

let regFrom = document.getElementById('regFrom')

let semail = document.getElementById('exampleInputEmail1')
let spassword = document.getElementById('exampleInputPassword1')



async function signup(e) {
    e.preventDefault()
    try {
        const { data, error } = await supabase.auth.signUp({
            email: semail.value,
            password: spassword.value,
        })
        if (data) {
            console.log(data);
        }

    } catch (err) {
        console.log(err);
    }
}


regFrom && regFrom.addEventListener("submit", signup)
//  login----------
let loginForm = document.getElementById('loginForm')


let lemail = document.getElementById('exampleInputEmail1')
let lpassword = document.getElementById('exampleInputPassword1')



async function login(e) {
    e.preventDefault()
    try {
        if (!lemail.value) {
            alert('plz enter your email');

            return
        }
        if (!lpassword.value) {
            alert('plz enter your password');
            return
        }
        const { data, error } = await supabase.auth.signInWithPassword({
            email: lemail.value,
            password: lpassword.value,

        })
        if (error) {
            console.log(error);
            return


        } else {
            Swal.fire({
                title: "login",
                text: "congratulation , you are signed in",
                icon: "success"
            });

            location.href = 'home.html'


        }

    } catch (err) {
        console.log(err);

    }

}





loginForm && loginForm.addEventListener('submit', login)


let logoutBtn = document.getElementById('logout')


async function logout() {
    const { error } = await supabase.auth.signOut()

    if (!error) {
        alert('logout successfully')
        location.href = 'index.html'
    }
}

logoutBtn && logoutBtn.addEventListener('click', logout)




