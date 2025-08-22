// إنشاء الخطط تلقائياً
const plansData = [
  { name: "VIP 1", price: "5$", bonus: "1$ عند دعوة صديق" },
  { name: "VIP 5", price: "20$", bonus: "5$ مكافأة" },
  { name: "VIP 10", price: "50$", bonus: "15$ مكافأة" },
  { name: "VIP 20", price: "100$", bonus: "30$ مكافأة" }
];

function showPlans() {
  const plansContainer = document.getElementById("plans");
  plansContainer.innerHTML = "";

  plansData.forEach(plan => {
    const card = document.createElement("div");
    card.className = "plan-card";
    card.innerHTML = `
      <h3>${plan.name}</h3>
      <p>سعر الاشتراك: <strong>${plan.price}</strong></p>
      <p>${plan.bonus}</p>
      <button onclick="subscribe('${plan.name}')">اشترك الآن</button>
    `;
    plansContainer.appendChild(card);
  });
}

function subscribe(planName) {
  alert(`تم اختيار خطة: ${planName}`);
}
