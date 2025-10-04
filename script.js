let clickCount = 0;
let clickTimer;

document.querySelector('.logo').addEventListener('click', () => {
  clickCount++;
  clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    if (clickCount === 3) {
      document.getElementById('admin-panel').classList.remove('hidden');
      alert("Acesso liberado: Painel do Fotógrafo");
    }
    clickCount = 0;
  }, 400);
});

function fecharPainel() {
  document.getElementById('admin-panel').classList.add('hidden');
}

function adicionarFotos() {
  const input = document.getElementById('fotoInput');
  if (input.files.length === 0) return alert("Selecione pelo menos uma foto.");

  alert(`${input.files.length} fotos enviadas (simulação).`);
}

function criarPasta() {
  const nome = document.getElementById('nomeCliente').value.trim();
  if (!nome) return alert("Digite um nome de cliente.");

  const lista = document.getElementById('listaPastas');
  const item = document.createElement('p');
  item.textContent = `📁 ${nome}`;
  lista.appendChild(item);

  alert(`Pasta criada para ${nome} (simulação).`);
}
