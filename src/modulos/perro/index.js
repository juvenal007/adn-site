import React from 'react';
import ContentWrapper from '../../_layout/ContentWrapper';
import SmartTable from '../../_framework/_helpers/smart-table/table/SmartTable';
import config from './config';
import '../../styles/custom.css';

const Perro = () => {

    return (
        <ContentWrapper>
            <div className="content-heading">
                <div className="text-tittle">Perro</div>
            </div>            
            <SmartTable
                dtColumns={config.columns}
                edit_btn={config.edit_btn}
                delete_btn={config.delete_btn}
                add_btn={config.add_btn}
                actions_custom={config.actions_custom}
                list_data={config.list} // url con la data
                pk_key="id" // pk de las lineas
                model_p="Perros" // titulo grilla
                model_s="Perro" // titulo form
            />
        </ContentWrapper>
    );
}

export default Perro;