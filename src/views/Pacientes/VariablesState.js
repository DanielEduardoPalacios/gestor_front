export const StateListPacientes = {
    pacientes: [],
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

export const StateEditPaciente = {

    editPacienteForm: {
        nombre: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Nombre',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_cliente: {
            elementType: 'select',
            elementConfig: {
                label: 'Dueño',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_clase: {
            elementType: 'select',
            elementConfig: {
                label: 'Clase',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_especie: {
            elementType: 'select',
            elementConfig: {
                label: 'Especie',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_raza: {
            elementType: 'select',
            elementConfig: {
                label: 'Raza',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        color: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Color',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_sexo: {
            elementType: 'select',
            elementConfig: {
                label: 'Sexo',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        castrado: {
            elementType: 'checkbox',
            elementConfig: {
                label: 'Castrado'
            },
            value: "0",
            validation: {
                required: false
            },
            valid: true,
            touched: true
        },    
        notas: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Comentarios',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        }, 
    },
    fechaAdopcion:null,
    fechaNacimiento:null,
    pacienteEdit: null,
    editFormIsValid: false,
    successSubmitEdit: null,
    disableAllButtons:false,
    openChangePass: false

}

export const StateNewPaciente = {

    newPacienteForm: {
        nombre: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Nombre',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_cliente: {
            elementType: 'select',
            elementConfig: {
                label: 'Dueño',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_clase: {
            elementType: 'select',
            elementConfig: {
                label: 'Clase',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_especie: {
            elementType: 'select',
            elementConfig: {
                label: 'Especie',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_raza: {
            elementType: 'select',
            elementConfig: {
                label: 'Raza',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        color: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Color',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        id_sexo: {
            elementType: 'select',
            elementConfig: {
                label: 'Sexo',
                options: [
                ],
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },
        castrado: {
            elementType: 'checkbox',
            elementConfig: {
                label: 'Castrado'
            },
            value: "0",
            validation: {
                required: false
            },
            valid: true,
            touched: true
        },    
        notas: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Comentarios',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: true
        },    
    },
    fechaAdopcion:null,
    fechaNacimiento:null,
    formIsValid: false,
    successSubmit: null,
    disableAllButtons:false
}

export const ColumnsListado = [
{ title: "Nombre", field: "nombre" },
{ title: "Edad", field: "edad" },
{ title: "Dueño", field: "nombredueno" },
{ title: "Clase", field: "nombreclase" },
{ title: "Especie", field: "nombreespecie" },
{ title: "Raza", field: "nombreraza" },
{ title: "Color", field: "color" },
{ title: "Sexo", field: "nombresexo" },
{ title: "Castrado", field: "castrado_mostrar" }
];