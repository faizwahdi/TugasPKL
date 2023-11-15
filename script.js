document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
        const dropdownContent = dropdown.querySelector(".dropdown-content");

        dropdown.addEventListener("click", function() {
            if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });
    });

    // Event listener untuk checkbox Anonymous
    const checkbox = document.getElementById("Anonymous");
    const namaInput = document.getElementById("nama");
    const no_hpInput = document.getElementById("no_hp");
    const emailInput = document.getElementById("email");
    

    checkbox.addEventListener("change", function () {
        // Jika checkbox dicentang 
        if (checkbox.checked) {
            namaInput.value = "Anonymous";
            namaInput.disabled = true;
            no_hpInput.value = " ";
            no_hpInput.disabled = true;
            emailInput.value = "Anonymous@gmail.com";
            emailInput.disabled = true;
        } else {
            namaInput.value = "";
            namaInput.disabled = false;
            no_hpInput.value = "";
            no_hpInput.disabled = false;
            emailInput.value = "";
            emailInput.disabled = false;
        }
    });

    

    
});
