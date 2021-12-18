import { Toaster, toast } from 'react-hot-toast'


function MyToast (props) {
  if(props.exito === "crear")
    toast.success('Registro guardado.');
  else if(props.exito === "actualizar")
    toast.success('Registro editado.');
  else if(props.exito === "eliminar")
    toast.success('Registro eliminado.');
  else
    toast.error('No se pudo realizar la operación. ' + props.mensajeError);
  return (
    <div>
      <Toaster notify="Este es " 
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
         
          // Default options for specific types
          
        }}
      />
    </div>
  );
}

export default MyToast;