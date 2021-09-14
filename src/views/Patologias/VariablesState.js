export const StateListPatologias = {
    patologias: [],
    offset:0,
    checked: [],
    menuContext: null,
    botonesAcciones: {
        nuevo: {

            enabled: true,
            texto: 'Nuevo'
        },
        editar: {

            enabled: false,
            texto: 'Editar'
        },
        delete: {

            enabled: false,
            texto: 'Eliminar'
        }
    },
    modalOpen: false,
    openDeleteDialog:false,
    deleteRowData:null,
    isLoading:false




}

export const StateEditPatologia = {

    editPatologiaForm: {
        descripcion: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Patologia',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        } 
    },
    patologiaEdit: null,
    editFormIsValid: false,
    successSubmitEdit: null,
    disableAllButtons:false,
    openChangePass: false

}

export const StateNewPatologia = {

    newPatologiaForm: {
        descripcion: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Patologia',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        } 
    },

    formIsValid: false,
    successSubmit: null,
    disableAllButtons:false
}

export const ColumnsListado = [
{ title: "Patologia", field: "descripcion" }
];
