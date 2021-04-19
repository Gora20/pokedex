
tinymce.init({
    selector: '#desc-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
      let nombre = document.querySelector("#nombre-txt").value;
      let tipo = document.querySelector("#tipo-select").value;
      let legendario = document.querySelector("#legend-si").checked;
      let descripcion = tinymce.get("desc-txt").getContent(); //Solo tinymce    
      console.log("Hola Mundo!", nombre, tipo, legendario, descripcion);
  } );