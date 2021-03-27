const PATH_GLOBALS = {
    BASE_URL_API : process.env.REACT_APP_BASE_API_URL || 'http://localhost:8000/api/',
    PERRO : {
        list : 'perro/list',
        add : 'perro/store',
        edit : 'perro/update',
        delete : 'perro/delete',
        detail : 'perro/detail'    
    },
    RAZA : {
        list : 'raza/list',
        add : 'raza/store',
        edit : 'raza/update',
        delete : 'raza/delete',
        detail : 'raza/detail'   
    },  
    __DATATABLES_OPTIONS__: {
        'paging': true, // Table pagination
        'ordering': true, // Column ordering
        'info': true, // Bottom left status text
        responsive: false,
        stateSave: false,
        "order": [],
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        language: {
            sSearch: '<em class="fa fa-search"></em>',
            sLengthMenu: '_MENU_ registros por página',
            info: 'Mostrando página _PAGE_ de _PAGES_',
            zeroRecords: 'Sin registros - lo sentimos',
            infoEmpty: 'No hay registros disponibles',
            infoFiltered: '(filtered from _MAX_ total records)',
            oPaginate: {
                sNext: '<em class="fa fa-caret-right"></em>',
                sPrevious: '<em class="fa fa-caret-left"></em>'
            }
        },
        columnDefs: [{
            orderable: false,
            targets: "no-sort"
        }]
    }
}

export default Object.freeze(Object.assign({}, PATH_GLOBALS));