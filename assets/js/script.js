
// The Regions 

const regions = document.querySelectorAll(".region");

regions.forEach((region) => {
  region.addEventListener("click", () => {
    if (region.classList[2] == "inactive") {
      region.classList.remove("inactive");
      const SelectedRegion = region.innerHTML;
    } else {
      region.classList.add("inactive");
    }
  });
});

// The Sort By 

const sortFilters = document.querySelectorAll(".sortFilter");

sortFilters.forEach((sortFilter) => {
  sortFilter.addEventListener("click", () => {
    const SelectedFilter = sortFilter.innerHTML;
  });
});



// The Status 
const statusCheckboxes = document.querySelectorAll('.status__checkbox');

statusCheckboxes.forEach((statusCheckbox) => {
    statusCheckbox.addEventListener("click", () => {
        if (statusCheckbox.checked) {
            const selectStatus = statusCheckbox.id
            console.log(selectStatus)
        }
    });
  });