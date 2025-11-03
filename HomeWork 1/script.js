document.getElementById("convertBtn").addEventListener("click", function ()
{
const km = parseFloat(document.getElementById("kmInput").value);
const result = document.getElementById("result");

if (isNaN(km) || km < 0) 
{
    result.textContent = "⚠️ Please enter a valid positive number!";
    result.style.color = "#f87171";
    return;
}

  const miles = (km * 0.621371).toFixed(3);
    result.textContent = `${km} km = ${miles} miles `;
    result.style.color = "#a5b4fc";
});

document.getElementById("clearBtn").addEventListener("click", function () 
{
document.getElementById("kmInput").value = "";
document.getElementById("result").textContent = "";
});
