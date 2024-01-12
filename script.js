let selectedFeatures = [];

function purchasePlan(plan) {
    const selectedPlan = document.getElementById(plan);
    const price = selectedPlan.querySelector('p').textContent;
    alert(You have purchased the ${plan} plan for ${price}!);
    
}

function customizePlan() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedPlan = document.querySelector('.pricing-card');

    selectedFeatures = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedFeatures.push(checkbox.name);
        }
    });

    updateTotalPrice();
}

function calculateCustomizedPrice() {
   
    const basePrice = getPriceOfSelectedPlan();
    const featurePrice = 5 * selectedFeatures.length;
    return basePrice + featurePrice;
}

function getPriceOfSelectedPlan() {
    const selectedPlan = document.querySelector('.pricing-card');
    const basePriceText = selectedPlan.querySelector('p').textContent;
    return parseInt(basePriceText.match(/\d+/)[0], 10);
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = calculateCustomizedPrice();
    totalPriceElement.innerHTML = <p>Total Price: $${totalPrice}/month</p>;
}
