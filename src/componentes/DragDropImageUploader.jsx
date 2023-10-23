import '../estilos/Estilos.css'
import { useState, useRef } from 'react'

function DragDropImageUploader() {

    const [images, setImages] = useState([]);
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
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        )
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
                    <input name="file" type="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect}></input>
                </div>
                <div className="dragDrogContainer" >
                    {
                        images.map((images, index) => (
                            <div className='dragDrop-Image' key={index}>
                                <span className='delete' onClick={() => deleteImage(index)}>&times;</span>
                                <img src={images.url} alt={images.name} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default DragDropImageUploader