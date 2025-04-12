window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get('nome');
  const img = params.get('img');
  const preco = params.get('preco');
  const desc = params.get('desc');

  document.getElementById('produto-nome').textContent = nome;
  document.getElementById('produto-img').src = img;
  document.getElementById('produto-img').alt = nome;
  document.getElementById('produto-preco').textContent = preco;
  document.getElementById('produto-desc').textContent = desc;
};