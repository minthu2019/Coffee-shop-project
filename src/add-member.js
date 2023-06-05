const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const SubmitBtn = document.querySelector("#submit-btn");
const AlertSection = document.querySelector("#alert");



form.addEventListener("submit" , async(e) => {
    e.preventDefault();
    SubmitBtn.textContent = "Loading...";
    

    const data = {
        name: nameInput.value,
        job: jobInput.value,
    }

    try {
        const res = await fetch("https://reqres.in/api/users", {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data),
    })

    if(res.ok === true ) {
        AlertSection.style.display = "block";
        setTimeout(() => {
            AlertSection.style.display = "none";
          }, 3000);
        SubmitBtn.textContent = "Submit";
    }else{
        alert("unsuccessful");
    };
    } catch (error) {
        throw new Error (error)
    }
});