import '../estilos/Estilos.css'
import { useState, useRef } from 'react'

function DragDropImageUploader() {

    const [image, setImage] = useState();
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    function selectFiles() {
        fileInputRef.current.click();
    }

    // Escucha el evento "fileSelect" para obtener los archivos seleccionados
    // y luego mostrar sus miniaturas
    function onFileSelect(event) {
        // Obtiene los archivos seleccionados del evento
        const files = event.target.files;

        // Si hay alguno, muestra sus miniaturas
        mostrarMiniaturas(files);
    }

    function mostrarMiniaturas(files) {
        if (files.length === 0) return;

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;

            setImage({
                name: files[i].name,
                url: URL.createObjectURL(files[i]),
            });
        }
    }

    function deleteImage(index) {
        setImage(undefined)
    }
    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        mostrarMiniaturas(files);
    }


    return (
        <div className="drapDropCard">
            <div className="dragDropTop">
                <p>
                    Arrastar y cargar
                </p>
                <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                    {isDragging ? (
                        <span className="select">Suelte la imagen aqui</span>
                    ) : (<>
                        Seleccione y suelte la imagen aqui o {" "}
                        <span className="select" role='button' onClick={selectFiles}>
                            Browse
                        </span>
                    </>
                    )}
                    <input
                        name="file"
                        type="file"
                        accept='image/*'
                        className="file"
                        ref={fileInputRef}
                        onChange={onFileSelect}></input>
                </div>
                <div className="dragDrogContainer" >
                    {
                        image
                            ? (
                                <div className='dragDrop-Image'>
                                    <span className='delete' onClick={() => deleteImage()}>&times;</span>
                                    <img src={image.url} alt={image.name} />
                                </div>
                            )
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default DragDropImageUploader