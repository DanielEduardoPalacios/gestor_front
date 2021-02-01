export const StateListNoticias = {
    noticias: [],
    modalOpen: false,
    openDeleteDialog:false,
    deleteRowData:null,
    isLoading:false


}

export const StateNewEditNoticia = {

    orderForm: {
        nombre: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Título',
                fullWidth: true
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        descripcion: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Bajada',
                fullWidth: true,
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        /*
        destacado: {
          elementType: 'checkbox',
          elementConfig: {
              label: 'Destacado'
          },
          value: "0",
          validation: {
              required: false
          },
          valid: true,
          touched: true
      },
      principal: {
        elementType: 'checkbox',
        elementConfig: {
            label: 'Principal'
        },
        value: "0",
        validation: {
            required: false
        },
        valid: true,
        touched: true
    },*/

    
        estado: {
            elementType: 'select',
            elementConfig: {
              label: 'Estado',
              options: [
                { value: 1, displayValue: 'Publicado' },
                { value: 2, displayValue: 'Despublicado' }
    
              ],
              fullWidth: true
            },
            value: '1',
            validation: {
              required: true
            },
    
            valid: false,
            touched: false
          }


        
    },
    orderFormItems: {
        descripcion: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Descripción',
            fullWidth: true
          },
          value: '',
          validation: {
            required: false
          },
          valid: true,
          touched: false
        },
      
      },
    tags:[],
    tiposCategorias: [],
    idCategoria:null,
    orderFormIsValid: false,
    successSubmit: null,
    disableAllButtons:false,
    openImagePortada:false,
    openImagePortada2:false,
    fechaInicio:null,
    fechaFinalizacion:null,
    items: [],
    rowItem:null,
    openImgInterior:false,
    openAgregarTexto:false,
    thumbs:[],
    thumbsInterno:[],
    vistaPrevia: false

}



export const StateNewEditNoticiaTransparente = {

  orderForm: {
      nombre: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              label: 'Título',
              fullWidth: true
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      },
      profesor: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              label: 'Profesor',
              fullWidth: true,
          },
          value: '',
          validation: {
              required: false
          },
          valid: true,
          touched: false
      },
      nombre_link: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            label: 'Nombre Enlance',
            fullWidth: true,
        },
        value: '',
        validation: {
            required: false
        },
        valid: true,
        touched: false
    },
    url_link: {
      elementType: 'input',
      elementConfig: {
          type: 'text',
          label: 'Enlance',
          fullWidth: true,
      },
      value: '',
      validation: {
          required: false
      },
      valid: true,
      touched: false
  },
  id_categoria_personal: {
    elementType: 'select',
    elementConfig: {
      label: 'Categoria Personal',
      options: [
        { value: 1, displayValue: 'Estudiantes' },
        { value: 2, displayValue: 'Docentes' },
        { value: 3, displayValue: 'Nodocentes' },
        { value: 4, displayValue: 'Egresados' }

      ],
      fullWidth: true
    },
    value: '',
    validation: {
      required: false
    },

    valid: true,
    touched: false
  },
  id_categoria_transparente: {
    elementType: 'select',
    elementConfig: {
      label: 'Categoria Transparente',
      options: [
        { value: 1, displayValue: 'Clases de Grado' },
        { value: 2, displayValue: 'Disertaciones y charlas' },
        { value: 3, displayValue: 'Congresos y jornadas' },
        { value: 4, displayValue: 'Cursos' },
        { value: 5, displayValue: 'Reuniones de consejo' },
        { value: 6, displayValue: 'Defensa de tesis' },
        { value: 7, displayValue: 'Defensa de PIF' }


      ],
      fullWidth: true
    },
    value: '',
    validation: {
      required: false
    },

    valid: true,
    touched: false
  },
   

  
      estado: {
          elementType: 'select',
          elementConfig: {
            label: 'Estado',
            options: [
              { value: 1, displayValue: 'Publicado' },
              { value: 2, displayValue: 'Despublicado' }
  
            ],
            fullWidth: true
          },
          value: '1',
          validation: {
            required: true
          },
  
          valid: false,
          touched: false
        }


      
  },
  orderFormItems: {
      descripcion: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Descripción',
          fullWidth: true
        },
        value: '',
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
    
    },
  tags:[],
  tiposCategorias: [],
  idCategoria:null,
  orderFormIsValid: false,
  successSubmit: null,
  disableAllButtons:false,
  openImagePortada:false,
  openImagePortada2:false,
  fechaInicio:null,
  fechaFinalizacion:null,
  items: [],
  rowItem:null,
  openImgInterior:false,
  openAgregarTexto:false,
  thumbs:[],
  thumbsInterno:[],
  vistaPrevia: false

}






export const ColumnsListado = [
{ title: "Nombre", field: "nombre" },
{ title: "Descripcion", field: "descripcion" },
{ title: "Estado", field: "estado" },
{ title: "Dest", field: "destacado" },
{ title: "Princ", field: "principal" }
];
