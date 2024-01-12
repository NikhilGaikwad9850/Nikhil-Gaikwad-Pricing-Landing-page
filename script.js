let selectedFeatures = [];

function purchasePlan(plan) {
    const selectedPlan = document.getElementById(plan);
    const price = selectedPlan.querySelector('p').textContent;
    alert(You have purchased the ${plan} plan for ${price}!);
    // Add logic for handling the purchase, e.g., redirect to a payment page.
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
    // Add your logic to calculate the customized price based on selected features.
    // For simplicity, let's assume $5 for each selected feature.
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