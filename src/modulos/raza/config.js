import config from '../../utils/config';

const CONFIG = {
	list: config.RAZA.list,
	columns: [
		{
			title: 'Id',
			field: 'id',
			align: 'text-center',
			is_pk: true,
			isRequired: true,
			show: false
		},
		{
			title: 'Nombre',
			field: 'raza_nombre',
			isRequired: true,
		},
		{
			title: 'Descripción',
			field: 'raza_descripcion',
			isRequired: true,
		}	
	],
	edit_btn:
	{
		title: 'Editar Raza',
		path: config.RAZA.edit,
		field: 'id',
		icon: 'icon-pencil',
	},
	delete_btn:
	{
		title: 'Eliminar Raza',
		path: config.RAZA.delete,
		field: 'id',
		icon: 'icon-trash',
	},
	add_btn:
	{
		title: 'Agregar Raza',
		path: config.RAZA.add,
		icon: 'icon-plus',
	},	
};

export default CONFIG;