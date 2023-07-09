import React from 'react';
import {revisarPresupuesto} from "./helpers";
import PropTypes from 'prop-types';

ControlPresupuesto.propTypes = {
    
};

function ControlPresupuesto({presupuesto, restante}) {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto:$ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante:$ {restante}
            </div>
        </>
    );
}

export default ControlPresupuesto;