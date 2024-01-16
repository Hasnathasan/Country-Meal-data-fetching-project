const randomUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => randomShow(data))
}

const randomShow = (profile) =>{
    console.log(profile)
    const name = document.getElementById('name');
    name.innerHTML = `${profile.results[0].name.title} ${profile.results[0].name.first} ${profile.results[0].name.last}`;
    const phone = document.getElementById('phone');
    phone.innerHTML = profile.results[0].phone;
    const gender = document.getElementById('gender');
    gender.innerHTML = profile.results[0].gender;
    const imgUrl = profile.results[0].picture.large;
    const img = document.getElementById('img');
    img.setAttribute("src", imgUrl)
}

randomUser()