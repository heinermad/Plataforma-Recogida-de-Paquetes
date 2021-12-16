import { Toaster, toast } from 'react-hot-toast'


function MyToast (props) {
  if(props.exito === "si")
    toast.success('Registro guardado.');
  else
    toast.error('No se pudo guardar el registro. ' + props.mensajeError);
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