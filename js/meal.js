const meal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals))
}
const setMeal = (data) =>{
    const mealContainer = document.getElementById('meal-group');
    mealContainer.innerHTML = '';
    data.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <div class="card pt-7 transition hover:scale-105 card-compact w-96 bg-base-100 shadow-xl">
                <figure><img class="w-9/12" src="${meal.strMealThumb}" alt="Shoes" /></figure>
                <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                <label onclick="modal(${meal.idMeal})" for="my-modal" class="btn">open modal</label>
                </div>
                </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv)
    })
    ;
}
const modal = (id) =>{
    console.log(id)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDataOnModal(data.meals[0]))
}
const showDataOnModal = (data) => {
    console.log(data)
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerText = `${data.strMeal}`;
    const modalText = document.getElementById('modalText');
    modalText.innerText = `${data.strInstructions}`;
}
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    meal(searchInput);
})
meal('chicken')