import config from '../../utils/config';

const CONFIG = {
	list: config.PERRO.list,
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
			field: 'perro_nombre',
			isRequired: true,
		},
		{
			title: 'Color',
			field: 'perro_color',
			isRequired: true,
		},	
		{
			title: 'Edad',
			field: 'perro_edad',
			isRequired: true,
		},		
		{
			title: 'Raza',
			field: 'perro_raza_txt',
			isRequired: true,
		}		
	],
	edit_btn:
	{
		title: 'Editar Perro',
		path: config.PERRO.edit,
		field: 'id',
		icon: 'icon-pencil',
		show:false
	},
	delete_btn:
	{
		title: 'Eliminar Perro',
		path: config.PERRO.delete,
		field: 'id',
		icon: 'icon-trash',
		show:false
	},
	add_btn:
	{
		title: 'Agregar Perro',
		path: config.PERRO.add,
		icon: 'icon-plus',
		show:false
	},	
};

export default CONFIG;