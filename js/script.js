
const cantidades = { plato1: 0, plato2: 0, bebida1: 0 };

function cambiarCantidad(item, delta) {
  cantidades[item] = Math.max(0, cantidades[item] + delta);
  document.getElementById(item).textContent = cantidades[item];
}

function generarQR() {
  const pedidoID = Math.random().toString(36).substring(2, 10);
  const url = `cliente.html?pedido=${pedidoID}`;
  const qrDiv = document.getElementById("qr");
  qrDiv.innerHTML = `Pedido ID: ${pedidoID}<br><a href="${url}" target="_blank">Ver QR (simulado)</a>`;
  // Aquí podrías integrar una librería real de QR
}
