fetch("https://api.nasa.gov/planetary/apod?api_key=criuVmRtgLcV6BRRaRJCxXb2VsuWb5yjqHhMnMVB")
.then(function(response){
  return response.json();
})
.then(function(data){
  // Recupera a referência do container da página
  var container = document.getElementById("container");

  // Cria um elemento "h1" para exibir o título
  var title = document.createElement("h2");
  title.innerHTML = data.title;
  container.appendChild(title);

  // Cria um elemento "img" para exibir a imagem
  var image = document.createElement("img");
  image.src = data.url;
  container.appendChild(image);

  // Cria um elemento "p" para exibir a descrição
  var desc = document.createElement("p");
  desc.innerHTML = data.explanation;
  container.appendChild(desc);

  // Cria um elemento "p" para exibir a data
  var date = document.createElement("p");
  date.innerHTML = "Data: " + data.date;
  container.appendChild(date);
});




/*
// Obtenha a referência do botão
var button = document.getElementById("botao");

// Obtenha a referência da imagem
var picture = document.getElementById("picture");

// Adicione um evento de clique ao botão
button.addEventListener("click", function(){
    // Fazer uma solicitação GET à API da NASA
    fetch("https://api.nasa.gov/planetary/apod?api_key=criuVmRtgLcV6BRRaRJCxXb2VsuWb5yjqHhMnMVB")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // Atualize a fonte da imagem com a URL retornada pela API
        picture.src = data.url;
    });
});
*/